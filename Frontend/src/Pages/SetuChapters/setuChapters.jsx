import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./SetuChapters.css";

const SetuChapters = () => {
  const [language, setLanguage] = useState("english"); // 'english' or 'hindi'
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "hindi" : "english"));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/chapters")
      .then((res) => {
        console.log("✅ Raw API response:", res.data);
        const data = res.data;
        if (Array.isArray(data)) {
          setChapters(data);
        } else if (Array.isArray(data.chapters)) {
          setChapters(data.chapters);
        } else {
          console.warn("⚠️ Unexpected data format:", data);
          setChapters([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching chapters:", err);
        setChapters([]);
        setLoading(false);
      });
  }, []);

  const heading = language === "english" ? "Setu Chapters" : "सेतु के अध्याय";

  if (loading) return <p>Loading chapters...</p>;
  if (!Array.isArray(chapters)) return <p>Invalid chapters data</p>;

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
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/chapters/${chapter.slug}`}
                state={{ language }} // ✅ Pass current language
              >
                {language === "english"
                  ? chapter.title?.en || "Untitled"
                  : chapter.title?.hi || "शीर्षक नहीं"}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="language-toggle">
        <button onClick={toggleLanguage}>
          Translate to {language === "english" ? "Hindi" : "English"}
        </button>
      </div>
    </>
  );
};

export default SetuChapters;
