const ImportantNote = require("../models/ImportantNote");

// GET all notes for a specific language
exports.getImportantNotes = async (req, res) => {
  try {
    const lang = req.query.lang || "hi";
    const notes = await ImportantNote.find({ language: lang }).sort({ 
      section: 1,
      createdAt: 1 
    });
    res.status(200).json(notes);
  } catch (err) {
    console.error("Get Important Notes Error:", err);
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch important notes", 
      error: err.message 
    });
  }
};

// GET single note by ID
exports.getImportantNoteById = async (req, res) => {
  try {
    const note = await ImportantNote.findById(req.params.id);
    
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Important note not found"
      });
    }
    
    res.status(200).json({
      success: true,
      data: note
    });
  } catch (err) {
    console.error("Get Note by ID Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch note",
      error: err.message
    });
  }
};

// POST create new important note
exports.createImportantNote = async (req, res) => {
  try {
    const { language, section, heading, subHeading, body, buttons } = req.body;
    
    // Validation
    if (!language || !section) {
      return res.status(400).json({
        success: false,
        message: "Language and section are required fields"
      });
    }
    
    // Check if section already exists for this language
    const existingNote = await ImportantNote.findOne({ 
      language, 
      section 
    });
    
    if (existingNote) {
      return res.status(400).json({
        success: false,
        message: `Section '${section}' already exists for language '${language}'`
      });
    }
    
    const newNote = new ImportantNote({
      language,
      section,
      heading: heading || "",
      subHeading: subHeading || "",
      body: body || "",
      buttons: buttons || []
    });
    
    const savedNote = await newNote.save();
    
    res.status(201).json({
      success: true,
      message: "Important note created successfully",
      data: savedNote
    });
  } catch (err) {
    console.error("Create Important Note Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to create important note",
      error: err.message
    });
  }
};

// PUT update specific important note
exports.updateImportantNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, subHeading, body, buttons, section } = req.body;
    
    // Check if note exists
    const existingNote = await ImportantNote.findById(id);
    
    if (!existingNote) {
      return res.status(404).json({
        success: false,
        message: "Important note not found"
      });
    }
    
    // If section is being updated, check for duplicates
    if (section && section !== existingNote.section) {
      const duplicate = await ImportantNote.findOne({
        language: existingNote.language,
        section,
        _id: { $ne: id }
      });
      
      if (duplicate) {
        return res.status(400).json({
          success: false,
          message: `Section '${section}' already exists for language '${existingNote.language}'`
        });
      }
    }
    
    // Prepare update data
    const updateData = {};
    if (heading !== undefined) updateData.heading = heading;
    if (subHeading !== undefined) updateData.subHeading = subHeading;
    if (body !== undefined) updateData.body = body;
    if (buttons !== undefined) updateData.buttons = buttons;
    if (section !== undefined) updateData.section = section;
    
    const updatedNote = await ImportantNote.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    res.status(200).json({
      success: true,
      message: "Important note updated successfully",
      data: updatedNote
    });
  } catch (err) {
    console.error("Update Important Note Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to update important note",
      error: err.message
    });
  }
};

// DELETE remove important note
exports.deleteImportantNote = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if note exists
    const existingNote = await ImportantNote.findById(id);
    
    if (!existingNote) {
      return res.status(404).json({
        success: false,
        message: "Important note not found"
      });
    }
    
    // Check if this is the last section of its type
    const sectionType = existingNote.section.startsWith('content') ? 'content' : 'notes';
    const remainingSections = await ImportantNote.countDocuments({
      language: existingNote.language,
      section: new RegExp(`^${sectionType}`)
    });
    
    if (remainingSections <= 1) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete the last ${sectionType} section for language '${existingNote.language}'`
      });
    }
    
    await ImportantNote.findByIdAndDelete(id);
    
    res.status(200).json({
      success: true,
      message: "Important note deleted successfully"
    });
  } catch (err) {
    console.error("Delete Important Note Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to delete important note",
      error: err.message
    });
  }
};

// PUT bulk update all notes for a language (Used by CMS Save All)
exports.updateAllImportantNotes = async (req, res) => {
  try {
    const { lang } = req.query;
    const notesData = req.body; // Array of notes
    
    if (!lang) {
      return res.status(400).json({
        success: false,
        message: "Language parameter is required"
      });
    }
    
    if (!Array.isArray(notesData)) {
      return res.status(400).json({
        success: false,
        message: "Request body must be an array of notes"
      });
    }
    
    // Validate all notes have required fields
    for (const note of notesData) {
      if (!note.section) {
        return res.status(400).json({
          success: false,
          message: "All notes must have a section field"
        });
      }
    }
    
    // Delete existing notes for this language
    await ImportantNote.deleteMany({ language: lang });
    
    // Add language field to each note and save
    const notesWithLang = notesData.map(note => ({
      ...note,
      language: lang
    }));
    
    const savedNotes = await ImportantNote.insertMany(notesWithLang);
    
    res.status(200).json({
      success: true,
      message: `All notes for language '${lang}' updated successfully`,
      data: savedNotes,
      count: savedNotes.length
    });
  } catch (err) {
    console.error("Bulk Update Important Notes Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to update important notes",
      error: err.message
    });
  }
};

// POST import notes from JSON (bulk create/update)
exports.importImportantNotes = async (req, res) => {
  try {
    const { notes, language } = req.body;
    
    if (!notes || !Array.isArray(notes)) {
      return res.status(400).json({
        success: false,
        message: "Notes must be provided as an array"
      });
    }
    
    if (!language) {
      return res.status(400).json({
        success: false,
        message: "Language is required"
      });
    }
    
    // Validate each note
    const validNotes = [];
    const errors = [];
    
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      
      if (!note.section) {
        errors.push(`Note at index ${i} is missing 'section' field`);
        continue;
      }
      
      validNotes.push({
        language,
        section: note.section,
        heading: note.heading || "",
        subHeading: note.subHeading || "",
        body: note.body || "",
        buttons: note.buttons || []
      });
    }
    
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation errors found",
        errors
      });
    }
    
    // Delete existing notes for this language
    await ImportantNote.deleteMany({ language });
    
    // Insert new notes
    const importedNotes = await ImportantNote.insertMany(validNotes);
    
    res.status(201).json({
      success: true,
      message: `Successfully imported ${importedNotes.length} notes for language '${language}'`,
      data: importedNotes,
      count: importedNotes.length
    });
  } catch (err) {
    console.error("Import Important Notes Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to import important notes",
      error: err.message
    });
  }
};

// GET export notes for a specific language
exports.exportImportantNotes = async (req, res) => {
  try {
    const { lang } = req.params;
    
    const notes = await ImportantNote.find({ language: lang }).sort({ 
      section: 1,
      createdAt: 1 
    });
    
    // Remove MongoDB _id and timestamps for cleaner export
    const exportData = notes.map(note => ({
      section: note.section,
      heading: note.heading,
      subHeading: note.subHeading,
      body: note.body,
      buttons: note.buttons
    }));
    
    res.status(200).json({
      success: true,
      language: lang,
      count: exportData.length,
      data: exportData,
      exportedAt: new Date().toISOString()
    });
  } catch (err) {
    console.error("Export Important Notes Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to export important notes",
      error: err.message
    });
  }
};