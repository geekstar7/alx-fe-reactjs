// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // 👈 make sure you have this hook

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // 👈 using useAuth

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
