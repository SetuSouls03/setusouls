import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/history">History</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms & Conditions</a>
      </div>
      <div className="footer-copy">
        &copy; SetuSouls {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
