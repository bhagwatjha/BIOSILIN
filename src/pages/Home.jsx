import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className="page-transition animate-fade-in">
      <Hero />
      <OurStory />
      <Products />
    </div>
  );
};

export default Home;
