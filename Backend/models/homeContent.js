const mongoose = require("mongoose");

const MantraSchema = new mongoose.Schema({
  sanskrit: String,
  meaning: String,
  note: String,
});

const InfoBlockSchema = new mongoose.Schema({
  text: String,
  hindi: String,
});

const HomeSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  infoBlocks: [InfoBlockSchema],
  mantras: [MantraSchema],
  cta: String,
});

module.exports = mongoose.model("HomeContent", HomeSchema);
