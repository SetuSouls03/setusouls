const express = require("express");
const router = express.Router();
const PrayerContent = require("../models/prayerContent");

// Debug middleware to log all requests
router.use((req, res, next) => {
  console.log(`[PRAYER API] ${new Date().toISOString()} - ${req.method} ${req.path}`);
  if (req.method === 'PUT' || req.method === 'POST') {
    console.log(`[PRAYER API] Request body has ${Object.keys(req.body).length} keys`);
    if (req.body.sections) {
      console.log(`[PRAYER API] Sections count: ${req.body.sections.length}`);
    }
  }
  next();
});

// GET all prayer content
router.get("/", async (req, res) => {
  try {
    console.log("[PRAYER API] GET request received");
    
    let data = await PrayerContent.findOne();
    
    if (!data) {
      console.log("[PRAYER API] No data found, creating default");
      data = new PrayerContent({
        sections: [
          {
            heading: { hi: "प्रार्थना", en: "Prayer" },
            subheading: { hi: "दैवीय प्रार्थना", en: "Divine Prayer" }
          }
        ]
      });
      await data.save();
    }
    
    console.log(`[PRAYER API] GET successful, returning ${data.sections?.length || 0} sections`);
    res.json(data);
  } catch (err) {
    console.error("[PRAYER API] GET Error:", err);
    res.status(500).json({ 
      message: "Server Error",
      error: err.message 
    });
  }
});

// UPDATE prayer content (PUT)
router.put("/", async (req, res) => {
  try {
    console.log("[PRAYER API] PUT request received");
    console.log("[PRAYER API] Full request body:", JSON.stringify(req.body, null, 2));
    
    const updatedData = req.body;
    
    if (!updatedData.sections || !Array.isArray(updatedData.sections)) {
      console.log("[PRAYER API] PUT Error: Invalid data structure");
      return res.status(400).json({ 
        message: "Invalid data structure: 'sections' array is required" 
      });
    }

    console.log(`[PRAYER API] Processing ${updatedData.sections.length} sections`);
    
    const updateData = {
      sections: updatedData.sections.map((section, index) => ({
        heading: {
          hi: section.heading?.hi || "",
          en: section.heading?.en || ""
        },
        subheading: {
          hi: section.subheading?.hi || "",
          en: section.subheading?.en || ""
        }
      }))
    };

    let data = await PrayerContent.findOne();
    console.log(`[PRAYER API] Found existing data: ${!!data}`);
    
    if (!data) {
      data = new PrayerContent(updateData);
      console.log("[PRAYER API] Created new document");
    } else {
      data.sections = updateData.sections;
      console.log("[PRAYER API] Updated existing document");
    }
    
    await data.save();
    console.log("[PRAYER API] Save successful");
    
    res.json({
      success: true,
      message: "Prayer content updated successfully",
      data: data,
      timestamp: new Date()
    });
    
  } catch (err) {
    console.error("[PRAYER API] PUT Error:", err);
    console.error("[PRAYER API] Error stack:", err.stack);
    res.status(500).json({ 
      success: false,
      message: "Failed to update prayer content",
      error: err.message
    });
  }
});

// Test endpoint to verify routes are registered
router.get("/test", (req, res) => {
  console.log("[PRAYER API] Test endpoint called");
  res.json({
    success: true,
    message: "Prayer API routes are registered!",
    timestamp: new Date(),
    availableRoutes: [
      { method: "GET", path: "/api/prayer" },
      { method: "PUT", path: "/api/prayer" },
      { method: "GET", path: "/api/prayer/test" }
    ]
  });
});

module.exports = router;