import React from "react";
import "aos";
import AOS from "aos";

import {
  RiNewspaperLine,
  RiArticleLine,
  RiVidiconLine,
  RiSpotifyLine,
  RiVideoLine,
  RiAddBoxLine,
  RiCommunityLine,
  RiBookReadLine,
  RiCopperCoinLine,
  RiHandCoinLine,
  RiHandHeartLine,
  RiEmotionHappyLine,
} from "react-icons/ri";

const Main = () => {
  AOS.init();
  return (
    <div id="main">
      {" "}
      <section id="features" className="features">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Check The Features</p>
          </div>
          <div className="row" data-aos="fade-left">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                {/* <i
            className="RiNewspaperLine"
            style={{ color: "#ffbb2c" }}
          ></i> */}
                <RiNewspaperLine
                  style={{ color: "#ffbb2c", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Positive news
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                {/* <i
            className="ri-article-line"
            style={{ color: "#5578ff" }}
          ></i> */}
                <RiArticleLine
                  style={{ color: "#5578ff", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Inspiring stories
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
                {/* <i
            className="ri-vidicon-line"
            style={{ color: "#e80368" }}
          ></i> */}
                <RiVidiconLine
                  style={{ color: "#e80368", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Happy media
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                {/* <i
            className="ri-spotify-line"
            style={{ color: "#29cc61" }}
          ></i> */}
                <RiSpotifyLine
                  style={{ color: "#29cc61", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Joyful playlist
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="250">
                {/* <i className="ri-video-line" style={{ color: "#47aeff" }}></i> */}
                <RiVideoLine
                  style={{ color: "#47aeff", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Motivational videos
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                {/* <i
            className="ri-add-box-line"
            style={{ color: "#ffa76e" }}
          ></i> */}
                <RiAddBoxLine
                  style={{ color: "#ffa76e", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Creator mode
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="350">
                {/* <i
            className="ri-community-line"
            style={{ color: "11dbcf" }}
          ></i> */}
                <RiCommunityLine
                  style={{ color: "11dbcf", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Community tales
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                {/* <i
            className="ri-book-read-line"
            style={{ color: "#4233ff" }}
          ></i> */}
                <RiBookReadLine
                  style={{ color: "#4233ff", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Positive reads
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="450">
                {/* <i
            className="ri-copper-coin-line"
            style={{ color: "#b2904f" }}
          ></i> */}
                <RiCopperCoinLine
                  style={{ color: "#b2904f", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    TBB rewards
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
                {/* <i
            className="ri-hand-coin-line"
            style={{ color: "#b20969" }}
          ></i> */}
                <RiHandCoinLine
                  style={{ color: "#b20969", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Award creators
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="550">
                {/* <i
            className="ri-hand-heart-line"
            style={{ color: "#ff5828" }}
          ></i> */}
                <RiHandHeartLine
                  style={{ color: "#ff5828", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Join a cause
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="600">
                {/* <i
            className="ri-emotion-happy-line"
            style={{ color: "#e361ff" }}
          ></i> */}
                <RiEmotionHappyLine
                  style={{ color: "#e361ff", transform: "scale(1.5)" }}
                />
                <h3>
                  <a href="" style={{ paddingLeft: "12px" }}>
                    Spread happiness
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Main;
