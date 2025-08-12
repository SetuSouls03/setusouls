const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const axios = require("axios"); // new

// In-memory store — switch to Redis or DB in production
const otpStore = {};

// Reusable transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper: extract client IP in a proxy-safe way
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
  // remove IPv6 prefix if present (e.g., ::ffff:127.0.0.1)
  if (ip && ip.startsWith("::ffff:")) ip = ip.replace("::ffff:", "");
  return ip;
}

// Helper: call geolocation provider (server-side) and return normalized object
async function resolveGeoForIp(ip) {
  try {
    if (!ip) return {};
    // Example: ipapi.co (no key required for basic info). Swap for your provider if you have an API key.
    const url = `https://ipapi.co/${ip}/json/`;
    const { data } = await axios.get(url, { timeout: 5000 });

    // Normalized fields
    return {
      ipId: data.organization || data.org || data.asn || null, // provider dependent
      ipAddress: data.ip || ip || null,
      latitude: data.latitude ? parseFloat(data.latitude) : (data.lat ? parseFloat(data.lat) : null),
      longitude: data.longitude ? parseFloat(data.longitude) : (data.lon ? parseFloat(data.lon) : null),
      pincode: data.postal || data.postal_code || data.postalCode || null,
      city: data.city || null,
      state: data.region || data.region_name || data.region_code || null,
    };
  } catch (err) {
    console.warn("Geo lookup failed for IP", ip, err.message);
    return {};
  }
}

// Register (step 1)
exports.register = async (req, res) => {
  const { name, email, password, contactNumber, countryCode, address } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Capture client IP and resolve geo server-side
    const clientIp = getClientIp(req);
    const geo = await resolveGeoForIp(clientIp);

    // Build userData to store in otpStore (so when OTP verified we create user with geo)
    const userData = {
      name,
      email,
      password: hashedPassword,
      contactNumber,
      countryCode,
      address,
      // attach geo fields (may be empty)
      ipId: geo.ipId || null,
      ipAddress: geo.ipAddress || clientIp || null,
      latitude: geo.latitude || null,
      longitude: geo.longitude || null,
      pincode: geo.pincode || null,
      city: geo.city || null,
      state: geo.state || null,
      lastSeen: new Date(), // registration time
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

// OTP Verification (step 2)
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
      // Create user with stored userData (which includes geo info)
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

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Update lastSeen and (optionally) refresh geo based on current IP
    try {
      const clientIp = getClientIp(req);
      user.lastSeen = new Date();

      // Optionally update IP + geo on login — uncomment if you want to refresh on login:
      // const geo = await resolveGeoForIp(clientIp);
      // user.ipAddress = geo.ipAddress || clientIp || user.ipAddress;
      // if (geo.ipId) user.ipId = geo.ipId;
      // if (geo.latitude) user.latitude = geo.latitude;
      // if (geo.longitude) user.longitude = geo.longitude;
      // if (geo.city) user.city = geo.city;
      // if (geo.state) user.state = geo.state;
      // if (geo.pincode) user.pincode = geo.pincode;

      await user.save();
    } catch (err) {
      console.warn("Unable to update lastSeen/geo on login:", err.message);
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Forgot Password (OTP)
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

// Reset Password
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
