import React, { useState, useEffect } from "react";
import "./../component/OTPVerification.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import back1 from "./assets/black.avif"
let otptimer = 0;
const otpnotify = () => {
  otptimer = 1;
};
const OTPVerification = () => {
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 1) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          return 0;
        }
      });
    }, 1000);

    const otpTimeout = setTimeout(() => {
      alert("OTP expired!! Please resend OTP to verify.");
      setOtp(Array(6).fill(""));
      clearTimeout(otpTimeout);
    }, 60000);

    return () => {
      clearInterval(countdown);
      clearTimeout(otpTimeout);
    };
  }, []);
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(60); // 1 minutes timer

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleResend = async () => {
    setOtp(Array(6).fill(""));
    setTimer(60); // reset timer to 3 minutes
    // Add functionality to resend OTP here
    const resender = await axios
      .post("http://localhost:8000/resendotp")
      .then((response) => {
        if (response.data.status === "success") {
          alert("OTP resent successfully");
        }
      });
    alert("Check your email for OTP confirmation");
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(interval);
        setOtp(Array(6).fill(""));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    const verifyotp = await axios
      .post("http://localhost:8000/verifyotp", { otp: otpString })
      .then((response) => {
        if (response.data.status === "success") {
          alert("OTP Verification Successfull");
          alert("User registered Successfully");

          navigate("/Login");
        } else {
          alert("Incorrect OTP");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container1">
      <div className="otp-container">
        <h2>OTP Verification</h2>
        <p>Enter the 6 digit verification code received on your Email ID</p>
        <form onSubmit={handlesubmit}>
          <div className="otp-inputs">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={otp[index]}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          <div className="timer">
            Verification code{" "}
            <span>
              {Math.floor(timer / 60)}:{("0" + (timer % 60)).slice(-2)}
            </span>
            <button
              className="resend-otp"
              onClick={handleResend}
              disabled={timer !== 0}
            >
              Resend OTP
            </button>
          </div>
          <button className="verify-button" onSubmit={handlesubmit}>
            Verify
          </button>
        </form>
        {/* <div className="help-text">
                Having problems? <a href="#">Know more</a>
            </div> */}
      </div>
    </div>
  );
};

export default OTPVerification;
