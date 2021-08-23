import React from "react";
import "./assets/css/style.css";
import logo from "./assets/img/bright.png";
import feature1 from "./assets/img/feature1.png";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const BrightMedia = () => {
  return (
    <div>
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

      <section id="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="
              col-lg-7
              pt-5 pt-lg-0
              order-2 order-lg-1
              d-flex
              align-items-center
            "
            >
              <div data-aos="zoom-out">
                <h1>
                  Media <span>reimagined</span>
                </h1>
                <h2>Spreading happiness and positivity</h2>
                <div className="text-center text-lg-start">
                  <Link to="creater">
                    <button className="btn-get-started">
                      Become a Creator
                    </button>
                  </Link>
                  <Link to="Become">
                    <button className="btn-get-started">
                      Get it on Google play
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 order-1 order-lg-2"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={feature1} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="features" className="features">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Features</h2>
              <p>Check The Features</p>
            </div>
            <div className="row" data-aos="fade-left">
              <div className="col-lg-3 col-md-4">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="50"
                >
                  <i
                    className="ri-newspaper-line"
                    style={{ color: "#ffbb2c" }}
                  ></i>
                  <h3>
                    <a href="">Positive news</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <i
                    className="ri-article-line"
                    style={{ color: "#5578ff" }}
                  ></i>
                  <h3>
                    <a href="">Inspiring stories</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i
                    className="ri-vidicon-line"
                    style={{ color: "#e80368" }}
                  ></i>
                  <h3>
                    <a href="">Happy media</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <i
                    className="ri-spotify-line"
                    style={{ color: "#29cc61" }}
                  ></i>
                  <h3>
                    <a href="">Joyful playlist</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="250"
                >
                  <i className="ri-video-line" style={{ color: "#47aeff" }}></i>
                  <h3>
                    <a href="">Motivational videos</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <i
                    className="ri-add-box-line"
                    style={{ color: "#ffa76e" }}
                  ></i>
                  <h3>
                    <a href="">Creator mode</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="350"
                >
                  <i
                    className="ri-community-line"
                    style={{ color: "11dbcf" }}
                  ></i>
                  <h3>
                    <a href="">Community tales</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <i
                    className="ri-book-read-line"
                    style={{ color: "#4233ff" }}
                  ></i>
                  <h3>
                    <a href="">Positive reads</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="450"
                >
                  <i
                    className="ri-copper-coin-line"
                    style={{ color: "#b2904f" }}
                  ></i>
                  <h3>
                    <a href="">TBB rewards</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <i
                    className="ri-hand-coin-line"
                    style={{ color: "#b20969" }}
                  ></i>
                  <h3>
                    <a href="">Award creators</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="550"
                >
                  <i
                    className="ri-hand-heart-line"
                    style={{ color: "#ff5828" }}
                  ></i>
                  <h3>
                    <a href="">Join a cause</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <i
                    className="ri-emotion-happy-line"
                    style={{ color: "#e361ff" }}
                  ></i>
                  <h3>
                    <a href="">Spread happiness</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="counts" className="counts">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-newspaper"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="24"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Positive News</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="15"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Inspiring Stories</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-download"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1000"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Bright Downloads</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-currency-exchange"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="200"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Total TBB Rewards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Counts Section -->
      <!-- ======= Testimonials Section ======= -->
      <!-- */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div
            className="testimonials-slider swiper-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>name</h3>
                  <h4>designation</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>name</h3>
                  <h4>designation</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>name</h3>
                  <h4>designation</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>name</h3>
                  <h4>designation</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Team Section ======= -->
      <!-- */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>Our Great Team</p>
          </div>
          <div className="row" data-aos="fade-left">
            <div className="col-lg-3 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="100">
                <div className="pic">
                  <img
                    src="assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Rounak S Chindalia</h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="member" data-aos="zoom-in" data-aos-delay="200">
                <div className="pic">
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4></h4>
                  <span>CTO</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="member" data-aos="zoom-in" data-aos-delay="300">
                <div className="pic">
                  <img
                    src="assets/img/team/team-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4></h4>
                  <span>CBO</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="member" data-aos="zoom-in" data-aos-delay="400">
                <div className="pic">
                  <img
                    src="assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <span>Product Designer</span>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Team Section --> */}
      </section>
      {/* <!-- End #main --> */}
      {/* 
    <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="http://mytbb.in/tbbtoken">TBB Rewards</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="http://mytbb.in/terms">Terms of Use</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="http://mytbb.in/privacy">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Features</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Positive News</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Positive Media</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Inspiring Stories</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Creators Mode</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Positive Reads</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">F.A.Q</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Bright Store</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Bright Branding</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Company</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Research</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">In the press</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Blog</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>Bright Media</h3>
                  <p className="pb-3">
                    <em>Spreading happiness and positivity.</em>
                  </p>
                  <p>
                    Share your story,
                    <br />
                    news or positive media
                    <br />
                    <a href="mailto:story@mytbb.in">
                      <strong>Email:</strong> story@mytbb.in
                    </a>
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a
                      href="https://www.twitter.com/thebrightbroadcast"
                      className="twitter"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/thebrightbroadcast"
                      className="facebook"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/thebrightbroadcast"
                      className="instagram"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>TBB</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <div id="preloader"></div>
      {/* 
    <!-- Vendor JS Files --> */}
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/vendor/purecounter/purecounter.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

      {/* <!-- Main JS File --> */}
      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default BrightMedia;
