const Summary = require("../models/Summary");

// GET /api/summary
exports.getSummary = async (req, res) => {
  try {
    const summary = await Summary.findOne();
    if (!summary) return res.status(404).json({ message: "Summary not found" });

    res.json(summary);
  } catch (error) {
    console.error("Error fetching summary:", error);
    res.status(500).json({ message: "Server error" });
  }
};
