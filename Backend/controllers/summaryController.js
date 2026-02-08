const Summary = require("../models/Summary");

// GET /api/summary - Get full summary
exports.getSummary = async (req, res) => {
  try {
    const summary = await Summary.findOne();
    if (!summary) {
      // Create default summary if none exists
      const defaultSummary = await Summary.create({
        sections: [
          {
            className: "first-section",
            heading: { english: "Welcome", hindi: "स्वागत है" },
            paragraphs: [
              { english: "First paragraph content", hindi: "पहला अनुच्छेद विषय" }
            ],
            list: []
          },
          {
            className: "second-section",
            heading: { english: "Key Points", hindi: "मुख्य बिंदु" },
            paragraphs: [
              { english: "Second section paragraph", hindi: "दूसरा अनुभाग अनुच्छेद" }
            ],
            list: [
              { english: "First key point", hindi: "पहला मुख्य बिंदु" },
              { english: "Second key point", hindi: "दूसरा मुख्य बिंदु" }
            ]
          },
          {
            className: "third-section",
            heading: { english: "Conclusion", hindi: "निष्कर्ष" },
            paragraphs: [
              { english: "Final thoughts", hindi: "अंतिम विचार" }
            ],
            list: []
          }
        ],
        highlight: {
          english: "Important highlight text goes here",
          hindi: "महत्वपूर्ण हाइलाइट पाठ यहाँ आता है"
        }
      });
      return res.status(200).json(defaultSummary);
    }

    res.status(200).json({
      success: true,
      data: summary
    });
  } catch (error) {
    console.error("Error fetching summary:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

// POST /api/summary - Create new summary (only if none exists)
exports.createSummary = async (req, res) => {
  try {
    // Check if summary already exists
    const existingSummary = await Summary.findOne();
    if (existingSummary) {
      return res.status(400).json({
        success: false,
        message: "Summary already exists. Use PUT to update."
      });
    }

    const { sections, highlight } = req.body;

    // Validate required fields
    if (!sections || !Array.isArray(sections)) {
      return res.status(400).json({
        success: false,
        message: "Sections array is required"
      });
    }

    // Validate each section
    for (const section of sections) {
      if (!section.className || !section.heading) {
        return res.status(400).json({
          success: false,
          message: "Each section must have className and heading"
        });
      }
    }

    const summary = new Summary({
      sections,
      highlight: highlight || { english: "", hindi: "" }
    });

    await summary.save();

    res.status(201).json({
      success: true,
      message: "Summary created successfully",
      data: summary
    });
  } catch (error) {
    console.error("Error creating summary:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create summary",
      error: error.message
    });
  }
};

// PUT /api/summary - Update entire summary (used by CMS Save All)
exports.updateSummary = async (req, res) => {
  try {
    const { sections, highlight } = req.body;

    // Validate request body
    if (!sections || !Array.isArray(sections)) {
      return res.status(400).json({
        success: false,
        message: "Sections array is required"
      });
    }

    // Find existing summary or create new one
    let summary = await Summary.findOne();
    
    if (!summary) {
      // Create new summary
      summary = new Summary({
        sections,
        highlight: highlight || { english: "", hindi: "" }
      });
    } else {
      // Update existing summary
      summary.sections = sections;
      if (highlight) {
        summary.highlight = highlight;
      }
    }

    await summary.save();

    res.status(200).json({
      success: true,
      message: "Summary updated successfully",
      data: summary
    });
  } catch (error) {
    console.error("Error updating summary:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update summary",
      error: error.message
    });
  }
};

// DELETE /api/summary - Delete summary
exports.deleteSummary = async (req, res) => {
  try {
    const summary = await Summary.findOne();
    
    if (!summary) {
      return res.status(404).json({
        success: false,
        message: "Summary not found"
      });
    }

    await Summary.deleteOne({ _id: summary._id });

    res.status(200).json({
      success: true,
      message: "Summary deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting summary:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete summary",
      error: error.message
    });
  }
};

// PUT /api/summary/section/:sectionIndex - Update specific section
exports.updateSection = async (req, res) => {
  try {
    const { sectionIndex } = req.params;
    const { className, heading, paragraphs, list } = req.body;

    const summary = await Summary.findOne();
    if (!summary) {
      return res.status(404).json({
        success: false,
        message: "Summary not found"
      });
    }

    if (sectionIndex < 0 || sectionIndex >= summary.sections.length) {
      return res.status(400).json({
        success: false,
        message: "Invalid section index"
      });
    }

    // Update section fields
    if (className) summary.sections[sectionIndex].className = className;
    if (heading) summary.sections[sectionIndex].heading = heading;
    if (paragraphs) summary.sections[sectionIndex].paragraphs = paragraphs;
    if (list !== undefined) summary.sections[sectionIndex].list = list;

    await summary.save();

    res.status(200).json({
      success: true,
      message: "Section updated successfully",
      data: summary.sections[sectionIndex]
    });
  } catch (error) {
    console.error("Error updating section:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update section",
      error: error.message
    });
  }
};

