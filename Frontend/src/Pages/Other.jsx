import React, { useState, useEffect } from "react";
import ScrollFadeIn from "../components/ScrollFadeIn";

const Other = () => {
  const [isHindi, setIsHindi] = useState(false);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    fetch("https://setusouls-1.onrender.com/api/page/other")
      .then((res) => res.json())
      .then((data) => setPageData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!pageData) return <div>Loading...</div>;

  return (
    <>
      {pageData.sections.map((sec, index) => (
        <ScrollFadeIn key={sec.id}>
          <section
            className={`
              py-12 border-b
              ${
                sec.id === "section1"
                  ? "bg-[#ffefe4]"
                  : sec.id === "section2"
                  ? "bg-[#ffffe6]"
                  : "bg-[#f4faff]"
              }
            `}
          >
            {/* For sections WITHOUT images - Full 2000px width */}
            {!sec.image ? (
              <div className="flex justify-center">
                <div className="max-w-[1700px] w-full px-6">
                  <h1
                    className={`
                      text-[#0904b8] font-bold
                      text-[2.6rem]
                      mb-4
                      text-center
                      max-md:text-center
                      max-md:text-[1.8rem]
                    `}
                  >
                    {sec.title[isHindi ? "hi" : "en"]}
                  </h1>
                  <h3
                    className={`
                      text-black font-bold
                      text-[1.4rem]
                      leading-[1.8]
                      text-justify
                      w-full
                      max-md:text-center
                      max-md:text-[1rem]
                    `}
                  >
                    {sec.description[isHindi ? "hi" : "en"]}
                  </h3>
                </div>
              </div>
            ) : (
              /* For sections WITH images - Original layout with 1700px max */
              <div
                className={`
                  max-w-[1700px] mx-auto px-6
                  flex items-center justify-center gap-32
                  ${
                    sec.id === "sectiona3"
                      ? "flex-col text-center"
                      : index % 2 === 0
                      ? "flex-row"
                      : "flex-row-reverse"
                  }
                  max-lg:flex-col
                `}
              >
                {/* Image */}
                <img
                  src={sec.image}
                  alt={sec.id}
                  className="
                    w-full max-w-[638px] h-[41rem]
                    max-lg:h-auto max-lg:max-w-[500px]
                    rounded-xl
                    shadow-[0_4px_12px_rgba(0,0,0,0.2)]
                    mx-auto
                  "
                />

                {/* Text */}
                <div className="max-w-[1000px]">
                  <h1
                    className={`
                      text-[#0904b8] font-bold
                      text-[2.6rem]
                      mb-4
                      text-left
                      max-md:text-center
                      max-md:text-[1.8rem]
                    `}
                  >
                    {sec.title[isHindi ? "hi" : "en"]}
                  </h1>
                  <h3
                    className={`
                      text-black font-bold
                      text-[1.4rem]
                      leading-[1.8]
                      text-justify
                      w-full
                      max-md:text-center
                      max-md:text-[1rem]
                    `}
                  >
                    {sec.description[isHindi ? "hi" : "en"]}
                  </h3>
                </div>
              </div>
            )}
          </section>
        </ScrollFadeIn>
      ))}

      {/* 🌐 Language Toggle */}
      <ScrollFadeIn>
        <div className="flex justify-center my-8">
          <button
            onClick={() => setIsHindi((prev) => !prev)}
            className="
              bg-[#0702bc] text-white font-bold
              px-6 py-3 rounded-lg
              text-lg
              shadow-[0_4px_12px_rgba(106,76,175,0.3)]
              transition hover:scale-105
              border-none
            "
          >
            {isHindi ? "Translate to English" : "हिंदी में अनुवाद करें"}
          </button>
        </div>
      </ScrollFadeIn>

      {/* ⭐ Summary Highlight */}
      <ScrollFadeIn>
        <section
          className="
            bg-[radial-gradient(circle,#0702bc_1%,#000_120%)]
            text-white
            py-16
          "
        >
          <ul
            className="
              max-w-4xl mx-auto
              text-center
              font-bold
              text-[clamp(1rem,2.5vw,1.5rem)]
              space-y-4
              max-w-[1700px] w-full
            "
          >
            {pageData.summary[isHindi ? "hi" : "en"].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      </ScrollFadeIn>
    </>
  );
};

export default Other;