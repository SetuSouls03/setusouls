const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
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
      hi: { type: String },
    },

    // ✅ Add image field
    image: {
      type: String, // URL or filename
      required: false,
    },

    date: { type: Date },
  },
  {
    timestamps: true,
  }
);

notesSchema.index({ "title.en": 1 });
notesSchema.index({ "title.hi": 1 });

module.exports = mongoose.model("note", notesSchema);
