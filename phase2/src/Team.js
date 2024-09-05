import React from 'react';

const Team = () => {
  return (
    <section className="team" id="team">
      <h2>Meet Our Team</h2>
      <div className="team-member">
        <img src="p1.jpeg" alt="John Doe" />
        <h3>John Doe</h3>
        <p>CEO & Founder</p>
      </div>
      <div className="team-member">
        <img src="p2.jpeg" alt="Jane Smith" />
        <h3>Jane Smith</h3>
        <p>Lead Developer</p>
      </div>
      <div className="team-member">
        <img src="p3.jpeg" alt="Alice Johnson" />
        <h3>Alice Johnson</h3>
        <p>Project Manager</p>
      </div>
    </section>
  );
};

export default Team;
