const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const axios = require("axios");

// Proper import for date-fns-tz to avoid "not a function" errors
const dateFnsTz = require("date-fns-tz");
const format = dateFnsTz.format;
const utcToZonedTime = dateFnsTz.utcToZonedTime;

// In-memory OTP store (replace with DB or Redis in production)
const otpStore = {};

// Nodemailer transporter config
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper: extract client IP from request (proxy-safe)
function getClientIp(req) {
  const xff = req.headers["x-forwarded-for"] || req.headers["X-Forwarded-For"];
  let ip = null;
  if (xff) {
    ip = xff.split(",")[0].trim();
  } else if (req.socket && req.socket.remoteAddress) {
    ip = req.socket.remoteAddress;
  } else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
  }
  if (ip && ip.startsWith("::ffff:")) ip = ip.replace("::ffff:", "");
  return ip;
}

// Helper: get geo info from IP via ipapi.co and normalize fields
async function resolveGeoForIp(ip) {
  try {
    if (!ip) return {};
    const url = `https://ipapi.co/${ip}/json/`;
    const { data } = await axios.get(url, { timeout: 5000 });

    return {
      ipId: data.organization || data.org || data.asn || null,
      ipAddress: data.ip || ip || null,
      latitude: data.latitude ? parseFloat(data.latitude) : (data.lat ? parseFloat(data.lat) : null),
      longitude: data.longitude ? parseFloat(data.longitude) : (data.lon ? parseFloat(data.lon) : null),
      pincode: data.postal || data.postal_code || data.postalCode || null,
      city: data.city || null,
      state: data.region || data.region_name || data.region_code || null,
      ipCountry: data.country_name || null,   // Added IP country
    };
  } catch (err) {
    console.warn("Geo lookup failed for IP", ip, err.message);
    return {};
  }
}

// Format Date object to IST timezone string for responses (e.g., "2025-08-12 at 23.31")
function formatToIST(date) {
  if (!date) return null;
  const timeZone = "Asia/Kolkata";
  const zonedDate = utcToZonedTime(date, timeZone);
  return format(zonedDate, "yyyy-MM-dd 'at' HH.mm", { timeZone });
}

// --- REGISTER (step 1): create OTP and store user data temporarily ---
exports.register = async (req, res) => {
  const { name, email, password, contactNumber, countryCode, address } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Get client IP and geo info
    let clientIp = getClientIp(req);
    if (clientIp === "127.0.0.1" || clientIp === "::1") {
      clientIp = "8.8.8.8"; // fallback for local dev/testing
    }
    const geo = await resolveGeoForIp(clientIp);

    // Prepare user data to store with OTP (store Date objects, not formatted strings)
    const now = new Date();
    const userData = {
      name,
      email,
      password: hashedPassword,
      contactNumber,
      countryCode,
      address,
      ipId: geo.ipId || null,
      ipAddress: geo.ipAddress || clientIp || null,
      latitude: geo.latitude || null,
      longitude: geo.longitude || null,
      pincode: geo.pincode || null,
      city: geo.city || null,
      state: geo.state || null,
      ipCountry: geo.ipCountry || null,
      lastSeen: now,
      createdAt: now,
      updatedAt: now,
    };

    otpStore[email] = {
      otp,
      type: "register",
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
      userData,
    };

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your account",
      text: `${otp}. It is valid for 10 minutes.`,
    });

    res.status(200).json({ message: "OTP sent to email", email });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// --- OTP verification and user creation ---
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const record = otpStore[email];

  if (!record) {
    return res.status(400).json({ message: "OTP not found or expired" });
  }

  if (Date.now() > record.expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ message: "OTP expired" });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  try {
    if (record.type === "register") {
      const newUser = new User(record.userData);
      await newUser.save();
      delete otpStore[email];
      return res.status(201).json({ message: "User verified and registered successfully" });
    } else if (record.type === "forgotPassword") {
      delete otpStore[email];
      return res.status(200).json({ message: "OTP verified. Proceed to reset password." });
    } else {
      return res.status(400).json({ message: "Invalid OTP flow type" });
    }
  } catch (err) {
    console.error("Error in OTP verification:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// --- LOGIN ---
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Update lastSeen on login
    user.lastSeen = new Date();
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Format lastSeen date to IST string before sending
    const formattedLastSeen = formatToIST(user.lastSeen);

    res.json({ message: "Login successful", token, lastSeen: formattedLastSeen });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: err.message });
  }
};

// --- Forgot Password (send OTP) ---
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({ message: "If the email exists, OTP has been sent" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    otpStore[email] = {
      otp,
      type: "forgotPassword",
      expiresAt: Date.now() + 10 * 60 * 1000,
    };

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "OTP for Password Reset",
      text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
    });

    res.status(200).json({ message: "OTP sent to email" });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// --- Reset Password ---
exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({ message: "Email and new password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isSame = await bcrypt.compare(newPassword, user.password);
    if (isSame) return res.status(400).json({ message: "New password must be different" });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
