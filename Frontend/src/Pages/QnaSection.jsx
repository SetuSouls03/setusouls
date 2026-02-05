import React, { useState, useEffect } from "react";
import axios from "axios";

const QnaSection = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [qnaData, setQnaData] = useState([]);
  const [metaInfo, setMetaInfo] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQnaAndMeta = async () => {
      try {
        const res = await axios.get("https://setusouls-1.onrender.com/api/qna");
        const actualQnaData = res.data.qna?.[0]?.qna || [];
        const actualMeta =
          res.data.qna?.[0]?.meta || { title: "Devotee Queries", description: "" };

        setQnaData(actualQnaData);
        setMetaInfo(actualMeta);
      } catch (err) {
        console.error(err);
        setQnaData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchQnaAndMeta();
  }, []);

  const totalPages = Math.ceil(qnaData.length / itemsPerPage);

  const getCurrentPageData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    return qnaData.slice(start, start + itemsPerPage);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  if (loading) return <p className="text-center py-10">Loading Q&A...</p>;
  if (!qnaData.length) return <p className="text-center py-10">No Q&A found.</p>;

  return (
    <div
      className="
        max-w-[1200px] mx-auto
        px-4 sm:px-6 lg:px-8
        py-12
        flex flex-col
        animate-fadeIn
        font-sans
      "
    >
      {/* TITLE */}
      <h1 className="text-center text-[#0702bc] font-bold text-[clamp(2.5rem,5vw,3.5rem)] mb-6">
        {metaInfo.title}
      </h1>

      <h3
  className="text-center font-bold text-black mb-10 text-[clamp(1rem,2.5vw,1.4rem)] leading-loose"
  dangerouslySetInnerHTML={{ __html: metaInfo.description }}
/>

      {/* QNA LIST */}
      <div className="flex flex-col gap-6 px-2 sm:px-6">
        {getCurrentPageData().map(({ id, header, question, answer }) => (
          <article
  key={id}
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
  style={{ borderLeft: '5px solid rgb(52, 152, 219)' }}
>

            {/* HEADER */}
            <h2 className="text-center font-bold text-[#1700c4] leading-tight sm:leading-loose text-[clamp(1.8rem,3vw,2rem)] mb-8 md:mb-16">
              {header || "No header"}<br />
            </h2>

            {/* QUESTION */}
<h3 className="font-bold text-black text-[clamp(0.95rem,2vw,1.2rem)] leading-loose mb-4 text-left">
  Question {id}:<br />
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
    "No question"
  )}
</h3>

{/* ANSWER */}
<p className="text-[#1700c4] font-bold text-[clamp(0.95rem,2vw,1.2rem)] leading-loose px-0 sm:px-12 animate-fadeIn">
  <br />
  Answer:<br />
  Setu Speaks:<br />
  <br />
  {answer ? (
    answer.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ))
  ) : (
    "No answer"
  )}
</p>
          </article>
        ))}
      </div>

      {/* PAGINATION */}
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
                ${
                  currentPage === i + 1
                    ? "bg-[#2c3e50]"
                    : "bg-[#3498db] hover:bg-[#2980b9]"
                }
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

export default QnaSection;
