import React from "react";

import "../brightmedia/assets/css/style.css";
import Footer from "../brightmedia/components/Footer";

export const BrightToken = () => {
  return (
    <div>
      <header
        id="header"
        class="fixed-top d-flex align-items-center header-transparent"
      >
        <div class="container d-flex align-items-center justify-content-between"></div>
      </header>
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
                {/* <!-- <div class="text-center text-lg-start">
              <a href="#" class="btn-get-started">Buy TBB Token</a>
              <a href="whitepaper" class="btn-get-started1"><i class="ri-article-line"></i> White Paper</a>
            </div> --></div> */}
              </div>
            </div>
            <div class="col-lg-4 order-1 order-lg-2" data-aos="zoom-out">
              <img src="assets/img/wallet1.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
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
            {/* <!-- end experience section--> */}

            {/* <!-- start experience section--> */}
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
                  Bright Media : Creator Mode and Stories<br></br>
                  Pre-sale 1 (Tentative)
                </p>
              </div>
            </div>
            {/* <!-- end experience section--> */}

            {/* <!-- start experience section--> */}
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
                  Bright Media : Wellbeing and Exclusive Content<br></br>
                  Pre-sale 2 (Tentative)
                </p>
              </div>
            </div>
            {/* <!-- end experience section--> */}

            {/* <!-- start experience section--> */}
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
                  Bright Media : Store and Pay by TBT<br></br>
                  ICO (Tentative)
                </p>
              </div>
            </div>
            {/* <!-- end experience section--> */}
          </div>
        </section>
      </div>
      <section id="rewards" class="features">
        <div class="container">
          <div class="section-title">
            <h2>Rewards</h2>
            <p>Bright Ecosystem</p>
          </div>
          <div class="row content">
            <div class="col-md-4 order-1 order-md-2">
              <img src="assets/img/details-2.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-8 pt-5 order-2 order-md-1">
              <h3>Users earn for their attention</h3>
              <p class="fst-italic">
                Users earn TBT for using and sharing Bright Media app.<br></br>
                <br></br>
                Currently, the speed or the token velocity is at 0.05TBT/hr.
                Such as, user receieve 0.05 TBT for every hour of the Bright app
                usage.
                <a href="https://bit.ly/2Vfg47e" class="btn-get-started">
                  Get Bright <i class="ri-arrow-right-circle-line"></i>
                </a>
              </p>
              <br></br>
              <h3>Creators get paid for making or sharing great content</h3>
              <p>
                Publishers and creators earn usage revenue and user
                contributions as well as awards.<br></br>
                <a
                  href="https://mytbb.in/brightmedia/creator.html"
                  class="btn-get-started"
                >
                  Join verified creator network{" "}
                  <i class="ri-arrow-right-circle-line"></i>
                </a>
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
                <a href="https://t.me/TBBToken">
                  <i class="bx bxl-telegram"></i>
                </a>
                <a
                  href="https://www.twitter.com/thebrightbroadcast"
                  class="twitter"
                >
                  <i class="bx bxl-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/thebrightbroadcast"
                  class="facebook"
                >
                  <i class="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/thebrightbroadcast"
                  class="instagram"
                >
                  <i class="bx bxl-instagram"></i>
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
