import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  let isLoggedIn = false;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
  }, []);

  return children;
};

export default ProtectedRoute;
