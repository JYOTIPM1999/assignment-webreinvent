import React from "react";
import { useNavigate } from "react-router-dom";

interface RestrictedRouteProps {
  children: React.ReactNode;
}

export default function RestrictedRoute({ children }: RestrictedRouteProps) {
  const navigate = useNavigate();
  // const { user } = UserAuth();
  const user = true;

  if (!user) {
    navigate("/login");
    return null;
  }

  return { children };
}
