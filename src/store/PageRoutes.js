import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddMeetup from "../pages/AddMeetup";
import AllMeets from "../pages/AllMeets";
import Favorites from "../pages/Favorites";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import { PrivateRouteLogin, PrivateRouteUser } from "./PrivateRoute";

const PageRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRouteUser>
            <AllMeets />
          </PrivateRouteUser>
        }
      />
      <Route
        path="/favorites"
        element={
          <PrivateRouteUser>
            <Favorites />
          </PrivateRouteUser>
        }
      />
      <Route
        path="/newMeetup"
        element={
          <PrivateRouteUser>
            <AddMeetup />
          </PrivateRouteUser>
        }
      />
      <Route
        path="/login"
        element={
          <PrivateRouteLogin>
            <Login />
          </PrivateRouteLogin>
        }
      />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default PageRoutes;
