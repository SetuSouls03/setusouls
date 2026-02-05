const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema({
  hi: String,
  en: String,
});

const HistorySectionSchema = new mongoose.Schema({
  heading: LanguageSchema,
  content: LanguageSchema,
});

const HistoryContentSchema = new mongoose.Schema({
  sections: [HistorySectionSchema],
});

module.exports = mongoose.model("HistoryContent", HistoryContentSchema);
