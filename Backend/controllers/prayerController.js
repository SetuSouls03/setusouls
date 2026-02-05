const PrayerContent = require("../models/prayerContent");

exports.getPrayerContent = async (req, res) => {
  try {
    const data = await PrayerContent.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
