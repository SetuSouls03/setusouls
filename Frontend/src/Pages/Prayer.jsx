import React, { useState, useEffect } from "react";
import axios from "axios";

const Prayer = () => {
  const [language, setLanguage] = useState("hi");
  const [data, setData] = useState(null);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "hi" ? "en" : "hi"));

  const renderWithLineBreaks = (text) =>
    text?.split("\n").map((line, i) => (
      <p key={i}>{line || "\u00A0"}</p>
    ));

  useEffect(() => {
    axios
      .get("https://setusouls-1.onrender.com/api/prayer")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefcea] to-[#eef0ff] px-4 py-16">
      <div className="mx-auto w-full max-w-[1700px] space-y-12">
        {data.sections.map((section, i) => (
          <div
            key={i}
            className="
              bg-white/80 backdrop-blur
              rounded-2xl p-10
              border-l-[6px] border-[#6c63ff]
              shadow-[0_10px_30px_rgba(120,90,255,0.18)]
              transition-all duration-400 ease-in-out
              hover:-translate-y-2
              hover:shadow-[0_18px_40px_rgba(100,80,200,0.35)]
              hover:bg-white/90
            "
          >
            {section.heading && (
              <h2 className="text-center font-bold text-[#0904b8] mb-8 text-[clamp(1.8rem,4vw,3rem)]">
                {renderWithLineBreaks(section.heading[language])}
              </h2>
            )}

            <div className="text-center font-semibold text-black leading-[2.6rem] text-[clamp(1.1rem,2.5vw,1.75rem)] space-y-3">
              {renderWithLineBreaks(section.subheading[language])}
            </div>
          </div>
        ))}

        {/* TRANSLATE BUTTON */}
        <div className="flex justify-center pt-6">
          <button
            onClick={toggleLanguage}
            className="
              bg-[#0702bc] text-white font-bold
              px-7 py-3 rounded-xl text-lg
              shadow-[0_6px_16px_rgba(106,76,175,0.3)]
              transition-all duration-300
              hover:bg-[#4b48d6]
              hover:shadow-[0_10px_22px_rgba(87,81,196,0.5)]
              border-none
            "
          >
            {language === "hi"
              ? "Translate to English"
              : "हिंदी में अनुवाद करें"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prayer;
