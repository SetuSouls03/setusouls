import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
      </div>
      <div className="footer-copy">
        &copy; SetuSouls {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
