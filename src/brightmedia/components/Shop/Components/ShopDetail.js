import React, { useRef, useState } from "react";
// import Header from "../Header";
import logo from "../../../assets/img/brightt.png";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "../../Footer";
import "./ShopDetail.css";
import { FaRupeeSign } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Img1 from "../p1.jpeg";
import Img2 from "../p2.jpeg";
import Img3 from "../p3.jpeg";
import Img4 from "../p4.jpeg";
import Img5 from "../p5.jpeg";
import { SliderData } from "./SliderData";
import { CarouselComponent } from "react-swiping-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Carousel from "react-bootstrap/Carousel";
import ShopHeader from "./ShopHeader";

const ShopDetail = () => {
  const [image1, setImage1] = useState(true);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [imageColor1, setIimageColor1] = useState(true);
  const [imageColor2, setIimageColor2] = useState(false);
  const image1Handler = () => {
    setImage1(true);
    setImage2(false);
    setImage3(false);
    setImage4(false);
  };
  const image2Handler = () => {
    setImage2(true);
    setImage1(false);
    setImage3(false);
    setImage4(false);
  };
  const image3Handler = () => {
    setImage3(true);
    setImage2(false);
    setImage1(false);
    setImage4(false);
  };
  const image4Handler = () => {
    setImage4(true);
    setImage2(false);
    setImage3(false);
    setImage1(false);
  };
  const imageColor1Handler = () => {
    setIimageColor1(true);
    setIimageColor2(false);
  };
  const imageColor2Handler = () => {
    setIimageColor1(false);
    setIimageColor2(true);
  };
  const postalPin = async (pin) => {
    console.log(pin);
    await fetch(`https://api.postalpincode.in/pincode/${pin}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const [input, setInput] = useState("");

  // const PinRef = useRef(null);
  // const pin1 = PinRef.current.value;
  // console.log(pin1);

  return (
    <div>
      <ShopHeader />
      {/* Main container start */}
      <div className="detail-main-container">
        <div className="detail-container-0">
          <div className="detail-container-01">
            <div className="detail-pic-1" onClick={image1Handler}></div>
            <div className="detail-pic-2" onClick={image2Handler}>
              {" "}
            </div>
            <div className="detail-pic-3" onClick={image3Handler}></div>
            <div className="detail-pic-4" onClick={image4Handler}></div>
          </div>

          <div className="detail-container-02">
            {image1 ? <div className="detail-img-1"></div> : null}
            {image2 ? <div className="detail-img-2"></div> : null}
            {image3 ? <div className="detail-img-3"></div> : null}
            {image4 ? <div className="detail-img-4"></div> : null}
          </div>
        </div>

        {/* mobile view start */}
        {/* mobile view */}

        <div className="carousel-container-2">
          <Carousel>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100 slider-images"
                src={Img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100 slider-images"
                src={Img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100 slider-images"
                src={Img3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100 slider-images"
                src={Img4}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* mobile view ends */}
        {/* mobile view ends*/}

        <div className="detail-container-1">
          <div className="detail-container-10">Bright</div>
          <div className="detail-container-11">
            bright Half Sleeve Yellow T-Shirt
          </div>
          <div className="detail-container-12">
            <FaRupeeSign /> 750{" "}
          </div>
          <div className="detail-container-13">
            <div className="detail-color-0">
              Black <br />
              <div className="detail-color-1"></div>
            </div>
            <div className="detail-color-01">
              Yellow <br />
              <div className="detail-color-2"></div>
            </div>
          </div>
          <div className="detail-container-14">
            <div className="detail-container-size-0">Select Size</div>
            <div className="detail-container-size">
              <div className="detail-size">S</div>
              <div className="detail-size">M</div>
              <div className="detail-size">L</div>
              <div className="detail-size">XL</div>
            </div>
          </div>
          <Link to="/cart">
            {" "}
            <div className="detail-btn"> ADD TO CART</div>
          </Link>
          <div className="detail-container-15">Delivery Details</div>
          <form className="detail-container-16">
            <input
              className="pin-input"
              type="number"
              name="pin"
              placeholder="Enter pin code"
              maxlength="6"
              value={input}
              onInput={(e) => setInput(e.target.value)}
            />
            <span>
              <div className="check-btn" onClick={postalPin(input)}>
                {" "}
                check
              </div>
            </span>
          </form>
        </div>

        <br />
        <br />
        <br />
      </div>
      <div className="description-div">
        <div className="description-div-0">
          <div>
            <p className="des-headings">PRODUCT DESCRIPTION</p>
            Add a classic flare to your fashion collection with this Save Our
            Home Half Sleeve T-Shirt. Pair it with anything from trousers to
            jeans and enhance your fashion game with elegance. Counry of Origin
            : India
          </div>
          <div>
            {" "}
            <p className="des-headings">REGULAR FIT</p>
            Fitted at Chest and Straight on Waist Down
          </div>
          <div>
            <p className="des-headings">SINGLE JERSEY, 100% COTTON</p>
            Classic, lightweight jersey fabric comprising 100% cotton.
          </div>
        </div>
        <div className="description-div-1">
          <p className="des-headings">15 DAY RETURNS & EXCHANGE </p>
          Easy returns upto 15 days of delivery. Exchange available on select
          pincodes
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ShopDetail;
