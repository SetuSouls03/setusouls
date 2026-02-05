const Contact = require("../models/Contact");

// GET contact info
exports.getContactInfo = async (req, res) => {
  try {
    const contact = await Contact.findOne({}); // assuming only one contact document
    if (!contact) {
      return res.status(404).json({ message: "Contact info not found" });
    }
    res.json(contact);
  } catch (err) {
    console.error("Contact fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
