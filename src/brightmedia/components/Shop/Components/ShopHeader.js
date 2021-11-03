import React from 'react'
import './ShopHeader.css'
import logo from "../../../assets/img/brightt.png";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";


 const ShopHeader = () => {
  return (
    <div className='shop-header-main-div'>
      <div className='shop-logo'>
        <Link to ='/'>
      <img src={logo} alt="brightt" className='shop-logo-img'/>
      </Link>
      </div>
      <div className='shop-cart'> 
      
              <div className=' nav-bar-1' id="" >
                <Link style={{color:"rgba(255, 255, 255, 0.7)"}} to='/login'>
                  Login
                </Link>
                </div>       
             <div className=' nav-bar-2' id=""> 
                <Link style={{color:"rgba(255, 255, 255, 0.7)"}} to="cart">
                  <AiOutlineShoppingCart className="shop-icon" />
                </Link>
              </div> 
      </div>
      
    </div>
  )
}

export default ShopHeader