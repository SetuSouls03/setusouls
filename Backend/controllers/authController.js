const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const nodemailer = require("nodemailer");
const { formatUserDates } = require("../utils/dateFormatter");

// ✅ Gmail SMTP configuration (App Password required)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // e.g. yourname@gmail.com
    pass: process.env.EMAIL_PASS, // Google App Password (NOT normal password)
  },
});

// --- OTP store ---
const otpStore = {}; // Temporary in-memory OTP store
const OTP_EXPIRY = 10 * 60 * 1000; // 10 minutes
const OTP_RESEND_DELAY = 2 * 60 * 1000; // 2 minutes between OTP requests

// --- Helper: get client IP ---
function getClientIp(req) {
  const xff = req.headers["x-forwarded-for"] || req.headers["X-Forwarded-For"];
  let ip =
    xff?.split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    req.connection?.remoteAddress;
  if (ip?.startsWith("::ffff:")) ip = ip.replace("::ffff:", "");
  return ip;
}

// --- Helper: resolve geo info ---
async function resolveGeoForIp(ip) {
  try {
    if (!ip) return {};
    const { data } = await axios.get(`http://ip-api.com/json/${ip}`, {
      timeout: 5000,
    });
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
    console.warn("Geo lookup failed:", err.message);
    return {};
  }
}

// --- Helper: generate OTP ---
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// --- Helper: send email ---
async function sendEmail(to, subject, html) {
  const mailOptions = {
    from: `"SetuSouls" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  };
  await transporter.sendMail(mailOptions);
}

// --- REGISTER ---
exports.register = async (req, res) => {
  const { name, email, password, contactNumber, countryCode, address } = req.body;

  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "User already exists" });
    }

    const now = new Date();
    const clientIp = getClientIp(req) || "8.8.8.8";
    const geo = await resolveGeoForIp(clientIp);

    // Rate-limit OTP resend
    if (otpStore[email] && Date.now() < otpStore[email].nextAllowedResend) {
      return res.status(429).json({
        message: "OTP already sent. Please wait before requesting again.",
      });
    }

    const otp = generateOtp();
    otpStore[email] = {
      otp,
      type: "register",
      expiresAt: Date.now() + OTP_EXPIRY,
      nextAllowedResend: Date.now() + OTP_RESEND_DELAY,
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

    await sendEmail(
      email,
      "Verify your SetuSouls account",
      `
        <h2>Hello ${name},</h2>
        <p>Your OTP is <b>${otp}</b>. It’s valid for 10 minutes.</p>
        <p>Thank you for registering with SetuSouls!</p>
      `
    );
    console.log(`✅ OTP email sent to ${email}`);

    res.status(200).json({ message: "OTP sent to email", email });
  } catch (err) {
    console.error("Registration error:", err);
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

  if (record.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

  try {
    if (record.type === "register") {
      const newUser = await User.create(record.userData);
      delete otpStore[email];
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.status(201).json({
        message: "User registered successfully",
        token,
        user: formatUserDates(newUser),
      });
    } else if (record.type === "forgotPassword") {
      delete otpStore[email];
      return res.status(200).json({ message: "OTP verified. Reset password now." });
    }

    return res.status(400).json({ message: "Invalid OTP type" });
  } catch (err) {
    console.error("OTP verification error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// --- LOGIN ---
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.isActive) {
      return res.status(404).json({ message: "User not found or account inactive" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    user.lastSeen = new Date();
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      message: "Login successful",
      token,
      user: formatUserDates(user),
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// --- FORGOT PASSWORD ---
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const otp = generateOtp();
      otpStore[email] = {
        otp,
        type: "forgotPassword",
        expiresAt: Date.now() + OTP_EXPIRY,
      };

      await sendEmail(
        email,
        "Password Reset OTP",
        `<h3>Your OTP is <b>${otp}</b>. It’s valid for 10 minutes.</h3>`
      );

      console.log(`✅ Password reset OTP sent to ${email}`);
    }

    res.status(200).json({ message: "If email exists, OTP was sent" });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// --- RESET PASSWORD ---
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.isActive)
      return res.status(404).json({ message: "User not found or inactive" });

    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword)
      return res.status(400).json({ message: "New password must be different" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.updatedAt = new Date();
    await user.save();

    res.status(200).json({
      message: "Password updated successfully",
      user: formatUserDates(user),
    });
  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
