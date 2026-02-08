const Page = require("../models/Page");

// GET all pages (for admin dashboard)
exports.getAllPages = async (req, res) => {
  try {
    const pages = await Page.find({}, 'slug title sections createdAt updatedAt');
    
    res.status(200).json({
      success: true,
      count: pages.length,
      data: pages
    });
  } catch (error) {
    console.error("Error fetching pages:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch pages",
      error: error.message
    });
  }
};

// GET page by slug
exports.getPageBySlug = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: `Page with slug '${req.params.slug}' not found`
      });
    }

    res.status(200).json({
      success: true,
      data: page
    });
  } catch (error) {
    console.error(`Error fetching page ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

// POST create new page
exports.createPage = async (req, res) => {
  try {
    const { slug, sections, summary } = req.body;

    // Validation
    if (!slug) {
      return res.status(400).json({
        success: false,
        message: "Slug is required"
      });
    }

    // Check if page already exists
    const existingPage = await Page.findOne({ slug });
    if (existingPage) {
      return res.status(400).json({
        success: false,
        message: `Page with slug '${slug}' already exists`
      });
    }

    // Validate sections
    if (sections && Array.isArray(sections)) {
      for (const section of sections) {
        if (!section.id || !section.image) {
          return res.status(400).json({
            success: false,
            message: "Each section must have 'id' and 'image' fields"
          });
        }
      }
    }

    const page = new Page({
      slug,
      sections: sections || [],
      summary: summary || { en: [], hi: [] }
    });

    await page.save();

    res.status(201).json({
      success: true,
      message: `Page '${slug}' created successfully`,
      data: page
    });
  } catch (error) {
    console.error("Error creating page:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create page",
      error: error.message
    });
  }
};

// PUT update entire page
exports.updatePage = async (req, res) => {
  try {
    const { slug } = req.params;
    const { sections, summary } = req.body;

    let page = await Page.findOne({ slug });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: `Page with slug '${slug}' not found`
      });
    }

    // Validate sections if provided
    if (sections && Array.isArray(sections)) {
      for (const section of sections) {
        if (!section.id || !section.image) {
          return res.status(400).json({
            success: false,
            message: "Each section must have 'id' and 'image' fields"
          });
        }
      }
      page.sections = sections;
    }

    // Update summary if provided
    if (summary) {
      page.summary = summary;
    }

    page.updatedAt = new Date();
    await page.save();

    res.status(200).json({
      success: true,
      message: `Page '${slug}' updated successfully`,
      data: page
    });
  } catch (error) {
    console.error(`Error updating page ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to update page",
      error: error.message
    });
  }
};

// DELETE page
exports.deletePage = async (req, res) => {
  try {
    const { slug } = req.params;

    const page = await Page.findOne({ slug });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: `Page with slug '${slug}' not found`
      });
    }

    await Page.deleteOne({ slug });

    res.status(200).json({
      success: true,
      message: `Page '${slug}' deleted successfully`
    });
  } catch (error) {
    console.error(`Error deleting page ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to delete page",
      error: error.message
    });
  }
};

// PUT update only sections
exports.updatePageSections = async (req, res) => {
  try {
    const { slug } = req.params;
    const { sections } = req.body;

    if (!sections || !Array.isArray(sections)) {
      return res.status(400).json({
        success: false,
        message: "Sections array is required"
      });
    }

    // Validate sections
    for (const section of sections) {
      if (!section.id || !section.image) {
        return res.status(400).json({
          success: false,
          message: "Each section must have 'id' and 'image' fields"
        });
      }
    }

    const page = await Page.findOne({ slug });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: `Page with slug '${slug}' not found`
      });
    }

    page.sections = sections;
    page.updatedAt = new Date();
    await page.save();

    res.status(200).json({
      success: true,
      message: `Sections updated for page '${slug}'`,
      data: page.sections
    });
  } catch (error) {
    console.error(`Error updating sections for ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to update sections",
      error: error.message
    });
  }
};

// POST add new section to page
exports.addPageSection = async (req, res) => {
  try {
    const { slug } = req.params;
    const { id, image, title, description } = req.body;

    if (!id || !image) {
      return res.status(400).json({
        success: false,
        message: "Section 'id' and 'image' are required"
      });
    }

    const page = await Page.findOne({ slug });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: `Page with slug '${slug}' not found`
      });
    }

    // Check if section with same ID already exists
    const existingSection = page.sections.find(s => s.id === id);
    if (existingSection) {
      return res.status(400).json({
        success: false,
        message: `Section with id '${id}' already exists`
      });
    }

    const newSection = {
      id,
      image,
      title: title || { en: "", hi: "" },
      description: description || { en: "", hi: "" }
    };

    page.sections.push(newSection);
    page.updatedAt = new Date();
    await page.save();

    res.status(201).json({
      success: true,
      message: `Section added to page '${slug}'`,
      data: newSection
    });
  } catch (error) {
    console.error(`Error adding section to ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to add section",
      error: error.message
    });
  }
};

// DELETE remove section from page
exports.removePageSection = async (req, res) => {
  try {
    const { slug, sectionId } = req.params;

    const page = await Page.findOne({ slug });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: `Page with slug '${slug}' not found`
      });
    }

    const sectionIndex = page.sections.findIndex(s => s.id === sectionId);
    if (sectionIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Section with id '${sectionId}' not found`
      });
    }

    if (page.sections.length <= 1) {
      return res.status(400).json({
        success: false,
        message: "Cannot remove the last section"
      });
    }

    page.sections.splice(sectionIndex, 1);
    page.updatedAt = new Date();
    await page.save();

    res.status(200).json({
      success: true,
      message: `Section '${sectionId}' removed from page '${slug}'`,
      data: page.sections
    });
  } catch (error) {
    console.error(`Error removing section from ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to remove section",
      error: error.message
    });
  }
};

// PUT update only summary
exports.updatePageSummary = async (req, res) => {
  try {
    const { slug } = req.params;
    const { summary } = req.body;

    if (!summary || typeof summary !== 'object') {
      return res.status(400).json({
        success: false,
        message: "Summary object is required"
      });
    }

    const page = await Page.findOne({ slug });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: `Page with slug '${slug}' not found`
      });
    }

    page.summary = summary;
    page.updatedAt = new Date();
    await page.save();

    res.status(200).json({
      success: true,
      message: `Summary updated for page '${slug}'`,
      data: page.summary
    });
  } catch (error) {
    console.error(`Error updating summary for ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to update summary",
      error: error.message
    });
  }
};

