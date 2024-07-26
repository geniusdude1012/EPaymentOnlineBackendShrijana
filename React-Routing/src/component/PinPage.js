import { React, useState } from "react";
import back2 from "./../component/assets/back6.avif";
import { useNavigate } from "react-router-dom";
import "./../component/PinPage.css";
import axios from "axios";
import PinSetPage from "./PinSetPage";

const PinPage = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      if (value !== "" && index < 3) {
        document.getElementById(`pin-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle PIN submission
    console.log("Entered PIN:", pin.join(""));
    if (parseFloat(pin) <= 0) {
      alert("Amount must be a positive number.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/transactionpin",
        {}
      );

      if (response.data.status === "success") {
        alert("Deposit successful");
        navigate("/Dashboard"); // Navigate to the Dashboard after successful deposit
      } else {
        alert("Deposit failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during the deposit.");
    }
  };

  return (
    <div className="heropin">
      <div
        className="pin-container"
        style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}
      >
        <div className="pin-header">
          <h5>Enter Transaction Pin</h5>
        </div>

        <div className="pin-inputs">
          {pin.map((digit, index) => (
            <input
              key={index}
              id={`pin-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="pin-input"
            />
          ))}
        </div>
        <button className="continue-button" onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default PinPage;
