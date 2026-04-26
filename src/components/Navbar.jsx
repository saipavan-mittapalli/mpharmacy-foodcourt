import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar" id='navbar'>
      <div className="nav-container">

        <div className="logo">
          <span className="logo-top">M PHARMACY</span>
          <span className="logo-bottom">FOOD COURT</span>
        </div>

        <ul className={active ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" onClick={() => setActive(false)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#story" onClick={() => setActive(false)}>Our Story</a>
          </li>
          <li className="nav-item">
            <a href="#menu" onClick={() => setActive(false)}>Menu</a>
          </li>
          <li className="nav-item">
            <a href="#biryani" onClick={() => setActive(false)}>Biryani</a>
          </li>
          <li className="nav-item">
            <a href="#drinks" onClick={() => setActive(false)}>Drinks</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => setActive(false)}>Find Us</a>
          </li>
        </ul>

        <div className="hamburger" onClick={() => setActive(!active)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;