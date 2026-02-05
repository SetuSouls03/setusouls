const mongoose = require("mongoose");

const ButtonSchema = new mongoose.Schema({
  label: String,
  url: String,
  target: { type: String, default: "_self" }
}, { _id: false });

const ImportantNoteSchema = new mongoose.Schema({
  language: { type: String, enum: ["hi", "en"], required: true },
  section: { type: String, required: true },
  heading: String,
  subHeading: String,
  body: String,
  buttons: [ButtonSchema]
}, { timestamps: true });

module.exports = mongoose.model("ImportantNote", ImportantNoteSchema);
