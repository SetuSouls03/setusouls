// models/Page.js
const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  image: { type: String, required: true },
  title: { en: String, hi: String },
  description: { en: String, hi: String },
});

const PageSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  sections: [SectionSchema],
  summary: { en: [String], hi: [String] },
});

module.exports = mongoose.model("Page", PageSchema);
