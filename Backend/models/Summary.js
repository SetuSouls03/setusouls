const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  className: { type: String, required: true },
  heading: {
    english: { type: String, required: true },
    hindi: { type: String, required: true }
  },
  paragraphs: [{
    english: { type: String },
    hindi: { type: String }
  }],
  list: [{
    english: { type: String },
    hindi: { type: String }
  }]
});

const SummarySchema = new mongoose.Schema({
  sections: [SectionSchema],
  highlight: {
    english: { type: String },
    hindi: { type: String }
  }
});

module.exports = mongoose.model("Summary", SummarySchema);
