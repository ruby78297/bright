import React from "react";
import logo from "../assets/img/bright.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="bright" />
          </Link>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#features">
                Features
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
