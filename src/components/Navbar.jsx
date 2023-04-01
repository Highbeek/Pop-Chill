import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { BiCameraMovie } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Pop
        <BiCameraMovie />
        Chill
      </NavLink>
      <button className="menu-btn" onClick={toggleMenu}>
        <GoThreeBars />
      </button>
      <div className={`navbar__links ${showMenu ? "show-menu" : ""}`}>
        <NavLink to="/action" className="link">
          Action{" "}
        </NavLink>

        <NavLink to="/comedy" className="link">
          Comedy{" "}
        </NavLink>

        <NavLink to="/romance" className="link">
          Romance
        </NavLink>

        <NavLink to="/animation" className="link">
          Animation
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
