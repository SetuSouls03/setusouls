import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
export const AuthContext = createContext();

// Custom hook for easier usage
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check token on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      fetchUser(token); // fetch user data from backend
    }
    setLoading(false);
  }, []);

  // Function to fetch current user
  const fetchUser = async (token) => {
    try {
      const res = await axios.get("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        logout(); // auto logout if token invalid or user deleted
      }
    }
  };

  const login = async (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    await fetchUser(token); // fetch and set user data
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  // Axios interceptor to handle 401 globally
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      }
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
