import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./SetuChapters.css";

// Static backup chapters
const staticChapters = [
  {
    "_id": "686e4826b770aefd29a7734c",
    "slug": "chapter-13-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 13: The immortal Lord Hanuman reveals secret of Shiv Linga and the idol of Tirupathi",
      "hi": "अध्याय 13: चिरंजीवी हनुमान जी ने बताया शिवलिंग और तिरुपति की मूर्ति का रहस्य"
    }
  },
  {
    "_id": "686e47b9b770aefd29a77334",
    "slug": "chapter-1-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 1: The immortal Lord Hanuman arrives",
      "hi": "अध्याय 1: चिरंजीवी भगवान हनुमान का आगमन"
    }
  },
  {
    "_id": "686e47cab770aefd29a77336",
    "slug": "chapter-2-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 2: Hunting Honey with the immortal Lord Hanuman ",
      "hi": "अध्याय 2: हनुमान जी के साथ शहद की खोज"
    }
  },
  {
    "_id": "686e47d2b770aefd29a77338",
    "slug": "chapter-3-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 3: The immortal Lord Hanuman in the web of Time",
      "hi": "अध्याय 3: काल के जाल में चिरंजीवी हनुमान"
    }
  },
  {
    "_id": "686e47dfb770aefd29a7733a",
    "slug": "chapter-4-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 4: The immortal Lord Hanuman’s visit to VishnuLoka ",
      "hi": "अध्याय 4: चिरंजीवी श्री हनुमान की विष्णुलोक यात्रा"
    }
  },
  {
    "_id": "686e47e7b770aefd29a7733c",
    "slug": "chapter-5-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 5: The immortal Lord Hanuman teaches how to\nfly out of body",
      "hi": "अध्याय 5: चिरंजीवी हनुमान ने सिखाया देह से बाहर निकलकर उड़ना"
    }
  },
  {
    "_id": "686e47f1b770aefd29a7733e",
    "slug": "chapter-6-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 6: The history and mystery of 33 Crore Surrahs revealed by the immortal Lord Hanuman",
      "hi": "अध्याय 6: 33 करोड़ 'सुरों' का रहस्य और इतिहास खोला चिरंजीवी हनुमान जी ने"
    }
  },
  {
    "_id": "686e47f8b770aefd29a77340",
    "slug": "chapter-7-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 7: Is that the Sun or a fruit? Reveals the immortal Lord Hanuman",
      "hi": "अध्याय 7: वह फल है अथवा सूर्य ? चिरंजीवी हनुमान जी ने खोला राज"
    }
  },
  {
    "_id": "686e47ffb770aefd29a77342",
    "slug": "chapter-8-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 8: Makardhwaja was not His son, reveals the immortal Lord Hanuman",
      "hi": "अध्याय 8: मकरध्वज उनके पुत्र नहीं थे , चिरंजीवी हनुमान जी ने किया खुलासा"
    }
  },
  {
    "_id": "686e4807b770aefd29a77344",
    "slug": "chapter-9-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 9: Secret of RamaSetu revealed by the immortal Lord Hanuman",
      "hi": "अध्याय 9: रामसेतु का भेद खोला चिरंजीवी हनुमान जी ने"
    }
  },
  {
    "_id": "686e480db770aefd29a77346",
    "slug": "chapter-10-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 10: The secret of Existence: how a woman can give birth to as many as 60,000 children",
      "hi": "अध्याय 10: अस्तित्व का रहस्य : कैसे एक औरत अधिकतम 60000 बच्चों को जन्म दे सकती है"
    }
  },
  {
    "_id": "686e4815b770aefd29a77348",
    "slug": "chapter-11-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 11: The secret of desire fulfilment revealed by the immortal Lord Hanuman",
      "hi": "अध्याय 11: इच्छा पूर्ति का रहस्य खोला चिरंजीवी हनुमान जी ने"
    }
  },
  {
    "_id": "686e481cb770aefd29a7734a",
    "slug": "chapter-12-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 12: Descent of Goddess Ganga to the MaanavLoka",
      "hi": "अध्याय 12: देवी गंगा का मानवलोक में अवतरण"
    }
  },
  {
    "_id": "686e4832b770aefd29a7734e",
    "slug": "chapter-14-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 14: What is reality? The immortal Lord Hanuman explores",
      "hi": "अध्याय 14: वास्तविकता क्या होती है , श्री हनुमान जी ने अन्वेषण किया"
    }
  },
  {
    "_id": "686e483ab770aefd29a77350",
    "slug": "chapter-15-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 15: Lord Krishna's point of view of Krishna-Sudama Leela (The secret of relativity) ",
      "hi": "अध्याय 15: कृष्ण-सुदामा की लीला भगवान कृष्ण के दृष्टिकोण से (सापेक्षता का रहस्य)"
    }
  },
  {
    "_id": "686e4842b770aefd29a77352",
    "slug": "chapter-16-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 16: Birth of Lord Ram in Maanavloka: the full story revealed by the immortal Lord Hanuman ",
      "hi": "अध्याय 16: भगवान्‌ राम का मानवलोक में जन्म : चिरंजीवी हनुमान ने"
    }
  },
  {
    "_id": "686e4849b770aefd29a77354",
    "slug": "chapter-17-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 17: Attaining Godhood: The full story of Devi Renuka (Yellamma) revealed by the immortal Lord Hanuman",
      "hi": "अध्याय 17: यजमान क्षणक के अर्पण की प्रक्रिया संपन्न हुई "
    }
  },
  {
    "_id": "686e4851b770aefd29a77356",
    "slug": "chapter-18-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 18: Rise of Vishwamitra : The Kaamdhenu Puzzle and Trishanku’s Universe explained by the immortal Lord Hanuman ",
      "hi": "अध्याय 18: ऋषि विश्वामित्र का उदय : 'कामधेनु पहेली' और “त्रिशंकु विश्व' का वर्णन स्वयं हनुमान जी द्वारा"
    }
  },
  {
    "_id": "686e4857b770aefd29a77358",
    "slug": "chapter-19-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 19: Lord Hanuman talks about King HarishaChandra and the Moksha Yajna",
      "hi": "अध्याय 19: हनुमान जी का राजा हरीश चन्द्र और मोक्ष यज्ञ के बारे में व्याख्यान"
    }
  },
  {
    "_id": "686e485eb770aefd29a7735a",
    "slug": "chapter-20-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 20: Shiva Yoga by young Lord Ram in Tadaka’s forest",
      "hi": "अध्याय 20: युवा प्रभु राम का ताड़का के जंगल में शिव योग"
    }
  },
  {
    "_id": "686e4865b770aefd29a7735c",
    "slug": "chapter-21-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 21: The immortal Lord Hanuman talks about Shiva’s bow and sacrifices of Devi Lakshmi in her Sita avatar \n",
      "hi": "अध्याय 21: चिरंजीवी हनुमान जी का शिव धनुष तथा देवी लक्ष्मी के सीता अवतार में किये गए बलिदानों के बारे में वार्तालाप"
    }
  },
  {
    "_id": "686e486cb770aefd29a7735e",
    "slug": "chapter-22-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 22: A mind free of judgment: the story of Ahalya told by the immortal Lord Hanuman",
      "hi": "अध्याय 22: धारणा रहित मन : चिरंजीवी हनुमान जी ने सुनाई अहल्या की कथा"
    }
  },
  {
    "_id": "686e4874b770aefd29a77360",
    "slug": "chapter-23-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 23: The immortal Lord Hanuman talks about the marriage of Lord Ram and Devi Sita",
      "hi": "अध्याय 23: चिरंजीवी हनुमान जी का प्रभु राम और माता सीता के विवाह के बारे में व्याख्यान"
    }
  },
  {
    "_id": "686e487ab770aefd29a77362",
    "slug": "chapter-24-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 24: Lord Hanuman’s battle against Maya with the weapon of supreme knowledge on Karma, Destiny, Freewill, Inner World",
      "hi": "अध्याय 24: हनुमान जी का माया के साथ युद्ध , कर्म - भाग्य - स्वेच्छा - आत्मलोक के ब्रह्मज्ञान के अस्त्र का प्रयोग"
    }
  },
  {
    "_id": "686e4881b770aefd29a77364",
    "slug": "chapter-25-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 25: When Asurrahs entered the palace of Ayodhya",
      "hi": "अध्याय 25: जब असुर अयोध्या के महल में घुसे"
    }
  },
  {
    "_id": "686e488ab770aefd29a77366",
    "slug": "chapter-26-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 26: When Lord Ram lost a battle to win the war ",
      "hi": "अध्याय 26: जब भगवान राम ने युद्ध जीतने के लिए एक लड़ाई हारी"
    }
  },
  {
    "_id": "686e4891b770aefd29a77368",
    "slug": "chapter-27-immortal-lord-hanuman",
    "title": {
      "en": "Chapter 27: Lord Hanuman explains the mystery of Lord Ram’s Ayodhya Leela",
      "hi": "अध्याय 27: हनुमान जी ने प्रभु श्री राम की अयोध्या लीला का वर्णन किया"
    }
  },
  {
    "_id": "687d78e39adc5c514f54a8f2",
    "slug": "Pizza-Delivery-immortal-lord-hanuman",
    "title": {
      "en": "How did the gods balance a devotee's karmas using pizza delivery as a method?",
      "hi": "पिज़्जा डिलीवरी को माध्यम बनाकर देवताओं ने कैसे एक भक्त के कमों का प्रतिसंतुलन किया?"
    }
  }
]


