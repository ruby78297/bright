import React, { useRef, useState } from "react";
// import Header from "../Header";
import logo from "../../../assets/img/brightt.png";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../../Footer";
import "./Cart.css";
import ShopHeader from "./ShopHeader";
import Img1 from "../p1.jpeg";
import { FaRupeeSign } from "react-icons/fa";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Dropdown } from "react-bootstrap";

const Cart = () => {
  return (
    <div>
      <ShopHeader />
      <div className="cart-container" style={{ textAlign: "center " }}>
        cart is empty.....
        {/* <div className="cart-title">My Cart</div>
        <br />

        <div className="cart-main-container">
          <div className="cart-product-div">"
            <div className="cart-product-div-des">
              <div className="cart-product-div-des-0">
                <div className="cart-product-div-des-01">
                  bright Half Sleeve Yellow T-Shirt
                </div>
                <div className="cart-product-div-des-02">
                  <FaRupeeSign /> 750{" "}
                </div>
                <div className="cart-product-div-des-03">
                  <Dropdown id="size-drpdwn">
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      variant="secondary"
                    >
                      Size
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="footer-drpdwn-menu">
                      <Dropdown.Item>S</Dropdown.Item>
                      <Dropdown.Item>M</Dropdown.Item>
                      <Dropdown.Item>L</Dropdown.Item>
                      <Dropdown.Item>XL</Dropdown.Item>
                      <Dropdown.Item>XXL</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown id="size-drpdwn">
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      variant="secondary"
                    >
                      Qty
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="footer-drpdwn-menu">
                      <Dropdown.Item>1</Dropdown.Item>
                      <Dropdown.Item>2</Dropdown.Item>
                      <Dropdown.Item>3</Dropdown.Item>
                      <Dropdown.Item>4</Dropdown.Item>
                      <Dropdown.Item>5</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="cart-product-div-img">
                <img  alt='img' className='cart-product-div-img-1'></img>
              </div>
            </div>
            <br />

            <div className="cart-product-div-des-btn">
              <button className="cart-btns">Remove</button>
              <button className="cart-btns">Keep Shopping</button>
            </div>
          </div>
          <div className="cart-payment-div">
            <div className="cart-payment-div-header">Price Summary</div>
            <div className="cart-payment-div-body">
              <div className="cart-payment-div-child">
                <li className="child-list">Total MRP (Inclusive of taxes)</li>
                <li className="child-list-1">
                  {" "}
                  <FaRupeeSign /> 750
                </li>
              </div>
              <div className="cart-payment-div-child">
                <li className="child-list">Delivery Fee</li>
                <li className="child-list-1"> FREE </li>
              </div>
              <div className="cart-payment-div-child">
                <li className="child-list">Discount</li>
                <li className="child-list-1">
                  {" "}
                  <FaRupeeSign /> 200
                </li>
              </div>
              <div className="cart-payment-div-child">
                <li className="child-list">Sub Total</li>
                <li className="child-list-1" style={{ fontWeight: "bold" }}>
                  {" "}
                  <FaRupeeSign /> 550
                </li>
              </div>
              <div className="cart-product-div-des-btn-2">
                <Link to="/cart/checkout">
                  <button className="cart-btns-2">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default Cart;
