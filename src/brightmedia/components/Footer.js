import React from "react";
const Footer = () => {
  return (
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
                  <a href="http://mytbb.in/tbbtoken">Bright Rewards</a>
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
                  <i className="bx bx-chevron-right"></i> <a href="#">F.A.Q</a>
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
                  <i className="bx bx-chevron-right"></i> <a href="#">GitHub</a>
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
            <span>Bright</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
