const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const otpStore = {}; // For demo only – use Redis or DB in production
//const getSheetsClient = require("../utils/googleSheets");

exports.register = async (req, res) => {
  const { name, email, password, contactNumber } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      contactNumber,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


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

exports.writeToSheet = async (req, res) => {
  try {
    console.log("➡️ Incoming data:", req.body); // DEBUG

    const sheets = await getSheetsClient();
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email are required" });
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[name, email]],
      },
    });

    console.log("✅ Sheet response:", response.data); // DEBUG

    res.status(200).json({ message: "Data added to Google Sheet", data: response.data });
  } catch (error) {
    console.error("❌ Error writing to sheet:", error); // DEBUG
    res.status(500).json({ message: "Failed to write to sheet", error: error.message });
  }
};
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({ message: "If the email exists, an OTP has been sent" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = { otp, expiresAt: Date.now() + 10 * 60 * 1000 };

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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Password Reset",
      text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "OTP sent to email" });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
exports.verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  // Check if OTP exists for the email
  const record = otpStore[email];
  if (!record) {
    return res.status(400).json({ message: "OTP not found or expired" });
  }

  // Check if OTP is expired
  if (Date.now() > record.expiresAt) {
    delete otpStore[email]; // Remove expired OTP
    return res.status(400).json({ message: "OTP expired" });
  }

  // Check if OTP matches
  if (record.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  // OTP verified successfully — you can now allow password reset, etc.
  delete otpStore[email]; // Remove OTP after successful verification

  res.status(200).json({ message: "OTP verified successfully" });
};
exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({ message: "Email and new password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.password) {
      return res.status(500).json({ message: "Existing password not found for this user" });
    }

    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      return res.status(400).json({ message: "New password must be different from the old one" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Error resetting password:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};