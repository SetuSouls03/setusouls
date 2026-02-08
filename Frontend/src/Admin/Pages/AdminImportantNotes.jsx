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
  FaGlobe,
  FaLink,
  FaExternalLinkAlt,
  FaLanguage,
  FaCopy,
  FaSearch,
  FaArrowsAltH,
  FaClock,
  FaListOl,
  FaListUl,
  FaBold,
  FaItalic,
  FaUnderline,
  FaHistory,
  FaTimes,
  FaCheck,
  FaRegClone
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://setusouls-1.onrender.com";

const AdminImportantNotes = () => {
  // Main state management
  const [languages, setLanguages] = useState(["hi", "en"]);
  const [activeLanguage, setActiveLanguage] = useState("hi");
  const [data, setData] = useState({ hi: [], en: [] });
  const [editingData, setEditingData] = useState({ hi: [], en: [] });
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [previewMode, setPreviewMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [activeSection, setActiveSection] = useState("all"); // "all", "content", "notes"
  const fileInputRef = useRef(null);

  // Rich text editor configuration
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'clean'],
      [{ 'align': [] }]
    ],
  };

  // Quill formats for HTML content
  const quillFormats = [
    'header', 'bold', 'italic', 'underline',
    'list', 'bullet', 'link', 'align'
  ];

  useEffect(() => {
    fetchAllData();
  }, []);

  // Fetch data for all languages
  const fetchAllData = async () => {
    try {
      setLoading(true);
      const promises = languages.map(lang => 
        axios.get(`${API_BASE}/api/important-notes?lang=${lang}`)
      );
      
      const results = await Promise.allSettled(promises);
      const newData = {};
      
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          newData[languages[index]] = Array.isArray(result.value.data) 
            ? result.value.data 
            : [];
        } else {
          console.error(`Failed to fetch ${languages[index]} data:`, result.reason);
          newData[languages[index]] = [];
        }
      });
      
      setData(newData);
      setEditingData(JSON.parse(JSON.stringify(newData)));
      setHistory([{
        timestamp: new Date(),
        data: newData,
        language: activeLanguage,
        id: Date.now()
      }]);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      toast.error("Failed to load data from server");
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes with validation
  const handleInputChange = (section, index, field, value, lang = activeLanguage) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      
      // Find the item to update
      const itemIndex = newData[lang].findIndex(item => 
        item.section === section && newData[lang].indexOf(item) === index
      );
      
      if (itemIndex !== -1) {
        newData[lang][itemIndex][field] = value;
      } else {
        // If not found, create new item for this language
        const newItem = {
          section,
          [field]: value,
          lang
        };
        
        // Add missing fields based on section type
        if (section.startsWith('notes')) {
          newItem.subHeading = "";
          newItem.buttons = [];
          newItem.heading = "";
        } else {
          newItem.heading = "";
          newItem.subHeading = "";
          newItem.buttons = [];
        }
        
        newData[lang].push(newItem);
      }
      
      setUnsavedChanges(true);
      return newData;
    });
  };

  // Add new section
  const addSection = (sectionType) => {
    const newSection = {
      section: sectionType === 'content' 
        ? `content${editingData[activeLanguage].filter(item => item.section.startsWith('content')).length + 1}`
        : `notes${editingData[activeLanguage].filter(item => item.section.startsWith('notes')).length + 1}`,
      heading: sectionType === 'content' ? "New Content Heading" : "",
      subHeading: sectionType === 'notes' ? "New Notes Heading" : "",
      body: sectionType === 'content' ? "<p>New content body</p>" : "<p>New notes content</p>",
      buttons: [],
      lang: activeLanguage
    };

    setEditingData(prev => ({
      ...prev,
      [activeLanguage]: [...prev[activeLanguage], newSection]
    }));
    
    toast.success(`New ${sectionType} section added`);
    setUnsavedChanges(true);
  };

  // Add button to a notes section
  const addButton = (sectionIndex) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const section = newData[activeLanguage][sectionIndex];
      
      if (section && section.buttons) {
        section.buttons.push({
          label: "New Button",
          url: "#",
          target: "_self"
        });
      } else if (section) {
        section.buttons = [{
          label: "New Button",
          url: "#",
          target: "_self"
        }];
      }
      
      setUnsavedChanges(true);
      return newData;
    });
    
    toast.success("Button added");
  };

  // Update button properties
  const updateButton = (sectionIndex, buttonIndex, field, value) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const buttons = newData[activeLanguage][sectionIndex]?.buttons;
      
      if (buttons && buttons[buttonIndex]) {
        buttons[buttonIndex][field] = value;
      }
      
      setUnsavedChanges(true);
      return newData;
    });
  };

  // Remove button
  const removeButton = (sectionIndex, buttonIndex) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const buttons = newData[activeLanguage][sectionIndex]?.buttons;
      
      if (buttons) {
        newData[activeLanguage][sectionIndex].buttons = 
          buttons.filter((_, i) => i !== buttonIndex);
      }
      
      setUnsavedChanges(true);
      return newData;
    });
    
    toast.success("Button removed");
  };

  // Remove section
  const removeSection = (index) => {
    const section = editingData[activeLanguage][index];
    if (!section) return;
    
    const sectionType = section.section.startsWith('content') ? 'content' : 'notes';
    const remainingSections = editingData[activeLanguage].filter(item => 
      item.section.startsWith(sectionType)
    ).length;
    
    if (remainingSections <= 1) {
      toast.error(`Cannot remove the last ${sectionType} section`);
      return;
    }
    
    if (window.confirm(`Are you sure you want to remove this ${sectionType} section?`)) {
      setEditingData(prev => ({
        ...prev,
        [activeLanguage]: prev[activeLanguage].filter((_, i) => i !== index)
      }));
      
      toast.success("Section removed");
      setUnsavedChanges(true);
    }
  };

  // Duplicate section
  const duplicateSection = (index) => {
    const sectionToDuplicate = editingData[activeLanguage][index];
    if (!sectionToDuplicate) return;
    
    const duplicatedSection = {
      ...JSON.parse(JSON.stringify(sectionToDuplicate)),
      section: `${sectionToDuplicate.section}-copy`
    };
    
    setEditingData(prev => ({
      ...prev,
      [activeLanguage]: [
        ...prev[activeLanguage].slice(0, index + 1),
        duplicatedSection,
        ...prev[activeLanguage].slice(index + 1)
      ]
    }));
    
    toast.success("Section duplicated");
    setUnsavedChanges(true);
  };

  // Save all changes
  const saveChanges = async () => {
    setLoading(true);
    try {
      // Save each language separately
      const savePromises = languages.map(lang => {
        const langData = editingData[lang];
        return axios.put(`${API_BASE}/api/important-notes?lang=${lang}`, langData);
      });
      
      await Promise.all(savePromises);
      
      setData(editingData);
      setIsEditing(false);
      setUnsavedChanges(false);
      
      // Add to history
      setHistory(prev => [
        ...prev.slice(-9),
        {
          timestamp: new Date(),
          data: editingData,
          language: activeLanguage,
          id: Date.now()
        }
      ]);
      
      toast.success("✅ All changes saved successfully!");
    } catch (err) {
      console.error("Save error:", err);
      toast.error("❌ Failed to save changes");
    } finally {
      setLoading(false);
    }
  };

  // Revert changes
  const revertChanges = () => {
    setEditingData(JSON.parse(JSON.stringify(data)));
    setIsEditing(false);
    setUnsavedChanges(false);
    toast.success("↩️ Changes reverted");
  };

  // Export data
  const exportData = () => {
    const dataStr = JSON.stringify(editingData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `important-notes-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("📥 Data exported successfully");
  };

  // Import data
  const importData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        
        // Validate imported data structure
        if (typeof importedData === 'object' && 
            (importedData.hi || importedData.en)) {
          setEditingData(importedData);
          setUnsavedChanges(true);
          toast.success("📤 Data imported successfully");
        } else {
          toast.error("❌ Invalid data format");
        }
      } catch (err) {
        toast.error("❌ Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  // Restore from history
  const restoreFromHistory = (historyItem) => {
    setEditingData(historyItem.data);
    setActiveLanguage(historyItem.language || "hi");
    setUnsavedChanges(true);
    toast.success("🕰️ Restored from history");
  };

  // Clear all content
  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all content? This cannot be undone.")) {
      const defaultData = {
        hi: [],
        en: []
      };
      setEditingData(defaultData);
      setUnsavedChanges(true);
      toast.success("🧹 All content cleared");
    }
  };

  // Filter sections based on active filter
  const getFilteredSections = () => {
    const currentData = editingData[activeLanguage] || [];
    
    if (activeSection === "all") return currentData;
    if (activeSection === "content") {
      return currentData.filter(item => item.section.startsWith('content'));
    }
    if (activeSection === "notes") {
      return currentData.filter(item => item.section.startsWith('notes'));
    }
    return currentData;
  };

  // Loading state
  if (loading && !editingData[activeLanguage]) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading CMS Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6">
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

      {/* Language Selector */}
      <div className="mb-6 bg-white rounded-xl shadow-lg p-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <FaLanguage className="text-blue-600 text-xl" />
            <span className="font-medium text-gray-700">Editing Language:</span>
          </div>
          <div className="flex gap-2">
            {languages.map(lang => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`px-4 py-2 rounded-lg transition-all ${activeLanguage === lang
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {lang === 'hi' ? 'Hindi' : 'English'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Toggle */}
      <div className="flex justify-end mb-4 gap-2">
        <button
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${!previewMode
            ? 'bg-white text-blue-600 shadow-lg'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          onClick={() => setPreviewMode(false)}
        >
          <FaEdit /> Edit Mode
        </button>
        <button
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${previewMode
            ? 'bg-white text-blue-600 shadow-lg'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          onClick={() => setPreviewMode(true)}
        >
          <FaEye /> Preview Mode
        </button>
      </div>

      {/* Control Bar */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaPalette className="text-blue-600" /> Important Notes CMS
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${unsavedChanges
              ? 'bg-amber-100 text-amber-800'
              : 'bg-green-100 text-green-800'
            }`}>
              {unsavedChanges ? "● Unsaved Changes" : "✓ Saved"}
            </span>
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
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
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

        {/* Search and Filter Bar */}
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search in content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            {["all", "content", "notes"].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveSection(filter)}
                className={`px-4 py-2 rounded-lg capitalize ${activeSection === filter
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
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
                {["content", "style", "tools"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-3 text-sm font-medium capitalize flex items-center justify-center gap-2 ${activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab === 'content' && <FaParagraph />}
                    {tab === 'style' && <FaPalette />}
                    {tab === 'tools' && <FaHistory />}
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-4 max-h-[70vh] overflow-y-auto">
                {/* Content Tab */}
                {activeTab === 'content' && (
                  <div className="space-y-6">
                    {/* Section Management */}
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Sections ({getFilteredSections().length})
                      </h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => addSection('content')}
                          disabled={!isEditing}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1 text-sm disabled:opacity-50"
                        >
                          <FaPlus /> Content
                        </button>
                        <button
                          onClick={() => addSection('notes')}
                          disabled={!isEditing}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-1 text-sm disabled:opacity-50"
                        >
                          <FaPlus /> Notes
                        </button>
                      </div>
                    </div>

                    {/* Sections List */}
                    <div className="space-y-4">
                      {getFilteredSections().map((item, index) => {
                        const globalIndex = editingData[activeLanguage].indexOf(item);
                        
                        return (
                          <div key={globalIndex} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-600">
                                  {item.section}
                                </span>
                                <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                                  {item.section.startsWith('content') ? 'Content' : 'Notes'}
                                </span>
                              </div>
                              {isEditing && (
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => duplicateSection(globalIndex)}
                                    className="p-1 text-gray-400 hover:text-blue-600"
                                    title="Duplicate"
                                  >
                                    <FaRegClone />
                                  </button>
                                  <button
                                    onClick={() => removeSection(globalIndex)}
                                    className="p-1 text-gray-400 hover:text-red-600"
                                    title="Delete"
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              )}
                            </div>

                            {/* Section Content Editor */}
                            <div className="space-y-3">
                              {/* Heading */}
                              {item.section.startsWith('content') && (
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Heading
                                  </label>
                                  <input
                                    type="text"
                                    value={item.heading || ''}
                                    onChange={(e) => handleInputChange(item.section, globalIndex, 'heading', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                  />
                                </div>
                              )}

                              {/* Subheading for notes */}
                              {item.section.startsWith('notes') && (
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Subheading
                                  </label>
                                  <input
                                    type="text"
                                    value={item.subHeading || ''}
                                    onChange={(e) => handleInputChange(item.section, globalIndex, 'subHeading', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                  />
                                </div>
                              )}

                              {/* Rich Text Editor for Body */}
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Content
                                </label>
                                {isEditing ? (
                                  <ReactQuill
                                    theme="snow"
                                    value={item.body || ''}
                                    onChange={(value) => handleInputChange(item.section, globalIndex, 'body', value)}
                                    modules={quillModules}
                                    formats={quillFormats}
                                    className="rounded-lg overflow-hidden"
                                  />
                                ) : (
                                  <div 
                                    className="p-3 border border-gray-300 rounded-lg bg-gray-50"
                                    dangerouslySetInnerHTML={{ __html: item.body || '' }}
                                  />
                                )}
                              </div>

                              {/* Buttons for notes sections */}
                              {item.section.startsWith('notes') && (
                                <div>
                                  <div className="flex justify-between items-center mb-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                      Buttons ({item.buttons?.length || 0})
                                    </label>
                                    {isEditing && (
                                      <button
                                        onClick={() => addButton(globalIndex)}
                                        className="px-2 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
                                      >
                                        <FaPlus /> Add Button
                                      </button>
                                    )}
                                  </div>
                                  
                                  <div className="space-y-2">
                                    {item.buttons?.map((button, btnIndex) => (
                                      <div key={btnIndex} className="p-2 border border-gray-200 rounded">
                                        <div className="flex justify-between items-center mb-2">
                                          <span className="text-sm font-medium">Button {btnIndex + 1}</span>
                                          {isEditing && (
                                            <button
                                              onClick={() => removeButton(globalIndex, btnIndex)}
                                              className="text-red-500 hover:text-red-700"
                                            >
                                              <FaTrash size={14} />
                                            </button>
                                          )}
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                          <input
                                            type="text"
                                            value={button.label || ''}
                                            onChange={(e) => updateButton(globalIndex, btnIndex, 'label', e.target.value)}
                                            disabled={!isEditing}
                                            placeholder="Button text"
                                            className="px-2 py-1 border rounded text-sm"
                                          />
                                          <input
                                            type="text"
                                            value={button.url || ''}
                                            onChange={(e) => updateButton(globalIndex, btnIndex, 'url', e.target.value)}
                                            disabled={!isEditing}
                                            placeholder="URL"
                                            className="px-2 py-1 border rounded text-sm"
                                          />
                                          <select
                                            value={button.target || '_self'}
                                            onChange={(e) => updateButton(globalIndex, btnIndex, 'target', e.target.value)}
                                            disabled={!isEditing}
                                            className="px-2 py-1 border rounded text-sm col-span-2"
                                          >
                                            <option value="_self">Same Tab</option>
                                            <option value="_blank">New Tab</option>
                                          </select>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Style Tab */}
                {activeTab === 'style' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaPalette className="text-blue-500" /> Font Size
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Preview Font Size</span>
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
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Color Scheme</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Primary Color</label>
                          <input type="color" className="w-full h-10 rounded-lg cursor-pointer" defaultValue="#0904b8" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Accent Color</label>
                          <input type="color" className="w-full h-10 rounded-lg cursor-pointer" defaultValue="#ffa726" />
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
                        <FaHistory className="text-blue-500" /> Version History
                      </h3>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {history.slice().reverse().map((item, index) => (
                          <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="text-sm font-medium text-gray-700">
                                Version {history.length - index}
                              </div>
                              <div className="text-xs text-gray-500">
                                {item.timestamp.toLocaleString()} ({item.language})
                              </div>
                            </div>
                            <button
                              onClick={() => restoreFromHistory(item)}
                              disabled={!isEditing}
                              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 disabled:opacity-50"
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
                        <FaArrowsAltH className="text-blue-500" /> Data Management
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

                    {/* Clear All */}
                    <div>
                      <button
                        onClick={clearAll}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors disabled:opacity-50"
                      >
                        Clear All Content
                      </button>
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
                  <FaEye className="text-blue-500" /> Live Preview
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                    {previewMode ? "Preview Mode" : "Live Edit"}
                  </span>
                </h3>
                <span className="text-sm text-gray-500">
                  Language: {activeLanguage === 'hi' ? 'Hindi' : 'English'}
                </span>
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              <div className={`transition-all duration-300 ${previewMode ? 'scale-100' : 'scale-95'}`}>
                {/* Preview Container */}
                <div className="min-h-[600px]">
                  {/* Content Sections */}
                  {getFilteredSections()
                    .filter(item => item.section.startsWith('content'))
                    .map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="
                          max-w-[clamp(320px,90vw,1600px)]
                          mx-auto mb-12
                          text-center
                          bg-gradient-to-r from-blue-50 to-indigo-50
                          rounded-2xl
                          p-6 sm:p-8 lg:p-10
                          shadow-lg
                          border border-blue-100
                        "
                      >
                        {item.heading && (
                          <h2 
                            className="mb-8 font-bold text-blue-700 text-[clamp(2rem,4vw,3rem)]"
                            style={{ fontSize: `${fontSize * 1.5}px` }}
                          >
                            {item.heading}
                          </h2>
                        )}

                        <div
                          className="font-bold text-gray-800 leading-relaxed text-[clamp(1.1rem,2.5vw,1.5rem)]"
                          style={{ fontSize: `${fontSize}px` }}
                          dangerouslySetInnerHTML={{ __html: item.body }}
                        />
                      </motion.div>
                    ))}

                  {/* Notes Container */}
                  {getFilteredSections()
                    .filter(item => item.section.startsWith('notes'))
                    .length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="
                        max-w-[clamp(320px,90vw,1600px)]
                        mx-auto
                        bg-white
                        rounded-3xl
                        p-6 sm:p-8 lg:p-10
                        shadow-xl
                        border border-gray-200
                      "
                    >
                      <h1 
                        className="text-center font-bold text-blue-700 mb-12 text-[clamp(2rem,4vw,2.5rem)]"
                        style={{ fontSize: `${fontSize * 1.3}px` }}
                      >
                        {activeLanguage === "hi" ? "महत्वपूर्ण टिप्पणियां" : "Important Notes"}
                      </h1>

                      {getFilteredSections()
                        .filter(item => item.section.startsWith('notes'))
                        .map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="mb-12 last:mb-0"
                          >
                            {item.subHeading && (
                              <h2 
                                className="mb-4 font-bold text-blue-600 text-[clamp(1.6rem,3vw,2rem)]"
                                style={{ fontSize: `${fontSize * 1.2}px` }}
                              >
                                {item.subHeading}
                              </h2>
                            )}

                            <div
                              className="mb-6 text-gray-800 leading-relaxed text-[clamp(1.1rem,2.5vw,1.5rem)]"
                              style={{ fontSize: `${fontSize}px` }}
                              dangerouslySetInnerHTML={{ __html: item.body }}
                            />

                            {item.buttons?.length > 0 && (
                              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                                {item.buttons.map((btn, i) => (
                                  <a
                                    key={i}
                                    href={btn.url}
                                    target={btn.target || "_self"}
                                    rel="noopener noreferrer"
                                    className="
                                      px-5 py-3
                                      bg-gradient-to-r from-orange-400 to-orange-500
                                      text-white font-bold
                                      rounded-xl
                                      transition-all duration-300
                                      hover:from-orange-500 hover:to-orange-600
                                      hover:shadow-lg
                                      flex items-center gap-2
                                    "
                                  >
                                    {btn.label}
                                    {btn.target === '_blank' && <FaExternalLinkAlt size={14} />}
                                  </a>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        ))}
                    </motion.div>
                  )}

                  {/* Language Toggle Preview */}
                  {previewMode && (
                    <div className="mt-10 flex justify-center">
                      <button
                        className="
                          bg-gradient-to-r from-blue-600 to-blue-700
                          text-white font-bold
                          px-6 py-3
                          rounded-lg
                          shadow-lg
                          transition-all duration-300
                          hover:from-blue-700 hover:to-blue-800
                          hover:shadow-xl
                          flex items-center gap-2
                        "
                      >
                        <FaLanguage />
                        {activeLanguage === "hi" ? "Translate to English" : "Translate to Hindi"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Total Sections</div>
          <div className="text-2xl font-bold text-gray-800">
            {editingData[activeLanguage]?.length || 0}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Content Sections</div>
          <div className="text-2xl font-bold text-gray-800">
            {editingData[activeLanguage]?.filter(item => item.section.startsWith('content')).length || 0}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Notes Sections</div>
          <div className="text-2xl font-bold text-gray-800">
            {editingData[activeLanguage]?.filter(item => item.section.startsWith('notes')).length || 0}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <FaClock /> Last Saved
          </div>
          <div className="text-lg font-medium text-gray-800">
            {history.length > 0 
              ? new Date(history[history.length - 1].timestamp).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })
              : 'Never'
            }
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>CMS Mode: {isEditing ? 'Editing' : 'Viewing'} • Language: {activeLanguage.toUpperCase()} • Changes: {unsavedChanges ? 'Unsaved' : 'Saved'}</p>
      </div>
    </div>
  );
};

export default AdminImportantNotes;