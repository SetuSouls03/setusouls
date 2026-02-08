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
  FaImage,
  FaListUl,
  FaLanguage,
  FaCopy,
  FaSearch,
  FaArrowsAltH,
  FaClock,
  FaHistory,
  FaTimes,
  FaCheck,
  FaRegClone,
  FaExternalLinkAlt
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://setusouls-1.onrender.com";

// Quill Editor wrapper
const QuillEditor = React.forwardRef((props, ref) => {
  const { value, onChange, disabled, ...rest } = props;
  
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ],
  };

  const quillFormats = [
    'header', 'bold', 'italic', 'underline',
    'list', 'bullet'
  ];
  
  return (
    <ReactQuill
      ref={ref}
      theme="snow"
      value={value}
      onChange={onChange}
      readOnly={disabled}
      modules={quillModules}
      formats={quillFormats}
      className="rounded-lg overflow-hidden border border-gray-300"
      {...rest}
    />
  );
});

QuillEditor.displayName = 'QuillEditor';

const AdminOtherSection = () => {
  // State management
  const [data, setData] = useState(null);
  const [editingData, setEditingData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [previewMode, setPreviewMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [activeSectionType, setActiveSectionType] = useState("all");
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const [currentImageSection, setCurrentImageSection] = useState(null);

  // Section background colors matching your page
  const sectionBgColors = {
    "section1": "bg-[#ffefe4]",
    "section2": "bg-[#ffffe6]",
    "section3": "bg-[#f4faff]",
    "sectiona3": "bg-[#f4faff]"
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/api/page/other`);
      
      let fetchedData = res.data;
      
      // Handle different response formats
      if (res.data?.data) {
        fetchedData = res.data.data;
      }
      
      // Set data directly - no static/default data
      setData(fetchedData);
      setEditingData(JSON.parse(JSON.stringify(fetchedData)));
      
      setHistory([{ 
        timestamp: new Date(), 
        data: fetchedData,
        id: Date.now()
      }]);
      
      toast.success("✅ Page data loaded!");
      
    } catch (err) {
      console.error("Failed to fetch page data:", err);
      toast.error("❌ Failed to load page data");
      
      // Set empty state instead of static data
      setData(null);
      setEditingData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (path, value, lang = activeLanguage) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
      
      // Handle language-specific fields
      if (keys[keys.length - 1] === "title" || keys[keys.length - 1] === "description") {
        if (!current[keys[keys.length - 1]]) {
          current[keys[keys.length - 1]] = {};
        }
        current[keys[keys.length - 1]][lang] = value;
      } else {
        current[keys[keys.length - 1]] = value;
      }
      
      setUnsavedChanges(true);
      return newData;
    });
  };

  const handleSummaryItemChange = (index, value, lang = activeLanguage) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      if (!newData.summary[lang]) {
        newData.summary[lang] = [];
      }
      newData.summary[lang][index] = value;
      setUnsavedChanges(true);
      return newData;
    });
  };

  const addSection = () => {
    const newId = `section${editingData.sections.length + 1}`;
    const newSection = {
      id: newId,
      title: { en: "", hi: "" },
      description: { en: "", hi: "" },
      image: ""
    };
    
    setEditingData(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
    
    toast.success("New section added");
    setUnsavedChanges(true);
  };

  const removeSection = (index) => {
    if (editingData.sections.length <= 1) {
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

  const addSummaryItem = (lang = activeLanguage) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      if (!newData.summary[lang]) {
        newData.summary[lang] = [];
      }
      newData.summary[lang].push("");
      setUnsavedChanges(true);
      return newData;
    });
    
    toast.success("Summary item added");
  };

  const removeSummaryItem = (index, lang = activeLanguage) => {
    if (editingData.summary[lang]?.length <= 1) {
      toast.error("Cannot remove the last summary item");
      return;
    }
    
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      newData.summary[lang] = newData.summary[lang].filter((_, i) => i !== index);
      setUnsavedChanges(true);
      return newData;
    });
    
    toast.success("Summary item removed");
  };

  const updateImage = (sectionIndex, imageUrl) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      newData.sections[sectionIndex].image = imageUrl;
      setUnsavedChanges(true);
      return newData;
    });
    
    toast.success("Image updated");
  };

  const saveChanges = async () => {
    setLoading(true);
    try {
      // First try PUT
      let res;
      try {
        res = await axios.put(`${API_BASE}/api/page/other`, editingData);
      } catch (putErr) {
        // Try POST as fallback
        res = await axios.post(`${API_BASE}/api/page/other`, editingData);
      }

      setData(editingData);
      setIsEditing(false);
      setUnsavedChanges(false);
      
      setHistory(prev => [
        ...prev.slice(-9),
        { 
          timestamp: new Date(), 
          data: editingData,
          id: Date.now()
        }
      ]);
      
      toast.success("✅ Page saved successfully!");
      
    } catch (err) {
      console.error("Save error:", err);
      
      if (err.response?.status === 404) {
        toast.error("❌ Save endpoint not found");
      } else {
        toast.error("❌ Failed to save page");
      }
    } finally {
      setLoading(false);
    }
  };

  const revertChanges = () => {
    if (data) {
      setEditingData(JSON.parse(JSON.stringify(data)));
      setIsEditing(false);
      setUnsavedChanges(false);
      toast.success("↩️ Changes reverted");
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(editingData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `other-page-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("📥 Data exported");
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (importedData.sections && importedData.summary) {
          setEditingData(importedData);
          setUnsavedChanges(true);
          toast.success("📤 Data imported");
        } else {
          toast.error("❌ Invalid data format");
        }
      } catch (err) {
        toast.error("❌ Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  const restoreFromHistory = (historyItem) => {
    setEditingData(historyItem.data);
    setUnsavedChanges(true);
    toast.success("🕰️ Restored from history");
  };

  const getFilteredSections = () => {
    if (!editingData?.sections) return [];
    
    if (activeSectionType === "all") return editingData.sections;
    if (activeSectionType === "withImage") {
      return editingData.sections.filter(section => section.image);
    }
    if (activeSectionType === "withoutImage") {
      return editingData.sections.filter(section => !section.image);
    }
    
    return editingData.sections;
  };

  if (loading && !editingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading CMS...</p>
        </div>
      </div>
    );
  }

  if (!editingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 font-bold text-xl mb-4">No page data available</p>
          <button 
            onClick={fetchData}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Load Data
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 p-4 md:p-6">
      <Toaster position="top-right" />
      
      {/* Language Selector */}
      <div className="mb-6 bg-white rounded-xl shadow-lg p-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <FaLanguage className="text-purple-600 text-xl" />
            <span className="font-medium text-gray-700">Language:</span>
          </div>
          <div className="flex gap-2">
            {["en", "hi"].map(lang => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`px-4 py-2 rounded-lg transition-all ${activeLanguage === lang
                  ? 'bg-purple-600 text-white shadow-md'
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
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${!previewMode
            ? 'bg-white text-purple-600 shadow-lg'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          onClick={() => setPreviewMode(false)}
        >
          <FaEdit /> Edit Mode
        </button>
        <button
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${previewMode
            ? 'bg-white text-purple-600 shadow-lg'
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
              <FaPalette className="text-purple-600" /> Other Page CMS
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${unsavedChanges
              ? 'bg-amber-100 text-amber-800'
              : 'bg-green-100 text-green-800'
            }`}>
              {unsavedChanges ? "● Unsaved" : "✓ Saved"}
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
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <FaSave /> Save Page
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
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            {["all", "withImage", "withoutImage"].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveSectionType(filter)}
                className={`px-4 py-2 rounded-lg capitalize ${activeSectionType === filter
                  ? 'bg-purple-100 text-purple-700 border border-purple-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.replace(/([A-Z])/g, ' $1').trim()}
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
                      ? 'text-purple-600 border-b-2 border-purple-600'
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
                    {/* Sections Management */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-gray-800">
                          Sections ({getFilteredSections().length})
                        </h3>
                        {isEditing && (
                          <button
                            onClick={addSection}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors flex items-center gap-1 text-sm"
                          >
                            <FaPlus /> Add Section
                          </button>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        {getFilteredSections().map((section, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-600">
                                  {section.id}
                                </span>
                                <span className={`px-2 py-1 text-xs rounded ${sectionBgColors[section.id] || 'bg-gray-100'}`}>
                                  {section.image ? "With Image" : "No Image"}
                                </span>
                              </div>
                              {isEditing && editingData.sections.length > 1 && (
                                <button
                                  onClick={() => removeSection(index)}
                                  className="p-1 text-gray-400 hover:text-red-600"
                                  title="Delete"
                                >
                                  <FaTrash />
                                </button>
                              )}
                            </div>

                            {/* Section ID */}
                            <div className="mb-3">
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Section ID
                              </label>
                              <input
                                type="text"
                                value={section.id}
                                onChange={(e) => handleInputChange(`sections.${index}.id`, e.target.value)}
                                disabled={!isEditing}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                              />
                            </div>

                            {/* Title */}
                            <div className="mb-3">
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Title ({activeLanguage === 'hi' ? 'Hindi' : 'English'})
                              </label>
                              {isEditing ? (
                                <QuillEditor
                                  value={section.title?.[activeLanguage] || ""}
                                  onChange={(value) => handleInputChange(`sections.${index}.title`, value)}
                                  disabled={!isEditing}
                                />
                              ) : (
                                <div 
                                  className="p-3 border border-gray-300 rounded-lg bg-gray-50 min-h-[42px]"
                                  dangerouslySetInnerHTML={{ 
                                    __html: section.title?.[activeLanguage]?.replace(/\n/g, "<br />") || "" 
                                  }}
                                />
                              )}
                            </div>

                            {/* Description */}
                            <div className="mb-3">
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description ({activeLanguage === 'hi' ? 'Hindi' : 'English'})
                              </label>
                              {isEditing ? (
                                <QuillEditor
                                  value={section.description?.[activeLanguage] || ""}
                                  onChange={(value) => handleInputChange(`sections.${index}.description`, value)}
                                  disabled={!isEditing}
                                />
                              ) : (
                                <div 
                                  className="p-3 border border-gray-300 rounded-lg bg-gray-50 min-h-[42px]"
                                  dangerouslySetInnerHTML={{ 
                                    __html: section.description?.[activeLanguage]?.replace(/\n/g, "<br />") || "" 
                                  }}
                                />
                              )}
                            </div>

                            {/* Image Upload */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Image URL
                              </label>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  value={section.image || ""}
                                  onChange={(e) => updateImage(index, e.target.value)}
                                  disabled={!isEditing}
                                  placeholder="https://example.com/image.jpg"
                                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                                />
                              </div>
                              {section.image && (
                                <div className="mt-2">
                                  <img 
                                    src={section.image} 
                                    alt="Preview" 
                                    className="w-full h-32 object-cover rounded-lg border"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.parentElement.innerHTML = '<div class="text-red-500 text-sm">Failed to load image</div>';
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Summary Section */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-gray-800">
                          Summary Points ({editingData.summary?.[activeLanguage]?.length || 0})
                        </h3>
                        {isEditing && (
                          <button
                            onClick={() => addSummaryItem()}
                            className="px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-1 text-sm"
                          >
                            <FaPlus /> Add Point
                          </button>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        {editingData.summary?.[activeLanguage]?.map((item, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-600">
                                Point {index + 1}
                              </span>
                              {isEditing && editingData.summary[activeLanguage].length > 1 && (
                                <button
                                  onClick={() => removeSummaryItem(index)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <FaTrash size={14} />
                                </button>
                              )}
                            </div>
                            {isEditing ? (
                              <QuillEditor
                                value={item || ""}
                                onChange={(value) => handleSummaryItemChange(index, value)}
                                disabled={!isEditing}
                              />
                            ) : (
                              <div 
                                className="p-2 border border-gray-300 rounded bg-gray-50 min-h-[42px]"
                                dangerouslySetInnerHTML={{ 
                                  __html: item?.replace(/\n/g, "<br />") || "" 
                                }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Style Tab */}
                {activeTab === 'style' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaPalette className="text-purple-500" /> Font Size
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
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Section Colors</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(sectionBgColors).map(([sectionId, colorClass]) => (
                          <div key={sectionId} className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                              {sectionId}
                            </label>
                            <div 
                              className={`w-full h-10 rounded-lg border border-gray-300 ${colorClass}`}
                            />
                          </div>
                        ))}
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
                        <FaHistory className="text-purple-500" /> Version History
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
                              className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 disabled:opacity-50"
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
                <span className="text-sm text-gray-500">
                  Language: {activeLanguage === 'hi' ? 'Hindi' : 'English'}
                </span>
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              <div className={`transition-all duration-300 ${previewMode ? 'scale-100' : 'scale-95'}`}>
                {/* Preview Container */}
                <div className="min-h-[600px]">
                  {editingData?.sections?.map((sec, index) => (
                    <motion.section
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className={`py-12 border-b ${sectionBgColors[sec.id] || 'bg-gray-50'}`}
                    >
                      {/* For sections WITHOUT images */}
                      {!sec.image ? (
                        <div className="flex justify-center">
                          <div className="max-w-[1700px] w-full px-6">
                            <h1
                              className="text-[#0904b8] font-bold text-[2.6rem] mb-4 text-center max-md:text-center max-md:text-[1.8rem]"
                              style={{ fontSize: `${fontSize * 1.5}px` }}
                              dangerouslySetInnerHTML={{
                                __html: sec.title?.[activeLanguage]?.replace(/\n/g, "<br />") || ""
                              }}
                            />
                            <h3
                              className="text-black font-bold text-[1.4rem] leading-[1.8] text-justify w-full max-md:text-center max-md:text-[1rem]"
                              style={{ fontSize: `${fontSize}px` }}
                              dangerouslySetInnerHTML={{
                                __html: sec.description?.[activeLanguage]?.replace(/\n/g, "<br />") || ""
                              }}
                            />
                          </div>
                        </div>
                      ) : (
                        /* For sections WITH images */
                        <div
                          className={`
                            max-w-[1700px] mx-auto px-6
                            flex items-center justify-center gap-32
                            ${sec.id === "sectiona3"
                              ? "flex-col text-center"
                              : index % 2 === 0
                              ? "flex-row"
                              : "flex-row-reverse"
                            }
                            max-lg:flex-col
                          `}
                        >
                          {/* Image */}
                          <img
                            src={sec.image}
                            alt={sec.id}
                            className="w-full max-w-[638px] h-[41rem] max-lg:h-auto max-lg:max-w-[500px] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] mx-auto"
                          />

                          {/* Text */}
                          <div className="max-w-[1000px]">
                            <h1
                              className="text-[#0904b8] font-bold text-[2.6rem] mb-4 text-left max-md:text-center max-md:text-[1.8rem]"
                              style={{ fontSize: `${fontSize * 1.5}px` }}
                              dangerouslySetInnerHTML={{
                                __html: sec.title?.[activeLanguage]?.replace(/\n/g, "<br />") || ""
                              }}
                            />
                            <h3
                              className="text-black font-bold text-[1.4rem] leading-[1.8] text-justify w-full max-md:text-center max-md:text-[1rem]"
                              style={{ fontSize: `${fontSize}px` }}
                              dangerouslySetInnerHTML={{
                                __html: sec.description?.[activeLanguage]?.replace(/\n/g, "<br />") || ""
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </motion.section>
                  ))}

                  {/* Language Toggle Preview */}
                  {previewMode && (
                    <div className="flex justify-center my-8">
                      <button
                        className="bg-[#0702bc] text-white font-bold px-6 py-3 rounded-lg text-lg shadow-[0_4px_12px_rgba(106,76,175,0.3)] transition hover:scale-105 border-none"
                      >
                        {activeLanguage === "en" ? "हिंदी में अनुवाद करें" : "Translate to English"}
                      </button>
                    </div>
                  )}

                  {/* Summary Highlight */}
                  {editingData?.summary && (
                    <section
                      className="bg-[radial-gradient(circle,#0702bc_1%,#000_120%)] text-white py-16"
                    >
                      <ul
                        className="max-w-4xl mx-auto text-center font-bold text-[clamp(1rem,2.5vw,1.5rem)] space-y-4 max-w-[1700px] w-full"
                      >
                        {editingData.summary[activeLanguage]?.map((item, idx) => (
                          <li key={idx} dangerouslySetInnerHTML={{ __html: item?.replace(/\n/g, "<br />") || "" }} />
                        ))}
                      </ul>
                    </section>
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
          <div className="text-sm text-gray-500">Sections</div>
          <div className="text-2xl font-bold text-gray-800">
            {editingData?.sections?.length || 0}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">With Images</div>
          <div className="text-2xl font-bold text-gray-800">
            {editingData?.sections?.filter(s => s.image).length || 0}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Summary Points</div>
          <div className="text-2xl font-bold text-gray-800">
            {editingData?.summary?.[activeLanguage]?.length || 0}
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
    </div>
  );
};

export default AdminOtherSection;