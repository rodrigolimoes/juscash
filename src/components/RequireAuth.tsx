import React, { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface RequireAuthStateProps {}
interface RequireAuthDispatchProps {}

type RequireAuthProps = RequireAuthStateProps & RequireAuthDispatchProps;

const RequireAuth: FC<RequireAuthProps> = () => {
  const {
    data: { loggedIn, user },
  } = useAuth();

  if (!loggedIn) return <Navigate to={"/login"} />;

  return <Outlet context={{ user }} />;
};

export default RequireAuth;
