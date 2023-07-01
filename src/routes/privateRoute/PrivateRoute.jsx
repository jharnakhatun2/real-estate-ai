import { AuthContext } from "context/authProvider/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "ui/loading/Loading";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}