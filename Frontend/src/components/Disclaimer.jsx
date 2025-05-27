import React, { useState, useEffect } from "react";
import "./Disclaimer.css";

const Disclaimer = () => {
  const [key, setKey] = useState(0); // used to restart animation every 5 seconds
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1); // trigger re-render
    }, 14000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="disclaimer-container">
      <div
        key={key}
        className={`disclaimer-text ${paused ? "paused" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        Disclaimer: This spiritual content is for knowledge-sharing purposes only, inspired by ancient texts and modern interpretations. It does not aim to replace personal faith, religious practices, or medical guidance.
      </div>
    </div>
  );
};

export default Disclaimer;
