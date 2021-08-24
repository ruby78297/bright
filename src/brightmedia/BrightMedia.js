import React from "react";
import "./assets/css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos";
import AOS from "aos";
import "../Assets/css/style.css";
import "../icomoon/style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Counter from "./components/Counter";
import Misc from "./components/Misc";

const BrightMedia = () => {
  AOS.init();
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Counter />
      <Footer />
      <Misc />
    </div>
  );
};

export default BrightMedia;
