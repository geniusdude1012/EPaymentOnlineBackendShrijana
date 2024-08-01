import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../component/WaterBillEnquiry.css";
import water from "./../img/water.png";
import { Link, useNavigate } from "react-router-dom";
import back1 from "./assets/back3.avif";
import axios from "axios";
const WaterBillEnquiry = () => {
  const [userdata, setuserdata] = useState({});
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
  const [form, setForm] = useState({
    customerName: "",
    customerId: "",
    counterNo: "counter 1",
    totalMonths: "1",
    dateOfEnquiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    // Add form submission logic here
    const { customerId, customerName, counterNo, totalMonths, dateOfEnquiry } =
      form;
    if (customerId && customerName && counterNo && totalMonths) {
      const submission = await axios
        .post("http://localhost:8000/waterbill", {
          customerId,
          customerName,
          counterNo,
          totalMonths,
        })
        .then((response) => {
          if (response.data.status === "success") {
            const total = response.data.total; // Access the total value from the response // Access the total value from the response
            const customerId = response.data.customerId; // Access the total value from the response
            const customerName = response.data.customerName;
            alert("Enquiry successful");
            navigate("/PaymentReceipt", {
              state: { total, customerId, customerName },
            });
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

  // Add form submission logic here

  return (
    <div
      className="container1 mt-100"
      style={{ backgroundImage: `url(${back1})`, backgroundSize: "cover" }}
    >
      <div className="card1">
        <div className="card-header text-center text-teal-500">
          <img src={water} alt="Logo" className="logo-img" />
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
              <label htmlFor="counterNo">Counter No.:</label>
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
            <div className="form-group mt-1">
              <label htmlFor="totalMonths">Total Months:</label>
              <select
                className="form-control"
                id="totalMonths"
                name="totalMonths"
                value={form.totalMonths}
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
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
export default WaterBillEnquiry;