const LIMIT = 30;

const SetuChapters = () => {
  const [language, setLanguage] = useState("english");
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const loaderRef = useRef(null);

  const langKey = language === "english" ? "en" : "hi";

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "english" ? "hindi" : "english"));
    setPage(1);
    setChapters([]);
    setHasMore(true);
  };

  const fetchChapters = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(
        `https://setusouls-1.onrender.com/api/chapters?lang=${langKey}&page=${page}&limit=${LIMIT}`
      );

      let newChapters = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data.chapters)
        ? res.data.chapters
        : [];

      // If API fails or returns empty for first page, fallback to static
      if (newChapters.length === 0 && page === 1) {
        newChapters = staticChapters;
      }

      // Merge without duplicates
      setChapters(prev => {
        const filtered = newChapters.filter(
          ch => !prev.some(p => p._id === ch._id)
        );

        const sorted = [...prev, ...filtered].sort((a, b) => {
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

        return sorted;
      });

      setHasMore(newChapters.length === LIMIT);
    } catch (err) {
      console.error("❌ Error fetching chapters:", err);

      // Fallback to static chapters if first page
      if (page === 1) {
        setChapters(staticChapters);
        setHasMore(false);
      } else {
        setError("Failed to load more chapters.");
      }
    } finally {
      setLoading(false);
    }
  }, [langKey, page]);

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

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
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
                {chapter.title?.[langKey] || (language === "english" ? "Untitled" : "शीर्षक नहीं")}
              </Link>
            </motion.div>
          ))}
        </div>

        <div ref={loaderRef} style={{ height: "50px" }}>
          {loading && (
            <div className="spinner-container-chap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="spinner-chap"></div>
            </div>
          )}
        </div>
        {error && <div style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{error}</div>}
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
