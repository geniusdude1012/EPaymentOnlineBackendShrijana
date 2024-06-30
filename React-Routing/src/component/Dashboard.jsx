// import React from 'react'
import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./../component/Dashboard.css";
import bulb from "./../img/bulb.png";
import khanepani from "./../img/khanepani.png";
import transaction from "./../img/transaction.png";
import load from "./../img/load.png";
// import profile from "./../img/profile.jpg";
import profile from "./assets/profile.jpg";
import { Link } from "react-router-dom";
// ITS CSS IS IN HOME.JSX
function Dashboard() {
  return (
    <div>
{/* Navbar section? */}
<nav className="flex px-1 border-b md:shadow-lg items-center relative" >
        <div className="text-lg font-bold md:py-0 py-8 px-3 ">
        <h2><b></b><span  className="badge bg-teal-500 text-Dark fs-8">E-pay</span></h2>
        
        </div>
        <ul className="md:px-1 ml-auto md:flex md:space-x-1 absolute md:relative top-full left-0 right-0">
        <NavLink to={"/"}>
    <li>
        <a href="#" className="flex md:inline-flex p-4 items-center hover:bg-gray-50 text-decoration-none">
            <span style={{ letterSpacing: '0.1em' }}>HOME</span>
        </a>
    </li>
</NavLink>
            <NavLink to={"/Logout"}>
            <li>
                <a href="#" className="flex md:inline-flex p-4 items-center hover:bg-gray-50 text-decoration-none">
                    <span style={{ letterSpacing: '0.1em' }}>LOGOUT</span>
                </a>
            </li>
            </NavLink>
         
        
        </ul>
        <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
    </nav>

  {/* //main */}
      <div className="parent-container">
      <div className="profile-container">
 
      <div className="profile-header">
        <img src={profile}  alt="Dinish Chugtai" className="profile-picture" />
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
