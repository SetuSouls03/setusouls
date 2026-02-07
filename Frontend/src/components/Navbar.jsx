import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.jpeg";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [importantDropdownOpen, setImportantDropdownOpen] = useState(false);
  const [additionalDropdownOpen, setAdditionalDropdownOpen] = useState(false);
  const [mobileImportantDropdownOpen, setMobileImportantDropdownOpen] = useState(false);
  const [mobileAdditionalDropdownOpen, setMobileAdditionalDropdownOpen] = useState(false);

  // REMOVED the auto-open effects to prevent unwanted behavior

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
    setImportantDropdownOpen(false);
    setAdditionalDropdownOpen(false);
    setMobileImportantDropdownOpen(false);
    setMobileAdditionalDropdownOpen(false);
    document.body.style.overflow = "";
  };

  const toggleImportantDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setImportantDropdownOpen(!importantDropdownOpen);
    setAdditionalDropdownOpen(false);
  };

  const toggleAdditionalDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdditionalDropdownOpen(!additionalDropdownOpen);
    setImportantDropdownOpen(false);
  };

  const toggleMobileImportantDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileImportantDropdownOpen(!mobileImportantDropdownOpen);
    setMobileAdditionalDropdownOpen(false);
  };

  const toggleMobileAdditionalDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileAdditionalDropdownOpen(!mobileAdditionalDropdownOpen);
    setMobileImportantDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    closeMobileMenu();
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setImportantDropdownOpen(false);
        setAdditionalDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Common NavLink style classes
  const navLinkClasses = "relative inline-flex items-center px-3 sm:px-4 py-2 text-base sm:text-xl font-semibold text-white hover:text-amber-100 transition-colors duration-200";
  const activeNavLinkClasses = "text-amber-200 after:scale-x-100";
  
  // Dropdown item classes
  const dropdownItemClasses = "block w-full px-4 py-3 text-left sm:text-xl text-gray-700 hover:bg-gradient-to-r hover:from-spiritual-500 hover:to-spiritual-600 hover:text-white transition-all duration-200 no-underline";

  // Mobile dropdown classes
  const mobileDropdownItemClasses = ({ isActive }) => 
    `block w-full px-4 py-3 rounded-lg no-underline text-lg transition-all duration-200
    ${isActive 
      ? "bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-200 border-l-4 border-amber-400" 
      : "text-white hover:bg-white/10"
    }`;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-32 bg-gradient-to-r from-spiritual-800 to-spiritual-600 shadow-lg bg-opacity-95">
        <div className="container mx-auto px-4 sm:px-6 h-full" style={{ maxWidth: '1700px' }}>
          <div className="flex items-center justify-between h-full">
            {/* Logo & Brand */}
            <NavLink 
              to="/" 
              className="flex items-center space-x-3 sm:space-x-4 group no-underline hover:no-underline"
              onClick={closeMobileMenu}
            >
              <div className={`relative overflow-hidden rounded-xl border-2 border-amber-200 transition-all duration-300 w-24 h-24 sm:w-28 sm:h-28`}>
                <img 
                  src={Logo} 
                  alt="Setu Souls Logo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-white leading-tight transition-all duration-300 text-2xl`}>
                  Setu Souls
                </span>
              </div>
            </NavLink>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-1 xl:space-x-2">
                {/* Regular Links */}
                <div className="flex items-center space-x-1 xl:space-x-2">
                  <NavLink
                    to="/"
                    className={({ isActive }) => 
                      `${navLinkClasses} after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-amber-200 after:scale-x-0 after:transition-transform after:duration-300  no-underline 
                      ${isActive ? activeNavLinkClasses : "after:hover:scale-x-100"}`
                    }
                    end
                  >
                    Home
                  </NavLink>
                  
                  <NavLink
                    to="/history"
                    className={({ isActive }) => 
                      `${navLinkClasses} after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-amber-200 after:scale-x-0 after:transition-transform after:duration-300  no-underline
                      ${isActive ? activeNavLinkClasses : "after:hover:scale-x-100"}`
                    }
                  >
                    History
                  </NavLink>
                  
                  <NavLink
                    to="/charanpooja"
                    className={({ isActive }) => 
                      `${navLinkClasses} after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-amber-200 after:scale-x-0 after:transition-transform after:duration-300  no-underline
                      ${isActive ? activeNavLinkClasses : "after:hover:scale-x-100"}`
                    }
                  >
                    Charan Pooja
                  </NavLink>
                </div>

                {/* Dropdowns */}
                <div className="flex items-center space-x-1 xl:space-x-2 ml-2">
                  {/* Important Section Dropdown */}
                  <div className="dropdown-container relative">
                    <button
                      onClick={toggleImportantDropdown}
                      disabled={!isAuthenticated}
                      className={`${navLinkClasses} flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed border-none bg-transparent
                        ${importantDropdownOpen ? "text-amber-200" : ""}`}
                    >
                      <span>Important Section</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${importantDropdownOpen ? "rotate-180" : ""}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {importantDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-56 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-100">
                        {isAuthenticated ? (
                          <>
                            <NavLink to="/prayer" className={dropdownItemClasses} onClick={closeMobileMenu}>
                              Prayer
                            </NavLink>
                            <NavLink to="/important-notes" className={dropdownItemClasses} onClick={closeMobileMenu}>
                              Important Notes
                            </NavLink>
                            <NavLink to="/summary" className={dropdownItemClasses} onClick={closeMobileMenu}>
                              Summary
                            </NavLink>
                            <NavLink to="/other" className={dropdownItemClasses} onClick={closeMobileMenu}>
                              Other Section
                            </NavLink>
                          </>
                        ) : (
                          <div className="px-4 py-3 text-gray-500 italic text-sm">
                            Login to access
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Additional Section Dropdown */}
                  <div className="dropdown-container relative">
                    <button
                      onClick={toggleAdditionalDropdown}
                      disabled={!isAuthenticated}
                      className={`${navLinkClasses} flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed border-none bg-transparent
                        ${additionalDropdownOpen ? "text-amber-200" : ""}`}
                    >
                      <span>Additional Section</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${additionalDropdownOpen ? "rotate-180" : ""}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {additionalDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-56 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-100">
                        {isAuthenticated ? (
                          <>
                            <NavLink to="/qna-section" className={dropdownItemClasses} onClick={closeMobileMenu}>
                              Devotee Queries
                            </NavLink>
                            <NavLink to="/sadhna" className={dropdownItemClasses} onClick={closeMobileMenu}>
                              Sadhna
                            </NavLink>
                            <NavLink to="/quotes" className={dropdownItemClasses} onClick={closeMobileMenu}>
                              Important Quotes
                            </NavLink>
                            <NavLink to="/my-experiences" className={dropdownItemClasses} onClick={closeMobileMenu}>
                              My Experiences
                            </NavLink>
                            <NavLink to="/about" className={dropdownItemClasses} onClick={closeMobileMenu}>
                              About Hanudas
                            </NavLink>
                          </>
                        ) : (
                          <div className="px-4 py-3 text-gray-500 italic text-sm">
                            Login to access
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Auth Button */}
            <div className="hidden lg:flex items-center">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 bg-white text-spiritual-700 rounded-lg
                    font-semibold hover:bg-amber-50 hover:shadow-lg transform hover:-translate-y-0.5
                    transition-all duration-300 shadow-md border-none"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Logout</span>
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center space-x-2 px-4 py-2 bg-white text-spiritual-700 rounded-lg
                    font-semibold hover:bg-amber-50 hover:shadow-lg transform hover:-translate-y-0.5
                    transition-all duration-300 shadow-md border-none"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Login</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 relative
                rounded-lg hover:bg-white/10 transition-colors duration-200 bg-transparent border-2 border-white"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 absolute
                ${mobileMenuOpen ? "rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "top-2 left-1/2 -translate-x-1/2"}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 absolute
                ${mobileMenuOpen ? "-rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "bottom-2 left-1/2 -translate-x-1/2"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className={`lg:hidden fixed inset-y-0 right-0 z-200 w-full max-w-sm
          bg-gradient-to-b from-spiritual-800 to-spiritual-700 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ top: '8rem' }} 
        >
          <div className="flex flex-col h-full pt-16 pb-6 px-6 overflow-y-auto 
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* Mobile Navigation Links */}
            <div className="flex-1 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-200 no-underline
                  ${isActive 
                    ? "bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-200 border-l-4 border-amber-400" 
                    : "text-white hover:bg-white/10"
                  }`
                }
                onClick={closeMobileMenu}
                end
              >
                <span className="text-lg font-medium">Home</span>
              </NavLink>

              <NavLink
                to="/history"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-200 no-underline
                  ${isActive 
                    ? "bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-200 border-l-4 border-amber-400" 
                    : "text-white hover:bg-white/10"
                  }`
                }
                onClick={closeMobileMenu}
              >
                <span className="text-lg font-medium">History</span>
              </NavLink>

              <NavLink
                to="/charanpooja"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-200 no-underline
                  ${isActive 
                    ? "bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-200 border-l-4 border-amber-400" 
                    : "text-white hover:bg-white/10"
                  }`
                }
                onClick={closeMobileMenu}
              >
                <span className="text-lg font-medium">Charan Pooja</span>
              </NavLink>

              {/* Mobile - Important Section Dropdown */}
              <div className="border-t border-white/20">
                <button
                  onClick={toggleMobileImportantDropdown}
                  disabled={!isAuthenticated}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 border-none bg-transparent text-white
                    ${!isAuthenticated ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"}
                    ${mobileImportantDropdownOpen ? "bg-white/10" : ""}`}
                >
                  <div className="flex flex-col items-start">
                    <span className={`font-semibold text-lg tracking-wider
                      ${mobileImportantDropdownOpen ? "text-amber-200" : "text-white"}`}>
                      Important Section
                    </span>
                    {!isAuthenticated && (
                      <span className="text-gray-300 italic text-xs mt-1">
                        Login to access
                      </span>
                    )}
                  </div>
                  {isAuthenticated && (
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 
                        ${mobileImportantDropdownOpen ? "rotate-180" : ""}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {isAuthenticated && mobileImportantDropdownOpen && (
                  <div className="mt-4 ml-4 space-y-0 border-l-2 border-amber-500/30 pl-4">
                    <NavLink to="/prayer" className={mobileDropdownItemClasses} onClick={closeMobileMenu}>
                      Prayer
                    </NavLink>
                    <NavLink to="/important-notes" className={mobileDropdownItemClasses} onClick={closeMobileMenu}>
                      Important Notes
                    </NavLink>
                    <NavLink to="/summary" className={mobileDropdownItemClasses} onClick={closeMobileMenu}>
                      Summary
                    </NavLink>
                    <NavLink to="/other" className={mobileDropdownItemClasses} onClick={closeMobileMenu}>
                      Other Section
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Mobile - Additional Section Dropdown */}
              <div className="border-t border-white/20">
                <button
                  onClick={toggleMobileAdditionalDropdown}
                  disabled={!isAuthenticated}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 bg-transparent border-none text-white
                    ${!isAuthenticated ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"}
                    ${mobileAdditionalDropdownOpen ? "bg-white/10" : ""}`}
                >
                  <div className="flex flex-col items-start">
                    <span className={`font-semibold text-lg tracking-wider
                      ${mobileAdditionalDropdownOpen ? "text-amber-200" : "text-white"}`}>
                      Additional Section
                    </span>
                    {!isAuthenticated && (
                      <span className="text-gray-300 italic text-xs mt-1">
                        Login to access
                      </span>
                    )}
                  </div>
                  {isAuthenticated && (
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 
                        ${mobileAdditionalDropdownOpen ? "rotate-180" : ""}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {isAuthenticated && mobileAdditionalDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1 border-l-2 border-amber-500/30 pl-4">
                    <NavLink to="/qna-section" className={mobileDropdownItemClasses} onClick={closeMobileMenu}>
                      Devotee Queries
                    </NavLink>
                    <NavLink to="/sadhna" className={mobileDropdownItemClasses} onClick={closeMobileMenu}>
                      Sadhna
                    </NavLink>
                    <NavLink to="/quotes" className={mobileDropdownItemClasses} onClick={closeMobileMenu}>
                      Important Quotes
                    </NavLink>
                    <NavLink to="/my-experiences" className={mobileDropdownItemClasses} onClick={closeMobileMenu}>
                      My Experiences
                    </NavLink>
                    <NavLink to="/about" className={mobileDropdownItemClasses} onClick={closeMobileMenu}>
                      About Hanudas
                    </NavLink>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Auth Button */}
            <div className="mt-8 pt-6 border-t border-white/20">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3
                    bg-white text-spiritual-700 rounded-xl
                    font-semibold hover:shadow-lg transform hover:-translate-y-0.5
                    transition-all duration-300 shadow-md border-none"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Logout</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                    closeMobileMenu();
                  }}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3
                    bg-white text-spiritual-700 rounded-xl
                    font-semibold hover:shadow-lg transform hover:-translate-y-0.5
                    transition-all duration-300 shadow-md border-none"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for CONTENT ONLY */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          style={{ top: '8rem' }}
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;