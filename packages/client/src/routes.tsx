import React from "react";
import { Routes, Route, Outlet, Navigate, RouteProps } from "react-router-dom";

import useAuth from "./hooks/useAuth";

import Layout from "./sections/Layout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

type RouterProps = RouteProps;

const Router: React.FC<RouterProps> = ({ ...rest }) => {
  const { auth } = useAuth();

  const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) =>
    auth?.email ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: rest?.location }} replace />
    );

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute {...rest} />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
