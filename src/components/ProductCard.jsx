import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

const ProductCard = React.memo(({ product }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(product?.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <div className="product-card">
      <div className="product-image" style={{ position: 'relative' }}>
        <button 
          className={`favorite-btn ${favorited ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={18} className="heart-icon" />
        </button>
        <div className="placeholder-bottle">{product?.category || 'Product'}</div>
      </div>
      <div className="product-info">
        <span className="product-category">{product?.category || ''}</span>
        <h3>{product?.name || 'Unknown Product'}</h3>
        <p className="product-desc">{product?.description || ''}</p>
        
        <div className="product-specs">
          {product?.activeIngredients && product.activeIngredients.length > 0 && (
            <div className="key-ingredients">
              <strong>Key Actives: </strong>
              {product.activeIngredients.slice(0, 3).map(a => `${a.name} ${a.percentage || ''}`).join(', ')}
              {product.activeIngredients.length > 3 && ' ...'}
            </div>
          )}
        </div>
        
        <Link to={`/product/${product?.id || ''}`} className="btn btn-outline btn-full text-center">View Details</Link>
      </div>
    </div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    description: PropTypes.string,
    activeIngredients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        percentage: PropTypes.string
      })
    )
  }).isRequired
};

ProductCard.displayName = 'ProductCard';

export default ProductCard;
