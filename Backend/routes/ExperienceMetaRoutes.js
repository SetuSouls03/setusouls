const express = require("express");
const router = express.Router();
const { getExperienceMeta } = require("../controllers/ExperienceMetaController");

// ✅ PARAM BASED ROUTE
router.get("/:ExperienceKey", getExperienceMeta);

module.exports = router;
