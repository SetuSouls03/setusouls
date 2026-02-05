const mongoose = require("mongoose");

const TextBlockSchema = new mongoose.Schema({
  hi: String,
  en: String,
});

const PrayerSectionSchema = new mongoose.Schema({
  heading: TextBlockSchema,
  subheading: TextBlockSchema,
});

const PrayerSchema = new mongoose.Schema({
  sections: [PrayerSectionSchema],
});

module.exports = mongoose.model("PrayerContent", PrayerSchema);
