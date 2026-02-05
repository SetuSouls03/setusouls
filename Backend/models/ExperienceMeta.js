const mongoose = require("mongoose");

const ExperienceMetaSchema = new mongoose.Schema(
  {
    ExperienceKey: {
      type: String,
      required: true,
      unique: true, // e.g. "my-experiences"
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExperienceMeta", ExperienceMetaSchema);
