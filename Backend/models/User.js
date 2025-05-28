const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit contact number"],
  }, // ✅ This comma was missing
});

module.exports = mongoose.model("User", userSchema);

