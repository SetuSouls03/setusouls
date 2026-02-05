const express = require("express");
const router = express.Router();
const { getHistoryContent } = require("../controllers/historyController");

router.get("/", getHistoryContent);

module.exports = router;
