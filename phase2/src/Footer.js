import React from 'react';


const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} BRUTON Technologies. All rights reserved.</p>
      <p>
        <a href="#home">Home</a> | <a href="#about">About Us</a> | <a href="#services">Services</a> | <a href="#team">Team</a> | <a href="#contact">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
