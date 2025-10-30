// controllers/noteController.js
const Note = require("../models/Notes");

// ✅ POST /api/notes
exports.createNote = async (req, res) => {
  try {
    const { slug, title, content, linkEnglish, linkHindi, additionalSection, date, image } = req.body;

    const existing = await Note.findOne({ slug }).lean();
    if (existing) {
      return res.status(400).json({ message: "Note already exists" });
    }

    const newNote = new Note({
      slug,
      title,
      content,
      linkEnglish,
      linkHindi,
      additionalSection,
      date,
      image,
    });

    await newNote.save();
    res.status(201).json({ message: "✅ Note created successfully", note: newNote });
  } catch (err) {
    console.error("❌ Error creating note:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ GET /api/notes/:slug
exports.getNoteBySlug = async (req, res) => {
  try {
    const note = await Note.findOne({ slug: req.params.slug }).lean();
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (err) {
    console.error("❌ Error fetching note:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ GET /api/notes
exports.getAllNotes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const notes = await Note.find()
      .select("title slug _id date image")
      .skip(skip)
      .limit(limit)
      .sort({ date: -1, _id: 1 })
      .lean();

    res.json({
      total: notes.length,
      notes,
    });
  } catch (err) {
    console.error("❌ Error fetching notes:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
