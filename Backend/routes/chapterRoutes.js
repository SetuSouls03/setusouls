// routes/chapterRoutes.js
const express = require("express");
const router = express.Router();
const {
  createChapter,
  getChapterBySlug,
  getAllChapters,
} = require("../controllers/chapterController");

router.post("/", createChapter);        // Add a new chapter
router.get("/", getAllChapters);        // List all chapters (paginated)
router.get("/:slug", getChapterBySlug); // Get chapter by slug

module.exports = router;
