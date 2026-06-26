import React from 'react';

const Hero = React.memo(() => {
  return (
    <section id="home" className="hero">
      <div className="hero-content animate-fade-in">
        <h1>Clinical Precision. <br/> Natural Balance.</h1>
        <p>Discover advanced dermatological formulations backed by science and designed for your skin's perfect health.</p>
        <div className="hero-buttons">
          <a href="#products" className="btn btn-primary">Explore Products</a>
          <a href="#story" className="btn btn-outline">Our Philosophy</a>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
