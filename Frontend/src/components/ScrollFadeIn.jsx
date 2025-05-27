import React, { useEffect, useRef, useState } from 'react';
import './ScrollFadeIn.css';

const ScrollFadeIn = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
