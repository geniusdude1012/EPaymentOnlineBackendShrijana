import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import bulb from "./../img/bulb.png";
import khanepani from "./../img/khanepani.png";
import transaction from "./../img/transaction.png";
import load from "./../img/load.png";
import "./../component/Dashboard.css";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="parent-container">
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h3>Navigation</h3>
            </div>
            <ul>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="parent-container1">
        <div className="works1">
          <h3>Our Services</h3>
          <div className="steps">
            <div className="step1">
              <div className="icon1">
                <Link to="/WaterBillEnquiry">
                  <img src={khanepani} alt="Khanepani" />
                </Link>
              </div>
              <p>Khanepani</p>
            </div>
            <div className="step1">
              <div className="icon1">
                <Link to="/ElectricityBillEnquiry">
                  <img src={bulb} alt="Electricity Bill" />
                </Link>
              </div>
              <p>Electricity Bill</p>
            </div>
            <div className="step1">
              <div className="icon1">
                <Link to="/Deposit">
                  <img src={load} alt="Load Wallet" />
                </Link>
              </div>
              <p>Load Wallet</p>
            </div>
            <div className="step1">
              <div className="icon1">
                <Link to="/Payment">
                  <img src={transaction} alt="Transaction" />
                </Link>
              </div>
              <p>Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
