const express = require("express");
const router = express.Router();
const { getPrayerContent } = require("../controllers/prayerController");

router.get("/", getPrayerContent);

module.exports = router;
