import React, { useEffect, useState } from "react";
import axios from "axios";

/* ---------- Helper: render \n as <br/> ---------- */
const TextWithBreaks = ({ text }) => {
  if (!text) return null;
  return text.split("\n").map((line, i) => (
    <React.Fragment key={i}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const MyExperiences = () => {
  const itemsPerPage = 25;

  const [meta, setMeta] = useState(null);
  const [qnaData, setQnaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  /* ================= META ================= */
  useEffect(() => {
    axios
      .get("https://setusouls-1.onrender.com/api/experience-meta/my-experiences")
      .then((res) => setMeta(res.data || null))
      .catch((err) => console.error("Meta error:", err));
  }, []);

  /* ================= EXPERIENCES ================= */
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://setusouls-1.onrender.com/api/experiences")
      .then((res) => {
        setQnaData(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Experience error:", err);
        setQnaData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(qnaData.length / itemsPerPage);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return qnaData.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <p className="text-center py-10">Loading Experiences...</p>;
  if (!qnaData.length) return <p className="text-center py-10">No Experiences found.</p>;

  return (
    <div
      className="
        max-w-[1200px] mx-auto
        px-4 sm:px-6 lg:px-8
        py-8 sm:py-12
        flex flex-col
        animate-fadeIn
        font-sans
      "
    >
      {/* ================= META ================= */}
      {meta && (
        <>
          <h1 className="text-center text-[#0702bc] font-bold text-[clamp(2rem,4vw,3rem)] mb-4 sm:mb-6">
            {meta.title}
          </h1>
          <h3
            className="text-center font-bold text-black mb-8 sm:mb-10 text-[clamp(1rem,2vw,1.3rem)] leading-relaxed sm:leading-loose"
            dangerouslySetInnerHTML={{ __html: meta.description }}
          />
        </>
      )}

      {/* ================= EXPERIENCES LIST ================= */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {getCurrentPageData().map(({ _id, header, question, answer }, index) => (
          <article
            key={_id}
            className="
              w-full
    mt-12
    p-10 md:p-16
    bg-[rgb(249,250,254)]
    rounded-[6px]
    shadow-[0_1px_4px_rgba(0,0,0,0.1)]
    transition-shadow duration-300
    hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]
            "
            style={{borderLeft: '5px solid rgb(52, 152, 219)'}}
          >
            {/* HEADER */}
            <h2 className="text-center font-bold text-[#0702bc] leading-tight sm:leading-normal text-[clamp(1.4rem,2.5vw,1.8rem)] mb-8 md:mb-16">
  {header}
</h2>
            {/* QUESTION/EXPERIENCE */}
<h3 className="font-bold text-black text-[clamp(0.95rem,2vw,1.2rem)] leading-loose mb-4 text-left">
  Experience {index + 1}:<br />
  Devotee Speaks:<br />
  <br />
  {question ? (
    question.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ))
  ) : (
    "No experience description"
  )}
</h3>

{/* ANSWER/SETU SPEAKS */}
{answer && (
  <p className="text-[#1700c4] font-bold text-[clamp(0.95rem,2vw,1.2rem)] leading-loose px-0 sm:px-12 animate-fadeIn">
    <br />
    Answer:<br />
    Setu Speaks:<br />
    <br />
    {answer.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </p>
)}
          </article>
        ))}
      </div>

      {/* ================= PAGINATION ================= */}
      {totalPages > 1 && (
        <nav className="flex flex-wrap justify-center gap-2 mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="
              px-3 py-2 rounded-md font-semibold text-white
              bg-[#3498db]
              disabled:bg-gray-300 disabled:cursor-not-allowed
              hover:bg-[#2980b9]
              border-none
            "
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`
                px-3 py-2 rounded-md font-semibold text-white border-none
                ${currentPage === i + 1
                  ? "bg-[#2c3e50]"
                  : "bg-[#3498db] hover:bg-[#2980b9]"
                }
                active:scale-95
              `}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="
              px-3 py-2 rounded-md font-semibold text-white
              bg-[#3498db]
              disabled:bg-gray-300 disabled:cursor-not-allowed
              hover:bg-[#2980b9]
              border-none
            "
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );
};

export default MyExperiences;