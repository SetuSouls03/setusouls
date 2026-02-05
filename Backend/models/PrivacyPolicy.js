// models/PrivacyPolicy.js
const mongoose = require("mongoose");

const PrivacyPolicySchema = new mongoose.Schema({
  slug: { type: String, unique: true, required: true },
  title: String,
  publishedDate: String,
  updatedDate: String,
  contactEmail: String,
  sections: [
    {
      heading: String,
      content: String
    }
  ]
});

module.exports = mongoose.model("PrivacyPolicy", PrivacyPolicySchema);
