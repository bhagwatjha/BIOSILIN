import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const Products = React.memo(() => {
  return (
    <section id="products" className="products-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Our Formulations</h2>
          <p>Potent active ingredients delivered through advanced scientific formulations.</p>
        </div>
        <div className="products-grid">
          {Array.isArray(products) && products.map(product => (
            <ProductCard key={product?.id || Math.random()} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
});

Products.displayName = 'Products';

export default Products;
