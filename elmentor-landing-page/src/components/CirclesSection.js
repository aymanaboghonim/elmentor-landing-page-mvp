import React from 'react';

const CirclesSection = () => {
  return (
    <section className="circles-section">
      <div className="container">
        <h2 className="section-title">Understanding Knowledge Access Through Elmentor Circles</h2>
        <p className="circles-caption">
          To structure access, engagement, and leadership within the community, we use a model called <strong>Elmentor Circles</strong>. These circles define different levels of participation and responsibility, arranged in clear layers:
        </p>
        <ul className="circles-list">
          <li><strong>Core Circle:</strong> Founders, program leaders, and key decision-makers.</li>
          <li><strong>Mentors Circle:</strong> Senior members who guide, support, and mentor others.</li>
          <li><strong>Contributors Circle:</strong> Active members who contribute to projects, events, and discussions.</li>
          <li><strong>Community Circle:</strong> All members who participate, learn, and grow together.</li>
        </ul>
        <p className="circles-caption">
          This model helps us structure engagement, learning, and decision-making in a clear and scalable way.
        </p>
      </div>
    </section>
  );
};

export default CirclesSection;
