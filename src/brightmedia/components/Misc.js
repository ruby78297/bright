import React from "react";

const Misc = () => {
  return (
    <div>
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
export default Misc;
