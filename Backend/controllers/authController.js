const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// In-memory store — switch to Redis or DB in production
const otpStore = {};

// Reusable transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Register (step 1)
exports.register = async (req, res) => {
  const { name, email, password, contactNumber } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    otpStore[email] = {
      otp,
      type: "register",  // <== Add this type
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 mins
      userData: {
        name,
        email,
        password: hashedPassword,
        contactNumber,
      },
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
      const newUser = new User(record.userData);
      await newUser.save();
      delete otpStore[email];
      return res.status(201).json({ message: "User verified and registered successfully" });
    } else if (record.type === "forgotPassword") {
      // just verify OTP, allow frontend to call /reset-password next
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

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Forgot Password (OTP)
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      // Security: don't reveal if email exists or not
      return res.status(200).json({ message: "If the email exists, OTP has been sent" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    otpStore[email] = {
      otp,
      type: "forgotPassword",  // <== This is the key fix
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
