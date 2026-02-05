// controllers/privacyPolicyController.js
const PrivacyPolicy = require("../models/PrivacyPolicy");

exports.getPrivacyPolicy = async (req, res) => {
  try {
    const data = await PrivacyPolicy.findOne({ slug: "privacy-policy" });
    if (!data) {
      return res.status(404).json({ message: "Privacy policy not found" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
