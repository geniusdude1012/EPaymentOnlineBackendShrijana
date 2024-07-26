import React, { useState } from "react";
import back2 from "./../component/assets/back6.avif";
import "./../component/PinPage.css";

const PinPage = () => {
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

  const handleSubmit = () => {
    // Handle PIN submission
    console.log("Entered PIN:", pin.join(""));
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
