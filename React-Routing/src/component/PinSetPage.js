import React, { useState } from 'react';
import lock from "./../img/lock.png";
import "./../component/PinSetPage.css";


const PinSetPage = () => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleConfirmPinChange = (e) => {
    setConfirmPin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === confirmPin && pin.length === 4) {
      alert('PIN set successfully');
    } else {
      alert('PINs do not match or are not 4 digits');
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
