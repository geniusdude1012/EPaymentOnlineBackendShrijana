import React, { useState, useEffect } from "react";
import "./../component/Deposit.css";
import { Link, useNavigate } from "react-router-dom";
import back1 from "./assets/back1.avif";
import axios from "axios";

const Deposit = () => {
  const [userdata, setuserdata] = useState({});
  const [user, setUser] = useState({
    Balance: "",
  });

  const [amount, setAmount] = useState("");
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

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const email = userdata.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { amount } = user;
    const email = userdata.email;

    try {
      const response = await axios.post("http://localhost:8000/deposit");

      if (response.data.status === "success") {
        alert("Deposit successful");
      } else {
        alert("Deposit failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during the deposit.");
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
          type="number"
          id="amount"
          name="amount"
          value={user.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <button type="submit" className="btn btn-info">
          deposit
        </button>
        {/* <Link to="/Dashboard">
                <button type="submit">DEPOSIT</button>
                </Link>
                 */}
      </form>
    </div>
  );
};

export default Deposit;
