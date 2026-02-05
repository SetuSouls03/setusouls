const ExperienceMeta = require("../models/ExperienceMeta");

const getExperienceMeta = async (req, res) => {
  try {
    const { ExperienceKey } = req.params;

    const meta = await ExperienceMeta.findOne({ ExperienceKey });

    if (!meta) {
      return res.status(404).json({ message: "Experience meta not found" });
    }

    res.json(meta);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getExperienceMeta };
