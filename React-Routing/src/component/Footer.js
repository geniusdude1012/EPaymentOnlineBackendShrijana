import React from 'react';
import "./../component/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Opening Hours</h3>
        <p>MONDAY.....9:00 - 22:00</p>
        <p>TUESDAY....9:00 - 22:00</p>
        <p>WEDNESDAY..9:00 - 22:00</p>
        <p>THURSDAY...9:00 - 22:00</p>
        <p>FRIDAY.....9:00 - 00:00</p>
        <p>SATURDAY...9:00 - 00:00</p>
        <p>SUNDAY.....9:00 - 18:00</p>
      </div>
      <div className="footer-section">
        <h3>Locations</h3>
        <p>Location 1:<br />944 Gielmolen Court<br />Tiffin, OH 44883</p>
        <p>Location 2:<br />921 Schoolhouse Court<br />New Bern, NC 28560</p>
      </div>
      <div className="footer-section">
        <h3>Menu</h3>
        <p>Home</p>
        <p>Reservation</p>
        <p>Our pizza</p>
        <p>Your order</p>
        <p>Checkout</p>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Phone: 054 / 9923</p>
        <p>Email: orders@pizzanuestra.com</p>
        <div className="social-media">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-google"></i>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2018 Food. Built using WordPress and Mesmerize Theme.</p>
      </div>
    </footer>
  );
};

export default Footer;
