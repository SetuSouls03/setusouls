// controllers/chapterController.js
const Chapter = require("../models/Chapter");
const NodeCache = require("node-cache");

// 🧠 In-memory cache (5 minutes)
const cache = new NodeCache({ stdTTL: 300 });

// ✅ POST /api/chapters
exports.createChapter = async (req, res) => {
  try {
    const { slug, title, content, linkEnglish, linkHindi, additionalSection, date } = req.body;

    // Prevent duplicate slug
    const existing = await Chapter.findOne({ slug }).lean();
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

    cache.flushAll(); // clear cache when a new chapter is added
    res.status(201).json({ message: "Chapter created successfully", chapter: newChapter });
  } catch (err) {
    console.error("❌ Error creating chapter:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ GET /api/chapters/:slug — Optimized fetch
exports.getChapterBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    // ⚡ Check cache first
    const cached = cache.get(slug);
    if (cached) return res.json(cached);

    // ⚡ Optimized query
    const chapter = await Chapter.findOne({ slug })
      .select("slug title content linkEnglish linkHindi additionalSection date")
      .lean();

    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    // Save to cache for next time
    cache.set(slug, chapter);

    res.json(chapter);
  } catch (err) {
    console.error("❌ Error fetching chapter:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ GET /api/chapters — Paginated + cached list
exports.getAllChapters = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const cacheKey = `chapters_${page}_${limit}`;
    const cached = cache.get(cacheKey);
    if (cached) return res.json(cached);

    const chapters = await Chapter.find()
      .select("title slug date")
      .skip(skip)
      .limit(limit)
      .sort({ date: -1, _id: 1 })
      .lean();

    cache.set(cacheKey, chapters);
    res.json(chapters);
  } catch (err) {
    console.error("❌ Error fetching chapters:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
