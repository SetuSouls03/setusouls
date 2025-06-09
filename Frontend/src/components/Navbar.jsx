import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Logo.jpeg";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [importantDropdownOpen, setImportantDropdownOpen] = useState(false);
  const [additionalDropdownOpen, setAdditionalDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleImportantDropdown = (e) => {
    e.preventDefault();
    setImportantDropdownOpen(!importantDropdownOpen);
    setAdditionalDropdownOpen(false); // Close other dropdown if open
  };

  const toggleAdditionalDropdown = (e) => {
    e.preventDefault();
    setAdditionalDropdownOpen(!additionalDropdownOpen);
    setImportantDropdownOpen(false); // Close other dropdown if open
  };

  const handleLogout = () => {
    logout(); // Clear context auth state
    navigate("/login");
    closeMobileMenu();
  };

  return (
    <nav
      className={`navbar navbar-expand-lg premium-navbar ${
        scrolled ? "navbar-scrolled" : ""
      } ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
    >
      <div className="container" style={{ maxWidth: "95%" }}>
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <span className="brand-name">Setu Souls</span>
        </NavLink>

        <button
          className={`navbar-toggler ${mobileMenuOpen ? "open" : ""}`}
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="30"
            height="24"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className={`navbar-collapse ${mobileMenuOpen ? "show" : ""}`}>
          <div className="ulunder">
            <ul className="navbar-nav">
              <div className="FirstThree">
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
              </div>
              
              <div className="lasttow">
                <li
                className={`nav-item dropdown ${
                  importantDropdownOpen ? "show" : ""
                } ${!isAuthenticated ? "disabled-dropdown" : ""}`}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    !isAuthenticated ? "disabled-link" : ""
                  }`}
                  href="#important-section"
                  onClick={(e) => {
                    if (!isAuthenticated) {
                      e.preventDefault();
                    } else {
                      toggleImportantDropdown(e);
                    }
                  }}
                  tabIndex={isAuthenticated ? 0 : -1}
                  aria-disabled={!isAuthenticated}
                >
                  <span className="nav-link-content">
                    <span className="nav-text">Important Section</span>
                    <i
                      className={`dropdown-arrow fas ${
                        importantDropdownOpen
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></i>
                  </span>
                </a>
                <div
                  className={`dropdown-menu ${
                    importantDropdownOpen ? "show" : ""
                  }`}
                >
                  {isAuthenticated ? (
                    <>
                      <NavLink
                        to="/prayer"
                        className="dropdown-item"
                        onClick={() => {
                          closeMobileMenu();
                          setImportantDropdownOpen(false);
                        }}
                      >
                        Prayer
                      </NavLink>
                      <NavLink
                        to="/important-notes"
                        className="dropdown-item"
                        onClick={() => {
                          closeMobileMenu();
                          setImportantDropdownOpen(false);
                        }}
                      >
                        Important Notes
                      </NavLink>
                      <NavLink
                        to="/other"
                        className="dropdown-item"
                        onClick={() => {
                          closeMobileMenu();
                          setImportantDropdownOpen(false);
                        }}
                      >
                        Other Section
                      </NavLink>
                    </>
                  ) : (
                    <span
                      className="dropdown-item disabled-text"
                      title="Login to access"
                    >
                      Login to access
                    </span>
                  )}
                </div>
              </li>

              <li
                className={`nav-item dropdown ${
                  additionalDropdownOpen ? "show" : ""
                } ${!isAuthenticated ? "disabled-dropdown" : ""}`}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    !isAuthenticated ? "disabled-link" : ""
                  }`}
                  href="#additional-section"
                  onClick={(e) => {
                    if (!isAuthenticated) {
                      e.preventDefault();
                    } else {
                      toggleAdditionalDropdown(e);
                    }
                  }}
                  tabIndex={isAuthenticated ? 0 : -1}
                  aria-disabled={!isAuthenticated}
                >
                  <span className="nav-link-content">
                    <span className="nav-text">Additional Section</span>
                    <i
                      className={`dropdown-arrow fas ${
                        additionalDropdownOpen
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></i>
                  </span>
                </a>
                <div
                  className={`dropdown-menu ${
                    additionalDropdownOpen ? "show" : ""
                  }`}
                >
                  {isAuthenticated ? (
                    <>
                      <NavLink
                        to="/qna-section"
                        className="dropdown-item"
                        onClick={() => {
                          closeMobileMenu();
                          setAdditionalDropdownOpen(false);
                        }}
                      >
                        Devotee Queries
                      </NavLink>
                      <NavLink
                        to="/sadhna"
                        className="dropdown-item"
                        onClick={() => {
                          closeMobileMenu();
                          setAdditionalDropdownOpen(false);
                        }}
                      >
                        Sadhna
                      </NavLink>
                      <NavLink
                        to="/quotes"
                        className="dropdown-item"
                        onClick={() => {
                          closeMobileMenu();
                          setAdditionalDropdownOpen(false);
                        }}
                      >
                        Important Quotes
                      </NavLink>
                      <NavLink
                        to="/about"
                        className="dropdown-item"
                        onClick={() => {
                          closeMobileMenu();
                          setAdditionalDropdownOpen(false);
                        }}
                      >
                        About Hanudas
                      </NavLink>
                    </>
                  ) : (
                    <span
                      className="dropdown-item disabled-text"
                      title="Login to access"
                    >
                      Login to access
                    </span>
                  )}
                </div>
              </li>
              </div>
              
            </ul>
          </div>

          <div className="navbar-actions">
            {isAuthenticated ? (
              <button
                className="btn login-btn"
                onClick={handleLogout}
                style={{ color: "white", border: "1px solid white" }}
                title="Logout"
              >
                <i className="fas fa-sign-out-alt"></i>
                <span style={{ color: "white" }}>Logout</span>
              </button>
            ) : (
              <button
                className="btn login-btn"
                onClick={() => {
                  navigate("/login");
                  closeMobileMenu();
                }}
                style={{ color: "white", border: "1px solid white" }}
              >
                <i className="fas fa-sign-in-alt"></i>
                <span style={{ color: "white" }}>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
