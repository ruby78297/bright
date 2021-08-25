import React from "react";
import "../../assets/css/style.css";
// import "../../../Assets/css/style.css";
import Header from "../Header";
import Footer from "../Footer";
import "./Creator.css";
import "aos";
import AOS from "aos";

const Creator = () => {
  AOS.init();
  return (
    <div>
      <Header />
      <section id="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div data-aos="zoom-out">
                <h1>
                  Become a <span>creator</span>
                </h1>
                <h2>Earn more for content you publish to the Bright Media</h2>
              </div>
            </div>
            <div
              className="col-lg-4 order-1 order-lg-2"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img src="assets/img/feature1.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div id="main">
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Creator</h2>
              <p>Follow the guidelines</p>
            </div>

            <div className="row">
              <div
                className="col-lg-4"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="info">
                  <div className="address">
                    <i className="bi bi-check-lg"></i>
                    <h4>Publish</h4>
                    <p>Positive news</p>
                    <p>Inspiring stories</p>
                    <p>Happy media</p>
                    <p>New Technology</p>
                    <p>About Progressive laws</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-x-lg"></i>
                    <h4>Don't Publish</h4>
                    <p>Hate news</p>
                    <p>Sad stories</p>
                    <p>Stressful images</p>
                    <p>About violence</p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-8 mt-5 mt-lg-0"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <input
                  type="text"
                  placeholder="Please enter your Full Name"
                  id="inputName"
                />
                <input
                  type="text"
                  placeholder="Please enter your Email address"
                  id="inputEmail"
                />
                <p>
                  Bright will use your email to contact you about your account
                  and to update you about the service. By creating an account
                  you accept all the Bright's{" "}
                  <a href="terms">Terms and Conditions.</a>
                </p>
                <div className="text-center">
                  <button className="btn-get" onclick="writeUserData">
                    Become creator
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
      <div id="preloader"></div>
    </div>
  );
};
export default Creator;
