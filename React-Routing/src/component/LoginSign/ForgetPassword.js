
import React, { useState } from 'react';
import "./../LoginSign/ForgetPassword.css"
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="forget-password-container">
      
      <form onSubmit={handleSubmit}>
      <h4>Forgot Password</h4>
      <p>             </p>
      <p>             </p>
        <input
          type="email"
          placeholder="Enter Your Valid Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
          <p>             </p>

        <Link to="/RecoveryPassword">
        <button type="submit">Send Code</button>
        </Link>
        
      </form>
    </div>
  );
};

export default ForgetPassword;
