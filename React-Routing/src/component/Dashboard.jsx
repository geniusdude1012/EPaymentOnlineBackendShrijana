// import React from 'react'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../component/Dashboard.css";
import bulb from "./../img/bulb.png";
import khanepani from "./../img/khanepani.png";
import transaction from "./../img/transaction.png";
import load from "./../img/load.png";
import { Link } from "react-router-dom";
// ITS CSS IS IN HOME.JSX
function Dashboard() {
  return (
    <div>
      <div className="parent-container">
        <div className="child-container">
          <span>I AM DON</span>
          <Link to="/">
            <button>LOGOUT</button>
          </Link>
        </div>
      </div>

      <div className="works1">
        <h3>Our Services</h3>
        <div className="steps">
          <div className="step1">
            <div className="icon1">
              <Link to="/WaterBillEnquiry">
                <img src={khanepani} alt="Create Account" />
              </Link>
            </div>
            <p>Khanepani</p>\
          </div>

          <div className="step1">
            <div className="icon1">
              <Link to="/ElectricityBillEnquiry">
                <img src={bulb} alt="electricity" />
              </Link>
            </div>
            <p>Electricity Bill</p>
          </div>
          <div className="step1">
            <div className="icon1">
              <Link to="/Deposit">
                <img src={load} alt="Load Money" />
              </Link>
            </div>
            <p>Load Wallet</p>
          </div>
          <div className="step1">
            <div className="icon1">
              <Link to="/Payment">
                <img src={transaction} alt="TRansaction" />
              </Link>
            </div>
            <p>Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
