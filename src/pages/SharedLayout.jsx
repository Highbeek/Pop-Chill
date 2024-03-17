import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./SharedLayout.css";

const SharedLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default SharedLayout;
