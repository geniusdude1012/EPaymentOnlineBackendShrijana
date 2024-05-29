import React, { useState } from 'react';
import "./../component/FormComponent.css"

const FormComponent = () => {
  const [formData, setFormData] = useState({
    bank: '',
    accountNo: '',
    accountHolderName: '',
    amount: '',
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Send Money</h2>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="bank"
            value={formData.bank}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Account No.:</label>
          <input
            type="text"
            name="accountNo"
            value={formData.accountNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Account Holder Name:</label>
          <input
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount (NPR):</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Remarks:</label>
          <input
            type="text"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;