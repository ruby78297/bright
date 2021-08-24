import React from "react";
import feature1 from "../assets/img/feature1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const clicking = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.stack_navigation&referrer=utm_source%3Dbmindex%26utm_medium%3Dbutton"
    );
  };
  return (
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
        mb-7
      "
          >
            <div data-aos="zoom-out">
              <h1>
                Media <span>reimagined</span>
              </h1>
              <h2>Spreading happiness and positivity</h2>
              <div className="text-center text-lg-start">
                <Link to="creater">
                  <button className="btn-get-started">Become a Creator</button>
                </Link>

                <button className="btn-get-started" onClick={clicking}>
                  Get it on Google play
                </button>
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
  );
};
export default Hero;
