import React from "react";
import Rate from "./Rating";
import "./ShopingCard.css";
import CartImage from "./p1.jpeg";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
const ShopingCard = () => {
  return (
    <div className="scard-main-container">
      <Link to="/detaildshop">
        <div className="scard-main-container-0"></div>
        <div className="scard-main-container-1">
          Bright Yellow Solid T-shirt
        </div>
        <div className="scard-main-container-2">
          <FaRupeeSign /> 750{" "}
        </div>
        {/* <div className="scard-main-container-3">
        <Rate />
      </div> */}
      </Link>
    </div>
  );
};
export default ShopingCard;
