// RecoveryPassword.js
import React, { useState } from 'react';
import "./../LoginSign/RecoveryPassword.css";
import { Link } from 'react-router-dom';

const RecoveryPassword = () => {
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetCodeChange = (e) => {
    setResetCode(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Reset Code:', resetCode);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmPassword);
  };

  return (
    <div className="recovery-password-container">
      
      <form onSubmit={handleSubmit}>
      <h4>Create New Password</h4>
      <p>               </p>
        <input
          type="text"
          placeholder="Enter 4 Digit Code"
          value={resetCode}
          onChange={handleResetCodeChange}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <Link to="/Login">
        <button type="submit">Save</button>
        </Link>
        
      </form>
    
    </div>
  );
};

export default RecoveryPassword;
