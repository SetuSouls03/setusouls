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

  additionalSection: {
    en: { type: String },
    hi: { type: String }
  },

  date: { type: Date },
}, {
  timestamps: true,
});

// ✅ Add indexes for faster lookups
chapterSchema.index({ slug: 1 });
chapterSchema.index({ "title.en": 1 });
chapterSchema.index({ "title.hi": 1 });

module.exports = mongoose.model("Chapter", chapterSchema);
