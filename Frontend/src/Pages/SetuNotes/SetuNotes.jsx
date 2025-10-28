import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./SetuNotes.css";

// Static backup Notes
const staticNotes = [
  {
    "slug": "goddess-saraswati-darshan",
    "title": {
      "en": "Darshan of Goddess Saraswati at Setuu Hanuman Bodhi",
      "hi": "सेतु हनुमान बोधि में देवी सरस्वती जी के दर्शन"
    }
  },
  {
    "slug": "Hanuman-ji-with-chain",
    "title": {
      "en": "Lord Hanuman Himself tells why He was tied with chains in Tirupathi and Puri",
      "hi": "स्वयं भगवान हनुमान जी बताते हैं कि उन्हें तिरुपति और पुरी में बेड़ियों से क्यों बाँधा गया था"
    }
  },
  {
    "slug": "lord-Hanuman-ji-declarations-on-Radha-Saptami",
    "title": {
      "en": "Notice: Lord Hanuman has made two major declarations on Radha Saptami",
      "hi": "सूचना: भगवान हनुमान ने राधा सप्तमी के दिन दो महत्वपूर्ण घोषणाएँ की हैं"
    }
  },
  {
    "slug": "9-forms-of-Devi-Durga-by-Lord-Krishna",
    "title": {
      "en": "Rare description of 9 Forms of Devi Durga by Lord Krishna",
      "hi": "भगवान श्रीकृष्ण द्वारा देवी दुर्गा के नौ स्वरूपों का दुर्लभ वर्णन"
    }
  },
  {
    "slug": "father-of-Lord-Shiva,-Vishnu-and-Bhrama",
    "title": {
      "en": "Who is the father of Lord Shiva, Vishnu and Bhrama?",
      "hi": "भगवान शिव, विष्णु और ब्रह्मा के पिता कौन हैं?"
    }
  }
]

const SetuNotes = () => {
  const [language, setLanguage] = useState("english");
  const langKey = language === "english" ? "en" : "hi";

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "english" ? "hindi" : "english"));
  };

  // Sort Notes by chapter number extracted from title
  const sortedNotes = [...staticNotes].sort((a, b) => {
    const getNum = (title) => {
      const match = title?.match(/\d+/);
      return match ? parseInt(match[0], 10) : null;
    };

    const aNum = getNum(a.title?.[langKey] || "");
    const bNum = getNum(b.title?.[langKey] || "");

    if (aNum !== null && bNum === null) return -1;
    if (aNum === null && bNum !== null) return 1;
    if (aNum !== null && bNum !== null) return aNum - bNum;

    return (a.title?.[langKey] || "").localeCompare(b.title?.[langKey] || "");
  });

  const heading = language === "english" ? "Setu Notes" : "सेतु के टिप्पणियाँ";

  return (
    <>
      <div className="novel-index-wrapper">
        <h1 className="novel-index-title">{heading}</h1>
        <div className="chapter-list">
          {sortedNotes.map((notes, index) => (
            <motion.div
              className="chapter-item"
              key={notes._id || index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              <Link
                to={`/notes/${notes.slug}`}
                state={{ language }}
                className="chapter-titles"
              >
                {notes.title?.[langKey] || (language === "english" ? "Untitled" : "शीर्षक नहीं")}
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