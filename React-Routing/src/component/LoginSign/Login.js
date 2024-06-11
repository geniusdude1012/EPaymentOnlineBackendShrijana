import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import Image1 from "../assets/second.jpg";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../LoginSign/index2.css";
import { useNavigate, Link } from "react-router-dom";
import Payment from "../Payment";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  async function handlesubmit(e) {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      const registerr = await axios
        .post("http://localhost:8000/Login", user)
        .then((response) => {
          if (response.data.status === "success") {
            navigate("/Dashboard");
            alert("Login successful");
          } else if (response.data.status === "error") {
            alert("Incorrect password");
          } else {
            alert("User not registered");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Invalid entry");
    }
  }

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image1} alt="" />
      </div>
      {console.log(user)}
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Login to E-pay</h2>
            <h5>Please enter your details</h5>
            <form onSubmit={handlesubmit}>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">Remember Me</label>
                </div>
                <Link to="/ForgetPassword">
                  <a href="#" className="forgot-pass-link">
                    Forget Password??
                  </a>
                </Link>
              </div>
              <div className="login-center-buttons ">
<<<<<<< HEAD
              
                <button type="submit" className="btn btn-info">
                  Log in
                </button>
                
=======
                <button type="submit" className="btn btn-info">
                  Log in
                </button>

>>>>>>> 314aa0ff76fb5732901cb17a68ce9841b08717e7
                <p className="login-bottom-p">
                  Don't have an account?{" "}
                  <Link to="/Register">Register here</Link>
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
