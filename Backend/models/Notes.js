// models/Notes.js
const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true }, // ✅ keep only this, no extra .index()

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

// ✅ Keep only non-duplicate indexes
notesSchema.index({ "title.en": 1 });
notesSchema.index({ "title.hi": 1 });

const Note = mongoose.model("Note", notesSchema);
module.exports = Note;
