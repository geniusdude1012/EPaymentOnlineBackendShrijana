import React, { useState, useEffect } from "react";
import "./../component/PaymentReceipt.css";
import back2 from "./../component/assets/back6.avif";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const PaymentReceipt = ({}) => {
  const location = useLocation(); // Use the useLocation hook to access the location object

  const total = location.state?.total;
  const dateOfEnquiry = new Date();
  const [userdata, setuserdata] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());
  console.log(dateOfEnquiry);

  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const response = await axios.get("http://localhost:8000/dashboard", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data;
      console.log(data);
      setuserdata(data);
      if (response.status !== 200) {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error(error);
      navigate("/Login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = userdata.email;

    try {
      const response = await axios.post(
        "http://localhost:8000/electricitypay",
        {
          email,
          total,
        }
      );
      if (response.data.status === "success") {
        alert("Payment successful");
        navigate("/PinPage", { state: total });
      } else if (response.data.status === "insufficient") {
        alert("Insufficient Balance");
      } else {
        alert("Invalid entry");
      }
    } catch (error) {
      console.error(error.message);
      alert("Payment failed");
    }
  };
  return (
    <div
      className="receipt-container"
      style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}
    >
      <div className="header">
        {/* <div className="text-lg font-bold md:py-0 py-8 px-3 ">
        <h2><b></b><span  className="badge bg-teal-500 text-Dark fs-8">E-pay</span></h2>
        
        </div> */}
        <div className="pay">
          <span>Payment for: </span>NEPAL COLLEGE OF SCHOOL
        </div>

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
          <span className="value">{dateOfEnquiry.toISOString()}</span>
        </div>
        <div className="detail">
          <span className="label">Channel:</span>
          <span className="value">
            <span className="online">Online</span>
          </span>
        </div>
        <div className="detail">
          <span className="label">Payment Attribute:</span>
          <span className="value"></span>
        </div>
        <div className="detail">
          <span className="label">Service Name:</span>
          <span className="value"></span>
        </div>
        <div className="detail">
          <span className="label">Amount (NPR):</span>
          <span className="value">{total}</span>
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
          <span className="value">
            <span className="status-success">PENDING</span>
          </span>
        </div>
      </div>
      <hr />
      <div className="download-button-container">
        <button onClick={handleSubmit} className="download-button">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentReceipt;
