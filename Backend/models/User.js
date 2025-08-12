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
    maxlength: 2000,
  },

  // --- new geo/IP fields ---
  ipId: { type: String, default: null },        // e.g., ASN or network id if available
  ipAddress: { type: String, default: null },
  ipCountry: { type: String, default: null },   // Added IP country field
  latitude: { type: Number, default: null },
  longitude: { type: Number, default: null },
  pincode: { type: String, default: null },
  city: { type: String, default: null },
  state: { type: String, default: null },

  lastSeen: { type: Date, default: Date.now },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to auto-update `updatedAt` on save
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("User", userSchema);
