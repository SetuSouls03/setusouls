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
  FaListOl,
  FaListUl,
  FaGlobe,
  FaLanguage,
  FaCopy,
  FaSearch,
  FaArrowsAltH,
  FaClock,
  FaHistory,
  FaTimes,
  FaCheck,
  FaRegClone,
  FaBold,
  FaItalic,
  FaUnderline,
  FaExternalLinkAlt
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://setusouls-1.onrender.com";

// Quill Editor wrapper to avoid deprecation
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

const AdminSummary = () => {
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
  const [activeLanguage, setActiveLanguage] = useState("english");
  const [activeSectionFilter, setActiveSectionFilter] = useState("all"); // "all", "first", "second", "third"
  const fileInputRef = useRef(null);

  // Section background mappings
  const sectionBgMapping = {
    "first-section": "bg-gradient-to-b from-[#f5deb3] to-[#fff7e0]",
    "second-section": "bg-gradient-to-b from-[#fcfbe3] to-[#fffef6]",
    "third-section": "bg-gradient-to-b from-[#f8f7e9] to-[#ffffff]",
  };

  const sectionNames = {
    "first-section": "First Section",
    "second-section": "Second Section",
    "third-section": "Third Section"
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log("Fetching data from:", `${API_BASE}/api/summary`);
      
      const res = await axios.get(`${API_BASE}/api/summary`);
      console.log("API Response:", res.data);
      
      let fetchedData = res.data;
      
      // Handle different response formats
      if (res.data && res.data.data) {
        // If response has { success: true, data: {...} } format
        fetchedData = res.data.data;
      } else if (res.data && res.data._id) {
        // If response is direct MongoDB document
        fetchedData = res.data;
      }
      
      console.log("Processed data:", fetchedData);
      
      // Ensure data structure is correct
      const formattedData = {
        sections: fetchedData.sections || [],
        highlight: fetchedData.highlight || { english: "", hindi: "" }
      };
      
      // Ensure sections have required structure
      if (formattedData.sections.length === 0) {
        console.warn("No sections found, initializing with default structure");
        formattedData.sections = [
          {
            className: "first-section",
            heading: { english: "", hindi: "" },
            paragraphs: [{ english: "", hindi: "" }],
            list: []
          },
          {
            className: "second-section",
            heading: { english: "", hindi: "" },
            paragraphs: [{ english: "", hindi: "" }],
            list: []
          },
          {
            className: "third-section",
            heading: { english: "", hindi: "" },
            paragraphs: [{ english: "", hindi: "" }],
            list: []
          }
        ];
      }
      
      // Ensure each section has proper structure
      formattedData.sections = formattedData.sections.map((section, index) => ({
        className: section.className || `${["first", "second", "third"][index]}-section`,
        heading: section.heading || { english: "", hindi: "" },
        paragraphs: section.paragraphs && Array.isArray(section.paragraphs) 
          ? section.paragraphs 
          : [{ english: "", hindi: "" }],
        list: section.list && Array.isArray(section.list) ? section.list : []
      }));
      
      console.log("Final formatted data:", formattedData);
      
      setData(formattedData);
      setEditingData(JSON.parse(JSON.stringify(formattedData)));
      
      setHistory([{ 
        timestamp: new Date(), 
        data: formattedData,
        id: Date.now()
      }]);
      
      toast.success("✅ Summary data loaded successfully!");
      
    } catch (err) {
      console.error("Failed to fetch summary data:", err);
      console.error("Error details:", err.response?.data || err.message);
      
      // Initialize with default structure
      const defaultData = {
        sections: [
          {
            className: "first-section",
            heading: { english: "First Section Heading", hindi: "पहला अनुभाग शीर्षक" },
            paragraphs: [{ english: "First paragraph content", hindi: "पहला अनुच्छेद विषय" }],
            list: []
          },
          {
            className: "second-section",
            heading: { english: "Second Section Heading", hindi: "दूसरा अनुभाग शीर्षक" },
            paragraphs: [{ english: "Second paragraph content", hindi: "दूसरा अनुच्छेद विषय" }],
            list: [
              { english: "First list item", hindi: "पहली सूची आइटम" },
              { english: "Second list item", hindi: "दूसरी सूची आइटम" }
            ]
          },
          {
            className: "third-section",
            heading: { english: "Third Section Heading", hindi: "तीसरा अनुभाग शीर्षक" },
            paragraphs: [{ english: "Third paragraph content", hindi: "तीसरा अनुच्छेद विषय" }],
            list: []
          }
        ],
        highlight: { 
          english: "Important highlight text goes here", 
          hindi: "महत्वपूर्ण हाइलाइट पाठ यहाँ आता है" 
        }
      };
      
      setData(defaultData);
      setEditingData(JSON.parse(JSON.stringify(defaultData)));
      
      if (err.response?.status === 404) {
        toast.error("❌ API endpoint not found. Check backend deployment.");
      } else {
        toast.error("❌ Failed to load summary data. Using default data.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Test API connection
  const testAPI = async () => {
    try {
      console.log("Testing API connection...");
      const res = await axios.get(`${API_BASE}/api/summary`);
      console.log("API Test Response:", res.data);
      toast.success(`✅ API is working! Status: ${res.status}`);
    } catch (err) {
      console.error("API Test Error:", err);
      toast.error(`❌ API Error: ${err.message}`);
    }
  };

  // Handle input changes
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
      if (keys[keys.length - 1] === "heading" || 
          keys[keys.length - 1] === "highlight") {
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

  // Handle paragraph content change
  const handleParagraphChange = (sectionIndex, paraIndex, value, lang = activeLanguage) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      if (!newData.sections[sectionIndex]) {
        newData.sections[sectionIndex] = { paragraphs: [] };
      }
      if (!newData.sections[sectionIndex].paragraphs[paraIndex]) {
        newData.sections[sectionIndex].paragraphs[paraIndex] = {};
      }
      newData.sections[sectionIndex].paragraphs[paraIndex][lang] = value;
      setUnsavedChanges(true);
      return newData;
    });
  };

  // Handle list item change
  const handleListItemChange = (sectionIndex, itemIndex, value, lang = activeLanguage) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      if (!newData.sections[sectionIndex]) {
        newData.sections[sectionIndex] = { list: [] };
      }
      if (!newData.sections[sectionIndex].list[itemIndex]) {
        newData.sections[sectionIndex].list[itemIndex] = {};
      }
      newData.sections[sectionIndex].list[itemIndex][lang] = value;
      setUnsavedChanges(true);
      return newData;
    });
  };

  // Add new paragraph to section
  const addParagraph = (sectionIndex) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      if (!newData.sections[sectionIndex]) {
        newData.sections[sectionIndex] = { paragraphs: [] };
      }
      if (!newData.sections[sectionIndex].paragraphs) {
        newData.sections[sectionIndex].paragraphs = [];
      }
      newData.sections[sectionIndex].paragraphs.push({
        english: "",
        hindi: ""
      });
      setUnsavedChanges(true);
      return newData;
    });
    toast.success("Paragraph added");
  };

  // Remove paragraph from section
  const removeParagraph = (sectionIndex, paraIndex) => {
    if (!editingData?.sections[sectionIndex]?.paragraphs || 
        editingData.sections[sectionIndex].paragraphs.length <= 1) {
      toast.error("Cannot remove the last paragraph");
      return;
    }
    
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      newData.sections[sectionIndex].paragraphs = 
        newData.sections[sectionIndex].paragraphs.filter((_, i) => i !== paraIndex);
      setUnsavedChanges(true);
      return newData;
    });
    toast.success("Paragraph removed");
  };

  // Add new list item to section
  const addListItem = (sectionIndex) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      if (!newData.sections[sectionIndex]) {
        newData.sections[sectionIndex] = { list: [] };
      }
      if (!newData.sections[sectionIndex].list) {
        newData.sections[sectionIndex].list = [];
      }
      newData.sections[sectionIndex].list.push({
        english: "",
        hindi: ""
      });
      setUnsavedChanges(true);
      return newData;
    });
    toast.success("List item added");
  };

  // Remove list item from section
  const removeListItem = (sectionIndex, itemIndex) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      if (newData.sections[sectionIndex]?.list) {
        newData.sections[sectionIndex].list = 
          newData.sections[sectionIndex].list.filter((_, i) => i !== itemIndex);
        setUnsavedChanges(true);
      }
      return newData;
    });
    toast.success("List item removed");
  };

  // Save changes
  const saveChanges = async () => {
    setLoading(true);
    try {
      // Prepare data for saving
      const dataToSave = {
        sections: editingData.sections || [],
        highlight: editingData.highlight || { english: "", hindi: "" }
      };

      console.log("Saving data:", dataToSave);

      // Try PUT endpoint first
      let res;
      try {
        res = await axios.put(`${API_BASE}/api/summary`, dataToSave);
        console.log("PUT Response:", res.data);
      } catch (putError) {
        console.log("PUT failed, trying POST:", putError.message);
        // Try POST as fallback
        res = await axios.post(`${API_BASE}/api/summary`, dataToSave);
        console.log("POST Response:", res.data);
      }

      // Update local state
      setData(editingData);
      setIsEditing(false);
      setUnsavedChanges(false);
      
      // Add to history
      setHistory(prev => [
        ...prev.slice(-9),
        { 
          timestamp: new Date(), 
          data: editingData,
          id: Date.now()
        }
      ]);
      
      toast.success("✅ Summary saved successfully!");
      
      // Refresh data from server
      fetchData();
      
    } catch (err) {
      console.error("Save error:", err);
      console.error("Error details:", err.response?.data || err.message);
      
      if (err.response?.status === 404) {
        toast.error("❌ Save endpoint not found. Please deploy PUT/POST endpoint.");
      } else if (err.response?.data?.message) {
        toast.error("❌ " + err.response.data.message);
      } else {
        toast.error("❌ Failed to save summary. Check console for details.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Revert changes
  const revertChanges = () => {
    if (data) {
      setEditingData(JSON.parse(JSON.stringify(data)));
      setIsEditing(false);
      setUnsavedChanges(false);
      toast.success("↩️ Changes reverted");
    } else {
      toast.error("No original data to revert to");
    }
  };

  // Export data
  const exportData = () => {
    const dataStr = JSON.stringify(editingData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `summary-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("📥 Summary exported successfully");
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
        if (importedData.sections && importedData.highlight) {
          setEditingData(importedData);
          setUnsavedChanges(true);
          toast.success("📤 Summary imported successfully");
        } else {
          toast.error("❌ Invalid summary data format");
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
    setUnsavedChanges(true);
    toast.success("🕰️ Restored from history");
  };

  // Clear all content
  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all summary content? This cannot be undone.")) {
      const defaultData = {
        sections: [
          {
            className: "first-section",
            heading: { english: "New Heading", hindi: "नई शीर्षक" },
            paragraphs: [{ english: "New paragraph content", hindi: "नया अनुच्छेद विषय" }],
            list: []
          },
          {
            className: "second-section",
            heading: { english: "New Heading", hindi: "नई शीर्षक" },
            paragraphs: [{ english: "New paragraph content", hindi: "नया अनुच्छेद विषय" }],
            list: [{ english: "List item 1", hindi: "सूची आइटम १" }]
          },
          {
            className: "third-section",
            heading: { english: "New Heading", hindi: "नई शीर्षक" },
            paragraphs: [{ english: "New paragraph content", hindi: "नया अनुच्छेद विषय" }],
            list: []
          }
        ],
        highlight: { 
          english: "Important highlight text goes here", 
          hindi: "महत्वपूर्ण हाइलाइट पाठ यहाँ आता है" 
        }
      };
      setEditingData(defaultData);
      setUnsavedChanges(true);
      toast.success("🧹 Summary cleared and reset");
    }
  };

  // Filter sections
  const getFilteredSections = () => {
    if (!editingData?.sections) return [];
    
    if (activeSectionFilter === "all") return editingData.sections;
    
    return editingData.sections.filter(section => 
      section.className === `${activeSectionFilter}-section`
    );
  };

  // Debug function to check data structure
  const debugData = () => {
    console.log("=== DEBUG DATA ===");
    console.log("Original Data:", data);
    console.log("Editing Data:", editingData);
    console.log("Sections Count:", editingData?.sections?.length);
    console.log("First Section:", editingData?.sections?.[0]);
    console.log("Active Language:", activeLanguage);
    console.log("==================");
    toast.success("📊 Data structure logged to console");
  };

  if (loading && !editingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Summary CMS...</p>
          <button 
            onClick={testAPI}
            className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
          >
            Test API Connection
          </button>
        </div>
      </div>
    );
  }

  if (!editingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 font-bold text-xl mb-4">Failed to load summary data</p>
          <button 
            onClick={fetchData}
            className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
          >
            Retry Loading Data
          </button>
          <button 
            onClick={testAPI}
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Test API
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 p-4 md:p-6">
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

      {/* Debug Button */}
      <button 
        onClick={debugData}
        className="fixed bottom-4 right-4 z-50 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-70 hover:opacity-100"
      >
        Debug Data
      </button>

      {/* Language Selector */}
      <div className="mb-6 bg-white rounded-xl shadow-lg p-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaLanguage className="text-amber-600 text-xl" />
              <span className="font-medium text-gray-700">Editing Language:</span>
            </div>
            <div className="flex gap-2">
              {["english", "hindi"].map(lang => (
                <button
                  key={lang}
                  onClick={() => setActiveLanguage(lang)}
                  className={`px-4 py-2 rounded-lg transition-all ${activeLanguage === lang
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {lang === 'hindi' ? 'Hindi' : 'English'}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={testAPI}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2"
            >
              Test API
            </button>
            <button 
              onClick={fetchData}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-2"
            >
              Refresh Data
            </button>
          </div>
        </div>
      </div>

      {/* Preview Toggle */}
      <div className="flex justify-end mb-4 gap-2">
        <button
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${!previewMode
            ? 'bg-white text-amber-600 shadow-lg'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          onClick={() => setPreviewMode(false)}
        >
          <FaEdit /> Edit Mode
        </button>
        <button
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${previewMode
            ? 'bg-white text-amber-600 shadow-lg'
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
              <FaPalette className="text-amber-600" /> Summary Page CMS
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
                  className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <FaSave /> Save Summary
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
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            {["all", "first", "second", "third"].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveSectionFilter(filter)}
                className={`px-4 py-2 rounded-lg capitalize ${activeSectionFilter === filter
                  ? 'bg-amber-100 text-amber-700 border border-amber-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter === "all" ? "All Sections" : `${filter} Section`}
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
                      ? 'text-amber-600 border-b-2 border-amber-600'
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
                {activeTab === 'content' && editingData && (
                  <div className="space-y-6">
                    {/* Highlight Section */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaHeading className="text-amber-500" /> Highlight Section
                      </h3>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Highlight Text ({activeLanguage})
                        </label>
                        {isEditing ? (
                          <QuillEditor
                            value={editingData.highlight?.[activeLanguage] || ""}
                            onChange={(value) => handleInputChange('highlight', value)}
                            disabled={!isEditing}
                          />
                        ) : (
                          <div 
                            className="p-3 border border-gray-300 rounded-lg bg-gray-50 min-h-[42px]"
                            dangerouslySetInnerHTML={{ 
                              __html: editingData.highlight?.[activeLanguage]?.replace(/\n/g, "<br />") || "" 
                            }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Sections */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Sections ({getFilteredSections().length})
                      </h3>
                      
                      <div className="space-y-4">
                        {getFilteredSections().map((section, sectionIndex) => (
                          <div key={sectionIndex} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-600">
                                  {sectionNames[section.className] || section.className}
                                </span>
                                <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                                  {section.className}
                                </span>
                              </div>
                            </div>

                            {/* Section Heading */}
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Heading ({activeLanguage})
                              </label>
                              {isEditing ? (
                                <QuillEditor
                                  value={section.heading?.[activeLanguage] || ""}
                                  onChange={(value) => 
                                    handleInputChange(`sections.${sectionIndex}.heading`, value)
                                  }
                                  disabled={!isEditing}
                                />
                              ) : (
                                <div 
                                  className="p-3 border border-gray-300 rounded-lg bg-gray-50 min-h-[42px]"
                                  dangerouslySetInnerHTML={{ 
                                    __html: section.heading?.[activeLanguage]?.replace(/\n/g, "<br />") || "" 
                                  }}
                                />
                              )}
                            </div>

                            {/* Paragraphs */}
                            <div className="mb-4">
                              <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                  Paragraphs ({section.paragraphs?.length || 0})
                                </label>
                                {isEditing && (
                                  <button
                                    onClick={() => addParagraph(sectionIndex)}
                                    className="px-2 py-1 text-sm bg-amber-100 text-amber-700 rounded hover:bg-amber-200"
                                  >
                                    <FaPlus /> Add Paragraph
                                  </button>
                                )}
                              </div>
                              
                              <div className="space-y-3">
                                {section.paragraphs?.map((para, paraIndex) => (
                                  <div key={paraIndex} className="border border-gray-200 rounded p-3">
                                    <div className="flex justify-between items-center mb-2">
                                      <span className="text-sm font-medium text-gray-600">
                                        Paragraph {paraIndex + 1}
                                      </span>
                                      {isEditing && section.paragraphs.length > 1 && (
                                        <button
                                          onClick={() => removeParagraph(sectionIndex, paraIndex)}
                                          className="text-red-500 hover:text-red-700"
                                        >
                                          <FaTrash size={14} />
                                        </button>
                                      )}
                                    </div>
                                    {isEditing ? (
                                      <QuillEditor
                                        value={para[activeLanguage] || ""}
                                        onChange={(value) => 
                                          handleParagraphChange(sectionIndex, paraIndex, value)
                                        }
                                        disabled={!isEditing}
                                      />
                                    ) : (
                                      <div 
                                        className="p-2 border border-gray-300 rounded bg-gray-50 min-h-[42px]"
                                        dangerouslySetInnerHTML={{ 
                                          __html: para[activeLanguage]?.replace(/\n/g, "<br />") || "" 
                                        }}
                                      />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* List Items */}
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                  List Items ({section.list?.length || 0})
                                </label>
                                {isEditing && (
                                  <button
                                    onClick={() => addListItem(sectionIndex)}
                                    className="px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                                  >
                                    <FaPlus /> Add List Item
                                  </button>
                                )}
                              </div>
                              
                              <div className="space-y-2">
                                {section.list?.map((item, itemIndex) => (
                                  <div key={itemIndex} className="border border-gray-200 rounded p-3">
                                    <div className="flex justify-between items-center mb-2">
                                      <span className="text-sm font-medium text-gray-600">
                                        Item {itemIndex + 1}
                                      </span>
                                      {isEditing && (
                                        <button
                                          onClick={() => removeListItem(sectionIndex, itemIndex)}
                                          className="text-red-500 hover:text-red-700"
                                        >
                                          <FaTrash size={14} />
                                        </button>
                                      )}
                                    </div>
                                    {isEditing ? (
                                      <QuillEditor
                                        value={item[activeLanguage] || ""}
                                        onChange={(value) => 
                                          handleListItemChange(sectionIndex, itemIndex, value)
                                        }
                                        disabled={!isEditing}
                                      />
                                    ) : (
                                      <div 
                                        className="p-2 border border-gray-300 rounded bg-gray-50 min-h-[42px]"
                                        dangerouslySetInnerHTML={{ 
                                          __html: item[activeLanguage]?.replace(/\n/g, "<br />") || "" 
                                        }}
                                      />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
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
                        <FaPalette className="text-amber-500" /> Font Size
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
                        {Object.entries(sectionBgMapping).map(([section, gradient]) => (
                          <div key={section} className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 capitalize">
                              {section.replace('-', ' ')}
                            </label>
                            <div 
                              className="w-full h-10 rounded-lg border border-gray-300"
                              style={{ background: gradient.split(' ')[2] }}
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
                        <FaHistory className="text-amber-500" /> Version History
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
                              className="px-3 py-1 text-sm bg-amber-100 text-amber-700 rounded hover:bg-amber-200 disabled:opacity-50"
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
                        <FaArrowsAltH className="text-amber-500" /> Data Management
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
                  <FaEye className="text-amber-500" /> Live Preview
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded">
                    {previewMode ? "Preview Mode" : "Live Edit"}
                  </span>
                </h3>
                <span className="text-sm text-gray-500">
                  Language: {activeLanguage === 'hindi' ? 'Hindi' : 'English'}
                </span>
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              <div className={`transition-all duration-300 ${previewMode ? 'scale-100' : 'scale-95'}`}>
                {/* Preview Container */}
                <div className="min-h-[600px]">
                  {editingData?.sections?.map((section, idx) => (
                    <motion.section
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                      className={`py-20 px-10 sm:px-6 ${sectionBgMapping[section.className]}`}
                    >
                      <h1
                        className="text-[#0702bc] text-center mb-3 text-[clamp(1.7rem,4vw,3.2rem)] font-bold"
                        style={{ fontSize: `${fontSize * 1.5}px` }}
                        dangerouslySetInnerHTML={{
                          __html: section.heading?.[activeLanguage]?.replace(/\n/g, "<br />") || ""
                        }}
                      />

                      {section.paragraphs?.map((para, pIdx) => (
                        <React.Fragment key={pIdx}>
                          <p
                            className="text-[#333] text-justify max-w-[900px] mx-auto text-[clamp(1rem,2.5vw,1.5rem)] font-bold"
                            style={{ fontSize: `${fontSize}px` }}
                            dangerouslySetInnerHTML={{
                              __html: para[activeLanguage]?.replace(/\n/g, "<br />") || ""
                            }}
                          />

                          {/* Insert OL for second-section after first paragraph */}
                          {section.className === "second-section" &&
                            pIdx === 0 &&
                            section.list && (
                              <ol className="max-w-[900px] mx-auto pl-10 text-[#333] my-5 list-decimal font-bold text-[clamp(1rem,2.5vw,1.5rem)]">
                                {section.list.map((item, lIdx) => (
                                  <li
                                    key={lIdx}
                                    dangerouslySetInnerHTML={{
                                      __html: item[activeLanguage]?.replace(/\n/g, "<br />") || ""
                                    }}
                                    className="text-[#0702bc] mb-2"
                                  />
                                ))}
                              </ol>
                            )}
                        </React.Fragment>
                      ))}

                      {/* For other sections with list */}
                      {section.className !== "second-section" &&
                        section.list && (
                          <ol className="max-w-[900px] mx-auto pl-10 text-[#333] my-5 list-decimal font-bold text-[clamp(1rem,2.5vw,1.5rem)]">
                            {section.list.map((item, lIdx) => (
                              <li
                                key={lIdx}
                                dangerouslySetInnerHTML={{
                                  __html: item[activeLanguage]?.replace(/\n/g, "<br />") || ""
                                }}
                                className="text-[#0702bc] mb-2"
                              />
                            ))}
                          </ol>
                        )}
                    </motion.section>
                  ))}

                  {/* Language Toggle Preview */}
                  {previewMode && (
                    <div className="flex justify-center my-10">
                      <button
                        className="bg-[#0702bc] text-white font-bold rounded-lg px-6 py-3 text-[clamp(0.95rem,2vw,1.2rem)] shadow-md hover:bg-[#5351c4] transition-all duration-300 border-none"
                      >
                        {activeLanguage === "english" ? "Translate to Hindi" : "Translate to English"}
                      </button>
                    </div>
                  )}

                  {/* Highlight Section Preview */}
                  {editingData?.highlight && (
                    <section
                      className="text-white text-center py-16 px-32 sm:px-6 font-bold text-[clamp(1rem,2.5vw,1.5rem)]"
                      style={{ background: "radial-gradient(circle, #0702bc 1%, #000 120%)" }}
                    >
                      <p 
                        className="max-w-4xl mx-auto"
                        dangerouslySetInnerHTML={{
                          __html: editingData.highlight[activeLanguage]?.replace(/\n/g, "<br />") || ""
                        }}
                      />
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
          <div className="text-sm text-gray-500">Total Sections</div>
          <div className="text-2xl font-bold text-gray-800">
            {editingData?.sections?.length || 0}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Total Paragraphs</div>
          <div className="text-2xl font-bold text-gray-800">
            {editingData?.sections?.reduce((acc, section) => acc + (section.paragraphs?.length || 0), 0) || 0}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">List Items</div>
          <div className="text-2xl font-bold text-gray-800">
            {editingData?.sections?.reduce((acc, section) => acc + (section.list?.length || 0), 0) || 0}
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
        <p>CMS Mode: {isEditing ? 'Editing' : 'Viewing'} • Language: {activeLanguage} • Changes: {unsavedChanges ? 'Unsaved' : 'Saved'}</p>
      </div>
    </div>
  );
};

export default AdminSummary;