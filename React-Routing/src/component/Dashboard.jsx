<<<<<<< HEAD
import React from "react";

import "./../component/Home.css";
=======
// import React from 'react'
import React, {useEffect,useState } from 'react';
import "./../component/Dashboard.css"
>>>>>>> b7b99458106eac5da28d4907664984b9575a5a72
import bulb from "./../img/bulb.png";
import khanepani from "./../img/khanepani.png";
import transaction from "./../img/transaction.png";
import load from "./../img/load.png";
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
  <div className='parent-container'>
     <div classNameName={`sidebar ${isOpen ? 'open' : ''}`}>
      <button classNameName="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <div classNameName="sidebar-content">
        <div classNameName="sidebar-header">
          <h3></h3>
        </div>
        <ul>
          <li>
          <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
    



     {/* // SERVICES CONTAINER? */}
    <div className="parent-container1">
 
     <div classNameName="works1">
      <h3>Our Services</h3>
      <div classNameName="steps">
        <div classNameName="step1">
          <div classNameName="icon1">
           <Link to="/WaterBillEnquiry"><img src={khanepani} alt="Create Account" /></Link> 
          </div>
          <p>Khanepani</p>
         \
        </div>
       
        <div className="step1">
          <div className="icon1">
            <Link to="/ElectricityBillEnquiry"><img src={bulb}alt="electricity" /></Link>
          </div>
          <p>Electricity Bill</p>
        
        </div>
        <div className="step1">
          <div className="icon1">
          <Link to="/Deposit"><img src={load}alt="Load Money" /></Link>

          </div>
          <p>Load Wallet</p>
    
        </div>
        <div className="step1">
          <div className="icon1">
          
            <Link to="/Payment"><img src={transaction} alt="TRansaction" /></Link>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
   
    </div>
    </div>
  )
>>>>>>> b7b99458106eac5da28d4907664984b9575a5a72
}

export default Dashboard;
