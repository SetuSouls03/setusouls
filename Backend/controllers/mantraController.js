const Mantra = require("../models/Mantra");

exports.getMantra = async (req, res) => {
  try {
    const mantra = await Mantra.findOne();
    res.status(200).json(mantra);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch mantra" });
  }
};

exports.createOrUpdateMantra = async (req, res) => {
  try {
    const existing = await Mantra.findOne();

    if (existing) {
      const updated = await Mantra.findByIdAndUpdate(
        existing._id,
        req.body,
        { new: true }
      );
      return res.status(200).json(updated);
    }

    const mantra = new Mantra(req.body);
    await mantra.save();
    res.status(201).json(mantra);
  } catch (err) {
    res.status(500).json({ message: "Failed to save mantra" });
  }
};
