import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer" id='footer'>
      <div className="footer-container">
        
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-top">M PHARMACY</span>
            <span className="logo-bottom">FOOD COURT</span>
          </div>
          <p className="footer-tagline">
            Redefining Karimnagar's street food with science, 
            hygiene, and the purity of Alkaline water.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Find Us</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/m_pharmacy_panipuri_wali_pro/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://wa.me/919059517074" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <p className="footer-phone">+91 90595 17074</p>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="bottom-container">
          <p>&copy; {currentYear} M Pharmacy Food Court. All Rights Reserved.</p>
          <p className="dev-credit">
            Designed & Developed by <a href="https://saipavanmittapalli.in" target="_blank" rel="noreferrer">Sai Pavan Mittapalli</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;