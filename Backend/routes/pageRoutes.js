const express = require("express");
const router = express.Router();
const {
  getPageBySlug,
  createPage,
  updatePage,
  deletePage,
  getAllPages,
  updatePageSections,
  addPageSection,
  removePageSection,
  updatePageSummary,
  addPageSummaryItem,
  removePageSummaryItem,
  importPageData,
  exportPageData
} = require("../controllers/pageController");

// GET all pages (for admin listing)
router.get("/", getAllPages);

// GET page by slug
router.get("/:slug", getPageBySlug);

// POST create new page
router.post("/", createPage);

// PUT update entire page
router.put("/:slug", updatePage);

// DELETE page
router.delete("/:slug", deletePage);

// PUT update only sections
router.put("/:slug/sections", updatePageSections);

// POST add new section to page
router.post("/:slug/sections", addPageSection);

// DELETE remove section from page
router.delete("/:slug/sections/:sectionId", removePageSection);

// PUT update only summary
router.put("/:slug/summary", updatePageSummary);

// POST add summary item
router.post("/:slug/summary", addPageSummaryItem);

// DELETE remove summary item
router.delete("/:slug/summary/:index", removePageSummaryItem);

// POST import page data
router.post("/:slug/import", importPageData);

// GET export page data
router.get("/:slug/export", exportPageData);

module.exports = router;