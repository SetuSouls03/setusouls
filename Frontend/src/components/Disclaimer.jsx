import React, { useState, useEffect } from "react";
import "./Disclaimer.css";

const Disclaimer = () => {
  const [key, setKey] = useState(0); // used to restart animation every 5 seconds
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1); // trigger re-render
    }, 30000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="disclaimer-container">
  <div className={`disclaimer-track ${paused ? "paused" : ""}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="disclaimer-text">
      Disclaimer: This spiritual content is for knowledge-sharing purposes only, inspired by ancient texts and modern interpretations. It does not aim to replace personal faith, religious practices, or medical guidance.
    </div>
    <div className="disclaimer-text">
      Disclaimer: This spiritual content is for knowledge-sharing purposes only, inspired by ancient texts and modern interpretations. It does not aim to replace personal faith, religious practices, or medical guidance.
    </div>
  </div>
</div>

  );
};

export default Disclaimer;
