const mongoose = require("mongoose");

const LineSchema = new mongoose.Schema({
  title: { type: String },
  mantra: [{ type: String }],
  meaning: { type: String }
});

const LanguageSchema = new mongoose.Schema({
  update: { type: String, required: true },
  intro: { type: String, required: true },
  lines: [LineSchema]
});

const MantraSchema = new mongoose.Schema({
  hi: LanguageSchema,
  en: LanguageSchema
}, { timestamps: true });

module.exports = mongoose.model("Mantra", MantraSchema);
