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
  FaSpellCheck,
  FaImage,
  FaCode,
  FaHistory,
  FaCheck,
  FaTimes,
  FaCopy,
  FaSearch,
  FaArrowsAltH,
  FaClock
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://setusouls-1.onrender.com";

const AdminHome = () => {
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
  const fileInputRef = useRef(null);

  // Quill editor modules
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'clean']
    ],
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/home`);
      const fetchedData = res.data;
      setData(fetchedData);
      setEditingData(JSON.parse(JSON.stringify(fetchedData)));
      setHistory([{ 
        timestamp: new Date(), 
        data: fetchedData,
        id: Date.now()
      }]);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load data");
    }
  };

  const handleInputChange = (path, value) => {
    setEditingData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      setUnsavedChanges(true);
      return newData;
    });
  };

  const addInfoBlock = () => {
    setEditingData(prev => ({
      ...prev,
      infoBlocks: [
        ...prev.infoBlocks,
        { text: "New info text", hindi: "नई जानकारी" }
      ]
    }));
    toast.success("New info block added");
    setUnsavedChanges(true);
  };

  const removeInfoBlock = (index) => {
    if (editingData.infoBlocks.length <= 1) {
      toast.error("Cannot remove the last info block");
      return;
    }
    
    setEditingData(prev => ({
      ...prev,
      infoBlocks: prev.infoBlocks.filter((_, i) => i !== index)
    }));
    toast.success("Info block removed");
    setUnsavedChanges(true);
  };

  const addMantra = () => {
    setEditingData(prev => ({
      ...prev,
      mantras: [
        ...prev.mantras,
        {
          sanskrit: "नवीन मन्त्रः\nद्वितीय पंक्तिः",
          meaning: "New mantra meaning",
          note: "Important notes about the new mantra"
        }
      ]
    }));
    toast.success("New mantra added");
    setUnsavedChanges(true);
  };

  const removeMantra = (index) => {
    if (editingData.mantras.length <= 1) {
      toast.error("Cannot remove the last mantra");
      return;
    }
    
    setEditingData(prev => ({
      ...prev,
      mantras: prev.mantras.filter((_, i) => i !== index)
    }));
    toast.success("Mantra removed");
    setUnsavedChanges(true);
  };

  const saveChanges = async () => {
    setLoading(true);
    try {
      const res = await axios.put(`${API_BASE}/api/home`, editingData);
      setData(editingData);
      setIsEditing(false);
      setUnsavedChanges(false);
      
      setHistory(prev => [
        ...prev.slice(-9), // Keep last 10 items
        { 
          timestamp: new Date(), 
          data: editingData,
          id: Date.now()
        }
      ]);
      
      toast.success("✅ Changes saved successfully!");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to save changes");
    } finally {
      setLoading(false);
    }
  };

  const revertChanges = () => {
    setEditingData(JSON.parse(JSON.stringify(data)));
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
    link.download = `home-page-backup-${new Date().toISOString().split('T')[0]}.json`;
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
        setEditingData(importedData);
        setUnsavedChanges(true);
        toast.success("📤 Data imported successfully");
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

  const duplicateSection = (section, index) => {
    if (section === 'infoBlock') {
      const blockToDuplicate = editingData.infoBlocks[index];
      setEditingData(prev => ({
        ...prev,
        infoBlocks: [
          ...prev.infoBlocks.slice(0, index + 1),
          { ...blockToDuplicate },
          ...prev.infoBlocks.slice(index + 1)
        ]
      }));
      toast.success("📋 Info block duplicated");
    } else if (section === 'mantra') {
      const mantraToDuplicate = editingData.mantras[index];
      setEditingData(prev => ({
        ...prev,
        mantras: [
          ...prev.mantras.slice(0, index + 1),
          { ...mantraToDuplicate },
          ...prev.mantras.slice(index + 1)
        ]
      }));
      toast.success("📋 Mantra duplicated");
    }
    setUnsavedChanges(true);
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all content? This cannot be undone.")) {
      const defaultData = {
        title: "New Title",
        subtitle: "New Subtitle",
        infoBlocks: [{ text: "Enter text here", hindi: "यहाँ पाठ दर्ज करें" }],
        mantraSectionTitle: "Mantras",
        mantras: [{
          sanskrit: "New mantra\nSecond line",
          meaning: "Meaning here",
          note: "Important notes"
        }],
        callToAction: "Join us now!"
      };
      setEditingData(defaultData);
      setUnsavedChanges(true);
      toast.success("🧹 All content cleared");
    }
  };

  if (!data || !editingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading CMS Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
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
      <div className="flex justify-end mb-4 gap-2">
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

      {/* Control Bar */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaPalette className="text-indigo-600" /> Home Page CMS
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
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
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
              placeholder="Search in content..."
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
                {["content", "style", "tools"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-3 text-sm font-medium capitalize flex items-center justify-center gap-2 ${activeTab === tab 
                      ? 'text-indigo-600 border-b-2 border-indigo-600' 
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab === 'content' && <FaParagraph />}
                    {tab === 'style' && <FaPalette />}
                    {tab === 'tools' && <FaCode />}
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-4 max-h-[70vh] overflow-y-auto">
                {/* Content Tab */}
                {activeTab === 'content' && (
                  <div className="space-y-6">
                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaHeading className="text-indigo-500" /> Title & Subtitle
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title
                          </label>
                          <input
                            type="text"
                            value={editingData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Subtitle
                          </label>
                          <textarea
                            value={editingData.subtitle}
                            onChange={(e) => handleInputChange('subtitle', e.target.value)}
                            disabled={!isEditing}
                            rows="2"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Info Blocks */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                          <FaParagraph className="text-indigo-500" /> Info Blocks
                        </h3>
                        {isEditing && (
                          <button
                            onClick={addInfoBlock}
                            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors flex items-center gap-1 text-sm"
                          >
                            <FaPlus /> Add
                          </button>
                        )}
                      </div>
                      <div className="space-y-4">
                        {editingData.infoBlocks.map((block, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-sm font-medium text-gray-600">
                                Block {index + 1}
                              </span>
                              {isEditing && (
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => duplicateSection('infoBlock', index)}
                                    className="p-1 text-gray-400 hover:text-indigo-600"
                                    title="Duplicate"
                                  >
                                    <FaCopy />
                                  </button>
                                  {editingData.infoBlocks.length > 1 && (
                                    <button
                                      onClick={() => removeInfoBlock(index)}
                                      className="p-1 text-gray-400 hover:text-red-600"
                                      title="Delete"
                                    >
                                      <FaTrash />
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  English Text
                                </label>
                                <textarea
                                  value={block.text}
                                  onChange={(e) => handleInputChange(`infoBlocks.${index}.text`, e.target.value)}
                                  disabled={!isEditing}
                                  rows="2"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Hindi Text
                                </label>
                                <textarea
                                  value={block.hindi}
                                  onChange={(e) => handleInputChange(`infoBlocks.${index}.hindi`, e.target.value)}
                                  disabled={!isEditing}
                                  rows="2"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mantras */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                          <FaSpellCheck className="text-indigo-500" /> Mantras
                        </h3>
                        {isEditing && (
                          <button
                            onClick={addMantra}
                            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors flex items-center gap-1 text-sm"
                          >
                            <FaPlus /> Add Mantra
                          </button>
                        )}
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Section Title
                          </label>
                          <input
                            type="text"
                            value={editingData.mantraSectionTitle}
                            onChange={(e) => handleInputChange('mantraSectionTitle', e.target.value)}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                          />
                        </div>
                        {editingData.mantras.map((mantra, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-sm font-medium text-gray-600">
                                Mantra {index + 1}
                              </span>
                              {isEditing && (
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => duplicateSection('mantra', index)}
                                    className="p-1 text-gray-400 hover:text-indigo-600"
                                    title="Duplicate"
                                  >
                                    <FaCopy />
                                  </button>
                                  {editingData.mantras.length > 1 && (
                                    <button
                                      onClick={() => removeMantra(index)}
                                      className="p-1 text-gray-400 hover:text-red-600"
                                      title="Delete"
                                    >
                                      <FaTrash />
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Sanskrit Text
                                </label>
                                <textarea
                                  value={mantra.sanskrit}
                                  onChange={(e) => handleInputChange(`mantras.${index}.sanskrit`, e.target.value)}
                                  disabled={!isEditing}
                                  rows="3"
                                  placeholder="Use Enter for new lines"
                                  className="font-devanagari w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Meaning
                                </label>
                                <textarea
                                  value={mantra.meaning}
                                  onChange={(e) => handleInputChange(`mantras.${index}.meaning`, e.target.value)}
                                  disabled={!isEditing}
                                  rows="2"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Important Notes
                                </label>
                                <textarea
                                  value={mantra.note}
                                  onChange={(e) => handleInputChange(`mantras.${index}.note`, e.target.value)}
                                  disabled={!isEditing}
                                  rows="2"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaHeading className="text-indigo-500" /> Call to Action
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CTA Text
                        </label>
                        <input
                          type="text"
                          value={editingData.callToAction}
                          onChange={(e) => handleInputChange('callToAction', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Style Tab */}
                {activeTab === 'style' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FaPalette className="text-indigo-500" /> Font Size
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
                          <label className="text-sm font-medium text-gray-700">Primary</label>
                          <input type="color" className="w-full h-10 rounded-lg cursor-pointer" defaultValue="#4F46E5" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Secondary</label>
                          <input type="color" className="w-full h-10 rounded-lg cursor-pointer" defaultValue="#7C3AED" />
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
                        <FaHistory className="text-indigo-500" /> Version History
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

                    {/* Clear All */}
                    <div>
                      <button
                        onClick={clearAll}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <FaEye className="text-indigo-500" /> Live Preview
                <span className="ml-2 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">
                  {previewMode ? "Preview Mode" : "Live Edit"}
                </span>
              </h3>
            </div>
            
            <div className="p-4 md:p-6">
              <div className={`transition-all duration-300 ${previewMode ? 'scale-100' : 'scale-95'}`}>
                {/* Preview Container */}
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 md:p-8 min-h-[500px] relative overflow-hidden">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Preview Content */}
                  <div className="relative text-white">
                    {/* Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl md:text-4xl font-bold text-center mb-4"
                      style={{ fontSize: `${fontSize * 2}px` }}
                    >
                      {editingData.title}
                    </motion.h1>

                    {/* Subtitle */}
                    <h2 className="text-xl md:text-2xl text-center mb-8 text-indigo-100" style={{ fontSize: `${fontSize}px` }}>
                      {editingData.subtitle}
                    </h2>

                    {/* Info Blocks */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {editingData.infoBlocks.map((block, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                          <p className="mb-3" style={{ fontSize: `${fontSize * 0.9}px` }}>
                            {block.text}
                          </p>
                          <p className="text-lg font-devanagari text-indigo-200" style={{ fontSize: `${fontSize * 0.9}px` }}>
                            {block.hindi}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Mantra Section */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontSize: `${fontSize * 1.5}px` }}>
                        {editingData.mantraSectionTitle}
                      </h2>
                      
                      {editingData.mantras.map((mantra, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-3">
                            <p className="text-2xl font-devanagari mb-4 leading-relaxed text-center" style={{ fontSize: `${fontSize * 1.2}px` }}>
                              {mantra.sanskrit.split("\n").map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  {i < mantra.sanskrit.split("\n").length - 1 && <br />}
                                </React.Fragment>
                              ))}
                            </p>
                            <p className="text-lg" style={{ fontSize: `${fontSize * 0.9}px` }}>
                              <strong className="font-semibold">Meaning:</strong> {mantra.meaning}
                            </p>
                          </div>
                          <div className="bg-amber-500/20 backdrop-blur-sm rounded-lg p-4">
                            <p className="text-sm" style={{ fontSize: `${fontSize * 0.8}px` }}>
                              {mantra.note}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="text-center"
                    >
                      <p className="text-xl md:text-2xl font-bold bg-white/20 backdrop-blur-sm inline-block px-8 py-4 rounded-full" style={{ fontSize: `${fontSize * 1.1}px` }}>
                        {editingData.callToAction}
                      </p>
                    </motion.div>
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
          <div className="text-sm text-gray-500">Info Blocks</div>
          <div className="text-2xl font-bold text-gray-800">{editingData.infoBlocks.length}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Mantras</div>
          <div className="text-2xl font-bold text-gray-800">{editingData.mantras.length}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500">Characters</div>
          <div className="text-2xl font-bold text-gray-800">
            {JSON.stringify(editingData).length}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <FaClock /> Last Saved
          </div>
          <div className="text-lg font-medium text-gray-800">
            {history.length > 0 
              ? new Date(history[history.length - 1].timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : 'Never'
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;