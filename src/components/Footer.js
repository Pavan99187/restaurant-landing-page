import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div id="address">
        <p>123 Main Street, City, State | Phone: +123456789</p>
        <p>Follow us on: Instagram | Facebook | Twitter</p>
      </div>
      <div id="mails">
        <p>
          Email: <span>pavankumar11987@gmail.com</span>
        </p>
        <p>
          Phone: <span>+123456789</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
