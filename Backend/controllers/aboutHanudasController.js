const AboutHanudas = require("../models/AboutHanudas");

exports.getAboutHanudas = async (req, res) => {
  try {
    const aboutHanudas = await AboutHanudas.findOne();
    res.json(aboutHanudas);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch aboutHanudas page" });
  }
};

exports.createOrUpdateAboutHanudas = async (req, res) => {
  try {
    const existing = await AboutHanudas.findOne();

    if (existing) {
      const updated = await AboutHanudas.findByIdAndUpdate(
        existing._id,
        req.body,
        { new: true }
      );
      return res.json(updated);
    }

    const aboutHanudas = new AboutHanudas(req.body);
    await aboutHanudas.save();
    res.status(201).json(aboutHanudas);
  } catch (err) {
    res.status(500).json({ message: "Failed to save aboutHanudas page" });
  }
};
