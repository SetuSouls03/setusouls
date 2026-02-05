const mongoose = require("mongoose");

const LanguageBlock = new mongoose.Schema({
  heading: String,
  greeting: String,
  subheading: String,
  mantraButtonText: String
});

const AboutHanudasSchema = new mongoose.Schema({
  hi: LanguageBlock,
  en: LanguageBlock,
  youtubeUrl: String,
  mantraPageRoute: String
}, { timestamps: true });

module.exports = mongoose.model("AboutHanudas", AboutHanudasSchema);
