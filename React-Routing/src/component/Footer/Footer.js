import React from 'react';
import"./../Footer/Footer.css";
import { Link } from 'react-router-dom';
// import {Link} from "react-scroll";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
      {/* <p>heloo</p> */}
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <h3>Whatsapp: +977 9864463468</h3>
        <h3>Viber:+977 9864463468</h3>
        <h3>Phone:01-5581224</h3>
        <Link to="/ContactUs"><h3>Email: epayment2423@gmail.com</h3></Link>
        
    
      </div>
      <div className="footer-section">
        <h3>Locations</h3>
        <h3>Location 1:  Siddhipur,Lalitpur</h3>
        <h3>Location 2:  Balkumari,Lalitpur</h3>
      </div>
      <div className="footer-section">
        <h3>Policy</h3>
        <Link to="/AboutLeadG2" ><h3>About Us</h3></Link>
       
        <Link to="/Privacy"><h3>Privacy Policies</h3></Link>
         {/* <Link to="/Home"><p>Terms and Security Policies</p></Link> */}
      </div>
      <div className="footer-bottom">
        <h6>© 2024 E-Payment Private Limited. All Rights Reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
