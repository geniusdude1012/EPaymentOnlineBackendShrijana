import React, { useState, useEffect } from "react";
import "./../component/PaymentReceipt.css";
import back2 from "./../component/assets/back6.avif";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { BrowserRouter } from "react-router-dom";

const PaymentReceipt = ({}) => {
  const location = useLocation(); // Use the useLocation hook to access the location object
  const navigate = useNavigate();

  const total = location.state?.total;
  const customerId = location.state?.customerId;
  const customerName = location.state?.customerName;
  const dateOfEnquiry = new Date();
  const [userdata, setuserdata] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());
  console.log(dateOfEnquiry);

  // const navigate = useNavigate();
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
      if (result.isConfirmed) {
        const response = await axios.post(
          "http://localhost:8000/electricitypay",
          {
            email,
            total,
          }
        );
        if (response.data.status === "success") {
          const updatedBalancer = response.data.updatedBalancer;
          navigate("/PinPage", { state: { updatedBalancer, email, total } });
        } else if (response.data.status === "insufficient") {
          alert("Insufficient Balance");
        } else {
          alert("Invalid entry");
        }
      }
    } catch (error) {
      console.error(error.message);
      alert("Payment failed");
    }
  };
  //OPEN ELECTRICITY.PDF

  // const navigateToPdf = async () => {
  //   try {
  //     const file = await FileReader.readAsDataURL("../Server/pdfs/electricity");
  //     const pdfWindow = window.open;
  //     pdfWindow.document.write(
  //       '<iframe src="' + file + '" width="100%" height="1000"></iframe>'
  //     );
  //     // pdfWindow.document.close;
  //     // pdfWindow.focus;
  //   } catch (error) {
  //     console.error(error.message);
  //     alert("Failed to open the PDF file");
  //   }
  // };

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
          <span>Payment through: </span>
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
          <span className="label">customerId:</span>
          <span className="value">
            <span className="value">{customerId}</span>
          </span>
        </div>
        <div className="detail">
          <span className="label">customerName:</span>
          <span className="value">{customerName}</span>
        </div>
        <div className="detail">
          <span className="label">Service Name:</span>
          <span className="value">BillPayment</span>
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
          Pay Now
        </button>
        <button className="download-button1">Download Receipt</button>
      </div>
    </div>
  );
};

export default PaymentReceipt;
