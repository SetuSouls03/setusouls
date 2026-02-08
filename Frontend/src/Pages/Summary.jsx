import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Summary = () => {
  const [language, setLanguage] = useState("english");
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "hindi" : "english");
  };

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://setusouls-1.onrender.com/api/summary");
        
        // Handle different response formats
        let summaryData = res.data;
        
        // If the response has a 'data' property (from our new controller)
        if (res.data && res.data.data) {
          summaryData = res.data.data;
        }
        
        // Ensure sections exist
        if (!summaryData.sections || !Array.isArray(summaryData.sections)) {
          console.warn("Invalid sections data:", summaryData);
          summaryData.sections = [];
        }
        
        setSummary(summaryData);
        setError(null);
      } catch (err) {
        console.error("Error fetching summary:", err);
        setError("Failed to load summary content");
        setSummary({
          sections: [],
          highlight: { english: "Content loading failed", hindi: "सामग्री लोड करने में विफल" }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const renderHTML = (text) => {
    if (!text) return { __html: "" };
    return { __html: text.replace(/\n/g, "<br />") };
  };

  const sectionBg = {
    "first-section": "bg-gradient-to-b from-[#f5deb3] to-[#fff7e0]",
    "second-section": "bg-gradient-to-b from-[#fcfbe3] to-[#fffef6]",
    "third-section": "bg-gradient-to-b from-[#f8f7e9] to-[#ffffff]",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fefcea] to-[#e8ebff]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0702bc] mx-auto"></div>
          <p className="mt-4 text-[#0702bc] font-bold">Loading Summary...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fefcea] to-[#e8ebff]">
        <div className="text-center">
          <p className="text-red-600 font-bold text-xl mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#0702bc] text-white font-bold rounded-lg px-6 py-3 hover:bg-[#5351c4] transition-all"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Ensure summary exists and has sections
  if (!summary || !summary.sections || summary.sections.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fefcea] to-[#e8ebff]">
        <div className="text-center">
          <p className="text-[#0702bc] font-bold text-xl">No summary content available</p>
          <p className="text-gray-600 mt-2">Please check the backend configuration</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-poppins text-[#2b2b2b] leading-relaxed">
      {summary.sections.map((section, idx) => {
        // Skip if section data is invalid
        if (!section || !section.className) return null;
        
        return (
          <motion.section
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={`py-20 px-10 sm:px-6 ${sectionBg[section.className] || sectionBg["first-section"]}`}
          >
            {section.heading && (
              <h1
                className="text-[#0702bc] text-center mb-3 text-[clamp(1.7rem,4vw,3.2rem)] font-bold"
                dangerouslySetInnerHTML={renderHTML(section.heading[language])}
              />
            )}

            {section.paragraphs && section.paragraphs.map((para, pIdx) => {
              if (!para) return null;
              
              return (
                <React.Fragment key={pIdx}>
                  <p
                    className="text-[#333] text-justify max-w-[900px] mx-auto text-[clamp(1rem,2.5vw,1.5rem)] font-bold"
                    dangerouslySetInnerHTML={renderHTML(para[language])}
                  />

                  {/* Insert OL for second-section after first paragraph */}
                  {section.className === "second-section" &&
                    pIdx === 0 &&
                    section.list && (
                      <ol className="max-w-[900px] mx-auto pl-10 text-[#333] my-5 list-decimal font-bold text-[clamp(1rem,2.5vw,1.5rem)]">
                        {section.list.map((item, lIdx) => (
                          <li
                            key={lIdx}
                            dangerouslySetInnerHTML={renderHTML(item?.[language])}
                            className="text-[#0702bc] mb-2"
                          />
                        ))}
                      </ol>
                    )}
                </React.Fragment>
              );
            })}

            {/* For other sections with list */}
            {section.className !== "second-section" &&
              section.list && (
                <ol className="max-w-[900px] mx-auto pl-10 text-[#333] my-5 list-decimal font-bold text-[clamp(1rem,2.5vw,1.5rem)]">
                  {section.list.map((item, lIdx) => (
                    <li
                      key={lIdx}
                      dangerouslySetInnerHTML={renderHTML(item?.[language])}
                      className="text-[#0702bc] mb-2"
                    />
                  ))}
                </ol>
              )}
          </motion.section>
        );
      })}

      {/* Language Toggle */}
      <div className="flex justify-center my-10">
        <button
          onClick={toggleLanguage}
          className="bg-[#0702bc] text-white font-bold rounded-lg px-6 py-3 text-[clamp(0.95rem,2vw,1.2rem)] shadow-md hover:bg-[#5351c4] transition-all duration-300 border-none"
        >
          {language === "english" ? "Translate to Hindi" : "Translate to English"}
        </button>
      </div>

      {/* Highlight Section */}
      {summary.highlight && (
        <section
          className="text-white text-center py-16 px-32 sm:px-6 font-bold text-[clamp(1rem,2.5vw,1.5rem)]"
          style={{ background: "radial-gradient(circle, #0702bc 1%, #000 120%)" }}
        >
          <p 
            className="max-w-4xl mx-auto" 
            dangerouslySetInnerHTML={renderHTML(summary.highlight[language])} 
          />
        </section>
      )}
    </div>
  );
};

export default Summary;