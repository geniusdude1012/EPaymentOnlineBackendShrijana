import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./../component/Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import bulb from "./../img/bulb.png";
import khanepani from "./../img/khanepani.png";
import transaction from "./../img/transaction.png";
import load from "./../img/load.png";
// import profile from "./../img/profile.jpg";
import profile from "./assets/profile.jpg";
import { Link } from "react-router-dom";
import back2 from "./../component/assets/back6.avif"
// ITS CSS IS IN HOME.JSX
function Dashboard() {
  const[isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };
  return (
    <div>

{/* Navbar section? */}
<nav className="flex px-1 border-b md:shadow-lg items-center relative" >
        
          <img src={profile} className="imageprofile"></img>
          <h4 className="user">Welcome,User</h4>
       
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
      <div className="parent-container"  style={{  backgroundImage: `url(${back2})`, backgroundSize: 'cover' }}>
      <div className="profile-container" style={{  backgroundImage: `url(${back2})`, backgroundSize: 'cover' }}>
 
      <div className="profile-header">
        {/* <div className="profile-pic">
          <img src={profile}  alt="Dinish Chugtai" className="profile-picture" />
        </div> */}
        <div className="profile-details">
          <h1>Shrijana Maharjan</h1>
          <h2 className="email">Email Id: shrezaana2067@gmail.com</h2>
          <h2 className="user-id">User Id: Shrijana2099</h2>
        </div>
      </div>

      {/* //BALANCE SHOW? */}
      <div className="profile-info">
      <div className="info1">
        <div className="container">
          <div className="balance">Current Balance</div>
          
          <div className="balance-details">
            {isBalanceVisible ? 'Total Balance= 0011.0' : 'Total Balance=******'}
          </div>
          {/* <div className="icon"> */}
            <button className="toggle-button" onClick={toggleBalanceVisibility}>
                <i className={isBalanceVisible ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                {isBalanceVisible ? ' HIDE' : ' SHOW'}
              </button>
           
        </div>
      </div>
    </div>
       
      </div>
</div>

      {/* SERVICES PART */}
      <div className="feat"  style={{  backgroundImage: `url(${back2})`, backgroundSize: 'cover' }}>
        <div className="ser" id="service">
            <h3>Our Services</h3>
        </div>
        <div className="container2">
            <div className="box3">
                <div className="img3">
                   
                      <Link to="/Deposit"><button className="butt1"><img src={load}/></button></Link>
                </div>
                <div>
                    <span>Load Wallet</span>
                </div>
            </div>
            <div className="box3">
                <div className="img3">
                  <Link to="/ElectricityBillEnquiry"><button className="butt1"><img src={bulb}/></button></Link>  
                </div>
                <div className="element">
                    <span>Electricity-Bill</span>
                </div>
            </div>
            <div className="box3">
                <div className="img3">
                <Link to="/Payment"><button className="butt1"><img src={transaction}/></button></Link>  
               
                </div>
                <div>
                    <span>Transation</span>
                </div>
            </div>
            <div className="box3">
                <div className="img3">
                <Link to="/WaterBillEnquiry"><button className="butt1"><img src={khanepani}/></button></Link>  
              
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