const ImportantNote = require("../models/ImportantNote");

exports.getImportantNotes = async (req, res) => {
  try {
    const lang = req.query.lang || "hi";
    const notes = await ImportantNote.find({ language: lang }).sort({ section: 1 });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
