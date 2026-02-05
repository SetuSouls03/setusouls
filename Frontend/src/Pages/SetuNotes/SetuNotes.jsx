import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./SetuNotes.css";

const SetuNotes = () => {
  const [language, setLanguage] = useState("english");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const langKey = language === "english" ? "en" : "hi";

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "english" ? "hindi" : "english"));
  };

  useEffect(() => {
  const fetchNotes = async () => {
    try {
      const res = await fetch("https://setusouls-1.onrender.com/api/notes");
      const data = await res.json();

      if (Array.isArray(data)) {
        setNotes(data);
      } else if (data.notes && Array.isArray(data.notes)) {
        // In case backend sends { notes: [...] }
        setNotes(data.notes);
      } else {
        console.error("❌ Unexpected response format:", data);
        setNotes([]);
      }
    } catch (err) {
      console.error("❌ Error fetching notes:", err);
      setNotes([]);
    } finally {
      setLoading(false);
    }
  };
  fetchNotes();
}, []);


  // Sort Notes (numbers in title first, then alphabetically)
  const sortedNotes = [...notes].sort((a, b) => {
    const getNum = (title) => {
      if (!title?.[langKey]) return Infinity; // notes without numbers go to the end
      const match = title[langKey].match(/\d+/);
      return match ? parseInt(match[0], 10) : Infinity;
    };

    const aNum = getNum(a.title);
    const bNum = getNum(b.title);

    return aNum - bNum;
  });

  const heading = language === "english" ? "Setu Notes" : "सेतु के टिप्पणियाँ";

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <>
      <div className="novel-index-wrapper">
        <h1 className="novel-index-title">{heading}</h1>
        <div className="chapter-list">
          {sortedNotes.map((note, index) => (
            <motion.div
              className="chapter-item"
              key={note._id || index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              <Link
                to={`/notes/${note.slug}`}
                state={{ language }}
                className="chapter-titles"
              >
                {note.title?.[langKey] || (language === "english" ? "Untitled" : "शीर्षक नहीं")}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="language-toggle" style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={toggleLanguage}>
          Translate to {language === "english" ? "Hindi" : "English"}
        </button>
      </div>
    </>
  );
};

export default SetuNotes;
