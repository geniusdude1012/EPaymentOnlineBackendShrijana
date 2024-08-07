import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./../component/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import bulb from "./../img/bulb.png";
import khanepani from "./../img/khanepani.png";
import transaction from "./../img/transaction.png";
import load from "./../img/load.png";
// import profile from "./../img/profile.jpg";
import profile from "./assets/profile.jpg";

import back2 from "./../component/assets/back6.avif";
import axios from "axios";
// ITS CSS IS IN HOME.JSX
const Dashboard = () => {
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

  //FOR HIDE BALANCE
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };
  return (
    <div>
      {/* Navbar section? */}
      <nav className="flex px-1 border-b md:shadow-lg items-center relative">
      
        <h4 className="user">Welcome, {userdata.name}</h4>

        <ul className="md:px-1 ml-auto md:flex md:space-x-1 absolute md:relative top-full left-0 right-0">
          <NavLink to={"/"}>
            <li>
              <a
                href="#"
                className="flex md:inline-flex p-4 items-center hover:bg-gray-50 text-decoration-none"
              >
                <span style={{ letterSpacing: "0.1em" }}>HOME</span>
              </a>
            </li>
          </NavLink>
          <NavLink to={"/Logout"}>
            <li>
              <a
                href="#"
                className="flex md:inline-flex p-4 items-center hover:bg-gray-50 text-decoration-none"
              >
                <span style={{ letterSpacing: "0.1em" }}>LOGOUT</span>
              </a>
            </li>
          </NavLink>
          <Link to="/UserPage">
          <img src={profile} className="imageprofile"></img>
        </Link>
        </ul>
        <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </div>
      </nav>

      {/* //main */}
      <div
        className="parent-container"
        style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}
      >
        <div
          className="profile-container"
          style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}
        >
          <div className="profile-header">
            <div className="profile-details">
              <h1>{userdata.name}</h1>
              <h1 className="email">Email Id: {userdata.email}</h1>
              <h2 className="user-id">User Id: {userdata.name}</h2>
            </div>
          </div>
          {/* BALANCE SHOW */}
          <div className="profile-info">
            <div className="info1">
              <div className="container">
                <div className="balance">Current Balance</div>

                <div className="balance-details">
                  {isBalanceVisible
                    ? `Account_no: ${userdata.accountno}`
                    : "Account_no=XXXXXXX"}
                </div>
                <div className="balance-details">
                  {isBalanceVisible
                    ? `Total Balance: ${userdata.Balance}`
                    : "Total Balance=XXXXX"}
                </div>

                {/* <div className="icon"> */}
                <button
                  className="toggle-button"
                  onClick={toggleBalanceVisibility}
                >
                  <i
                    className={
                      isBalanceVisible ? "fas fa-eye-slash" : "fas fa-eye"
                    }
                  ></i>
                  {isBalanceVisible ? " HIDE" : " SHOW"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES PART */}
      <div
        class="feat"
        style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}
      >
        <div class="ser" id="service">
          <h3>Our Services</h3>
        </div>
        <div class="container2">
          <div class="box3">
            <div class="img3">
              <a href="Deposit">
                <button class="butt1">
                  <img src={load} />
                </button>
              </a>
            </div>
            <div>
              <span>Load Wallet</span>
            </div>
          </div>
          <div class="box3">
            <div class="img3">
              <a href="ElectricityBillEnquiry">
                {" "}
                <button class="butt1">
                  <img src={bulb} />
                </button>
              </a>
            </div>
            <div class="element">
              <span>Electricity-Bill</span>
            </div>
          </div>
          <div class="box3">
            <div class="img3">
              <a href="payment">
                <button class="butt1">
                  <img src={transaction} />
                </button>
              </a>
            </div>
            <div>
              <span>Transation</span>
            </div>
          </div>
          <div class="box3">
            <div class="img3">
              <a href="waterBillEnquiry">
                <button class="butt1">
                  <img src={khanepani} />
                </button>
              </a>
            </div>
            <div>
              <span>Khanepani</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
