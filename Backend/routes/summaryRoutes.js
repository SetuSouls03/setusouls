const express = require("express");
const router = express.Router();
const {
  getSummary,
  createSummary,
  updateSummary,
  deleteSummary,
  updateSection,
  addParagraph,
  removeParagraph,
  addListItem,
  removeListItem,
  importSummary,
  exportSummary,
  getSummaryHistory
} = require("../controllers/summaryController");

// GET /api/summary - Get full summary
router.get("/", getSummary);

// POST /api/summary - Create new summary
router.post("/", createSummary);

// PUT /api/summary - Update entire summary
router.put("/", updateSummary);

// DELETE /api/summary - Delete summary
router.delete("/", deleteSummary);

// PUT /api/summary/section/:sectionIndex - Update specific section
router.put("/section/:sectionIndex", updateSection);

// POST /api/summary/section/:sectionIndex/paragraph - Add paragraph
router.post("/section/:sectionIndex/paragraph", addParagraph);

// DELETE /api/summary/section/:sectionIndex/paragraph/:paraIndex - Remove paragraph
router.delete("/section/:sectionIndex/paragraph/:paraIndex", removeParagraph);

// POST /api/summary/section/:sectionIndex/list-item - Add list item
router.post("/section/:sectionIndex/list-item", addListItem);

// DELETE /api/summary/section/:sectionIndex/list-item/:itemIndex - Remove list item
router.delete("/section/:sectionIndex/list-item/:itemIndex", removeListItem);

// POST /api/summary/import - Import summary data
router.post("/import", importSummary);

// GET /api/summary/export - Export summary data
router.get("/export", exportSummary);

// GET /api/summary/history - Get edit history
router.get("/history", getSummaryHistory);

module.exports = router;