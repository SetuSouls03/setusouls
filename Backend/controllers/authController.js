// controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const axios = require("axios");
const { formatUserDates } = require("../utils/dateFormatter");

const otpStore = {}; // in-memory OTP store (temporary)

// --- EMAIL TRANSPORTER CONFIG ---
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // allows production servers with shared SSL
  },
});

// --- GET CLIENT IP ---
function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"] || req.headers["X-Forwarded-For"];
  let ip = forwarded ? forwarded.split(",")[0].trim() : req.socket?.remoteAddress || req.connection?.remoteAddress;
  if (ip && ip.startsWith("::ffff:")) ip = ip.replace("::ffff:", "");
  if (ip === "::1" || ip === "127.0.0.1") return "8.8.8.8"; // fallback for localhost
  return ip || null;
}

// --- GEO LOCATION LOOKUP ---
async function resolveGeoForIp(ip) {
  try {
    if (!ip) return {};
    const { data } = await axios.get(`http://ip-api.com/json/${ip}`, { timeout: 4000 });
    if (data.status !== "success") return {};
    return {
      ipId: data.as || null,
      ipAddress: data.query || ip,
      iplatitude: data.lat || null,
      iplongitude: data.lon || null,
      ipcity: data.city || null,
      ipstate: data.regionName || null,
      ipCountry: data.country || null,
    };
  } catch (err) {
    console.warn("⚠️ Geo lookup failed:", err.message);
    return {};
  }
}

// --- REGISTER ---
exports.register = async (req, res) => {
  const { name, email, password, contactNumber, countryCode, address } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const now = new Date();

    const clientIp = getClientIp(req);
    const geo = await resolveGeoForIp(clientIp);

    otpStore[email] = {
      otp,
      type: "register",
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
      userData: {
        name,
        email,
        password: await bcrypt.hash(password, 10),
        contactNumber,
        countryCode,
        address,
        ...geo,
        lastSeen: now,
        createdAt: now,
        updatedAt: now,
        isActive: true,
      },
    };

    // Send OTP email
    await transporter.sendMail({
      from: `"Setu Souls" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your account",
      html: `<p>Your OTP is <b>${otp}</b>. It’s valid for 10 minutes.</p>`,
    });

    console.log(`✅ OTP sent successfully to ${email}`);
    res.status(200).json({ message: "OTP sent to email", email });
  } catch (err) {
    console.error("❌ Registration error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// --- VERIFY OTP ---
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const record = otpStore[email];

  if (!record || Date.now() > record.expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ message: "OTP expired or invalid" });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  try {
    if (record.type === "register") {
      const newUser = await User.create(record.userData);
      delete otpStore[email];
      return res.status(201).json({
        message: "User registered successfully",
        user: formatUserDates(newUser),
      });
    } else if (record.type === "forgotPassword") {
      delete otpStore[email];
      return res.status(200).json({ message: "OTP verified. Reset password now." });
    }
    return res.status(400).json({ message: "Invalid OTP type" });
  } catch (err) {
    console.error("❌ OTP verification error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// --- LOGIN ---
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !user.isActive) {
      return res.status(404).json({ message: "User not found or inactive" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    user.lastSeen = new Date();
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({
      message: "Login successful",
      token,
      ...formatUserDates(user),
    });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// --- FORGOT PASSWORD ---
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      otpStore[email] = {
        otp,
        type: "forgotPassword",
        expiresAt: Date.now() + 10 * 60 * 1000,
      };

      await transporter.sendMail({
        from: `"Setu Souls" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Password Reset OTP",
        html: `<p>Your OTP for password reset is <b>${otp}</b>. Valid for 10 minutes.</p>`,
      });
    }
    res.status(200).json({ message: "If email exists, OTP was sent" });
  } catch (err) {
    console.error("❌ Forgot password error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// --- RESET PASSWORD ---
exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ email });
    if (!user || !user.isActive)
      return res.status(404).json({ message: "User not found or inactive" });

    if (await bcrypt.compare(newPassword, user.password)) {
      return res.status(400).json({ message: "New password must be different" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.updatedAt = new Date();
    await user.save();

    res.status(200).json({
      message: "Password updated successfully",
      user: formatUserDates(user),
    });
  } catch (err) {
    console.error("❌ Reset password error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
