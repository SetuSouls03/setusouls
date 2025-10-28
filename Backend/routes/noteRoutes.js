const express = require("express");
const router = express.Router();
const {
  createNote,
  getNoteBySlug,
  getAllNotes,
} = require("../controllers/noteController");


router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:slug", getNoteBySlug);

module.exports = router;
