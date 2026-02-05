import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const History = () => {
  const [language, setLanguage] = useState("hi");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://setusouls-1.onrender.com/api/history")
      .then((res) => setData(res.data))
      .catch(() => setError("Failed to load history content"));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefcea] to-[#e8ebff] px-4 sm:px-6 lg:px-10 py-16 flex flex-col items-center gap-16 font-sans">

      {/* SECTIONS */}
      {data.sections?.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="
  w-full
  max-w-[clamp(320px,85vw,1700px)]
  text-center
  bg-white rounded-2xl
  p-6 sm:p-8 lg:p-10
  shadow-[0_8px_20px_rgba(160,120,255,0.2)]
  transition-all duration-300 ease-in-out
  hover:-translate-y-2
  hover:shadow-[0_16px_30px_rgba(120,80,200,0.3)]
  hover:bg-[rgba(255,255,255,0.85)]
"

        >
          <h2 className="mb-8 font-bold text-[#110c92] text-[clamp(2rem,4vw,3.5rem)] font-devanagari">
            {section.heading?.[language]}
          </h2>

          <p className="font-bold text-black leading-relaxed text-[clamp(1.1rem,2.5vw,1.5rem)] font-devanagari">
            {section.subheading?.[language]}
          </p>
        </motion.div>
      ))}

      {/* TRANSLATE BUTTON */}
      <div className="mt-6">
        <button
          onClick={() => setLanguage(language === "hi" ? "en" : "hi")}
          className="
            bg-[#0702bc] text-white font-bold
            px-6 py-3 rounded-lg
            text-[clamp(1rem,2vw,1.2rem)]
            shadow-[0_4px_12px_rgba(106,76,175,0.3)]
            transition-all duration-300
            hover:bg-[#5351c4]
            hover:shadow-[0_6px_16px_rgba(87,81,196,0.5)]
            border-none
          "
        >
          {language === "hi"
            ? "Translate to English"
            : "हिंदी में अनुवाद करें"}
        </button>
      </div>
    </div>
  );
};

export default History;
