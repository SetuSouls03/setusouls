const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit contact number"],
  },
  countryCode: {
    type: String,
    required: true,
    match: [/^\+\d{1,4}$/, "Please enter a valid country code (e.g., +91, +1)"],
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("User", userSchema);
