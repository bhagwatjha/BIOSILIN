import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const Products = React.memo(() => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get('category');

  // Filter products if a category is specified (case-insensitive)
  const filteredProducts = categoryFilter
    ? products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase())
    : products;

  // Format the heading to be plural and capitalized nicely
  const getHeading = () => {
    if (!categoryFilter) return 'Our Formulations';
    const category = categoryFilter.toLowerCase();
    if (category === 'serum') return 'Serum Formulations';
    if (category === 'cream') return 'Cream Formulations';
    if (category === 'sunscreen') return 'Sunscreen Formulations';
    if (category === 'face wash') return 'Cleanser Formulations';
    return `${categoryFilter} Formulations`;
  };

  return (
    <section id="products" className="products-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>{getHeading()}</h2>
          <p>Potent active ingredients delivered through advanced scientific formulations.</p>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product?.id || Math.random()} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted" style={{ fontSize: '1.2rem' }}>No formulations found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
});

Products.displayName = 'Products';

export default Products;
