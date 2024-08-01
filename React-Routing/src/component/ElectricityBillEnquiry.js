import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../component/WaterBillEnquiry.css";
import electricity from "./../img/electricity.png";
import back1 from "./assets/back3.avif";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
const ElectricityBillEnquiry = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    customerName: "",
    customerId: "",
    counterNo: "counter 1",
    totalMonths: "1",
    dateOfEnquiry: "",
    unit: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    // Add form submission logic here
    const { customerId, customerName, counterNo, totalMonths, unit } = form;
    if (customerId && customerName && counterNo && totalMonths && unit) {
      const submission = await axios
        .post("http://localhost:8000/electricitybill", form)
        .then((response) => {
          if (response.data.status === "success") {
            const total = response.data.total; // Access the total value from the response
            const unit = response.data.unit; // Access the total value from the response
            const customerId = response.data.customerId; // Access the total value from the response
            const customerName = response.data.customerName; // Access the total value from the response
            alert("Enquiry successful");
            navigate("/PaymentReceipt", {
              state: { total, unit, customerId, customerName },
            }); // Pass the total value as a prop to the PaymentReceipt component

            // Example usage
          } else if (response.data.status === "nocustomer") {
            alert("customerid is not registered!!!");
          } else {
            alert("Enquiry failed");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Enquiry failed");
        });
    } else {
      alert("Invalid entry");
    }
  };

  return (
    <div
      className="container1"
      style={{ backgroundImage: `url(${back1})`, backgroundSize: "cover" }}
    >
      <div className="card1">
        <div className="card-header text-center text-teal-500">
          <img src={electricity} alt="Logo" className="logo-img1" />
          {console.log(form)}
          {/* <h2>Water-Bill-Enquiry</h2> */}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="customerName">Customer Name:</label>
              <input
                type="text"
                className="form-control small-input"
                id="customerName"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="customerId">Customer ID:</label>
              <input
                type="text"
                className="form-control small-input"
                id="customerId"
                name="customerId"
                value={form.customerId}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="counterNo">Counter Name:</label>
              <select
                className="form-control"
                id="counterNo"
                name="counterNo"
                value={form.counterNo}
                onChange={handleChange}
              >
                <option value="Kathmandu">Kathmandu</option>
                <option value="Lalitpur">Lalitpur</option>
                <option value="Bhaktapur">Bhaktapur</option>
                <option value="Madhyapur Thimi">Madhyapur Thimi</option>
                <option value="Kirtipur">Kirtipur</option>
                <option value="Mahalaxmi">Mahalaxmi</option>
                <option value="Budhanilkantha">Budhanilkantha</option>
                <option value="Tokha">Tokha</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="customerUnit">Total Units:</label>
              <input
                type="value"
                className="form-control small-input"
                id="customerUnit"
                name="unit"
                value={form.unit}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mt-1">
              <label htmlFor="totalMonths">Total Months:</label>
              <select
                className="form-control"
                id="totalMonths"
                name="totalMonths"
                value={form.totalMonths}
                onChange={handleChange}
              >
                <option value="1">Baisakh</option>
                <option value="2">Jestha</option>
                <option value="3">Ashar</option>
                <option value="4">Shrawan</option>
                <option value="5">Bhadra</option>
                <option value="6">Ashoj</option>
                <option value="2">Kartik</option>
                <option value="3">Mangsir</option>
                <option value="4">Poush</option>
                <option value="5">Magh</option>
                <option value="6">Falgun</option>
                <option value="6">Chaitra</option>
              </select>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ElectricityBillEnquiry;
