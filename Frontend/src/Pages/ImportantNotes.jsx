import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ImportantNotes = () => {
  const [language, setLanguage] = useState("hi");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(language);
  }, [language]);

  const fetchData = async (lang) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://setusouls-1.onrender.com/api/important-notes?lang=${lang}`
      );
      setData(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("API Error:", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center py-10 font-bold">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefcea] to-[#e8ebff] px-4 sm:px-6 lg:px-10 py-16 font-sans">

      {/* CONTENT SECTIONS */}
      {data
        .filter(
          (item) =>
            item.section === "content1" || item.section === "content2"
        )
        .map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              max-w-[clamp(320px,90vw,1600px)]
              mx-auto mb-12
              text-center
              bg-white/60
              rounded-2xl
              p-6 sm:p-8 lg:p-10
              shadow-[0_8px_20px_rgba(160,120,255,0.2)]
            "
          >
            <h2 className="mb-8 font-bold text-[#0904b8] text-[clamp(2rem,4vw,3rem)]">
              {item.heading}
            </h2>

            <div
              className="font-bold text-black leading-relaxed text-[clamp(1.1rem,2.5vw,1.5rem)]"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </motion.div>
        ))}

      {/* NOTES CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          max-w-[clamp(320px,90vw,1600px)]
          mx-auto
          bg-white
          rounded-3xl
          p-6 sm:p-8 lg:p-10
          shadow-[0_8px_20px_rgba(0,0,0,0.1)]
        "
      >
        <h1 className="text-center font-bold text-[#0904b8] mb-12 text-[clamp(2rem,4vw,2.5rem)]">
          {language === "hi" ? "महत्वपूर्ण टिप्पणियां" : "Important Notes"}
        </h1>

        {data
          .filter((item) => item.section.startsWith("notes"))
          .map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="mb-4 font-bold text-[#0904b8] text-[clamp(1.6rem,3vw,2rem)]">
                {item.subHeading}
              </h2>

              <div
                className="mb-6 font-bold text-black leading-relaxed text-[clamp(1.1rem,2.5vw,1.5rem)]"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />

              {item.buttons?.length > 0 && (
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  {item.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.url}
                      target={btn.target || "_self"}
                      rel="noopener noreferrer"
                      className="
                        px-5 py-3
                        bg-[#ffa726]
                        text-white font-bold
                        rounded-xl
                        transition-all duration-300
                        hover:bg-[#fb8c00]
                        text-decoration-none
                      "
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
      </motion.div>

      {/* LANGUAGE TOGGLE */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() =>
            setLanguage((prev) => (prev === "hi" ? "en" : "hi"))
          }
          className="
            bg-[#0702bc]
            text-white font-bold
            px-6 py-3
            rounded-lg
            text-[clamp(1rem,2vw,1.2rem)]
            shadow-[0_4px_12px_rgba(106,76,175,0.3)]
            transition-all duration-300
            hover:bg-[#5351c4]
            hover:shadow-[0_6px_16px_rgba(87,81,196,0.5)]
            border-none
          "
        >
          {language === "hi" ? "Translate to English" : "Translate to Hindi"}
        </button>
      </div>
    </div>
  );
};

export default ImportantNotes;
