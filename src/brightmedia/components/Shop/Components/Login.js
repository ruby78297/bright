import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/brightt.png";
import Footer from "../../Footer";
import './Login.css'
import Modal from "react-modal";


 const Login = () => {

  


  const [isModal, setIsModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    const mopen = ()=> {
      setIsModal(true)
    }
    const mclose = ()=> {
      setIsModal(false)
    }
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
    return (
        <div>
<header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent "
        className="shop-nav "
      >
        <div className="container  d-flex align-items-center justify-content-between">
          <div className="logo" id="shop-logo">
            <Link to="/">
              <img src={logo} alt="brightt" />
            </Link>
          </div>
        

          <nav id="navbar" className="navbar">
            <ul>
              
              {/* <li>
                <Link className="nav-link scrollto" id="shop-li-2" to="cart">
                  <AiOutlineShoppingCart className="shop-icon" />
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
      

<div className='login-form'>
    <div className='login-form-child'>
<div className='login-form-header'><h3 style={{color:"#ffbf00"}}>Login / SignUp</h3></div>
<br/>
<br/>
             <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label><h6>Email</h6></Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label><h6>Password</h6></Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <button className='login-btn'  block size="lg" type="submit" disabled={!validateForm()}>
           Login
        </button>
      </Form>
      <br/>
      
      
      <div className='social-login-or'>
         <h6>OR</h6>
      </div>
      <div style={{borderTop:"2px solid black"}}></div>
      <br/>

      <div className='social-login-div'>
        <div className='social-login-btn' > Google Login</div>
        <div className='social-login-btn' >Facebook Login</div>
      </div>
      <br/>
      <div className='signup-link' >
        <Link to='/signup'> <p onClick={mopen} className='model-open'> Click Here to Sign Up</p></Link>
       
        
        </div>



      </div>

      {/* sign up modal starts */}
<div>
      {/* <Modal
        isOpen={isModal}
        className="signup-modal"
        style={{ overlay: { zIndex: 10000 } }}
      >
        <div>
          <div className='signup-modal-hader'>Sign Up for Bright</div>
          <br/>
          <div className='signup-modal-form'>
          <Form >
          <Form.Group size="lg" controlId="email">
          <Form.Label><h6>Enter your Email</h6></Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <div className='signup-btn'>
          SUBMIT
        </div>
        </Form>
        <br/>
        <div className='signup-link'> 
        
           <p onClick={mclose} className='model-open'>
           Return to Login
           </p>
           </div>
          </div>
        </div>


      </Modal> */}
</div>

      </div>

      <Footer/>
        </div>
    )
}
export default Login