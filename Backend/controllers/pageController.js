// controllers/pageController.js
const Page = require("../models/Page");

// Get page by slug
exports.getPageBySlug = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });
    if (!page) return res.status(404).json({ message: "Page not found" });
    res.json(page);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
