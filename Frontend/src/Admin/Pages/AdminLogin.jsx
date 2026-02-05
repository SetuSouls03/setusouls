// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Fixed Header */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-0 px-4 shadow-sm flex-shrink-0 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-4xl text-white md:text-2xl font-bold tracking-wide">
              SETUU ADMIN PORTAL
            </h1>
            <p className="text-white text-xs md:text-sm mt-0">
              Exclusive Management Dashboard
            </p>
          </div>
        </div>
      </header>

      {/* Scrollable Main Content */}
      <div className="flex-1 flex min-h-0">
        {/* Left Image Section - Scrolls with content */}
          <div 
            className="w-1/2 h-[90%] min-h-screen"
            style={{
              backgroundImage: "url('/Logo.jpeg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

        {/* Right Login Section - Scrolls with content */}
        <div className="w-1/2 min-h-full bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100">
          <div className="flex flex-col items-center justify-start min-h-screen px-6 md:px-8 lg:px-12">
            <div className="w-full max-w-md mt-32 mb-8">
              {/* Welcome Section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-4 shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                    <FaUser className="text-xl text-white" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Admin Access
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Restricted Access - Authorized Personnel Only
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Admin Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <FaUser className="h-5 w-5 text-amber-600" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-400 transition-all bg-white/90 backdrop-blur-sm"
                      placeholder="Enter Admin Login ID"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Admin Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <FaLock className="h-5 w-5 text-amber-600" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3.5 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-400 transition-all bg-white/90 backdrop-blur-sm"
                      placeholder="Enter your Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center border-none bg-transparent"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="h-5 w-5 text-amber-500 hover:text-amber-700" />
                      ) : (
                        <FaEye className="h-5 w-5 text-amber-500 hover:text-amber-700" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative my-3">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-amber-200"></div>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold py-3.5 px-4 rounded-lg hover:from-amber-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] transform border-none"
                >
                  ACCESS ADMIN PORTAL
                </button>

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg">
                  <p className="text-xs text-amber-800 text-center font-normal">
  <span className="font-[800]">Security Notice:</span>{' '}
  This portal is restricted to authorized administrators only. All activities are monitored and logged.
</p>

                </div>

                {/* Contact Support */}
                <div className="text-center pt-3">
                  <p className="text-gray-600 text-xs">
                    Need access?{' '}
                    <a 
                      href="#" 
                      className="font-bold text-amber-600 hover:text-amber-700 transition-colors inline-flex items-center gap-1"
                      style={{fontSize:'0.8rem'}}
                    >
                      Contact System Administrator
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </p>
                </div>
              </form>

              {/* Footer */}
              <div className="mt-8 pt-5 border-t border-amber-200/50 text-center">
                <p className="text-xs text-amber-600/70 tracking-wide">
                  Secure Connection • Encrypted Session
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;