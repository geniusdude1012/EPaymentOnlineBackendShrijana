import React, { useState } from "react";
import lock from "./../img/lock.png";
import "./../component/PinSetPage.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const PinSetPage = () => {
  const location = useLocation(); // Use the useLocation hook to access the location object

  const email = location.state?.email;
  const name = location.state?.name;
  const address = location.state?.address;
  const password = location.state?.password;
  const contactno = location.state?.contactno;
  console.log(email);
  console.log(password);
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleConfirmPinChange = (e) => {
    setConfirmPin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pin === confirmPin && pin.length === 4) {
      try {
        const response = await axios.post("http://localhost:8000/setuppin", {
          name,
          email,
          password,
          contactno,
          address,
          pin,
        });

        if (response.data.status === "success") {
          alert("Setup successful");
          alert("Check your email for otp verification");
          navigate("/OTPVerification"); // Navigate to the Dashboard after successful deposit
        } else {
          alert("setup failed");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred during the deposit.");
      }
    } else {
      alert("PINs do not match or are not 4 digits");
    }
  };

  return (
    <div className="transaction-pin-container">
      <div className="lock-icon">
        <img src={lock} alt="Lock Icon" />
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Setup Transaction PIN</h2>
        <div className="input-group">
          <label htmlFor="newPin"></label>
          <input
            type="password"
            id="newPin"
            value={pin}
            onChange={handlePinChange}
            maxLength="4"
            placeholder="Enter 4 digit PIN"
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPin"></label>
          <input
            type="password"
            id="confirmPin"
            value={confirmPin}
            onChange={handleConfirmPinChange}
            maxLength="4"
            placeholder="Re-enter 4 digit PIN"
          />
        </div>
        <div className="rules">
          <h7>Choose a PIN by following these rules:</h7>
          <p>1. Transaction PIN must be 4 digits</p>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default PinSetPage;
