const Experience = require("../models/Experience");

const getExperiences = async (req, res) => {
  try {
    const data = await Experience.find().sort({ id: 1 });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch experiences" });
  }
};

module.exports = { getExperiences };
