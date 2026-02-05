const express = require("express");
const router = express.Router();
const { getSummary } = require("../controllers/summaryController");

// GET /api/summary
// Returns the whole bilingual summary document
router.get("/", getSummary);

module.exports = router;
