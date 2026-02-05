// routes/homeRoutes.js - MINIMAL UPDATE
const express = require("express");
const router = express.Router();
const { 
  getHomeContent, 
  updateHomeContent  // Add this import
} = require("../controllers/homeController");

// ✅ Existing GET route
router.get("/", getHomeContent);

// ✅ NEW: Add PUT route for CMS updates
router.put("/", updateHomeContent);  // Add this line

// ✅ Optional: Also add PATCH for partial updates
router.patch("/", updateHomeContent);

module.exports = router;