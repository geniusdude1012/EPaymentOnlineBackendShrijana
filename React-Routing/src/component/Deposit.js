import React, { useState } from 'react';
import "./../component/Deposit.css"
import { Link } from 'react-router-dom';

const Deposit = () => {
    const [amount, setAmount] = useState('');

    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(Depositing: $${amount});
    };

    return (
        <div className="deposit-container">
            <form className="deposit-form" onSubmit={handleSubmit}>
                <h2>Load Money</h2>
                <label htmlFor="amount">Enter amount to deposit:</label>
            
                <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={handleChange}
                    placeholder="Amount"
                />
                <Link to="/Dashboard">
                <button type="submit">DEPOSIT</button>
                </Link>
                
            </form>
        </div>
    );
};

export default Deposit;