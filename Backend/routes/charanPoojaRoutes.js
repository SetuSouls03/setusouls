const express = require("express");
const router = express.Router();
const { 
  getCharanPoojaContent, 
  updateCharanPoojaContent,
  addGroup,
  deleteGroup,
  getCharanPoojaById
} = require("../controllers/charanPoojaController");

// GET all Charan Pooja content
router.get("/", getCharanPoojaContent);

// GET Charan Pooja by ID (optional)
router.get("/:id", getCharanPoojaById);

// UPDATE entire Charan Pooja content (MAIN UPDATE FOR ADMIN PANEL)
router.put("/", updateCharanPoojaContent);

// ADD new group
router.post("/groups", addGroup);

// DELETE group
router.delete("/groups/:groupId", deleteGroup);

module.exports = router;