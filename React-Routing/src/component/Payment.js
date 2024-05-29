import React, { useState } from 'react';
import "./../component/Payment.css"
import { Link } from 'react-router-dom';

const Payment = () => {
    const [amount, setAmount] = useState(1000);
    const fee = 0;
    const netPayable = amount + fee;

    return (
        <div className="payment-container">
            <h2>Money Transfer</h2>
            <div className="form-group">
                <label>Account Holder's Name</label>
                <input type="text" placeholder='Enter Name'/>
            </div>
            <div className="form-group">
                <label>Account Number</label>
                <input type="number" placeholder='Enter here'/>
            </div>
            {/* <div className="form-group">
                <label>IFSC Code</label>
                <input type="text" />
            </div> */}
            <div className="form-group">
                <label>Amount ₹(100-5000)</label>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))} 
                />
            </div>
            <div className="summary">
               
                <div>Net Payable(₹): <span>{netPayable.toFixed(2)}</span></div>
            </div>
            <div className="form-group">
                <label>Remarks</label>
                <input type="text" placeholder='Purpose' />
            </div>
            <Link to="/OTPVerification"><button className="send-money-button">Send Money</button></Link>
            
            <div className="all-updates">
               <Link to="/"><a href="#">Cancel</a></Link> 
            </div>
        </div>
    );
};

export default Payment;
