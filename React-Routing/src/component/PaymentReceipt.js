import React from 'react';
import './../component/PaymentReceipt.css';
import back2 from "./../component/assets/back6.avif";

const PaymentReceipt = () => {
  return (
    <div className="receipt-container"  style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}>
      <div className="header">
      {/* <div className="text-lg font-bold md:py-0 py-8 px-3 ">
        <h2><b></b><span  className="badge bg-teal-500 text-Dark fs-8">E-pay</span></h2>
        
        </div> */}
        <div className='pay'><span>Payment for: </span>NEPAL COLLEGE OF SCHOOL</div>
        
        <h2></h2>
        <h3></h3>
      </div>
      <hr />
      <div className="receipt-details">
        <div className="detail">
          <span className="label">Reference Code:</span>
          <span className="value"></span>
        </div>
        <div className="detail">
          <span className="label">Date/Time:</span>
          <span className="value"></span>
        </div>
        <div className="detail">
          <span className="label">Channel:</span>
          <span className="value"><span className="online">Online</span></span>
        </div>
        <div className="detail">
          <span className="label">Payment Attribute:</span>
          <span className="value">
            
          </span>
        </div>
        <div className="detail">
          <span className="label">Service Name:</span>
          <span className="value"></span>
        </div>
        <div className="detail">
          <span className="label">Amount (NPR):</span>
          <span className="value">92,670.00</span>
        </div>
        <div className="detail">
          <span className="label">Initiator:</span>
          <span className="value">9840375027</span>
        </div>
        <div className="detail">
          <span className="label">Qr Merchant Name:</span>
          <span className="value"></span>
        </div>
        <div className="detail">
          <span className="label">Status:</span>
          <span className="value"><span className="status-success">PENDING</span></span>
        </div>
      </div>
      <hr />
      <div className="download-button-container">
        <button className="download-button">Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentReceipt;
