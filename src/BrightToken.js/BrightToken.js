import React from "react";
import "./assets/css/style.css";
import { Link } from "react-router-dom";
import "../brightmedia/assets/css/style.css";
import Footer from "../brightmedia/components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import figure2 from "./assets/img/details-2.png";
import figure1 from "./assets/img/wallet1.png";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegram, FaFacebook } from "react-icons/fa";
export const BrightToken = () => {
  return (
    <div>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container d-flex align-items-center justify-content-between"></div>
      </header>
      <section id="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div data-aos="zoom-out">
                <h1>
                  The Bright Token - Reimagining media industry with Crypto and
                  DeFi.
                </h1>
                <h2>
                  With TBT and Bright Media to solve the problem of negative
                  news and fake news thus bringing good media in spotlight and
                  make it rewarding for the contributors.
                </h2>
                {/* <!-- <div className="text-center text-lg-start">
              <a href="#" className="btn-get-started">Buy TBB Token</a>
              <a href="whitepaper" className="btn-get-started1"><i className="ri-article-line"></i> White Paper</a>
            </div> --></div> */}
              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2" data-aos="zoom-out">
              <img src={figure1} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div id="main">
        <section className="main-timeline">
          <div className="container">
            <div className="section-title">
              <h2>Timeline</h2>
              <p>TBT </p>
            </div>
            {/* <!-- start experience section--> */}
            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">July</span>
                    <span className="year">2021</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">Phase 1</h5>
                <p className="description">Bright Media app Launch</p>
              </div>
            </div>
            {/* <!-- end experience section--> */}

            {/* <!-- start experience section--> */}
            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">August</span>
                    <span className="year">2021</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">Phase 2</h5>
                <p className="description">
                  Bright Media : Creator Mode and Stories<br></br>
                  Pre-sale 1 (Tentative)
                </p>
              </div>
            </div>
            {/* <!-- end experience section--> */}

            {/* <!-- start experience section--> */}
            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">September</span>
                    <span className="year">2021</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">Phase 3</h5>
                <p className="description">
                  Bright Media : Wellbeing and Exclusive Content<br></br>
                  Pre-sale 2 (Tentative)
                </p>
              </div>
            </div>
            {/* <!-- end experience section--> */}

            {/* <!-- start experience section--> */}
            <div className="timeline">
              <div className="icon"></div>
              <div className="date-content">
                <div className="date-outer">
                  <span className="date">
                    <span className="month">October</span>
                    <span className="year">2021</span>
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                <h5 className="title">Phase 4</h5>
                <p className="description">
                  Bright Media : Store and Pay by TBT<br></br>
                  ICO (Tentative)
                </p>
              </div>
            </div>
            {/* <!-- end experience section--> */}
          </div>
        </section>
      </div>
      <section id="rewards" className="features">
        <div className="container">
          <div className="section-title">
            <h2>Rewards</h2>
            <p>Bright Ecosystem</p>
          </div>
          <div className="row content">
            <div className="col-md-4 order-1 order-md-2">
              <img src={figure2} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-5 order-2 order-md-1">
              <h3>Users earn for their attention</h3>
              <p className="fst-italic">
                Users earn TBT for using and sharing Bright Media app.<br></br>
                <br></br>
                Currently, the speed or the token velocity is at 0.05TBT/hr.
                Such as, user receieve 0.05 TBT for every hour of the Bright app
                usage.
                <a href="https://bit.ly/2Vfg47e" className="btn-get-started">
                  Get Bright <i className="ri-arrow-right-circle-line"></i>
                </a>
              </p>
              <br></br>
              <h3>Creators get paid for making or sharing great content</h3>
              <p>
                Publishers and creators earn usage revenue and user
                contributions as well as awards.<br></br>
                {/* <a
                  href="https://mytbb.in/brightmedia/creator.html"
                  className="btn-get-started"
                >
                  Join verified creator network{" "}
                  <i className="ri-arrow-right-circle-line"></i>
                </a> */}
                <Link to="/creator">
                  <button
                    className="btn-get-started"
                    style={{ border: "none" }}
                  >
                    Join verified creator network
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="counts">
        <div class="container">
          <div class="row">
            <center>
              <h3>
                Join our community
                <br />
                <br />
                <a href="https://t.me/TBBToken" className="p-3">
                  <FaTelegram />
                </a>
                <a
                  href="https://www.twitter.com/thebrightbroadcast"
                  className="twitter p-3"
                >
                  <AiFillTwitterSquare />
                </a>
                <a
                  href="https://www.facebook.com/thebrightbroadcast"
                  className="facebook p-3"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/thebrightbroadcast"
                  className="instagram p-3"
                >
                  <AiFillInstagram />
                </a>
              </h3>
            </center>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
