const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },

  title: {
    en: { type: String, required: true },
    hi: { type: String, required: true },
  },

  content: {
    en: { type: String, required: true },
    hi: { type: String, required: true },
  },

  linkEnglish: { type: String },
  linkHindi: { type: String },

  // ✅ New additional section field
  additionalSection: {
    en: { type: String },
    hi: { type: String }
  },

  date: { type: Date },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Chapter", chapterSchema);