// POST /api/summary/section/:sectionIndex/paragraph - Add paragraph to section
exports.addParagraph = async (req, res) => {
  try {
    const { sectionIndex } = req.params;
    const { english = "", hindi = "" } = req.body;

    const summary = await Summary.findOne();
    if (!summary) {
      return res.status(404).json({
        success: false,
        message: "Summary not found"
      });
    }

    if (sectionIndex < 0 || sectionIndex >= summary.sections.length) {
      return res.status(400).json({
        success: false,
        message: "Invalid section index"
      });
    }

    // Add new paragraph
    summary.sections[sectionIndex].paragraphs.push({ english, hindi });
    await summary.save();

    res.status(201).json({
      success: true,
      message: "Paragraph added successfully",
      data: summary.sections[sectionIndex]
    });
  } catch (error) {
    console.error("Error adding paragraph:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add paragraph",
      error: error.message
    });
  }
};

// DELETE /api/summary/section/:sectionIndex/paragraph/:paraIndex - Remove paragraph
exports.removeParagraph = async (req, res) => {
  try {
    const { sectionIndex, paraIndex } = req.params;

    const summary = await Summary.findOne();
    if (!summary) {
      return res.status(404).json({
        success: false,
        message: "Summary not found"
      });
    }

    if (sectionIndex < 0 || sectionIndex >= summary.sections.length) {
      return res.status(400).json({
        success: false,
        message: "Invalid section index"
      });
    }

    const section = summary.sections[sectionIndex];
    if (paraIndex < 0 || paraIndex >= section.paragraphs.length) {
      return res.status(400).json({
        success: false,
        message: "Invalid paragraph index"
      });
    }

    if (section.paragraphs.length <= 1) {
      return res.status(400).json({
        success: false,
        message: "Cannot remove the last paragraph"
      });
    }

    // Remove paragraph
    section.paragraphs.splice(paraIndex, 1);
    await summary.save();

    res.status(200).json({
      success: true,
      message: "Paragraph removed successfully",
      data: section
    });
  } catch (error) {
    console.error("Error removing paragraph:", error);
    res.status(500).json({
      success: false,
      message: "Failed to remove paragraph",
      error: error.message
    });
  }
};

// POST /api/summary/section/:sectionIndex/list-item - Add list item to section
exports.addListItem = async (req, res) => {
  try {
    const { sectionIndex } = req.params;
    const { english = "", hindi = "" } = req.body;

    const summary = await Summary.findOne();
    if (!summary) {
      return res.status(404).json({
        success: false,
        message: "Summary not found"
      });
    }

    if (sectionIndex < 0 || sectionIndex >= summary.sections.length) {
      return res.status(400).json({
        success: false,
        message: "Invalid section index"
      });
    }

    // Initialize list array if it doesn't exist
    if (!summary.sections[sectionIndex].list) {
      summary.sections[sectionIndex].list = [];
    }

    // Add new list item
    summary.sections[sectionIndex].list.push({ english, hindi });
    await summary.save();

    res.status(201).json({
      success: true,
      message: "List item added successfully",
      data: summary.sections[sectionIndex]
    });
  } catch (error) {
    console.error("Error adding list item:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add list item",
      error: error.message
    });
  }
};

