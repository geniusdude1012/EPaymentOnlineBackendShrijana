import React, { useState } from 'react';
import "./../component/OTPVerification.css";
// import back1 from "./assets/black.avif"

const OTPVerification = () => {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [timer, setTimer] = useState(180); // 3 minutes timer

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleResend = () => {
        setOtp(Array(6).fill(""));
        setTimer(180); // reset timer to 3 minutes
        // Add functionality to resend OTP here
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <div className="container1" >
        <div className="otp-container">
            <h2>OTP Verification</h2>
            <p>Enter the 6 digit verification code received on your Email ID</p>
            <div className="otp-inputs">
                {otp.map((data, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select()}
                    />
                ))}
            </div>
            <div className="timer">
                Verification code <span>{Math.floor(timer / 60)}:{('0' + (timer % 60)).slice(-2)}</span>
                <button className="resend-otp" onClick={handleResend} disabled={timer !== 0}>Resend OTP</button>
            </div>
            <button className="verify-button">Verify</button>
            {/* <div className="help-text">
                Having problems? <a href="#">Know more</a>
            </div> */}
        </div>
        </div> 
    );
};

export default OTPVerification;
