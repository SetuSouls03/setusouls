import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const CharanPooja = () => {
  const [language, setLanguage] = useState("hi");
  const [data, setData] = useState(null);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "hi" ? "en" : "hi"));

  useEffect(() => {
    axios
      .get("https://setusouls-1.onrender.com/api/charan-pooja")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

  const [group1, group2, quoteSection] = data.sectionsGrouped;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefcea] to-[#e8ebff] px-4 sm:px-6 lg:px-10 py-16 flex flex-col items-center gap-12 font-devanagari">

      {/* GROUP 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          w-full max-w-[clamp(320px,85vw,1700px)]
          bg-white rounded-2xl p-6 sm:p-8 lg:p-10
          shadow-[0_8px_30px_rgba(0,0,0,0.1)]
          text-center
        "
      >
        <h1 className="mb-10 font-bold text-[#0904b8] text-[clamp(2.2rem,4vw,3.5rem)]">
          {group1.title[language]}
        </h1>

        <p className="font-bold leading-relaxed text-black text-[clamp(1.2rem,2.5vw,1.5rem)]">
          {group1.paragraph[language]}
        </p>

        {/* SUMMARY */}
        <div
          className="
            mt-10 bg-[#fff8db]
            border-l-[5px] border-[#f1c40f]
            rounded-lg p-6
            text-left font-bold
            transition-transform duration-300
            hover:scale-[1.01]
          "
          style={{borderLeft:'5px solid #f1c40f'}}
        >
          <h2 className="mb-4 font-bold text-[#b9770e] text-[clamp(1.6rem,3vw,2.25rem)]">
            {group1.summary.title[language]}
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-black text-[clamp(1.1rem,2.5vw,1.5rem)]">
            {group1.summary.points[language].map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* GROUP 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          w-full max-w-[clamp(320px,85vw,1700px)]
          bg-white rounded-2xl p-6 sm:p-8 lg:p-10
          shadow-[0_4px_20px_rgba(0,0,0,0.05)]
          text-center
        "
      >
        <h2 className="mb-8 font-semibold text-[#0904b8] text-[clamp(2rem,4vw,3.5rem)]">
          {group2.subheading[language]}
        </h2>

        <p className="font-bold leading-relaxed text-black text-[clamp(1.2rem,2.5vw,1.7rem)]">
          {group2.detailedParagraph[language]}
        </p>
      </motion.div>

      {/* QUOTE */}
      <blockquote
        className="
          w-full max-w-[clamp(320px,85vw,1700px)]
          bg-white rounded-xl p-6 text-center
          shadow-inner
        "
      >
        <span
          className="inline-block font-bold text-[#1500d2] text-[clamp(1.2rem,3vw,2rem)]"
        >
          {quoteSection.quote[language]}
        </span>
      </blockquote>

      {/* TRANSLATE BUTTON */}
      <button
        onClick={toggleLanguage}
        className="
          mt-6 bg-[#0702bc] text-white font-bold
          px-6 py-3 rounded-lg
          text-[clamp(1rem,2vw,1.2rem)]
          shadow-[0_4px_12px_rgba(106,76,175,0.3)]
          transition-all duration-300
          hover:bg-[#5351c4]
          hover:shadow-[0_6px_16px_rgba(87,81,196,0.5)]
          border-none
        "
      >
        {language === "hi" ? "Translate to English" : "हिंदी में अनुवाद करें"}
      </button>
    </div>
  );
};

export default CharanPooja;
