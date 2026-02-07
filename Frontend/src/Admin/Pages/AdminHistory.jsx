import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FaSave,
  FaEdit,
  FaEye,
  FaUndo,
  FaPlus,
  FaTrash,
  FaUpload,
  FaDownload,
  FaPalette,
  FaFont,
  FaHeading,
  FaParagraph,
  FaHistory as FaHistoryIcon,
  FaLanguage,
  FaGlobe,
  FaListOl,
  FaSort,
  FaCopy,
  FaSearch,
  FaArrowsAltH,
  FaClock,
  FaTimes,
  FaCheck,
  FaSpellCheck,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// Default data structure that matches YOUR model
const DEFAULT_HISTORY_DATA = {
  sections: [
    {
      heading: {
        hi: "हमारा इतिहास",
        en: "Our History"
      },
      content: {  // This is what your model has, not "subheading"
        hi: "श्री राम और श्री कृष्ण के प्राचीन युग से लेकर वर्तमान तक",
        en: "From ancient times of Sri Ram and Sri Krishna to the present"
      }
    }
  ]
};

const AdminHistory = () => {
  const [data, setData] = useState(null);
  const [editingData, setEditingData] = useState(DEFAULT_HISTORY_DATA);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("sections");
  const [previewMode, setPreviewMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("hi");
  const [fontSize, setFontSize] = useState(16);
  const [expandedSection, setExpandedSection] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/history`);
      const fetchedData = res.data;
      
      console.log("Fetched data from backend:", fetchedData); // Debug log
      
      // Validate and ensure proper structure
      const validatedData = validateAndNormalizeData(fetchedData);
      
      setData(validatedData);
      setEditingData(JSON.parse(JSON.stringify(validatedData)));
      setHistory([{ 
        timestamp: new Date(), 
        data: validatedData,
        id: Date.now()
      }]);
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("Failed to load history content");
      
      // Use default data if fetch fails
      setData(DEFAULT_HISTORY_DATA);
      setEditingData(JSON.parse(JSON.stringify(DEFAULT_HISTORY_DATA)));
    }
  };

  // Validate and normalize data to match YOUR model structure
  const validateAndNormalizeData = (data) => {
    if (!data) return DEFAULT_HISTORY_DATA;
    
    // Ensure sections exist and is an array
    if (!data.sections || !Array.isArray(data.sections)) {
      return { ...DEFAULT_HISTORY_DATA, ...data, sections: DEFAULT_HISTORY_DATA.sections };
    }
    
    // Validate each section - matching YOUR model structure
    const validatedSections = data.sections.map(section => ({
      // Keep _id if it exists (from MongoDB)
      _id: section._id,
      heading: {
        hi: section.heading?.hi || "",
        en: section.heading?.en || ""
      },
      // YOUR MODEL HAS 'content', NOT 'subheading'!
      content: {
        hi: section.content?.hi || section.subheading?.hi || "",
        en: section.content?.en || section.subheading?.en || ""
      }
    }));
    
    return { ...data, sections: validatedSections };
  };

  const handleInputChange = (path, value, index = null) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      
      try {
        if (path.includes('sections') && index !== null) {
          const keys = path.split('.');
          const field = keys[1]; // 'heading' or 'content'
          const lang = keys[2]; // 'hi' or 'en'
          
          // Ensure the section exists
          if (!newData.sections[index]) {
            newData.sections[index] = {
              heading: { hi: "", en: "" },
              content: { hi: "", en: "" }
            };
          }
          
          // Ensure the field exists
          if (!newData.sections[index][field]) {
            newData.sections[index][field] = { hi: "", en: "" };
          }
          
          // Update the value
          newData.sections[index][field][lang] = value;
        }
        
        setUnsavedChanges(true);
        return newData;
      } catch (error) {
        console.error("Error in handleInputChange:", error);
        toast.error("Error updating field");
        return prev;
      }
    });
  };

  const addSection = () => {
    setEditingData(prev => {
      const newSections = [...(prev.sections || [])];
      newSections.push({
        heading: { hi: "नया शीर्षक", en: "New Heading" },
        content: { hi: "नया सामग्री", en: "New Content" } // Using 'content' not 'subheading'
      });
      
      return { ...prev, sections: newSections };
    });
    toast.success("New section added");
    setUnsavedChanges(true);
  };

  const removeSection = (index) => {
    if (!editingData.sections || editingData.sections.length <= 1) {
      toast.error("Cannot remove the last section");
      return;
    }
    
    setEditingData(prev => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index)
    }));
    toast.success("Section removed");
    setUnsavedChanges(true);
  };

  const moveSection = (index, direction) => {
    if (!editingData.sections || editingData.sections.length <= 1) return;
    
    const newSections = [...editingData.sections];
    const [movedSection] = newSections.splice(index, 1);
    newSections.splice(index + direction, 0, movedSection);
    
    setEditingData(prev => ({
      ...prev,
      sections: newSections
    }));
    setUnsavedChanges(true);
    toast.success(`Section moved ${direction > 0 ? 'down' : 'up'}`);
  };

  const saveChanges = async () => {
    setLoading(true);
    try {
      const validatedData = validateAndNormalizeData(editingData);
      
      console.log("Sending data to backend:", validatedData); // Debug log
      
      const res = await axios.put(`${API_BASE}/api/history`, validatedData);
      setData(validatedData);
      setIsEditing(false);
      setUnsavedChanges(false);
      
      setHistory(prev => [
        ...prev.slice(-9),
        { 
          timestamp: new Date(), 
          data: validatedData,
          id: Date.now()
        }
      ]);
      
      toast.success("✅ History content saved successfully!");
    } catch (err) {
      console.error("Save error:", err);
      toast.error("❌ Failed to save changes");
    } finally {
      setLoading(false);
    }
  };

  const revertChanges = () => {
    if (data) {
      setEditingData(JSON.parse(JSON.stringify(data)));
    } else {
      setEditingData(JSON.parse(JSON.stringify(DEFAULT_HISTORY_DATA)));
    }
    setIsEditing(false);
    setUnsavedChanges(false);
    toast.success("↩️ Changes reverted");
  };

  // Rest of your functions (exportData, importData, etc.) remain the same...

  const exportData = () => {
    const dataStr = JSON.stringify(editingData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `history-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("📥 Data exported successfully");
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        const validatedData = validateAndNormalizeData(importedData);
        setEditingData(validatedData);
        setUnsavedChanges(true);
        toast.success("📤 Data imported successfully");
      } catch (err) {
        console.error("Import error:", err);
        toast.error("❌ Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  const restoreFromHistory = (historyItem) => {
    const validatedData = validateAndNormalizeData(historyItem.data);
    setEditingData(validatedData);
    setUnsavedChanges(true);
    toast.success("🕰️ Restored from history");
  };

  const duplicateSection = (index) => {
    setEditingData(prev => {
      const newSections = [...prev.sections];
      if (newSections[index]) {
        const sectionToDuplicate = JSON.parse(JSON.stringify(newSections[index]));
        newSections.splice(index + 1, 0, sectionToDuplicate);
      }
      return { ...prev, sections: newSections };
    });
    setUnsavedChanges(true);
    toast.success("📋 Section duplicated");
  };

  const toggleSectionExpansion = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  // Ensure editingData has proper structure before rendering
  const safeEditingData = editingData || DEFAULT_HISTORY_DATA;
  const safeSections = safeEditingData.sections || [];

  if (!data && !editingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading History CMS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4 md:p-6">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />

      {/* Preview Toggle */}
      <div className="flex justify-between items-center mb-4 gap-2">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaHistoryIcon className="text-indigo-600" /> History Page CMS
        </h1>
        
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${!previewMode 
              ? 'bg-white text-indigo-600 shadow-lg' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            onClick={() => setPreviewMode(false)}
          >
            <FaEdit /> Edit Mode
          </button>
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${previewMode 
              ? 'bg-white text-indigo-600 shadow-lg' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            onClick={() => setPreviewMode(true)}
          >
            <FaEye /> Preview Mode
          </button>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${unsavedChanges 
              ? 'bg-amber-100 text-amber-800' 
              : 'bg-green-100 text-green-800'
            }`}>
              {unsavedChanges ? "● Unsaved Changes" : "✓ Saved"}
            </span>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <FaLanguage className="text-gray-500" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border rounded-lg px-3 py-1 text-sm"
              >
                <option value="hi">हिंदी</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {isEditing && (
              <>
                <button 
                  onClick={revertChanges}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  <FaUndo /> Revert
                </button>
                <button 
                  onClick={saveChanges}
                  disabled={loading}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <FaSave /> Save Changes
                    </>
                  )}
                </button>
              </>
            )}
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${isEditing 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {isEditing ? <FaTimes /> : <FaEdit />}
              {isEditing ? "Cancel Edit" : "Start Editing"}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search in history content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* CMS Control Panel */}
        {!previewMode && (
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b">
                {["sections", "style", "tools"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-3 text-sm font-medium capitalize flex items-center justify-center gap-2 ${activeTab === tab 
                      ? 'text-indigo-600 border-b-2 border-indigo-600' 
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab === 'sections' && <FaListOl />}
                    {tab === 'style' && <FaPalette />}
                    {tab === 'tools' && <FaHistoryIcon />}
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-4 max-h-[70vh] overflow-y-auto">
                {/* Sections Tab */}
                {activeTab === 'sections' && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <FaListOl className="text-indigo-500" /> History Sections
                      </h3>
                      {isEditing && (
                        <button
                          onClick={addSection}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors flex items-center gap-1 text-sm"
                        >
                          <FaPlus /> Add Section
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      {safeSections.map((section, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          {/* Section Header */}
                          <div 
                            className="flex justify-between items-center p-3 bg-gray-50 cursor-pointer hover:bg-gray-100"
                            onClick={() => toggleSectionExpansion(index)}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-medium text-gray-600">
                                Section {index + 1}
                              </span>
                              <div className="flex gap-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    moveSection(index, -1);
                                  }}
                                  disabled={index === 0}
                                  className="p-1 text-gray-400 hover:text-indigo-600 disabled:opacity-30"
                                  title="Move up"
                                >
                                  <FaArrowUp />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    moveSection(index, 1);
                                  }}
                                  disabled={index === safeSections.length - 1}
                                  className="p-1 text-gray-400 hover:text-indigo-600 disabled:opacity-30"
                                  title="Move down"
                                >
                                  <FaArrowDown />
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {isEditing && (
                                <>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      duplicateSection(index);
                                    }}
                                    className="p-1 text-gray-400 hover:text-indigo-600"
                                    title="Duplicate"
                                  >
                                    <FaCopy />
                                  </button>
                                  {safeSections.length > 1 && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        removeSection(index);
                                      }}
                                      className="p-1 text-gray-400 hover:text-red-600"
                                      title="Delete"
                                    >
                                      <FaTrash />
                                    </button>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                          
                          {/* Expandable Content */}
                          {expandedSection === index && (
                            <div className="p-4 space-y-4">
                              {/* Heading */}
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Heading (Hindi)
                                </label>
                                <input
                                  type="text"
                                  value={section.heading?.hi || ""}
                                  onChange={(e) => handleInputChange('sections.heading.hi', e.target.value, index)}
                                  disabled={!isEditing}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100 font-devanagari"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Heading (English)
                                </label>
                                <input
                                  type="text"
                                  value={section.heading?.en || ""}
                                  onChange={(e) => handleInputChange('sections.heading.en', e.target.value, index)}
                                  disabled={!isEditing}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                                />
                              </div>

                              {/* Content (this is your subheading) */}
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Content (Hindi)
                                </label>
                                <textarea
                                  value={section.content?.hi || ""}
                                  onChange={(e) => handleInputChange('sections.content.hi', e.target.value, index)}
                                  disabled={!isEditing}
                                  rows="3"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100 font-devanagari"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Content (English)
                                </label>
                                <textarea
                                  value={section.content?.en || ""}
                                  onChange={(e) => handleInputChange('sections.content.en', e.target.value, index)}
                                  disabled={!isEditing}
                                  rows="3"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Style Tab - remains the same */}
                {activeTab === 'style' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaPalette className="text-indigo-500" /> Preview Settings
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Font Size</span>
                          <span className="font-semibold">{fontSize}px</span>
                        </div>
                        <input
                          type="range"
                          min="12"
                          max="24"
                          value={fontSize}
                          onChange={(e) => setFontSize(parseInt(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Background Colors</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">From</label>
                          <input type="color" className="w-full h-10 rounded-lg cursor-pointer" defaultValue="#fefcea" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">To</label>
                          <input type="color" className="w-full h-10 rounded-lg cursor-pointer" defaultValue="#e8ebff" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tools Tab - remains the same */}
                {activeTab === 'tools' && (
                  <div className="space-y-6">
                    {/* Version History */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaHistoryIcon className="text-indigo-500" /> Version History
                      </h3>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {history.slice().reverse().map((item, index) => (
                          <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="text-sm font-medium text-gray-700">
                                Version {history.length - index}
                              </div>
                              <div className="text-xs text-gray-500">
                                {item.timestamp.toLocaleString()}
                              </div>
                            </div>
                            <button
                              onClick={() => restoreFromHistory(item)}
                              disabled={!isEditing}
                              className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Restore
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Import/Export */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaArrowsAltH className="text-indigo-500" /> Data Management
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={exportData}
                          className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center gap-2"
                        >
                          <FaDownload /> Export
                        </button>
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center gap-2"
                        >
                          <FaUpload /> Import
                        </button>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".json"
                        onChange={importData}
                        className="hidden"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Preview Panel - Updated to match your model */}
        <div className={`flex-1 ${previewMode ? 'w-full' : ''}`}>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FaEye className="text-indigo-500" /> Live Preview
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">
                    {previewMode ? "Preview Mode" : "Live Edit"}
                  </span>
                </h3>
                
                <div className="flex items-center gap-2">
                  <FaLanguage className="text-gray-500" />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="border rounded-lg px-3 py-1 text-sm"
                  >
                    <option value="hi">हिंदी</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              <div className={`transition-all duration-300 ${previewMode ? 'scale-100' : 'scale-95'}`}>
                {/* Preview Container */}
                <div 
                  className="min-h-[500px] p-6 md:p-8 rounded-xl relative overflow-hidden"
                  style={{
                    background: `linear-gradient(to bottom, #fefcea, #e8ebff)`
                  }}
                >
                  {/* Preview Content */}
                  <div className="space-y-12">
                    {safeSections.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`
                          w-full
                          max-w-[clamp(320px,85vw,1700px)]
                          mx-auto
                          text-center
                          bg-white rounded-2xl
                          p-6 sm:p-8 lg:p-10
                          shadow-[0_8px_20px_rgba(160,120,255,0.2)]
                          transition-all duration-300 ease-in-out
                          hover:-translate-y-2
                          hover:shadow-[0_16px_30px_rgba(120,80,200,0.3)]
                          hover:bg-[rgba(255,255,255,0.85)]
                        `}
                        style={{ fontSize: `${fontSize}px` }}
                      >
                        {/* Heading */}
                        <h2 
                          className="mb-8 font-bold text-[#110c92] text-[clamp(2rem,4vw,3.5rem)] font-devanagari"
                          style={{ fontSize: `calc(${fontSize}px * 2)` }}
                        >
                          {section.heading?.[language] || ""}
                        </h2>

                        {/* Content (this is your subheading) */}
                        <p 
                          className="font-bold text-black leading-relaxed text-[clamp(1.1rem,2.5vw,1.5rem)] font-devanagari"
                          style={{ fontSize: `calc(${fontSize}px * 0.9)` }}
                        >
                          {section.content?.[language] || ""}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Language Toggle Button */}
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setLanguage(language === "hi" ? "en" : "hi")}
                      className="
                        bg-[#0702bc] text-white font-bold
                        px-8 py-3 rounded-lg
                        shadow-[0_4px_12px_rgba(106,76,175,0.3)]
                        transition-all duration-300
                        hover:bg-[#5351c4]
                        hover:shadow-[0_6px_16px_rgba(87,81,196,0.5)]
                        hover:scale-105
                      "
                      style={{ fontSize: `calc(${fontSize}px * 0.9)` }}
                    >
                      {language === "hi"
                        ? "Translate to English"
                        : "हिंदी में अनुवाद करें"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Sections</div>
          <div className="text-2xl font-bold text-gray-800">{safeSections.length}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Characters</div>
          <div className="text-2xl font-bold text-gray-800">
            {JSON.stringify(safeEditingData).length}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Languages</div>
          <div className="text-2xl font-bold text-gray-800">2</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <FaClock /> Last Saved
          </div>
          <div className="text-lg font-medium text-gray-800">
            {history.length > 0 
              ? new Date(history[history.length - 1].timestamp).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })
              : 'Never'
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHistory;