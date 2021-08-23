import React from "react";
import "./assets/css/style.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import assetImg from "./assets/img/mockup3.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section id="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div data-aos="zoom-out">
                <h1>
                  NEWS. MEDIA. STORIES.
                  <br />
                  <span>REIMAGINED</span>
                </h1>
                <br />
                <div class="text-center text-lg-start">
                  <Link to="brightmedia">
                    <button className="btn-get-started"> Get Bright </button>
                  </Link>
                  <Link to="tbb-token">
                    <button className="btn-get-started">Tbb Token</button>
                  </Link>

                  <br />
                  {/* <Link to="terms" class="btn-get-started">    Terms    </Link> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay={300}
            >
              <img src={assetImg} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
        <svg
          className="hero-waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <g className="wave1">
            <use
              xlinkHref="#wave-path"
              x={50}
              y={3}
              fill="rgba(255,255,255, .1)"
            ></use>
          </g>
          <g className="wave2">
            <use
              xlinkHref="#wave-path"
              x={50}
              y={0}
              fill="rgba(255,255,255, .2)"
            ></use>
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x={50} y={9} fill="#fff"></use>
          </g>
        </svg>
      </section>

      <div className="container">
        <div className="copyright" style={{ float: "left" }}>
          © Copyright{" "}
          <strong>
            <span>TBB</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Home;
