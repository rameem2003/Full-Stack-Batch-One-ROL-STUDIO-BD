import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router";

const Rootlayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Rootlayout;
