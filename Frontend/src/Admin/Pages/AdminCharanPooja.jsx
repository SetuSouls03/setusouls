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
  FaQuoteRight,
  FaArrowUp,
  FaArrowDown,
  FaListUl,
  FaHeading,
  FaParagraph
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const API_BASE = "https://setusouls-1.onrender.com/";

const AdminCharanPooja = () => {
  const [data, setData] = useState(null);
  const [editingData, setEditingData] = useState(null);
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
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_BASE}/api/charan-pooja`);
      const fetchedData = res.data;
      
      console.log("Fetched Charan Pooja data:", fetchedData);
      
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
      toast.error("Failed to load Charan Pooja content");
      
      // Show empty state if fetch fails
      setData({ sectionsGrouped: [] });
      setEditingData({ sectionsGrouped: [] });
    } finally {
      setIsLoading(false);
    }
  };

  // Validate and normalize data structure
  const validateAndNormalizeData = (data) => {
    if (!data) return { sectionsGrouped: [] };
    
    // Ensure sectionsGrouped exists and is an array
    if (!data.sectionsGrouped || !Array.isArray(data.sectionsGrouped)) {
      return { ...data, sectionsGrouped: [] };
    }
    
    // Validate each group in sectionsGrouped
    const validatedGroups = data.sectionsGrouped.map((group, index) => {
      // Handle group structure based on index
      if (index === 0) {
        // First group: title, paragraph, summary
        return {
          title: {
            hi: group.title?.hi || "",
            en: group.title?.en || ""
          },
          paragraph: {
            hi: group.paragraph?.hi || "",
            en: group.paragraph?.en || ""
          },
          summary: {
            title: {
              hi: group.summary?.title?.hi || "",
              en: group.summary?.title?.en || ""
            },
            points: {
              hi: Array.isArray(group.summary?.points?.hi) ? group.summary.points.hi : [],
              en: Array.isArray(group.summary?.points?.en) ? group.summary.points.en : []
            }
          }
        };
      } else if (index === 1) {
        // Second group: subheading, detailedParagraph
        return {
          subheading: {
            hi: group.subheading?.hi || "",
            en: group.subheading?.en || ""
          },
          detailedParagraph: {
            hi: group.detailedParagraph?.hi || "",
            en: group.detailedParagraph?.en || ""
          }
        };
      } else {
        // Quote section or additional groups
        return {
          quote: {
            hi: group.quote?.hi || "",
            en: group.quote?.en || ""
          }
        };
      }
    });
    
    return { ...data, sectionsGrouped: validatedGroups };
  };

  const handleInputChange = (path, value, groupIndex, pointIndex = null) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      
      try {
        const keys = path.split('.');
        
        // Handle nested updates for sectionsGrouped
        if (keys[0] === 'sectionsGrouped' && groupIndex !== null) {
          if (!newData.sectionsGrouped[groupIndex]) {
            // Initialize group if it doesn't exist
            newData.sectionsGrouped[groupIndex] = {};
          }
          
          let current = newData.sectionsGrouped[groupIndex];
          
          // Navigate through the path
          for (let i = 1; i < keys.length - 1; i++) {
            const key = keys[i];
            if (key === 'points' && pointIndex !== null) {
              // Handle array points update
              if (!current[key]) {
                current[key] = { hi: [], en: [] };
              }
              const lang = keys[i + 1];
              if (!current[key][lang]) {
                current[key][lang] = [];
              }
              current[key][lang][pointIndex] = value;
              break;
            } else {
              if (!current[key]) {
                current[key] = {};
              }
              current = current[key];
            }
          }
          
          // Update simple string value
          if (pointIndex === null) {
            const lastKey = keys[keys.length - 1];
            current[lastKey] = value;
          }
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

  const addPoint = (groupIndex, lang) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      
      if (!newData.sectionsGrouped[groupIndex]?.summary?.points) {
        if (!newData.sectionsGrouped[groupIndex]) newData.sectionsGrouped[groupIndex] = {};
        if (!newData.sectionsGrouped[groupIndex].summary) newData.sectionsGrouped[groupIndex].summary = {};
        newData.sectionsGrouped[groupIndex].summary.points = { hi: [], en: [] };
      }
      
      if (!newData.sectionsGrouped[groupIndex].summary.points[lang]) {
        newData.sectionsGrouped[groupIndex].summary.points[lang] = [];
      }
      
      newData.sectionsGrouped[groupIndex].summary.points[lang].push("");
      setUnsavedChanges(true);
      return newData;
    });
    
    toast.success(`Added new point in ${lang === 'hi' ? 'Hindi' : 'English'}`);
  };

  const removePoint = (groupIndex, lang, pointIndex) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      
      if (newData.sectionsGrouped[groupIndex]?.summary?.points?.[lang]) {
        newData.sectionsGrouped[groupIndex].summary.points[lang].splice(pointIndex, 1);
      }
      
      setUnsavedChanges(true);
      return newData;
    });
    
    toast.success("Point removed");
  };

  const movePoint = (groupIndex, lang, currentIndex, direction) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      
      if (newData.sectionsGrouped[groupIndex]?.summary?.points?.[lang]) {
        const points = newData.sectionsGrouped[groupIndex].summary.points[lang];
        const newIndex = currentIndex + direction;
        
        if (newIndex >= 0 && newIndex < points.length) {
          const [movedPoint] = points.splice(currentIndex, 1);
          points.splice(newIndex, 0, movedPoint);
        }
      }
      
      setUnsavedChanges(true);
      return newData;
    });
  };

  const addGroup = () => {
    setEditingData(prev => {
      const newGroups = [...(prev.sectionsGrouped || [])];
      
      // Add appropriate group type based on current number of groups
      if (newGroups.length === 0) {
        // First group: title, paragraph, summary
        newGroups.push({
          title: { hi: "", en: "" },
          paragraph: { hi: "", en: "" },
          summary: {
            title: { hi: "", en: "" },
            points: { hi: [], en: [] }
          }
        });
      } else if (newGroups.length === 1) {
        // Second group: subheading, detailedParagraph
        newGroups.push({
          subheading: { hi: "", en: "" },
          detailedParagraph: { hi: "", en: "" }
        });
      } else {
        // Additional groups: quote
        newGroups.push({
          quote: { hi: "", en: "" }
        });
      }
      
      return { ...prev, sectionsGrouped: newGroups };
    });
    
    toast.success("New group added");
    setUnsavedChanges(true);
  };

  const removeGroup = (index) => {
    if (!editingData.sectionsGrouped || editingData.sectionsGrouped.length <= 1) {
      toast.error("Cannot remove the last group");
      return;
    }
    
    setEditingData(prev => ({
      ...prev,
      sectionsGrouped: prev.sectionsGrouped.filter((_, i) => i !== index)
    }));
    
    toast.success("Group removed");
    setUnsavedChanges(true);
  };

  const saveChanges = async () => {
    setLoading(true);
    try {
      const validatedData = validateAndNormalizeData(editingData);
      
      console.log("Sending Charan Pooja data to backend:", validatedData);
      
      const res = await axios.put(`${API_BASE}/api/charan-pooja`, validatedData);
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
      
      toast.success("✅ Charan Pooja content saved successfully!");
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
      setEditingData({ sectionsGrouped: [] });
    }
    setIsEditing(false);
    setUnsavedChanges(false);
    toast.success("↩️ Changes reverted");
  };

  const exportData = () => {
    const dataStr = JSON.stringify(editingData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `charan-pooja-backup-${new Date().toISOString().split('T')[0]}.json`;
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

  const toggleSectionExpansion = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Charan Pooja CMS...</p>
        </div>
      </div>
    );
  }

  const safeEditingData = editingData || { sectionsGrouped: [] };
  const safeGroups = safeEditingData.sectionsGrouped || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4 md:p-6">
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

      {/* Header */}
      <div className="flex justify-between items-center mb-4 gap-2">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaQuoteRight className="text-purple-600" /> Charan Pooja CMS
        </h1>
        
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${!previewMode 
              ? 'bg-white text-purple-600 shadow-lg' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            onClick={() => setPreviewMode(false)}
          >
            <FaEdit /> Edit Mode
          </button>
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${previewMode 
              ? 'bg-white text-purple-600 shadow-lg' 
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
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
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
              placeholder="Search in Charan Pooja content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      ? 'text-purple-600 border-b-2 border-purple-600' 
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
                        <FaQuoteRight className="text-purple-500" /> Charan Pooja Sections
                      </h3>
                      {isEditing && (
                        <button
                          onClick={addGroup}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors flex items-center gap-1 text-sm"
                        >
                          <FaPlus /> Add Group
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      {safeGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                          {/* Group Header */}
                          <div 
                            className="flex justify-between items-center p-3 bg-gray-50 cursor-pointer hover:bg-gray-100"
                            onClick={() => toggleSectionExpansion(groupIndex)}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-medium text-gray-600">
                                {groupIndex === 0 ? "Group 1: Title & Summary" : 
                                 groupIndex === 1 ? "Group 2: Subheading" : 
                                 "Quote Section"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {isEditing && safeGroups.length > 1 && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeGroup(groupIndex);
                                  }}
                                  className="p-1 text-gray-400 hover:text-red-600"
                                  title="Delete"
                                >
                                  <FaTrash />
                                </button>
                              )}
                            </div>
                          </div>
                          
                          {/* Expandable Content */}
                          {expandedSection === groupIndex && (
                            <div className="p-4 space-y-4">
                              {/* Group 1: Title, Paragraph, Summary */}
                              {groupIndex === 0 && (
                                <>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Title (Hindi)
                                    </label>
                                    <input
                                      type="text"
                                      value={group.title?.hi || ""}
                                      onChange={(e) => handleInputChange('sectionsGrouped.title.hi', e.target.value, groupIndex)}
                                      disabled={!isEditing}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 font-devanagari"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Title (English)
                                    </label>
                                    <input
                                      type="text"
                                      value={group.title?.en || ""}
                                      onChange={(e) => handleInputChange('sectionsGrouped.title.en', e.target.value, groupIndex)}
                                      disabled={!isEditing}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Paragraph (Hindi)
                                    </label>
                                    <textarea
                                      value={group.paragraph?.hi || ""}
                                      onChange={(e) => handleInputChange('sectionsGrouped.paragraph.hi', e.target.value, groupIndex)}
                                      disabled={!isEditing}
                                      rows="3"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 font-devanagari"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Paragraph (English)
                                    </label>
                                    <textarea
                                      value={group.paragraph?.en || ""}
                                      onChange={(e) => handleInputChange('sectionsGrouped.paragraph.en', e.target.value, groupIndex)}
                                      disabled={!isEditing}
                                      rows="3"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                  </div>

                                  {/* Summary */}
                                  <div className="border-t pt-4">
                                    <h4 className="text-md font-semibold text-gray-800 mb-3">Summary</h4>
                                    
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Summary Title (Hindi)
                                      </label>
                                      <input
                                        type="text"
                                        value={group.summary?.title?.hi || ""}
                                        onChange={(e) => handleInputChange('sectionsGrouped.summary.title.hi', e.target.value, groupIndex)}
                                        disabled={!isEditing}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 font-devanagari"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Summary Title (English)
                                      </label>
                                      <input
                                        type="text"
                                        value={group.summary?.title?.en || ""}
                                        onChange={(e) => handleInputChange('sectionsGrouped.summary.title.en', e.target.value, groupIndex)}
                                        disabled={!isEditing}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                                      />
                                    </div>

                                    {/* Points */}
                                    <div className="mt-4">
                                      <div className="flex justify-between items-center mb-2">
                                        <h5 className="text-sm font-medium text-gray-700">Points (Hindi)</h5>
                                        {isEditing && (
                                          <button
                                            onClick={() => addPoint(groupIndex, 'hi')}
                                            className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
                                          >
                                            + Add Point
                                          </button>
                                        )}
                                      </div>
                                      {group.summary?.points?.hi?.map((point, pointIndex) => (
                                        <div key={pointIndex} className="flex items-center gap-2 mb-2">
                                          <span className="text-gray-500 text-sm">{pointIndex + 1}.</span>
                                          <input
                                            type="text"
                                            value={point}
                                            onChange={(e) => handleInputChange('sectionsGrouped.summary.points.hi', e.target.value, groupIndex, pointIndex)}
                                            disabled={!isEditing}
                                            className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 font-devanagari"
                                          />
                                          {isEditing && (
                                            <div className="flex gap-1">
                                              <button
                                                onClick={() => movePoint(groupIndex, 'hi', pointIndex, -1)}
                                                disabled={pointIndex === 0}
                                                className="p-1 text-gray-400 hover:text-purple-600 disabled:opacity-30"
                                              >
                                                <FaArrowUp />
                                              </button>
                                              <button
                                                onClick={() => movePoint(groupIndex, 'hi', pointIndex, 1)}
                                                disabled={pointIndex === group.summary.points.hi.length - 1}
                                                className="p-1 text-gray-400 hover:text-purple-600 disabled:opacity-30"
                                              >
                                                <FaArrowDown />
                                              </button>
                                              <button
                                                onClick={() => removePoint(groupIndex, 'hi', pointIndex)}
                                                className="p-1 text-gray-400 hover:text-red-600"
                                              >
                                                <FaTrash />
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>

                                    <div className="mt-4">
                                      <div className="flex justify-between items-center mb-2">
                                        <h5 className="text-sm font-medium text-gray-700">Points (English)</h5>
                                        {isEditing && (
                                          <button
                                            onClick={() => addPoint(groupIndex, 'en')}
                                            className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
                                          >
                                            + Add Point
                                          </button>
                                        )}
                                      </div>
                                      {group.summary?.points?.en?.map((point, pointIndex) => (
                                        <div key={pointIndex} className="flex items-center gap-2 mb-2">
                                          <span className="text-gray-500 text-sm">{pointIndex + 1}.</span>
                                          <input
                                            type="text"
                                            value={point}
                                            onChange={(e) => handleInputChange('sectionsGrouped.summary.points.en', e.target.value, groupIndex, pointIndex)}
                                            disabled={!isEditing}
                                            className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                                          />
                                          {isEditing && (
                                            <div className="flex gap-1">
                                              <button
                                                onClick={() => movePoint(groupIndex, 'en', pointIndex, -1)}
                                                disabled={pointIndex === 0}
                                                className="p-1 text-gray-400 hover:text-purple-600 disabled:opacity-30"
                                              >
                                                <FaArrowUp />
                                              </button>
                                              <button
                                                onClick={() => movePoint(groupIndex, 'en', pointIndex, 1)}
                                                disabled={pointIndex === group.summary.points.en.length - 1}
                                                className="p-1 text-gray-400 hover:text-purple-600 disabled:opacity-30"
                                              >
                                                <FaArrowDown />
                                              </button>
                                              <button
                                                onClick={() => removePoint(groupIndex, 'en', pointIndex)}
                                                className="p-1 text-gray-400 hover:text-red-600"
                                              >
                                                <FaTrash />
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              )}

                              {/* Group 2: Subheading & Detailed Paragraph */}
                              {groupIndex === 1 && (
                                <>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Subheading (Hindi)
                                    </label>
                                    <input
                                      type="text"
                                      value={group.subheading?.hi || ""}
                                      onChange={(e) => handleInputChange('sectionsGrouped.subheading.hi', e.target.value, groupIndex)}
                                      disabled={!isEditing}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 font-devanagari"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Subheading (English)
                                    </label>
                                    <input
                                      type="text"
                                      value={group.subheading?.en || ""}
                                      onChange={(e) => handleInputChange('sectionsGrouped.subheading.en', e.target.value, groupIndex)}
                                      disabled={!isEditing}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Detailed Paragraph (Hindi)
                                    </label>
                                    <textarea
                                      value={group.detailedParagraph?.hi || ""}
                                      onChange={(e) => handleInputChange('sectionsGrouped.detailedParagraph.hi', e.target.value, groupIndex)}
                                      disabled={!isEditing}
                                      rows="4"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 font-devanagari"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Detailed Paragraph (English)
                                    </label>
                                    <textarea
                                      value={group.detailedParagraph?.en || ""}
                                      onChange={(e) => handleInputChange('sectionsGrouped.detailedParagraph.en', e.target.value, groupIndex)}
                                      disabled={!isEditing}
                                      rows="4"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                  </div>
                                </>
                              )}

                              {/* Quote Section */}
                              {groupIndex >= 2 && (
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Quote (Hindi)
                                  </label>
                                  <textarea
                                    value={group.quote?.hi || ""}
                                    onChange={(e) => handleInputChange('sectionsGrouped.quote.hi', e.target.value, groupIndex)}
                                    disabled={!isEditing}
                                    rows="2"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 font-devanagari"
                                  />
                                  <div className="mt-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Quote (English)
                                    </label>
                                    <textarea
                                      value={group.quote?.en || ""}
                                      onChange={(e) => handleInputChange('sectionsGrouped.quote.en', e.target.value, groupIndex)}
                                      disabled={!isEditing}
                                      rows="2"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Style Tab */}
                {activeTab === 'style' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaPalette className="text-purple-500" /> Preview Settings
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

                {/* Tools Tab */}
                {activeTab === 'tools' && (
                  <div className="space-y-6">
                    {/* Version History */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaHistoryIcon className="text-purple-500" /> Version History
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
                              className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
                        <FaArrowsAltH className="text-purple-500" /> Data Management
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

        {/* Preview Panel */}
        <div className={`flex-1 ${previewMode ? 'w-full' : ''}`}>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FaEye className="text-purple-500" /> Live Preview
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded">
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
                    {safeGroups.map((group, index) => {
                      if (index === 0) {
                        // Group 1: Title, Paragraph, Summary
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="
                              w-full
                              max-w-[clamp(320px,85vw,1700px)]
                              mx-auto
                              bg-white rounded-2xl p-6 sm:p-8 lg:p-10
                              shadow-[0_8px_30px_rgba(0,0,0,0.1)]
                              text-center
                            "
                            style={{ fontSize: `${fontSize}px` }}
                          >
                            <h1 className="mb-10 font-bold text-[#0904b8] text-[clamp(2.2rem,4vw,3.5rem)] font-devanagari">
                              {group.title?.[language] || ""}
                            </h1>

                            <p className="font-bold leading-relaxed text-black text-[clamp(1.2rem,2.5vw,1.5rem)] font-devanagari">
                              {group.paragraph?.[language] || ""}
                            </p>

                            {/* Summary */}
                            {group.summary && (
                              <div
                                className="
                                  mt-10 bg-[#fff8db]
                                  border-l-[5px] border-[#f1c40f]
                                  rounded-lg p-6
                                  text-left font-bold
                                  transition-transform duration-300
                                  hover:scale-[1.01]
                                "
                                style={{borderLeft:'5px solid #f1c40f'}}
                              >
                                <h2 className="mb-4 font-bold text-[#b9770e] text-[clamp(1.6rem,3vw,2.25rem)] font-devanagari">
                                  {group.summary.title?.[language] || ""}
                                </h2>

                                <ul className="list-disc pl-6 space-y-2 text-black text-[clamp(1.1rem,2.5vw,1.5rem)] font-devanagari">
                                  {group.summary.points?.[language]?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </motion.div>
                        );
                      } else if (index === 1) {
                        // Group 2: Subheading, Detailed Paragraph
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="
                              w-full max-w-[clamp(320px,85vw,1700px)]
                              bg-white rounded-2xl p-6 sm:p-8 lg:p-10
                              shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                              text-center
                            "
                            style={{ fontSize: `${fontSize}px` }}
                          >
                            <h2 className="mb-8 font-semibold text-[#0904b8] text-[clamp(2rem,4vw,3.5rem)] font-devanagari">
                              {group.subheading?.[language] || ""}
                            </h2>

                            <p className="font-bold leading-relaxed text-black text-[clamp(1.2rem,2.5vw,1.7rem)] font-devanagari">
                              {group.detailedParagraph?.[language] || ""}
                            </p>
                          </motion.div>
                        );
                      } else {
                        // Quote Section
                        return (
                          <blockquote
                            key={index}
                            className="
                              w-full max-w-[clamp(320px,85vw,1700px)]
                              bg-white rounded-xl p-6 text-center
                              shadow-inner
                            "
                            style={{ fontSize: `${fontSize}px` }}
                          >
                            <span className="inline-block font-bold text-[#1500d2] text-[clamp(1.2rem,3vw,2rem)] font-devanagari">
                              {group.quote?.[language] || ""}
                            </span>
                          </blockquote>
                        );
                      }
                    })}
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
          <div className="text-sm text-gray-500">Groups</div>
          <div className="text-2xl font-bold text-gray-800">{safeGroups.length}</div>
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

export default AdminCharanPooja;