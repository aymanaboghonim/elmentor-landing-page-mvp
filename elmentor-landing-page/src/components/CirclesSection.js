import React from 'react';

const CirclesSection = () => {
  return (
    <section className="circles-section">
      <div className="container">
        <h2 className="section-title">Understanding Knowledge Access Through Elmentor Circles</h2>
        <p className="circles-caption">
          To structure access, engagement, and leadership within the community, we use a model called <strong>Elmentor Circles</strong>. These circles define different levels of participation and responsibility, arranged in clear layers, as shown in the image below:
        </p>
        <img
          src={process.env.PUBLIC_URL + '/elmentor-circles-visual.png'}
          alt="Elmentor Circles visual"
          className="circles-image"
          style={{maxWidth: '100%', height: 'auto', margin: '32px 0'}}
        />
        <p className="circles-caption">
          This model helps us structure engagement, learning, and decision-making in a clear and scalable way.
        </p>
      </div>
    </section>
  );
};

export default CirclesSection;
