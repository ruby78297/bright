import React, { useRef, useState } from "react";
// import Header from "../Header";
import logo from "../../../assets/img/brightt.png";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../../Footer";
import "./WishList.css";

const WishList = () => {
  return (
    <div>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent "
        className="shop-nav "
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="brightt" />
            </Link>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  login
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" id="shop-li-2" href="wishlist">
                  <AiOutlineHeart />
                </a>
              </li>
              <li>
                <Link className="nav-link scrollto" id="shop-li-2" to="cart">
                  <AiOutlineShoppingCart />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="cart-container"> Empty....</div>
      <Footer />
    </div>
  );
};
export default WishList;
