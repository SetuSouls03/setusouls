import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./SetuChapters.css";

const LIMIT = 30;

const SetuChapters = () => {
  const [language, setLanguage] = useState("english");
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "english" ? "hindi" : "english"));
    setPage(1);
    setChapters([]);
    setHasMore(true);
  };

  const fetchChapters = useCallback(async () => {
    setLoading(true);
    const langParam = language === "english" ? "en" : "hi";

    try {
      const res = await axios.get(
        `https://setusouls-1.onrender.com/api/chapters?lang=${langParam}&page=${page}&limit=${LIMIT}`
      );

      const newChapters = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data.chapters)
        ? res.data.chapters
        : [];

      // ✅ Prevent duplicates
      setChapters(prev => {
  const filtered = newChapters.filter(
    ch => !prev.some(p => p._id === ch._id)
  );

  const langKey = language === "english" ? "en" : "hi";

  const sorted = [...prev, ...filtered].sort((a, b) => {
    const getNum = (title) => {
      const match = title?.match(/\d+/);
      return match ? parseInt(match[0], 10) : null;
    };

    const aNum = getNum(a.title?.[langKey] || "");
    const bNum = getNum(b.title?.[langKey] || "");

    // Rule 1: Chapters with numbers come first
    if (aNum !== null && bNum === null) return -1;
    if (aNum === null && bNum !== null) return 1;

    // Rule 2: If both have numbers, sort by number
    if (aNum !== null && bNum !== null) return aNum - bNum;

    // Rule 3: If neither has numbers, sort alphabetically
    return (a.title?.[langKey] || "").localeCompare(b.title?.[langKey] || "");
  });

  return sorted;
});


      setHasMore(newChapters.length === LIMIT);
    } catch (err) {
      console.error("❌ Error fetching chapters:", err);
    } finally {
      setLoading(false);
    }
  }, [language, page]);

  useEffect(() => {
    fetchChapters();
  }, [fetchChapters]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, loading]);

  const heading = language === "english" ? "Setu Chapters" : "सेतु के अध्याय";

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
                {chapter.title?.[language === "english" ? "en" : "hi"] ||
                  (language === "english" ? "Untitled" : "शीर्षक नहीं")}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Infinite scroll trigger */}
        <div ref={loaderRef} style={{ height: "50px" }}>
          {loading && (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          )}
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
