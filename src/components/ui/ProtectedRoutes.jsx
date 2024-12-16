/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  if (!localStorage.getItem("access_token")) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export { ProtectedRoutes };
