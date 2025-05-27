import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/Logo.jpg';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout();       // Clear context auth state
    navigate('/login');
    closeMobileMenu();
  };

  return (
    <nav className={`navbar navbar-expand-lg premium-navbar ${scrolled ? 'navbar-scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="container" style={{ maxWidth: '95%' }}>
        <NavLink className="navbar-brand" to="/" onClick={closeMobileMenu}>
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <span className="brand-name">Setu Souls</span>
        </NavLink>

        <button
          className={`navbar-toggler ${mobileMenuOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>

        <div className={`navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <div style={{ paddingLeft: '10%' }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  onClick={closeMobileMenu}
                  activeclassname="active"
                >
                  <span className="nav-link-content">
                    <span className="nav-text">Home</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/history"
                  className="nav-link"
                  onClick={closeMobileMenu}
                  activeclassname="active"
                >
                  <span className="nav-link-content">
                    <span className="nav-text">History</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/charanpooja"
                  className="nav-link"
                  onClick={closeMobileMenu}
                  activeclassname="active"
                >
                  <span className="nav-link-content">
                    <span className="nav-text">Charan Pooja</span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  onClick={closeMobileMenu}
                  activeclassname="active"
                >
                  <span className="nav-link-content">
                    <span className="nav-text">Contact</span>
                  </span>
                </NavLink>
              </li>
              <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''} ${!isAuthenticated ? 'disabled-dropdown' : ''}`}>
  <a
    className={`nav-link dropdown-toggle ${!isAuthenticated ? 'disabled-link' : ''}`}
    href="#important-section"
    onClick={(e) => {
      if (!isAuthenticated) {
        e.preventDefault(); // Prevent dropdown opening
      } else {
        toggleDropdown(e);
      }
    }}
    tabIndex={isAuthenticated ? 0 : -1}  // Prevent tab focus if disabled
    aria-disabled={!isAuthenticated}
  >
    <span className="nav-link-content">
      <span className="nav-text">Important Section</span>
      <i className={`dropdown-arrow fas ${dropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
    </span>
  </a>
  <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
    {isAuthenticated ? (
      <>
        <NavLink
          to="/prayer"
          className="dropdown-item"
          onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}
          activeclassname="active"
        >
          Prayer
        </NavLink>
        <NavLink
          to="/important-notes"
          className="dropdown-item"
          onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}
          activeclassname="active"
        >
          Important Notes
        </NavLink>
        <NavLink
          to="/other"
          className="dropdown-item"
          onClick={() => { closeMobileMenu(); setDropdownOpen(false); }}
          activeclassname="active"
        >
          Other Section
        </NavLink>
      </>
    ) : (
      <span className="dropdown-item disabled-text" title="Login to access">Login to access</span>
    )}
  </div>
</li>
            </ul>
          </div>

          <div className="navbar-actions">
            {isAuthenticated ? (
              <button
                className="btn login-btn"
                onClick={handleLogout}
                style={{ color: 'white', border: '1px solid white' }}
                title="Logout"
              >
                <i className="fas fa-sign-out-alt"></i>
                <span style={{ color: 'white' }}>Logout</span>
              </button>
            ) : (
              <button
                className="btn login-btn"
                onClick={() => {
                  navigate('/login');
                  closeMobileMenu();
                }}
                style={{ color: 'white', border: '1px solid white' }}
              >
                <i className="fas fa-sign-in-alt"></i>
                <span style={{ color: 'white' }}>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
