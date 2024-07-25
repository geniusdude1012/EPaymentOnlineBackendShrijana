import React, { useState } from 'react';
import './../component/PinPage.css';

const PinPage = () => {
  const [pin, setPin] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (value && index < 3) {
        document.getElementById(`pin${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="works">
      <h2>Enter your transaction PIN</h2>
      <p>Enter a 4-digit pin code different from your previous pin code.</p>
      <div className="steps">
        {pin.map((value, index) => (
          <input
            key={index}
            id={`pin${index}`}
            type="text"
            className="pin-input"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            style={{
              width: '40px',
              height: '40px',
              margin: '0 10px',
              textAlign: 'center',
              fontSize: '24px',
            }}
          />
        ))}
      </div>
      <button
        className="btn"
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
        }}
        disabled={pin.some((num) => num === '')}
      >
        Continue
      </button>
    </div>
  );
};

export default PinPage;
