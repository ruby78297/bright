import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <ul
        className={isMobile ? "mobile-nav-list" : "nav-list"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/features" className="features">
          <li>Features</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};
export default Navbar;
