
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoute() {
  
  const token = localStorage.getItem("jwt"); 
  // If no token, redirect to login
  if (!token) {
    return  <Navigate to="/" replace />;
  }

  return <Outlet />;
}
