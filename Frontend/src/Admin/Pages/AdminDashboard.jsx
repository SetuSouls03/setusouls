// Simplified AdminDashboard.jsx - only sidebar and layout
import React, { useState } from 'react';
import { 
  FaHome, FaInfoCircle, FaPray, FaStickyNote, 
  FaListAlt, FaFolder, FaQuestionCircle, 
  FaUserEdit, FaBook, FaQuoteLeft,
  FaBars, FaChartLine, FaUsers,
  FaBell, FaSearch, FaCog, FaUserCircle,
  FaMoon, FaSun, FaChevronLeft, FaShieldAlt,
  FaGlobe, FaHandHoldingHeart, FaSignOutAlt,
  FaCaretDown, FaCaretUp, FaChevronRight
} from 'react-icons/fa';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Sidebar menu items
  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: <FaChartLine />,
      path: '',
      exact: true
    },
    { 
      id: 'home', 
      label: 'Home Page', 
      icon: <FaHome />,
      path: 'home'
    },
    { 
      id: 'history', 
      label: 'History', 
      icon: <FaInfoCircle />,
      path: 'history'
    },
    { 
      id: 'charan-pooja', 
      label: 'Charan Pooja', 
      icon: <FaPray />,
      path: 'charan-pooja'
    },
    { 
      id: 'important-section', 
      label: 'Important Content', 
      icon: <FaStickyNote />,
      subItems: [
        { id: 'prayer', label: 'Prayer Requests', icon: <FaPray />, path: 'prayer' },
        { id: 'important-notes', label: 'Important Notes', icon: <FaStickyNote />, path: 'important-notes' },
        { id: 'summary', label: 'Daily Summary', icon: <FaListAlt />, path: 'summary' },
        { id: 'other-section', label: 'Other Content', icon: <FaFolder />, path: 'other-section' }
      ]
    },
    { 
      id: 'devotee-content', 
      label: 'Devotee Content', 
      icon: <FaUsers />,
      subItems: [
        { id: 'devotee-queries', label: 'Devotee Queries', icon: <FaQuestionCircle />, path: 'devotee-queries' },
        { id: 'sadhna', label: 'Sadhna Records', icon: <FaHandHoldingHeart />, path: 'sadhna' },
        { id: 'important-quotes', label: 'Important Quotes', icon: <FaQuoteLeft />, path: 'important-quotes' },
        { id: 'my-experience', label: 'My Experiences', icon: <FaUserEdit />, path: 'my-experience' },
        { id: 'about-hanudas', label: 'About Hanudas', icon: <FaInfoCircle />, path: 'about-hanudas' }
      ]
    },
    { 
      id: 'footer', 
      label: 'Footer Management', 
      icon: <FaGlobe />,
      subItems: [
        { id: 'about', label: 'About', icon: <FaInfoCircle />, path: 'about' },
        { id: 'contact', label: 'Contact Info', icon: <FaBook />, path: 'contact' },
        { id: 'privacy-policy', label: 'Privacy Policy', icon: <FaShieldAlt />, path: 'privacy-policy' }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin-login');
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'} overflow-hidden`}>
      {/* Sidebar */}
      <div className={`
        ${sidebarOpen ? 'w-72' : 'w-20'} 
        ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-amber-900 to-orange-800'}
        text-white transition-all duration-300 flex flex-col flex-shrink-0 overflow-hidden shadow-2xl relative
        border-r ${darkMode ? 'border-gray-700' : 'border-amber-700/30'}
      `}>
        {/* Sidebar Header */}
        <div className={`
          p-5 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-amber-800 to-orange-700'}
          border-b ${darkMode ? 'border-gray-700' : 'border-amber-700/50'}
          flex items-center justify-between relative overflow-hidden
        `}>
          {sidebarOpen ? (
            <>
              <div className="flex items-center space-x-3 z-10">
                <div className={`
                  w-12 h-12 rounded-2xl 
                  ${darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-amber-500 to-orange-500'}
                  flex items-center justify-center shadow-lg backdrop-blur-sm
                  transform hover:scale-105 transition-transform duration-300
                `}>
                  <FaPray className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight">SETUU Admin</h2>
                  <p className={`text-xs ${darkMode ? 'text-amber-300/70' : 'text-amber-300/80'}`}>Spiritual Portal v2.0</p>
                </div>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className={`
                  p-2 rounded-xl 
                  ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-amber-800/50'}
                  transition-all duration-300 hover:rotate-90 z-10
                `}
              >
                <FaChevronLeft />
              </button>
            </>
          ) : (
            <button 
              onClick={() => setSidebarOpen(true)}
              className={`
                p-3 rounded-xl 
                ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-amber-800/50'}
                transition-all duration-300 mx-auto
              `}
            >
              <FaBars className="text-xl" />
            </button>
          )}
        </div>

        {/* Sidebar Menu */}
        <div className="flex-1 overflow-y-auto py-6 custom-scrollbar">
          <nav className="space-y-1 px-4">
            {menuItems.map((item) => {
              if (item.subItems) {
                return (
                  <div key={item.id} className="mb-1">
                    <button
                      onClick={() => toggleSection(item.id)}
                      className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 ${sidebarOpen ? 'justify-start px-4' : 'justify-center'} ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-amber-800/30'} group`}
                    >
                      <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-amber-800/50'} transition-colors duration-300 group-hover:scale-110`}>
                        {item.icon}
                      </div>
                      
                      {sidebarOpen && (
                        <div className="ml-3 flex-1 flex items-center justify-between">
                          <span className="text-sm font-medium text-left">{item.label}</span>
                          <span className="text-xs opacity-50">
                            {expandedSections[item.id] ? <FaCaretUp /> : <FaCaretDown />}
                          </span>
                        </div>
                      )}
                    </button>

                    {sidebarOpen && expandedSections[item.id] && (
                      <div className="ml-10 mt-1 space-y-1 animate-slideDown">
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.id}
                            to={subItem.path}
                            end
                            className={({ isActive }) => `
                              flex items-center p-3 text-sm rounded-lg transition-all duration-300
                              ${isActive ? 
                                (darkMode ? 'bg-gradient-to-r from-amber-700/20 to-orange-700/20 text-amber-300' : 'bg-gradient-to-r from-amber-600/20 to-orange-600/20 text-amber-300') : 
                                (darkMode ? 'text-gray-300 hover:text-amber-300 hover:bg-gray-800/30' : 'text-amber-200/80 hover:text-amber-300 hover:bg-amber-800/20')
                              }
                            `}
                          >
                            <span className="mr-3 text-xs opacity-60">{subItem.icon}</span>
                            <span className="flex-1">{subItem.label}</span>
                            <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  end={item.exact}
                  className={({ isActive }) => `
                    flex items-center p-3 rounded-xl transition-all duration-300 mb-1
                    ${sidebarOpen ? 'justify-start px-4' : 'justify-center'}
                    ${isActive ? 
                      (darkMode ? 'bg-gradient-to-r from-amber-700/30 to-orange-700/30' : 'bg-gradient-to-r from-amber-600/20 to-orange-600/20') : 
                      (darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-amber-800/30')
                    }
                  `}
                >
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-amber-800/50'} transition-colors duration-300`}>
                    {item.icon}
                  </div>
                  {sidebarOpen && (
                    <span className="ml-3 text-sm font-medium text-left">{item.label}</span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className={`
          p-4 border-t ${darkMode ? 'border-gray-700' : 'border-amber-700/50'}
          ${darkMode ? 'bg-gradient-to-t from-gray-800 to-gray-900' : 'bg-gradient-to-t from-amber-800/80 to-orange-800/80'}
        `}>
          <div className={`flex items-center ${sidebarOpen ? 'space-x-3' : 'justify-center'}`}>
            <div className={`
              w-12 h-12 rounded-xl 
              ${darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-amber-500 to-orange-500'}
              flex items-center justify-center shadow-lg backdrop-blur-sm relative
            `}>
              <FaUserCircle className="text-xl" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            {sidebarOpen && (
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Sudhanshu Sarkar</p>
                    <p className={`text-xs ${darkMode ? 'text-amber-300/70' : 'text-amber-300/80'}`}>Super Admin</p>
                  </div>
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className={`p-2 rounded-lg transition-all duration-300 hover:rotate-12 ${darkMode ? 'hover:bg-gray-700 text-amber-300' : 'hover:bg-amber-700/30 text-amber-200'}`}
                  >
                    {darkMode ? <FaSun /> : <FaMoon />}
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <NavLink
                    to="settings"
                    className={`text-xs px-3 py-1.5 rounded-lg transition-colors flex items-center ${darkMode ? 'text-amber-300 hover:text-white hover:bg-gray-700' : 'text-amber-200 hover:text-white hover:bg-amber-700/50'}`}
                  >
                    <FaCog className="mr-1" /> Settings
                  </NavLink>
                  
                  <button 
                    onClick={handleLogout}
                    className={`text-xs px-3 py-1.5 rounded-lg transition-colors flex items-center ${darkMode ? 'text-red-400 hover:text-white hover:bg-red-900/30' : 'text-red-300 hover:text-white hover:bg-red-800/30'}`}
                  >
                    <FaSignOutAlt className="mr-1" /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-amber-200'} shadow-sm border-b p-4 flex items-center justify-between`}>
          <div className="flex items-center space-x-4">
            {!sidebarOpen && (
              <button 
                onClick={() => setSidebarOpen(true)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-amber-100 text-amber-600'}`}
              >
                <FaBars />
              </button>
            )}
            <div>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Admin Dashboard
              </h1>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Manage your content</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Search..."
                className={`
                  pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent w-64
                  ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-amber-200 bg-amber-50/50 text-gray-800'}
                `}
              />
            </div>
            
            <button className={`relative p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-amber-100'}`}>
              <FaBell className={darkMode ? 'text-amber-400' : 'text-amber-600'} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </header>

        {/* Main Content Area - Outlet will render nested routes */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className={`p-4 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-amber-900 border-amber-700/50'} text-white`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm">
              © {new Date().getFullYear()} SETUU Spiritual Portal • v2.0.1
            </div>
            <div className="text-xs text-amber-300/80">
              All rights reserved
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminDashboard;