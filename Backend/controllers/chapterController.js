const Chapter = require("../models/Chapter");

// POST /api/chapters
exports.createChapter = async (req, res) => {
  try {
    const { slug, title, content, linkEnglish, linkHindi, additionalSection, date } = req.body;

    const existing = await Chapter.findOne({ slug });
    if (existing) return res.status(400).json({ message: "Chapter already exists" });

    const newChapter = new Chapter({
      slug,
      title,
      content,
      linkEnglish,
      linkHindi,
      additionalSection,
      date,
    });

    await newChapter.save();
    res.status(201).json({ message: "Chapter created", chapter: newChapter });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/chapters/:slug
exports.getChapterBySlug = async (req, res) => {
  try {
    const chapter = await Chapter.findOne({ slug: req.params.slug });
    if (!chapter) return res.status(404).json({ message: "Chapter not found" });
    res.json(chapter);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// GET /api/chapters
exports.getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find().select("title slug"); // select only needed fields
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
