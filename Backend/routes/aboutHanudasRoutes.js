const express = require("express");
const router = express.Router();
const {
  getAboutHanudas,
  createOrUpdateAboutHanudas
} = require("../controllers/aboutHanudasController");

router.get("/", getAboutHanudas);
router.post("/", createOrUpdateAboutHanudas);

module.exports = router;
