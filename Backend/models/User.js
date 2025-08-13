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
  address: { type: String, required: true, trim: true, maxlength: 2000 },

  // Geo/IP info
  ipId: { type: String, default: null },
  ipAddress: { type: String, default: null },
  ipCountry: { type: String, default: null },
  iplatitude: { type: Number, default: null },
  iplongitude: { type: Number, default: null },
  ipcity: { type: String, default: null },
  ipstate: { type: String, default: null },

  lastSeen: { type: Date, default: Date.now },

  isActive: { type: Boolean, default: true }, // account status

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Middleware to auto-update `updatedAt`
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("User", userSchema);
