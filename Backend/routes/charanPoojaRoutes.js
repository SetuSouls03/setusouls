const express = require("express");
const router = express.Router();
const { getCharanPoojaContent } = require("../controllers/charanPoojaController");

router.get("/", getCharanPoojaContent);

module.exports = router;
