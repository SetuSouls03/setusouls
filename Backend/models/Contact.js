const mongoose = require("mongoose");

const SocialSchema = new mongoose.Schema({
  name: String,
  type: String,       // e.g., "linkedin", "whatsapp", "youtube", "image"
  url: String,
  icon: String,       // e.g., "linkedin", "whatsapp", "image"
  imageUrl: String    // optional, for image icons like SeerBooks
});

const ContactSchema = new mongoose.Schema({
  title: String,
  intro: String,
  email: {
    address: String,
    description: String
  },
  socialDescription: String,
  social: [SocialSchema]
});

module.exports = mongoose.model("Contact", ContactSchema);
