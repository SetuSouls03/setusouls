import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const API_BASE ="https://setusouls-1.onrender.com/";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/home`)
      .then(res => setData(res.data))
      .catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="relative min-h-screen bg-[#fefcea] flex justify-center">
      <motion.div
        className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 text-center font-merri"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* TITLE */}
        <motion.h1
          className="font-bold text-brandBlue text-[clamp(1.8rem,4vw,2.8rem)]"
          initial={{ y: -40 }}
          animate={{ y: 0 }}
        >
          {data.title}
        </motion.h1>

        <h2 className="mt-4 mb-10 font-bold !text-[#1100d7] text-[clamp(1.2rem,3vw,2rem)]">
          {data.subtitle}
        </h2>

        {/* INFO BLOCK */}
        <section className="bg-white text-black rounded-xl shadow-lg p-6">
          {data.infoBlocks.map((block, i) => (
            <div key={i} className="pb-6">
              <p className="font-extrabold text-[clamp(1.1rem,2.5vw,1.8rem)]">
                {block.text}
              </p>

              <p className="mt-4 font-extrabold text-[#1100d7] text-[clamp(1.1rem,2.5vw,1.8rem)]">
                {block.hindi}
              </p>

              {/* SEPARATOR */}
              {i !== data.infoBlocks.length - 1 && (
                <div className="mt-6 h-[1px] w-full bg-gray-300" />
              )}
            </div>
          ))}
        </section>


        {/* MANTRA SECTION */}
        <section className="bg-[#fffbea] mt-16 rounded-xl px-4 sm:px-6 lg:px-10 py-12">
          <h2 className="mb-10 font-bold text-[#0904b8] text-[clamp(1.6rem,4vw,3rem)]">
            {data.mantraSectionTitle}
          </h2>

          {data.mantras.map((m, i) => (
            <div key={i} className="mb-12">
              <div
                className="
    bg-white rounded-xl p-6 my-10
    border-l-[8px] border-l-[#d35400]
    shadow-[0_0_20px_rgba(220,120,50,0.2)]
    transition-all duration-300 ease-in-out
    hover:shadow-[0_0_30px_rgba(220,120,50,0.45)]
    hover:border-l-[#e67e22]
  "
                style={{ borderLeft: '5px solid orange' }}
              >



                <p className="font-devanagari font-extrabold text-[#1100d7] leading-relaxed text-[clamp(1.2rem,3vw,2rem)]">
                  {m.sanskrit.split("\n").map((l, j) => (
                    <span key={j}>{l}<br /></span>
                  ))}
                </p>

                <p className="mt-6 text-black text-[clamp(1rem,2vw,1.4rem)] font-bold">
                  <strong>Meaning:</strong> {m.meaning}
                </p>
              </div>

              <div
                className=" mx-auto mt-6 mb-12 max-w-[90%] p-[1rem_1.5rem] text-center font-semibold text-red-600 text-[clamp(1.3rem,2.5vw,2rem)] bg-gradient-to-br from-[#f9f7f1] to-[#fff8dc] border-l-[6px] border-[#f59e0b] rounded-lg shadow-[0_4px_10px_rgba(245,158,11,0.3)] select-none transition-colors duration-300 ease-in-out hover:bg-[#f59e0b] hover:shadow-[0_6px_15px_rgba(245,158,11,0.6)] cursor-default
  "
              >
                {m.note}
              </div>


            </div>
          ))}
        </section>

        {/* CTA */}
        <motion.p
          className="mt-12 font-bold text-black text-[clamp(1.2rem,3vw,1.8rem)]"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          {data.callToAction}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
