import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row" data-aos={"fade-up"}>
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-newspaper"></i>
              {/* <span
            data-purecounter-start="0"
            data-purecounter-end="24"
            data-purecounter-duration="1"
            className="purecounter"
          ></span> */}
              <CountUp end={24} duration={1} />
              <p>Positive News</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              {/* <span
            data-purecounter-start="0"
            data-purecounter-end="15"
            data-purecounter-duration="1"
            className="purecounter"
          ></span> */}
              <CountUp end={15} duration={1} />
              <p>Inspiring Stories</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-download"></i>
              {/* <span
            data-purecounter-start="0"
            data-purecounter-end="1000"
            data-purecounter-duration="1"
            className="purecounter"
          ></span> */}
              <CountUp end={1000} duration={1} />
              <p>Bright Downloads</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-currency-exchange"></i>
              {/* <span
            data-purecounter-start="0"
            data-purecounter-end="200"
            data-purecounter-duration="1"
            className="purecounter"
          ></span> */}
              <CountUp end={200} duration={1} />
              <p>Total TBB Rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Counter;
