import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUserAction } from "../redux/slices/a";
import rolePermission from "../config/rolePermission";

function Auth() {
  const dispatch = useDispatch();
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUserAction());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  if (user && rolePermission[user.role]?.includes(currentPath)) {
    return <Outlet />;
  } else if (currentPath === "") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}

export default Auth;
