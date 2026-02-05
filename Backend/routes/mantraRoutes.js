const express = require("express");
const router = express.Router();
const {
  getMantra,
  createOrUpdateMantra
} = require("../controllers/mantraController");

router.get("/", getMantra);
router.post("/", createOrUpdateMantra);

module.exports = router;
