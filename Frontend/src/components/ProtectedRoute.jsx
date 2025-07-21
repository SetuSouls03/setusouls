import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // or your spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
