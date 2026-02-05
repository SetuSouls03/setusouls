const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
  hi: [String],
  en: [String],
});

const SectionSchema = new mongoose.Schema({
  key: String,
  title: {
    hi: String,
    en: String,
  },
  paragraph: {
    hi: String,
    en: String,
  },
  summary: {
    title: {
      hi: String,
      en: String,
    },
    points: SummarySchema,
  },
  subheading: {
    hi: String,
    en: String,
  },
  detailedParagraph: {
    hi: String,
    en: String,
  },
  quote: {
    hi: String,
    en: String,
  },
});

const CharanPoojaSchema = new mongoose.Schema({
  sections: [SectionSchema],
});

module.exports = mongoose.model("CharanPoojaContent", CharanPoojaSchema);
