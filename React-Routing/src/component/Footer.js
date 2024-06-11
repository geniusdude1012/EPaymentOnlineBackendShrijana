import React from 'react';
import "./../component/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
      {/* <p>heloo</p> */}
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Whatsapp: +977 9864463468</p>
        <p>Viber:+977 9864463468</p>
        <p>Phone:01-5581224</p>
        <p>Email: epay@gmail.com</p>
    
      </div>
      <div className="footer-section">
        <h3>Locations</h3>
        <p>Location 1:<br />Siddhipur,Lalitpur<br /></p>
        <p>Location 2:<br />Balkumari,Lalitpur<br /></p>
      </div>
      <div className="footer-section">
        <h3>Policy</h3>
        <p>Privacy Policies</p>
        <p>Terms and Security Policies</p>
       
      </div>
     
      <div className="footer-bottom">
        <h6>© 2024 E-Payment Private Limited. All Rights Reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
