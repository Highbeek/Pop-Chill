import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { BiCameraMovie } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useGSAP(() => {
    gsap.from("#logo", {
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.3)",
    });

    gsap.from(".navbar__links .link", {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
        id="logo"
      >
        Pop <BiCameraMovie className="icon" /> Chill
      </NavLink>
      <button className="menu-btn" onClick={toggleMenu}>
        {showMenu ? <AiOutlineClose /> : <GoThreeBars />}
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
        <NavLink to="/horror" className="link">
          Horror
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
