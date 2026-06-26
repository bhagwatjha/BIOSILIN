import React from 'react';
import Products from '../components/Products';

const Shop = () => {
  return (
    <div className="page-transition animate-fade-in shop-page">
      <div className="container section-padding">
        <Products />
      </div>
    </div>
  );
};

export default Shop;
