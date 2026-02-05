const express = require("express");
const router = express.Router();
const { getImportantNotes } = require("../controllers/importantNotes.controller");

router.get("/", getImportantNotes);

module.exports = router;
