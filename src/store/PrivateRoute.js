import { useState } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRouteUser = ({ children }) => {
  const [user, setUser] = useState(true);

  return user ? children : <Navigate to="/login" />;
};

export const PrivateRouteLogin = ({ children }) => {
  const [user, setUser] = useState(true);

  return user ? <Navigate to="/home" /> : children;
};
