const express = require("express");
const router = express.Router();
const {
  getImportantNotes,
  createImportantNote,
  updateImportantNote,
  deleteImportantNote,
  updateAllImportantNotes,
  getImportantNoteById,
  importImportantNotes,
  exportImportantNotes
} = require("../controllers/importantNotes.controller");

// GET all notes for a language
router.get("/", getImportantNotes);

// GET single note by ID
router.get("/:id", getImportantNoteById);

// POST create new note
router.post("/", createImportantNote);

// PUT update specific note
router.put("/:id", updateImportantNote);

// DELETE remove note
router.delete("/:id", deleteImportantNote);

// PUT bulk update all notes for a language (used by CMS)
router.put("/", updateAllImportantNotes);

// POST import notes from JSON
router.post("/import", importImportantNotes);

// GET export notes for a language
router.get("/export/:lang", exportImportantNotes);

module.exports = router;