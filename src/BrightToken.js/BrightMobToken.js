import React from "react";
import Footer from "../brightmedia/components/Footer";
import "../brightmedia/assets/css/style.css";
import figure2 from "./assets/img/details-2.png";
import "./assets/css/style.css";
import figure1 from "./assets/img/wallet1.png";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegram, FaFacebook } from "react-icons/fa";
export const BrightMobToken = () => {
  return (
    <div>
      {/* <!-- ======= Header ======= --> */}
      <header
        id="header"
        class="fixed-top d-flex align-items-center header-transparent"
      >
        <div class="container d-flex align-items-center justify-content-between"></div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
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
              </div>
            </div>
            <div class="col-lg-4 order-1 order-lg-2" data-aos="zoom-out">
              <img src={figure1} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      {/* <!-- ======= Timeline Section ======= --> */}
      <div id="main">
        <section class="main-timeline">
          <div class="container">
            <div class="section-title">
              <h2>Timeline</h2>
              <p>TBT </p>
            </div>
            {/* <!-- start experience section--> */}
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">July</span>
                    <span class="year">2021</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">Phase 1</h5>
                <p class="description">Bright Media app Launch</p>
              </div>
            </div>
            {/* <!-- end experience section-->

                        <!-- start experience section--> */}
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">August</span>
                    <span class="year">2021</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">Phase 2</h5>
                <p class="description">
                  Bright Media : Creator Mode and Stories
                  <br />
                  Pre-sale 1 (Tentative)
                </p>
              </div>
            </div>
            {/* <!-- end experience section-->

                        <!-- start experience section--> */}
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">September</span>
                    <span class="year">2021</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">Phase 3</h5>
                <p class="description">
                  Bright Media : Wellbeing and Exclusive Content
                  <br />
                  Pre-sale 2 (Tentative)
                </p>
              </div>
            </div>
            {/* <!-- end experience section-->

                        <!-- start experience section--> */}
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">October</span>
                    <span class="year">2021</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">Phase 4</h5>
                <p class="description">
                  Bright Media : Store and Pay by TBT
                  <br />
                  ICO (Tentative)
                </p>
              </div>
            </div>
            {/* <!-- end experience section--> */}
          </div>
        </section>
      </div>

      {/* 
      <!-- ======= Timeline Section Ends======= -->
    
    <!-- ======= Details Section ======= --> */}
      <section id="rewards" class="features">
        <div class="container">
          <div class="section-title">
            <h2>Rewards</h2>
            <p>Bright Ecosystem</p>
          </div>
          <div class="row content">
            <div class="col-md-4 order-1 order-md-2">
              <img src={figure2} class="img-fluid" alt="" />
            </div>
            <div class="col-md-8 pt-5 order-2 order-md-1">
              <h3>Users earn for their attention</h3>
              <p>
                Users earn TBT for using and sharing Bright Media app.
                <br />
                Currently, the speed or the token velocity is at{" "}
                <b>0.05TBT/hr</b>. Such as, users receieve 0.05TBT for every
                hour spent on the Bright apps.
              </p>
              <br />
              <h3>Creators get TBT for the great content</h3>
              <p>
                Publishers and creators earn TBT directly adding content to the
                platform as well as reward from the users.
                <br />
                Creators receive <b>1 TBT per post</b> or story they add to the
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Details Section --> */}

      {/* <!-- ======= Community Section ======= --> */}
      <section class="counts">
        <div class="container">
          <div class="row">
            <center>
              <h3>
                Join our community
                <br />
                <br />
                <a href="https://t.me/brighttoken" className="p-3">
                  <FaTelegram />
                </a>
                <a
                  href="https://www.twitter.com/thebrightbroadcast"
                  className="twitter p-3"
                >
                  <AiFillTwitterSquare />
                </a>
                <a
                  href="https://www.facebook.com/thebrightmedia.official/"
                  className="facebook p-3"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/brightmedia.official/"
                  className="instagram p-3"
                >
                  <AiFillInstagram />
                </a>
              </h3>
            </center>
          </div>
        </div>
      </section>

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
      <div id="preloader"></div>
      {/* <!-- End Footer --> */}
    </div>
  );
};
