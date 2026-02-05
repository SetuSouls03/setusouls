import React, { useEffect, useState } from "react";

const MantraPage = () => {
  const [language, setLanguage] = useState("hi");
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "hi" ? "en" : "hi"));
  };

  useEffect(() => {
    const fetchMantra = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://setusouls-1.onrender.com/api/mantra");
        const data = await res.json();

        if (data && (data.hi || data.en)) {
          setContent(data);
        } else {
          setContent({});
        }
      } catch (err) {
        console.error(err);
        setContent({});
      } finally {
        setLoading(false);
      }
    };
    fetchMantra();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-700">Loading Mantra content...</p>
      </div>
    );
  }

  if (!content || !content[language]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No content available.</p>
      </div>
    );
  }

  const data = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefcea] to-[#e8ebff] px-6 py-16 flex flex-col items-center gap-12 font-['Segoe_UI',sans-serif]">

      {/* UPDATE */}
      {data.update && (
        <div className="w-full max-w-[900px] bg-white p-10 rounded-[1.2rem] shadow-[0_8px_20px_rgba(120,80,200,0.25)] border-l-[6px] border-[#0702bc] animate-[fadeInUp_0.8s_ease_forwards]">
          <h2 className="text-[#110c92] text-center font-extrabold mb-6 text-3xl">
            Update
          </h2>
          <p
            className="text-[1.2rem] leading-[2.4rem] text-black font-bold"
            dangerouslySetInnerHTML={{ __html: data.update }}
          />
        </div>
      )}

      {/* INTRO */}
      {data.intro && (
        <div className="w-full max-w-[900px] bg-white p-10 rounded-[1.2rem] shadow-[0_8px_20px_rgba(120,80,200,0.25)] border-l-[6px] border-[#0702bc] animate-[fadeInUp_0.8s_ease_forwards]">
          <p
            className="text-[1.2rem] leading-[2.4rem] text-black font-bold"
            dangerouslySetInnerHTML={{ __html: data.intro }}
          />
        </div>
      )}

      {/* LINES */}
      {data.lines?.map((line, index) => (
        <div
          key={index}
          className="w-full max-w-[900px] bg-white p-10 rounded-[1.2rem] shadow-[0_8px_20px_rgba(120,80,200,0.25)] border-l-[6px] border-[#0702bc] animate-[fadeInUp_0.8s_ease_forwards]"
        >
          {line.title && (
            <h3
              className="text-[#110c92] text-center font-extrabold mb-6 text-3xl"
              dangerouslySetInnerHTML={{ __html: line.title }}
            />
          )}

          {line.mantra?.length > 0 && (
            <div className="my-6 p-6 bg-[rgba(17,12,146,0.05)] rounded-xl">
              {line.mantra.map((m, i) => (
                <p
                  key={i}
                  className="text-[1.6rem] font-bold text-center text-[#0702bc] leading-8"
                  dangerouslySetInnerHTML={{ __html: m }}
                />
              ))}
            </div>
          )}

          {line.meaning?.length > 0 && (
            <div className="mt-6 text-[#333]">
              {line.meaning.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-[1.2rem] leading-[2.4rem] mb-4 font-bold"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* TRANSLATE BUTTON */}
      <div className="flex justify-center -mt-12">
        <button
          onClick={toggleLanguage}
          className="px-6 py-3 rounded-lg bg-[#0702bc] text-white font-bold shadow-md hover:bg-[#05019a] transition border-none mt-16"
        >
          {language === "hi"
            ? "Translate to English"
            : "हिंदी में अनुवाद करें"}
        </button>
      </div>

      {/* ANIMATION KEYFRAME */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MantraPage;
