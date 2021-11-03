import React from "react";
import Header from "../Header";
import logo from "../../assets/img/brightt.png";
import { Link } from "react-router-dom";
import "./Shop.css";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "../../assets/css/style.css";
import Shopinglist from "./Components/Shopinglist";
import ShopingCard from "./ShopingCard";
import Footer from "../Footer";
import ShopHeader from "./Components/ShopHeader";
const Shop = () => {
  return (
    <div className="parent">
      {/* <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent "
        className="shop-nav "
      >
        <div className="container  d-flex align-items-center justify-content-between">
          <div className="logo" id="shop-logo">
            <Link to="/">
              <img src={logo} alt="brightt" />
            </Link>
          </div>
         

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to='/login'>
                  login
                </Link>
                
              </li>
             
              <li>
                <Link className="nav-link scrollto" id="shop-li-2" to="cart">
                  <AiOutlineShoppingCart className="shop-icon" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}
      <ShopHeader />
      <div className="shop-container">
        <div className="shop-container-0">
          <Shopinglist />
        </div>
        <div className="shop-container-1">
          We will add product soon.....
          {/* <ShopingCard />
          <ShopingCard />
          <ShopingCard />
          <ShopingCard /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
