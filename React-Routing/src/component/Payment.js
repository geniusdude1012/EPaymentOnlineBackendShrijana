import React, { useState, useEffect } from "react";
import "./../component/Payment.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import back1 from "./assets/back1.avif";

const Payment = () => {
  const [userdata, setuserdata] = useState({});
  const [amount, setAmount] = useState(1000);
  const fee = 0;
  const netPayable = amount + fee;
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

  const [user, setUser] = useState({
    username: "",
    receiveremail: "",
    amount: "",
    accountno: "1234567890", // Default account number
    purpose: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, receiveremail, amount, accountno, purpose } = user;
    const email = userdata.email;

    if (username && receiveremail) {
      try {
        const response = await axios.post("http://localhost:8000/transaction", {
          receiveremail,
          amount,
          email,
          username,
          accountno,
          purpose,
        });

        if (response.data.status === "success") {
          const total = response.data.total; // Access the total value from the response
          const emailR = response.data.emailR; // Access the total value from the response
          const emailS = response.data.emailS; // Access the total value from the response
          const totalS = response.data.totalS;
          const totalR = response.data.totalR;
          navigate("/PaymentTransaction", {
            state: { totalR, totalS, emailR, emailS, total },
          });
        } else if (response.data.status === "same account") {
          alert("Enter another account");
        } else if (response.data.status === "insufficient") {
          alert("Insufficient Balance");
        } else {
          alert("Invalid entry");
        }
      } catch (error) {
        console.error(error.message);
        alert("Transaction failed");
      }
    } else {
      alert("No entry found");
    }
  };

  return (
    <div
      className="pcontainer"
      style={{ backgroundImage: `url(${back1})`, backgroundSize: "cover" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="payment-container">
          <h2>Money Transfer</h2>
          <div className="form-group">
            <label>Account Holder's Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="username"
              value={user.username}
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Account Holder's Email</label>
            <input
              type="email"
              onChange={handleChange}
              name="receiveremail"
              value={user.receiveremail}
              placeholder="Enter here"
              required
            />
          </div>
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="value"
              name="accountno"
              value={user.accountno}
              onChange={handleChange}
              placeholder="Enter here"
              required
            />
          </div>
          <div className="form-group">
            <label>Amount ₹(100-5000)</label>
            <input
              type="value"
              name="amount"
              value={user.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="summary"></div>
          <div className="form-group">
            <label>Remarks</label>
            <input
              type="text"
              name="purpose"
              value={user.purpose}
              onChange={handleChange}
              placeholder="Purpose"
              required
            />
          </div>
          <button className="send-money-button">Send Money</button>
          <div className="all-updates">
            <Link to="/">
              <a href="#">Cancel</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
