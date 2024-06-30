import React from "react";
import "./../component/Register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import back1 from "./../component/assets/back1.avif";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    token: "",
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = user;
    if (name && email && password && password === cpassword) {
      const register = await axios
        .post("http://localhost:8000/Register", user)
        .then((response) => {
          if (response.data.status === "success") {
            navigate("/OTPVerification");
            alert("Please check your email for verification");
          } else {
            alert("User already registered");
          }
        })
        .catch((error) => {
          console.log(error.message);
          alert("Registration failed");
        });
    } else {
      alert("Email has been registered already");
    }
  };

  return (
    <div
      className="flex flex-col justify-between max-w-2xl px-4 lg:pt-16 lg:flex-row md:px-8 lg:max-w-full"
      style={{ backgroundImage: `url(${back1})`, backgroundSize: "cover" }}
    >
      <div
        className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          margin: "20px",
        }}
      >
        <div className="max-w-xl mb-6">
          {/* <h2 class="max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
        Register US
      </h2> */}
          {console.log(user)}
          <p class="text-base text-gray-700 md:text-lg">
            <h1>Simple & Fast Payment.</h1>
          </p>
        </div>
        <div className="flex items-center">
          <div class="btn-group">
            <a href="/Register" class="btn btn-dark active" aria-current="page">
              Register Now
            </a>
          </div>
        </div>
      </div>
      <div className="register-container">
        <div className="register-form">
          <h2>CREATE ACCOUNT</h2>
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Enter your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Enter your Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="cpassword"
              value={user.cpassword}
              placeholder="Confirm password"
              onChange={handleChange}
              required
            />
            <div className="terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to all statements in <a href="#">Terms of Service</a>
              </label>
            </div>

            <button type="submit">SIGN UP</button>
          </form>
          <p>
            Have already an account? <a href="/Login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
