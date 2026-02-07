const PrayerContent = require("../models/prayerContent");

// GET prayer content
exports.getPrayerContent = async (req, res) => {
  try {
    let data = await PrayerContent.findOne();
    
    if (!data) {
      data = new PrayerContent({
        sections: [
          {
            heading: {
              hi: "प्रार्थना",
              en: "Prayer"
            },
            subheading: {
              hi: "दैवीय प्रार्थना",
              en: "Divine Prayer"
            }
          }
        ]
      });
      await data.save();
    }
    
    res.json(data);
  } catch (err) {
    console.error("GET Prayer Error:", err);
    res.status(500).json({ 
      message: "Server Error",
      error: err.message 
    });
  }
};

// UPDATE prayer content (EXACT SAME PATTERN AS HISTORY)
exports.updatePrayerContent = async (req, res) => {
  try {
    const updatedData = req.body;
    
    // Validate structure
    if (!updatedData.sections || !Array.isArray(updatedData.sections)) {
      return res.status(400).json({ 
        message: "Invalid data structure: 'sections' array is required" 
      });
    }

    // Prepare data for update
    const updateData = {
      sections: updatedData.sections.map(section => ({
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

    // Update or create
    let data = await PrayerContent.findOne();
    
    if (!data) {
      data = new PrayerContent(updateData);
    } else {
      data.sections = updateData.sections;
    }
    
    await data.save();
    
    res.json({
      message: "Prayer content updated successfully",
      data: data,
      timestamp: new Date()
    });
    
  } catch (err) {
    console.error("UPDATE Prayer Error:", err);
    res.status(500).json({ 
      message: "Failed to update prayer content",
      error: err.message
    });
  }
};
