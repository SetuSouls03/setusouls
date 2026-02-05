import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [language, setLanguage] = useState("hi");
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://setusouls-1.onrender.com/api/about-hanudas")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.error(err));
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "hi" ? "en" : "hi"));
  };

  if (!data || !data[language]) return null;

  const content = data[language];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fefcea] to-[#e8ebff] px-4 py-12">
      
      {/* CARD */}
      <div className="w-full max-w-[1300px] bg-white rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] px-10 py-12 text-center max-md:px-4">

        {/* HEADING */}
        {content.heading && (
          <h1 className="text-[3.2rem] max-md:text-[2rem] font-bold text-[#0702bc] mb-12">
            {content.heading}
          </h1>
        )}

        {/* GREETING */}
        {content.greeting && (
          <div
            className="text-[1.5rem] font-bold leading-[1.7] my-8 max-md:text-[1rem]"
            dangerouslySetInnerHTML={{ __html: content.greeting }}
          />
        )}

        {/* SUBHEADING */}
        {content.subheading && (
          <h2
            className="text-[1.5rem] font-bold leading-[1.7] my-8 max-md:text-[1rem]"
            dangerouslySetInnerHTML={{ __html: content.subheading }}
          />
        )}

        {/* VIDEO */}
        {data.youtubeUrl && (
          <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden my-12">
            <iframe
              src={data.youtubeUrl}
              title="YouTube video"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* MANTRA BUTTON */}
        {content.mantraButtonText && (
          <button
            onClick={() => navigate(data.mantraPageRoute)}
            className="mt-8 bg-[#0702bc] text-white font-semibold px-8 py-3 rounded-md shadow-[0_4px_12px_rgba(7,2,188,0.35)] hover:bg-[#0056b3] transition border-none"
          >
            <span className="inline-block animate-[pulse_1.5s_ease-in-out_infinite]">
              {content.mantraButtonText}
            </span>
          </button>
        )}
      </div>

      {/* TRANSLATE BUTTON */}
      <button
        onClick={toggleLanguage}
        className="mt-10 bg-[#0702bc] text-white font-bold px-6 py-3 rounded-lg shadow-[0_4px_12px_rgba(7,2,188,0.3)] hover:bg-[#5351c4] transition border-none"
      >
        {language === "hi" ? "Translate to English" : "Translate to Hindi"}
      </button>
    </div>
  );
};

export default About;
