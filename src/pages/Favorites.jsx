import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import ProductCard from '../components/ProductCard';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="page-transition animate-fade-in favorites-page" style={{ minHeight: '70vh' }}>
      <div className="container section-padding">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-brand-blue)', marginBottom: '10px' }}>Your Favorites</h1>
          <p>Your curated collection of advanced formulations and clinical skin treatments.</p>
        </div>

        {favorites.length > 0 ? (
          <div className="products-grid">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-favorites-state" style={{ 
            textAlign: 'center', 
            padding: '80px 20px', 
            background: 'var(--color-bg-secondary)', 
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            maxWidth: '600px',
            margin: '40px auto 0 auto'
          }}>
            <div className="heart-icon-wrapper" style={{ fontSize: '3rem', color: 'var(--color-text-light)', marginBottom: '20px' }}>
              ♡
            </div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-brand-blue)', marginBottom: '15px' }}>No Favorites Yet</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '30px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Keep track of the formulations you love. Click the heart icon on any product to save it here for quick access.
            </p>
            <Link to="/shop" className="btn btn-primary">Explore Formulations</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
