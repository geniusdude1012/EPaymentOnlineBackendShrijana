import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import Image1 from "../assets/second.jpg";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import '../LoginSign/index2.css';
import { Link } from "react-router-dom";
import Payment from "../Payment";


const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image1} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Login to E-pay</h2>
            <h5>Please enter your details</h5>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember Me
                  </label>
                </div>
                <Link to="/ForgetPassword">
                <a href="#" className="forgot-pass-link">
                Forget Password??
                </a>
                </Link>
                
              </div>
              <div className="login-center-buttons ">
              <Link to="/ElectricityBillEnquiry" className="text-black">
                <button type="button" className="btn btn-info">Log in</button>
                </Link>
                <p className="login-bottom-p">
            Don't have an account? <Link to="/Register">Register here</Link>
          </p>
              </div>
            </form>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Login;
