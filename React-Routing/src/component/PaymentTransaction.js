import React, { useState, useEffect } from "react";
import "./../component/PaymentTransaction.css";
import back2 from "./../component/assets/back6.avif";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const PaymentTransaction = ({}) => {
  const location = useLocation(); // Use the useLocation hook to access the location object

  const total = location.state?.total;
  const totalS = location.state?.totalS;
  const emailR = location.state?.emailR;
  const emailS = location.state?.emailS;
  const totalR = location.state?.totalR;
  const dateOfEnquiry = new Date();
  const [userdata, setuserdata] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());

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
  const name = userdata.name;
  console.log(totalS);
  console.log(totalR);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = userdata.email;
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to proceed with the payment?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, proceed!",
        cancelButtonText: "No, cancel!",
      });
      navigate("/TransferPin", {
        state: { totalR, totalS, emailR, emailS, total },
      });
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
        <div className="pay">
          <span>Transaction From: </span>
          {name}
        </div>

        <h2></h2>
        <h3></h3>
      </div>
      <hr />
      <div className="receipt-details">
        <div className="detail">
          <span className="label">Date/Time:</span>
          <span className="value">{dateOfEnquiry.toISOString()}</span>
        </div>
        <div className="detail">
          <span className="label">Sender:</span>
          <span className="value">
            <span className="value">{emailS}</span>
          </span>
        </div>
        <div className="detail">
          <span className="label">Receiver:</span>
          <span className="value">{emailR}</span>
        </div>
        <div className="detail">
          <span className="label">Service Name:</span>
          <span className="value">Send Money</span>
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
          <span className="label">Status:</span>
          <span className="value">
            <span className="status-success">PENDING</span>
          </span>
        </div>
      </div>
      <hr />
      <div className="download-button-container">
        <button onClick={handleSubmit} className="download-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default PaymentTransaction;
