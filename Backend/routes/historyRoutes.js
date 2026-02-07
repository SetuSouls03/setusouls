const express = require("express");
const router = express.Router();
const { 
  getHistoryContent, 
  updateHistoryContent,
  updateHistoryContentSimple,
  addSection,
  deleteSection,
  getHistoryById
} = require("../controllers/historyController");

// GET all history content
router.get("/", getHistoryContent);

// GET history by ID
router.get("/:id", getHistoryById);

// UPDATE entire history content (use this one)
router.put("/", updateHistoryContent);

// Alternative simple update
router.put("/simple", updateHistoryContentSimple);

// ADD new section
router.post("/sections", addSection);

// DELETE section
router.delete("/sections/:sectionId", deleteSection);

module.exports = router;