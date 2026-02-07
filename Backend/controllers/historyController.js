const HistoryContent = require("../models/historyContent");
const mongoose = require("mongoose");

// GET history content
exports.getHistoryContent = async (req, res) => {
  try {
    let data = await HistoryContent.findOne();
    
    // If no data exists, create default structure
    if (!data) {
      data = new HistoryContent({
        sections: [
          {
            heading: {
              hi: "रामायण काल",
              en: "Ramayana Era"
            },
            content: {
              hi: "सीता एलिया श्री लंका में स्थित वह स्थान है जहाँ रावण ने माता सीता को बंधक बनाकर रखा था।",
              en: "Sita Eliya is a place located in Sri Lanka where Ravana had kept Mother Sita captive."
            }
          }
        ]
      });
      await data.save();
    }
    
    // Convert to plain object
    const plainData = data.toObject ? data.toObject() : data;
    
    // Remove MongoDB internal fields if not needed
    delete plainData.__v;
    
    res.json(plainData);
  } catch (err) {
    console.error("GET History Error:", err);
    res.status(500).json({ 
      message: "Server Error",
      error: err.message 
    });
  }
};

// UPDATE history content
exports.updateHistoryContent = async (req, res) => {
  try {
    const updatedData = req.body;
    
    console.log("Received update data:", JSON.stringify(updatedData, null, 2)); // Debug
    
    // Validate required structure
    if (!updatedData.sections || !Array.isArray(updatedData.sections)) {
      return res.status(400).json({ 
        message: "Invalid data structure: 'sections' array is required" 
      });
    }

    // Prepare data for update - preserve _id fields
    const updateData = {
      sections: updatedData.sections.map(section => {
        // Create a new section object with proper structure
        const cleanSection = {
          heading: {
            hi: section.heading?.hi || "",
            en: section.heading?.en || ""
          },
          content: {
            hi: section.content?.hi || "",
            en: section.content?.en || ""
          }
        };
        
        // Preserve MongoDB _id if it exists in the incoming data
        if (section._id && mongoose.Types.ObjectId.isValid(section._id)) {
          cleanSection._id = section._id;
        }
        
        return cleanSection;
      })
    };

    console.log("Prepared update data:", JSON.stringify(updateData, null, 2)); // Debug

    // Use findOneAndUpdate with $set to properly update nested arrays
    const result = await HistoryContent.findOneAndUpdate(
      {},
      { $set: updateData },
      { 
        new: true,
        upsert: true,
        runValidators: true
      }
    );

    if (!result) {
      throw new Error("Failed to update document");
    }

    const responseData = result.toObject ? result.toObject() : result;
    delete responseData.__v;

    res.json({
      message: "History content updated successfully",
      data: responseData,
      timestamp: new Date()
    });
    
  } catch (err) {
    console.error("UPDATE History Error:", err);
    res.status(500).json({ 
      message: "Failed to update history content",
      error: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
};

// SIMPLIFIED VERSION - Alternative if above doesn't work
exports.updateHistoryContentSimple = async (req, res) => {
  try {
    const updatedData = req.body;
    
    // Find existing document
    let data = await HistoryContent.findOne();
    
    if (!data) {
      // Create new if doesn't exist
      data = new HistoryContent(updatedData);
    } else {
      // Update existing
      data.sections = updatedData.sections.map(section => ({
        heading: {
          hi: section.heading?.hi || "",
          en: section.heading?.en || ""
        },
        content: {
          hi: section.content?.hi || "",
          en: section.content?.en || ""
        }
      }));
    }
    
    await data.save();
    
    const responseData = data.toObject ? data.toObject() : data;
    delete responseData.__v;
    
    res.json({
      message: "History content updated successfully",
      data: responseData,
      timestamp: new Date()
    });
    
  } catch (err) {
    console.error("UPDATE History Error:", err);
    res.status(500).json({ 
      message: "Failed to update history content",
      error: err.message 
    });
  }
};

// ADD new section
exports.addSection = async (req, res) => {
  try {
    const newSection = req.body;
    
    const data = await HistoryContent.findOneAndUpdate(
      {},
      { 
        $push: { 
          sections: {
            heading: {
              hi: newSection.heading?.hi || "",
              en: newSection.heading?.en || ""
            },
            content: {
              hi: newSection.content?.hi || "",
              en: newSection.content?.en || ""
            }
          }
        }
      },
      { 
        new: true,
        upsert: true
      }
    );

    const responseData = data.toObject ? data.toObject() : data;
    delete responseData.__v;

    res.json({
      message: "Section added successfully",
      data: responseData
    });
  } catch (err) {
    console.error("ADD Section Error:", err);
    res.status(500).json({ 
      message: "Failed to add section",
      error: err.message 
    });
  }
};

// DELETE section
exports.deleteSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(sectionId)) {
      return res.status(400).json({ 
        message: "Invalid section ID format" 
      });
    }

    const data = await HistoryContent.findOneAndUpdate(
      {},
      { 
        $pull: { sections: { _id: sectionId } }
      },
      { new: true }
    );

    if (!data) {
      return res.status(404).json({ 
        message: "Document not found" 
      });
    }

    const responseData = data.toObject ? data.toObject() : data;
    delete responseData.__v;

    res.json({
      message: "Section deleted successfully",
      data: responseData
    });
  } catch (err) {
    console.error("DELETE Section Error:", err);
    res.status(500).json({ 
      message: "Failed to delete section",
      error: err.message 
    });
  }
};

// Get single history document by ID (optional)
exports.getHistoryById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ 
        message: "Invalid ID format" 
      });
    }

    const data = await HistoryContent.findById(id);
    
    if (!data) {
      return res.status(404).json({ 
        message: "History content not found" 
      });
    }

    const responseData = data.toObject ? data.toObject() : data;
    delete responseData.__v;

    res.json(responseData);
  } catch (err) {
    console.error("GET History by ID Error:", err);
    res.status(500).json({ 
      message: "Server Error",
      error: err.message 
    });
  }
};