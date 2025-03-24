import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const token = localStorage.getItem("token");

  if (!isAuthenticated || !token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
