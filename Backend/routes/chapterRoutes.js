const express = require("express");
const router = express.Router();
const {
  createChapter,
  getChapterBySlug,
  getAllChapters, // ✅ add this
} = require("../controllers/chapterController");

router.post("/", createChapter);             // Add new chapter
router.get("/", getAllChapters);             // ✅ Get all chapters
router.get("/:slug", getChapterBySlug);      // Get chapter by slug

module.exports = router;
