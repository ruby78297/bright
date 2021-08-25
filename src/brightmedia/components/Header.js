import React from "react";
import logo from "../assets/img/brightt.png";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "50%",
    height: "50%",
    top: "35%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Header = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="brightt" />
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
          <i className="bi bi-list mobile-nav-toggle" onClick={openModal}></i>

          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ul class="mobile-list">
              <Link to="/">
                {" "}
                <li>
                  <a
                    className="nav-link scrollto active"
                    href="#hero"
                    style={{ color: "black" }}
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link>
                {" "}
                <li>
                  <a
                    className="nav-link scrollto"
                    href="#features"
                    style={{ color: "black" }}
                  >
                    Features
                  </a>
                </li>
              </Link>
            </ul>
          </Modal>
        </nav>
      </div>
    </header>
  );
};

export default Header;
