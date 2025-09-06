// controllers/chapterController.js
const Chapter = require("../models/Chapter");

// ✅ POST /api/chapters
exports.createChapter = async (req, res) => {
  try {
    const { slug, title, content, linkEnglish, linkHindi, additionalSection, date } = req.body;

    // Check if chapter already exists by slug
    const existing = await Chapter.findOne({ slug }).lean();
    if (existing) {
      return res.status(400).json({ message: "Chapter already exists" });
    }

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
    res.status(201).json({ message: "Chapter created successfully", chapter: newChapter });
  } catch (err) {
    console.error("❌ Error creating chapter:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ GET /api/chapters/:slug
exports.getChapterBySlug = async (req, res) => {
  try {
    const chapter = await Chapter.findOne({ slug: req.params.slug }).lean();
    if (!chapter) {
      return res.status(404).json({ message: "Chapter not found" });
    }
    res.json(chapter);
  } catch (err) {
    console.error("❌ Error fetching chapter:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ GET /api/chapters (with pagination + indexing optimization)
exports.getAllChapters = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const chapters = await Chapter.find()
      .select("title slug _id")
      .skip(skip)
      .limit(limit)
      .sort({ date: 1, _id: 1 })
      .lean(); // faster read-only queries

    res.json(chapters);
  } catch (err) {
    console.error("❌ Error fetching chapters:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
