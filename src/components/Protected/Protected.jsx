import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { focusMode, lockedPages } = useUser();
  const location = useLocation();

  // Redirect to Focus Mode page if focusMode is active
  if (focusMode && lockedPages.includes(location.pathname)) {
    return <Navigate to="/Focus" />;
  }

  return children;
};

export default ProtectedRoute;
