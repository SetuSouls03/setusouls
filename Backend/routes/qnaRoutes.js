const express = require("express");
const router = express.Router();
const { getAllQna } = require("../controllers/qnaController");

// GET all Q&A + meta
router.get("/", getAllQna);

module.exports = router;
