import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-item">
        <img src="web.jpeg" alt="Web Development" />
        <h3>Web Development</h3>
        <p>Building responsive and high-performance websites tailored to your needs.</p>
      </div>
      <div className="service-item">
        <img src="soft.jpg" alt="Software Solutions" />
        <h3>Software Solutions</h3>
        <p>Custom software solutions designed to streamline your business processes.</p>
      </div>
      <div className="service-item">
        <img src="cyber.jpeg" alt="Cybersecurity" />
        <h3>Cybersecurity</h3>
        <p>Protect your data and systems with our advanced cybersecurity services.</p>
      </div>
    </section>
  );
};

export default Services;
