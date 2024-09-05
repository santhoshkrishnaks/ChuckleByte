import React, { useState } from 'react';

const Navigation = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!isSideNavOpen);
  };

  return (
    <div>
      {/* Main Navigation Bar */}
      <nav className="navbar">
        <img src="logo.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* Menu Icon */}
        <div className="menu-icon" onClick={toggleSideNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Side Navigation */}
      <div className={`side-nav ${isSideNavOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={toggleSideNav}>Home</a></li>
          <li><a href="#about" onClick={toggleSideNav}>About Us</a></li>
          <li><a href="#services" onClick={toggleSideNav}>Services</a></li>
          <li><a href="#team" onClick={toggleSideNav}>Team</a></li>
          <li><a href="#testimonials" onClick={toggleSideNav}>Testimonials</a></li>
          <li><a href="#contact" onClick={toggleSideNav}>Contact</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {isSideNavOpen && <div className="overlay" onClick={toggleSideNav}></div>}
    </div>
  );
};

export default Navigation;
