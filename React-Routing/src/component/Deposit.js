import React, { useState, useEffect } from "react";
import "./../component/Deposit.css";
import { useNavigate } from "react-router-dom";
import back1 from "./assets/back1.avif";
import axios from "axios";
import Swal from "sweetalert2";

const Deposit = () => {
  const [userdata, setuserdata] = useState({});
  const [user, setUser] = useState({
    amount: "",
  });
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
      const data = response.data;
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

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { amount } = user;
    const email = userdata.email;
    if (parseFloat(amount) <= 0) {
      alert("Amount must be a positive number.");
      return;
    }

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to proceed with the payment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed!",
      cancelButtonText: "No, cancel!",
    });
    if (result.isConfirmed) {
      // Proceed with the payment
      try {
        const response = await axios.post("http://localhost:8000/deposit", {
          amount,
          email,
        });

        if (response.data.status === "success") {
          Swal.fire({
            title: "Payment Alert",
            text: "Payment succesfull",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/Dashboard"); // Navigate to the Dashboard after successful deposit
        } else {
          alert("Deposit failed");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred during the deposit.");
      }
    }
  };

  return (
    <div
      className="deposit-container"
      style={{ backgroundImage: `url(${back1})`, backgroundSize: "cover" }}
    >
      <form className="deposit-form" onSubmit={handleSubmit}>
        <h2>Load Money</h2>
        <label htmlFor="amount">Enter amount to deposit:</label>
        <input
          type="value"
          id="amount"
          name="amount"
          value={user.amount}
          onChange={handleChange}
          placeholder="Amount"
          min="0"
        />
        <button type="submit" className="btn btn-info">
          Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
