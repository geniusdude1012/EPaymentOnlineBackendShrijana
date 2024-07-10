// import React from 'react'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
function Dashboard() {
  return (
    <div>
      {/* Navbar section? */}
      <nav className="flex px-1 border-b md:shadow-lg items-center relative">
        <img src={profile} className="imageprofile"></img>
        <h4 className="user">Welcome,User</h4>

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
        <div className="profile-container">
          <div className="profile-header">
            <img
              src={profile}
              alt="Dinish Chugtai"
              className="profile-picture"
            />
            <div className="profile-details">
              <h2>Shrijana Maharjan</h2>
              <p className="email">dinesh@fusionauth.io</p>
              <p className="user-id">User Id: Shrijana2099</p>
            </div>
          </div>
          <div className="profile-info">
            <div className="info1">
              <div className="info-section">
                <p className="label">Mobile Phone: </p>
                <p className="value">986446543</p>
              </div>
              <div className="info-section">
                <p className="label">Preferred languages: </p>
                <br />
                <p className="value">Nepali</p>
              </div>
              <div className="info-section">
                <p className="label">Birthdate: </p>
                <p className="value">203/2/3</p>
              </div>
            </div>

            <div className="info2">
              <div className="info-section">
                <p className="label">Username:</p>
                <p className="value">Maharjan</p>
              </div>

              <div className="info-section">
                <p className="label">Created: </p>
                <p className="value">10/5/2020 12:21 PM MDT</p>
              </div>
              <div className="info-section">
                <p className="label">Last login: </p>
                <p className="value">11/6/2020 02:04 PM MST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES PART */}
      <div class="feat">
        <div class="ser" id="service">
          <h3>Our Services</h3>
        </div>
        <div class="container2">
          <div class="box3">
            <div class="img3">
              <a href="deposit.html">
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
              <a href="electricity.html">
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
              <a href="water.html">
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
              <a href="water.html">
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
}

export default Dashboard;
