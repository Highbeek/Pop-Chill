import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import './SharedLayout.css'

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
