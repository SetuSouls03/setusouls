const CharanPoojaContent = require("../models/charanPoojaContent");
const mongoose = require("mongoose");

// GET Charan Pooja content
exports.getCharanPoojaContent = async (req, res) => {
  try {
    let data = await CharanPoojaContent.findOne();
    
    // If no data exists, return empty structure
    if (!data) {
      return res.json({
        sectionsGrouped: []
      });
    }
    
    // Convert to plain object
    const plainData = data.toObject ? data.toObject() : data;
    
    // Clean up MongoDB fields
    delete plainData.__v;
    if (plainData.createdAt) delete plainData.createdAt;
    if (plainData.updatedAt) delete plainData.updatedAt;
    
    res.json(plainData);
  } catch (err) {
    console.error("GET Charan Pooja Error:", err);
    res.status(500).json({ 
      message: "Failed to load Charan Pooja content",
      error: err.message 
    });
  }
};

// UPDATE Charan Pooja content (MAIN UPDATE ENDPOINT)
exports.updateCharanPoojaContent = async (req, res) => {
  try {
    const updatedData = req.body;
    
    console.log("📥 Received Charan Pooja update:", updatedData);
    
    // CHANGE THIS: Check for "sections" instead of "sectionsGrouped"
    if (!updatedData.sections || !Array.isArray(updatedData.sections)) {
      return res.status(400).json({ 
        message: "Invalid data: 'sections' array is required" 
      });
    }

    // Find existing document
    let data = await CharanPoojaContent.findOne();
    
    if (!data) {
      // Create new document if doesn't exist
      data = new CharanPoojaContent({
        sections: updatedData.sections  // <-- CHANGE THIS
      });
    } else {
      // Update existing document
      data.sections = updatedData.sections;  // <-- CHANGE THIS
    }
    
    // Save to database
    await data.save();
    
    // Prepare response
    const responseData = data.toObject ? data.toObject() : data;
    delete responseData.__v;
    if (responseData.createdAt) delete responseData.createdAt;
    if (responseData.updatedAt) delete responseData.updatedAt;
    
    res.json({
      message: "✅ Charan Pooja content updated successfully",
      data: responseData,
      timestamp: new Date()
    });
    
  } catch (err) {
    console.error("❌ UPDATE Charan Pooja Error:", err);
    res.status(500).json({ 
      message: "Failed to update Charan Pooja content",
      error: err.message
    });
  }
};

// ADD new group to Charan Pooja
exports.addGroup = async (req, res) => {
  try {
    const newGroup = req.body;
    
    // Determine group type based on content
    const groupToAdd = {};
    
    // Copy all properties from request
    if (newGroup.title) {
      groupToAdd.title = {
        hi: newGroup.title.hi || "",
        en: newGroup.title.en || ""
      };
    }
    
    if (newGroup.paragraph) {
      groupToAdd.paragraph = {
        hi: newGroup.paragraph.hi || "",
        en: newGroup.paragraph.en || ""
      };
    }
    
    if (newGroup.summary) {
      groupToAdd.summary = {
        title: {
          hi: newGroup.summary.title?.hi || "",
          en: newGroup.summary.title?.en || ""
        },
        points: {
          hi: Array.isArray(newGroup.summary.points?.hi) ? newGroup.summary.points.hi : [],
          en: Array.isArray(newGroup.summary.points?.en) ? newGroup.summary.points.en : []
        }
      };
    }
    
    if (newGroup.subheading) {
      groupToAdd.subheading = {
        hi: newGroup.subheading.hi || "",
        en: newGroup.subheading.en || ""
      };
    }
    
    if (newGroup.detailedParagraph) {
      groupToAdd.detailedParagraph = {
        hi: newGroup.detailedParagraph.hi || "",
        en: newGroup.detailedParagraph.en || ""
      };
    }
    
    if (newGroup.quote) {
      groupToAdd.quote = {
        hi: newGroup.quote.hi || "",
        en: newGroup.quote.en || ""
      };
    }
    
    // Update database
    const data = await CharanPoojaContent.findOneAndUpdate(
      {},
      { 
        $push: { sectionsGrouped: groupToAdd }
      },
      { 
        new: true,
        upsert: true
      }
    );
    
    // Prepare response
    const responseData = data.toObject ? data.toObject() : data;
    delete responseData.__v;
    if (responseData.createdAt) delete responseData.createdAt;
    if (responseData.updatedAt) delete responseData.updatedAt;
    
    res.json({
      message: "✅ Group added successfully",
      data: responseData
    });
    
  } catch (err) {
    console.error("❌ ADD Group Error:", err);
    res.status(500).json({ 
      message: "Failed to add group",
      error: err.message 
    });
  }
};

// DELETE group from Charan Pooja
exports.deleteGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    
    // Validate MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(groupId)) {
      return res.status(400).json({ 
        message: "Invalid group ID format" 
      });
    }

    // Remove group from array
    const data = await CharanPoojaContent.findOneAndUpdate(
      {},
      { 
        $pull: { sectionsGrouped: { _id: groupId } }
      },
      { new: true }
    );

    if (!data) {
      return res.status(404).json({ 
        message: "Document not found" 
      });
    }

    // Prepare response
    const responseData = data.toObject ? data.toObject() : data;
    delete responseData.__v;
    if (responseData.createdAt) delete responseData.createdAt;
    if (responseData.updatedAt) delete responseData.updatedAt;

    res.json({
      message: "✅ Group deleted successfully",
      data: responseData
    });
    
  } catch (err) {
    console.error("❌ DELETE Group Error:", err);
    res.status(500).json({ 
      message: "Failed to delete group",
      error: err.message 
    });
  }
};

// Get Charan Pooja by ID (optional - for specific document)
exports.getCharanPoojaById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        message: "Invalid ID format" 
      });
    }

    const data = await CharanPoojaContent.findById(id);
    
    if (!data) {
      return res.status(404).json({ 
        message: "Charan Pooja content not found" 
      });
    }

    const responseData = data.toObject ? data.toObject() : data;
    delete responseData.__v;
    if (responseData.createdAt) delete responseData.createdAt;
    if (responseData.updatedAt) delete responseData.updatedAt;

    res.json(responseData);
    
  } catch (err) {
    console.error("❌ GET by ID Error:", err);
    res.status(500).json({ 
      message: "Server Error",
      error: err.message 
    });
  }
};