const CharanPoojaContent = require("../models/charanPoojaContent");

exports.getCharanPoojaContent = async (req, res) => {
  try {
    const data = await CharanPoojaContent.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to load Charan Pooja content" });
  }
};
