import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./SetuChapters.css";

const SetuChapters = () => {
  const [language, setLanguage] = useState("english");
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  const langKey = language === "english" ? "en" : "hi";

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "english" ? "hindi" : "english"));
  };

  // Fetch chapters from backend dynamically
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await fetch("https://setusouls-1.onrender.com/api/chapters"); // adjust URL
        const data = await res.json();

        // Sort by chapter number in slug
        const sorted = data.sort((a, b) => {
  const getNum = (slug) => {
    const match = slug.toLowerCase().match(/chapter-(\d+)/);
    return match ? parseInt(match[1], 10) : Infinity; // Infinity for non-numbered chapters
  };
  return getNum(a.slug) - getNum(b.slug);
});


        setChapters(sorted);
      } catch (err) {
        console.error("Failed to fetch chapters:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  const heading = language === "english" ? "Setu Chapters" : "सेतु के अध्याय";

  if (loading) return <p style={{ textAlign: "center" }}>Loading chapters...</p>;

  return (
    <>
      <div className="novel-index-wrapper">
        <h1 className="novel-index-title">{heading}</h1>
        <div className="chapter-list">
          {chapters.map((chapter, index) => (
            <motion.div
              className="chapter-item"
              key={chapter._id || index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              <Link
                to={`/chapters/${chapter.slug}`}
                state={{ language }}
                className="chapter-titles"
              >
                {chapter.title?.[langKey] || (language === "english" ? "Untitled" : "शीर्षक नहीं")}
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

export default SetuChapters;
