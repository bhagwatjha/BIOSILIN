import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useRegimen } from '../context/RegimenContext';

const ProductDetail = () => {
  const { id } = useParams();
  // Safe array check before .find
  const product = (products || []).find(p => p?.id === id);
  const [activeTab, setActiveTab] = useState('ingredients');
  const [added, setAdded] = useState(false);
  const { addToRegimen } = useRegimen();

  if (!product) {
    return (
      <div className="container section-padding text-center">
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary mt-4">Return Home</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToRegimen(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="page-transition animate-fade-in product-detail-page">
      <div className="container section-padding mt-4">
        <div className="pdp-grid">
          {/* Left Column: Image Gallery */}
          <div className="pdp-image-section">
            <div className="pdp-main-image">
               <div className="placeholder-bottle large">{product?.category || 'Product'}</div>
               {/* Clinical Badges overlaying image safely */}
               <div className="clinical-badges">
                  {(product?.formulaRestrictions || []).slice(0, 2).map((restriction, idx) => (
                    <span key={idx} className="badge">{restriction}</span>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="pdp-info-section">
            <p className="product-category">{product?.category}</p>
            <h1>{product?.name}</h1>
            <p className="pdp-desc">{product?.description}</p>
            
            <div className="pdp-actions">
              <button 
                className={`btn btn-full ${added ? 'btn-outline' : 'btn-primary'}`} 
                onClick={handleAdd}
              >
                {added ? '✓ Added to Regimen' : 'Add to Regimen'}
              </button>
            </div>

            {/* Accordion / Tabs for deep info */}
            <div className="pdp-tabs">
              <div className="tab-headers">
                <button 
                  className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ingredients')}
                >
                  The Formula
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specs')}
                >
                  Specifications
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'ingredients' && (
                  <div className="ingredients-list animate-fade-in">
                    <p className="clinical-note">Precise active molecule percentages for clinical efficacy.</p>
                    <ul>
                      {(product?.activeIngredients || []).map((ingredient, idx) => (
                        <li key={idx}>
                          <span className="ing-name">{ingredient?.name}</span>
                          {ingredient?.percentage && <span className="ing-perc">{ingredient.percentage}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="specs-list animate-fade-in">
                    <ul>
                      {Object.entries(product?.specifications || {}).map(([key, value]) => (
                        <li key={key}>
                          <span className="spec-name">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                          <span className="spec-value">{value}</span>
                        </li>
                      ))}
                      {product?.formulaRestrictions && product.formulaRestrictions.length > 0 && (
                        <li>
                          <span className="spec-name">RESTRICTIONS</span>
                          <span className="spec-value">{product.formulaRestrictions.join(', ')}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
