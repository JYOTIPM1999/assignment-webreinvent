import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface RestrictedRouteProps {
  children: JSX.Element;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.token);
  console.log("token", token);

  // if (!token) {
  //   return <Navigate to="/signin" replace={true} />;
  // }

  useEffect(() => {
    if (!token) {
      navigate("/signin", { replace: true });
    }
  }, [token, navigate]);
  if (!token) {
    return null;
  }

  return children;
};

export default RestrictedRoute;
