const HistoryContent = require("../models/historyContent");

exports.getHistoryContent = async (req, res) => {
  try {
    const data = await HistoryContent.findOne();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