// POST add summary item
exports.addPageSummaryItem = async (req, res) => {
  try {
    const { slug } = req.params;
    const { text, language = 'en' } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Summary text is required"
      });
    }

    if (!['en', 'hi'].includes(language)) {
      return res.status(400).json({
        success: false,
        message: "Language must be 'en' or 'hi'"
      });
    }

    const page = await Page.findOne({ slug });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: `Page with slug '${slug}' not found`
      });
    }

    if (!page.summary[language]) {
      page.summary[language] = [];
    }

    page.summary[language].push(text);
    page.updatedAt = new Date();
    await page.save();

    res.status(201).json({
      success: true,
      message: `Summary item added to page '${slug}' in ${language}`,
      data: page.summary[language]
    });
  } catch (error) {
    console.error(`Error adding summary item to ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to add summary item",
      error: error.message
    });
  }
};

// DELETE remove summary item
exports.removePageSummaryItem = async (req, res) => {
  try {
    const { slug, index } = req.params;
    const { language = 'en' } = req.query;

    if (!['en', 'hi'].includes(language)) {
      return res.status(400).json({
        success: false,
        message: "Language must be 'en' or 'hi'"
      });
    }

    const pageIndex = parseInt(index);
    if (isNaN(pageIndex) || pageIndex < 0) {
      return res.status(400).json({
        success: false,
        message: "Valid index is required"
      });
    }

    const page = await Page.findOne({ slug });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: `Page with slug '${slug}' not found`
      });
    }

    if (!page.summary[language] || pageIndex >= page.summary[language].length) {
      return res.status(404).json({
        success: false,
        message: `Summary item at index ${pageIndex} not found for language ${language}`
      });
    }

    if (page.summary[language].length <= 1) {
      return res.status(400).json({
        success: false,
        message: "Cannot remove the last summary item"
      });
    }

    page.summary[language].splice(pageIndex, 1);
    page.updatedAt = new Date();
    await page.save();

    res.status(200).json({
      success: true,
      message: `Summary item removed from page '${slug}'`,
      data: page.summary[language]
    });
  } catch (error) {
    console.error(`Error removing summary item from ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to remove summary item",
      error: error.message
    });
  }
};

// POST import page data
exports.importPageData = async (req, res) => {
  try {
    const { slug } = req.params;
    const { sections, summary } = req.body;

    if (!sections || !Array.isArray(sections)) {
      return res.status(400).json({
        success: false,
        message: "Valid sections array is required"
      });
    }

    // Validate sections
    for (const section of sections) {
      if (!section.id || !section.image) {
        return res.status(400).json({
          success: false,
          message: "Each section must have 'id' and 'image' fields"
        });
      }
    }

    let page = await Page.findOne({ slug });
    
    if (!page) {
      page = new Page({
        slug,
        sections,
        summary: summary || { en: [], hi: [] }
      });
    } else {
      page.sections = sections;
      if (summary) {
        page.summary = summary;
      }
    }

    page.updatedAt = new Date();
    await page.save();

    res.status(200).json({
      success: true,
      message: `Page data imported for '${slug}'`,
      data: page
    });
  } catch (error) {
    console.error(`Error importing data for ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to import page data",
      error: error.message
    });
  }
};

// GET export page data
exports.exportPageData = async (req, res) => {
  try {
    const { slug } = req.params;

    const page = await Page.findOne({ slug });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: `Page with slug '${slug}' not found`
      });
    }

    // Create clean export object without MongoDB metadata
    const exportData = {
      slug: page.slug,
      sections: page.sections.map(section => ({
        id: section.id,
        image: section.image,
        title: section.title,
        description: section.description
      })),
      summary: page.summary,
      exportedAt: new Date().toISOString(),
      version: "1.0"
    };

    res.status(200).json({
      success: true,
      message: `Page '${slug}' exported successfully`,
      data: exportData
    });
  } catch (error) {
    console.error(`Error exporting page ${req.params.slug}:`, error);
    res.status(500).json({
      success: false,
      message: "Failed to export page",
      error: error.message
    });
  }
};