import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Summary = () => {
  const [language, setLanguage] = useState("english");
  const [summary, setSummary] = useState(null);

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "hindi" : "english");
  };

  useEffect(() => {
    axios
      .get("https://setusouls-1.onrender.com/api/summary")
      .then((res) => setSummary(res.data))
      .catch((err) => console.error("Error fetching summary:", err));
  }, []);

  if (!summary) return <p className="text-center mt-8">Loading...</p>;

  const renderHTML = (text) => ({
    __html: text.replace(/\n/g, "<br />"),
  });

  const sectionBg = {
    "first-section": "bg-gradient-to-b from-[#f5deb3] to-[#fff7e0]",
    "second-section": "bg-gradient-to-b from-[#fcfbe3] to-[#fffef6]",
    "third-section": "bg-gradient-to-b from-[#f8f7e9] to-[#ffffff]",
  };

  return (
    <div className="font-poppins text-[#2b2b2b] leading-relaxed">
      {summary.sections.map((section, idx) => (
        <motion.section
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className={`py-20 px-10 sm:px-6 ${sectionBg[section.className]}`}
        >
          <h1
            className="text-[#0702bc] text-center mb-3 text-[clamp(1.7rem,4vw,3.2rem)] font-bold"
            dangerouslySetInnerHTML={renderHTML(section.heading[language])}
          />

          {section.paragraphs.map((para, pIdx) => (
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
                        dangerouslySetInnerHTML={renderHTML(item[language])}
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
                    dangerouslySetInnerHTML={renderHTML(item[language])}
                    className="text-[#0702bc] mb-2"
                  />
                ))}
              </ol>
            )}
        </motion.section>
      ))}

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
      <section
  className="text-white text-center py-16 px-32 sm:px-6 font-bold text-[clamp(1rem,2.5vw,1.5rem)]"
  style={{ background: "radial-gradient(circle, #0702bc 1%, #000 120%)" }}
>
  <p className="max-w-4xl mx-auto" dangerouslySetInnerHTML={renderHTML(summary.highlight[language])} />
</section>


    </div>
  );
};

export default Summary;
