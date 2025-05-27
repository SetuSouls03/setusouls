import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/history">History</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
      <div className="footer-copy">
        &copy; SetuSouls {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
