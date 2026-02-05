const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    header: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Experience", experienceSchema);
