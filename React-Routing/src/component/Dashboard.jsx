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
      <div className="profile-container">
 
      <div className="profile-header">
        <img src={load}  alt="Dinish Chugtai" className="profile-picture" />
        <div className="profile-details">
          <h2>Shrijana Maharjan</h2>
          <p className="email">dinesh@fusionauth.io</p>
          <p className="user-id">User Id: Shrijana2099</p>
        </div>
      </div>
      <div className="profile-info">
        <div className="info1">
        <div className="info-section">
          <p className="label">Mobile Phone:   </p> 
          <p className="value">986446543</p>
        </div>
        <div className="info-section">
          <p className="label">Preferred languages:   </p><br/>
          <p className="value">Nepali</p>
        </div>
        <div className="info-section">
          <p className="label">Birthdate:   </p>
          <p className="value">203/2/3</p>
        </div>
        </div>


        <div className="info2">
        <div className="info-section">
          <p className="label">Username:</p>
          <p className="value">Maharjan</p>
        </div>
       
        <div className="info-section">
          <p className="label">Created:  </p>
          <p className="value">10/5/2020 12:21 PM MDT</p>
        </div>
        <div className="info-section">
          <p className="label">Last login:  </p>
          <p className="value">11/6/2020 02:04 PM MST</p>
        </div>
      </div>
      </div>
    
    </div>
       
      </div>
{/* SERVICES PART */}
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
