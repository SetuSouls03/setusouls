import React, { useState, useEffect } from "react";
import ScrollFadeIn from "../components/ScrollFadeIn";

const Other = () => {
  const [isHindi, setIsHindi] = useState(false);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://setusouls-1.onrender.com/api/page/other");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // Handle new response format { success: true, data: {...} }
        let data = result;
        if (result.data) {
          data = result.data;
        }
        
        // Validate data structure
        if (!data || !data.sections || !Array.isArray(data.sections)) {
          console.warn("Invalid page data received:", data);
          data = { sections: [], summary: { en: [], hi: [] } };
        }
        
        setPageData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching page data:", err);
        setError("Failed to load page content");
        setPageData({ sections: [], summary: { en: [], hi: [] } });
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  const renderHTML = (text) => {
    if (!text) return "";
    return text.replace(/\n/g, "<br />");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fefcea] to-[#e8ebff]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0904b8] mx-auto"></div>
          <p className="mt-4 text-[#0904b8] font-bold">Loading Page Content...</p>
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

  // Safeguard checks
  if (!pageData || !pageData.sections || pageData.sections.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fefcea] to-[#e8ebff]">
        <div className="text-center">
          <p className="text-[#0904b8] font-bold text-xl">No content available</p>
          <p className="text-gray-600 mt-2">Please add content through the admin panel</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {pageData.sections.map((sec, index) => {
        // Skip invalid sections
        if (!sec || !sec.id) return null;
        
        return (
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
                    {sec.title && (
                      <h1
                        className={`
                          text-[#0904b8] font-bold
                          text-[2.6rem]
                          mb-4
                          text-center
                          max-md:text-center
                          max-md:text-[1.8rem]
                        `}
                        dangerouslySetInnerHTML={{ 
                          __html: renderHTML(sec.title[isHindi ? "hi" : "en"]) 
                        }}
                      />
                    )}
                    {sec.description && (
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
                        dangerouslySetInnerHTML={{ 
                          __html: renderHTML(sec.description[isHindi ? "hi" : "en"]) 
                        }}
                      />
                    )}
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
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="text-red-500">Image failed to load</div>';
                    }}
                  />

                  {/* Text */}
                  <div className="max-w-[1000px]">
                    {sec.title && (
                      <h1
                        className={`
                          text-[#0904b8] font-bold
                          text-[2.6rem]
                          mb-4
                          text-left
                          max-md:text-center
                          max-md:text-[1.8rem]
                        `}
                        dangerouslySetInnerHTML={{ 
                          __html: renderHTML(sec.title[isHindi ? "hi" : "en"]) 
                        }}
                      />
                    )}
                    {sec.description && (
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
                        dangerouslySetInnerHTML={{ 
                          __html: renderHTML(sec.description[isHindi ? "hi" : "en"]) 
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
            </section>
          </ScrollFadeIn>
        );
      })}

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
      {pageData.summary && (
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
              {pageData.summary[isHindi ? "hi" : "en"]?.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: renderHTML(item) }} />
              ))}
            </ul>
          </section>
        </ScrollFadeIn>
      )}
    </>
  );
};

export default Other;