// DELETE /api/summary/section/:sectionIndex/list-item/:itemIndex - Remove list item
exports.removeListItem = async (req, res) => {
  try {
    const { sectionIndex, itemIndex } = req.params;

    const summary = await Summary.findOne();
    if (!summary) {
      return res.status(404).json({
        success: false,
        message: "Summary not found"
      });
    }

    if (sectionIndex < 0 || sectionIndex >= summary.sections.length) {
      return res.status(400).json({
        success: false,
        message: "Invalid section index"
      });
    }

    const section = summary.sections[sectionIndex];
    if (!section.list || itemIndex < 0 || itemIndex >= section.list.length) {
      return res.status(400).json({
        success: false,
        message: "Invalid list item index"
      });
    }

    // Remove list item
    section.list.splice(itemIndex, 1);
    await summary.save();

    res.status(200).json({
      success: true,
      message: "List item removed successfully",
      data: section
    });
  } catch (error) {
    console.error("Error removing list item:", error);
    res.status(500).json({
      success: false,
      message: "Failed to remove list item",
      error: error.message
    });
  }
};

// POST /api/summary/import - Import summary data
exports.importSummary = async (req, res) => {
  try {
    const { sections, highlight } = req.body;

    if (!sections || !Array.isArray(sections)) {
      return res.status(400).json({
        success: false,
        message: "Valid sections array is required"
      });
    }

    // Delete existing summary
    await Summary.deleteMany({});

    // Create new summary with imported data
    const summary = new Summary({
      sections,
      highlight: highlight || { english: "", hindi: "" }
    });

    await summary.save();

    res.status(201).json({
      success: true,
      message: "Summary imported successfully",
      data: summary
    });
  } catch (error) {
    console.error("Error importing summary:", error);
    res.status(500).json({
      success: false,
      message: "Failed to import summary",
      error: error.message
    });
  }
};

// GET /api/summary/export - Export summary data
exports.exportSummary = async (req, res) => {
  try {
    const summary = await Summary.findOne();
    
    if (!summary) {
      return res.status(404).json({
        success: false,
        message: "No summary data to export"
      });
    }

    // Create export object without MongoDB metadata
    const exportData = {
      sections: summary.sections.map(section => ({
        className: section.className,
        heading: section.heading,
        paragraphs: section.paragraphs,
        list: section.list || []
      })),
      highlight: summary.highlight,
      exportedAt: new Date().toISOString(),
      version: "1.0"
    };

    res.status(200).json({
      success: true,
      message: "Summary exported successfully",
      data: exportData
    });
  } catch (error) {
    console.error("Error exporting summary:", error);
    res.status(500).json({
      success: false,
      message: "Failed to export summary",
      error: error.message
    });
  }
};

// GET /api/summary/history - Get edit history (simplified version)
exports.getSummaryHistory = async (req, res) => {
  try {
    // Note: For full history tracking, you'd need a separate History model
    // This is a simplified version that returns the current summary with timestamps
    const summary = await Summary.findOne();
    
    if (!summary) {
      return res.status(404).json({
        success: false,
        message: "Summary not found"
      });
    }

    res.status(200).json({
      success: true,
      data: {
        current: summary,
        lastUpdated: summary.updatedAt,
        createdAt: summary.createdAt
      }
    });
  } catch (error) {
    console.error("Error fetching history:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch history",
      error: error.message
    });
  }
};