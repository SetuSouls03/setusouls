import { createContext, useContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Custom hook for easier usage
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);  // <-- New

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false); // <-- Important
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
