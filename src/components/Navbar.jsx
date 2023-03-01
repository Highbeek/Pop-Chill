import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {BiCameraMovie} from 'react-icons/bi'

const Navbar = () => {
  return (
    <section className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Pop<BiCameraMovie />Chill
      </NavLink>
      <NavLink to="/action" className="link">
        Action{" "}
      </NavLink>

      <NavLink to="/comedy" className="link">
        Comedy{" "}
      </NavLink>

      <NavLink to="/romance" className="link">
        Romance
      </NavLink>

      <NavLink to="/anime" className="link">
        Anime
      </NavLink>
    </section>
  );
};

export default Navbar;
