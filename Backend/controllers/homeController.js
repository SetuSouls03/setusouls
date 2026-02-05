// controllers/homeController.js - ADD THIS FUNCTION
const HomeContent = require("../models/homeContent");

// ✅ Existing GET function (keep this)
exports.getHomeContent = async (req, res) => {
  try {
    const data = await HomeContent.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ NEW: ADD UPDATE FUNCTION for CMS
exports.updateHomeContent = async (req, res) => {
  try {
    console.log("📝 CMS Update Request Received");
    
    const { 
      title, 
      subtitle, 
      infoBlocks, 
      mantras,
      callToAction  // This will map to 'cta' in your model
    } = req.body;

    // ✅ Simple validation
    if (!title || !subtitle || !infoBlocks || !mantras) {
      return res.status(400).json({ 
        success: false,
        message: "Missing required fields" 
      });
    }

    // ✅ Prepare update data matching your model
    const updateData = {
      title,
      subtitle,
      infoBlocks: Array.isArray(infoBlocks) ? infoBlocks : [],
      mantras: Array.isArray(mantras) ? mantras : [],
      cta: callToAction || "Begin Your Spiritual Journey Today"
    };

    console.log("📦 Updating with data:", updateData);

    // ✅ Find and update (upsert: create if doesn't exist)
    const updatedContent = await HomeContent.findOneAndUpdate(
      {}, // Find first document
      updateData,
      { 
        new: true,      // Return updated document
        upsert: true,   // Create if doesn't exist
        runValidators: true // Validate against schema
      }
    );

    console.log("✅ Update successful:", updatedContent._id);

    // ✅ Return success response
    res.json({
      success: true,
      message: "Home page updated successfully",
      data: updatedContent
    });

  } catch (error) {
    console.error("❌ Update Error:", error);
    res.status(500).json({ 
      success: false,
      message: "Failed to update home page",
      error: error.message 
    });
  }
};