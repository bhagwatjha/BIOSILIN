import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useRegimen } from '../context/RegimenContext';
import ProductBottle from '../components/ProductBottle';

const ProductDetail = () => {
  const { id } = useParams();
  const product = (products || []).find(p => p?.id === id);
  const [activeTab, setActiveTab] = useState('ingredients');
  const [added, setAdded] = useState(false);
  const { addToRegimen } = useRegimen();

  if (!product) {
    return (
      <div className="container section-padding text-center" style={{ paddingTop: '120px' }}>
        <h2>Formulation not found</h2>
        <Link to="/shop" className="btn btn-primary mt-4">Return to Apothecary</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToRegimen(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const getProgressWidth = (percStr) => {
    if (!percStr) return '15%'; // Default fallback for trace elements
    const num = parseFloat(percStr.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) return '15%';
    // Map 0-10% active to 15%-100% bar width
    const width = 15 + (num / 10) * 85;
    return `${Math.min(100, width)}%`;
  };

  const renderLayeringGuide = () => {
    const cat = (product.category || '').toLowerCase();
    
    if (cat.includes('serum')) {
      return (
        <div className="layering-steps">
          <span className="layer-step">1. Cleanse</span>
          <span className="layer-arrow">➔</span>
          <span className="layer-step active-step">2. Treat (Serum)</span>
          <span className="layer-arrow">➔</span>
          <span className="layer-step">3. Moisturize</span>
          <span className="layer-arrow">➔</span>
          <span className="layer-step">4. Protect (AM)</span>
        </div>
      );
    }
    if (cat.includes('cream')) {
      return (
        <div className="layering-steps">
          <span className="layer-step">1. Cleanse</span>
          <span className="layer-arrow">➔</span>
          <span className="layer-step">2. Treat (Serum)</span>
          <span className="layer-arrow">➔</span>
          <span className="layer-step active-step">3. Moisturize (Cream)</span>
          <span className="layer-arrow">➔</span>
          <span className="layer-step">4. Protect (AM)</span>
        </div>
      );
    }
    if (cat.includes('sunscreen')) {
      return (
        <div className="layering-steps">
          <span className="layer-step">1. Cleanse</span>
          <span className="layer-arrow">➔</span>
          <span className="layer-step">2. Treat</span>
          <span className="layer-arrow">➔</span>
          <span className="layer-step">3. Moisturize</span>
          <span className="layer-arrow">➔</span>
          <span className="layer-step active-step">4. Protect (Sunscreen)</span>
        </div>
      );
    }
    // Default to cleanser
    return (
      <div className="layering-steps">
        <span className="layer-step active-step">1. Cleanse</span>
        <span className="layer-arrow">➔</span>
        <span className="layer-step">2. Treat (Serum)</span>
        <span className="layer-arrow">➔</span>
        <span className="layer-step">3. Moisturize</span>
        <span className="layer-arrow">➔</span>
        <span className="layer-step">4. Protect (AM)</span>
      </div>
    );
  };

  const getCompatibilityInfo = () => {
    const prodId = product.id.toLowerCase();
    
    if (prodId.includes('dipigmenting')) {
      return {
        bestWith: 'Hyaluronic Acid (Biodrops) & Niacinamide (Niasil). Hydrates and reinforces barrier during pigmentation treatment.',
        avoid: 'Do not layer directly with high-strength Lactic Acid (Bioclear wash) in the same step if your skin is dry; alternate AM/PM instead.',
        time: 'AM & PM. (Always follow with sunscreen in the morning).'
      };
    }
    if (prodId.includes('hya')) {
      return {
        bestWith: 'All BIOSILIN products. Hyaluronic acid acts as an excellent humectant vector for other active ingredients.',
        avoid: 'None. Safe to use with all active ingredients.',
        time: 'AM & PM. Apply to slightly damp skin.'
      };
    }
    if (prodId.includes('niasil')) {
      return {
        bestWith: 'Kojic Acid and Hyaluronic Acid. Niacinamide stabilizes the skin barrier and reduces redness caused by environmental stressors.',
        avoid: 'None. Safe for all skin types, including sensitive skin.',
        time: 'AM & PM.'
      };
    }
    if (prodId.includes('reti')) {
      return {
        bestWith: 'Ceramides and Hyaluronic Acid. They soothe the skin and counter any potential retinoid-induced dryness.',
        avoid: 'Do not use at the same time as high-strength direct acids. Limit use to evening (PM) routines only.',
        time: 'PM only. Introduce gradually (2-3 times per week to start).'
      };
    }
    if (prodId.includes('uv-shield')) {
      return {
        bestWith: 'Vitamin C & Niacinamide. Antioxidents work synergistically to boost UV protection factors.',
        avoid: 'Do not mix directly into moisturizer before application. Apply as the final, separate step of your morning routine.',
        time: 'AM only. Reapply every 2 hours if in direct sun.'
      };
    }
    return {
      bestWith: 'All active serums. Cleansing prepares the epidermal surface for molecular absorption.',
      avoid: 'None.',
      time: 'AM & PM.'
    };
  };

  const compat = getCompatibilityInfo();

  return (
    <div className="page-transition animate-fade-in product-detail-page" style={{ paddingTop: '80px' }}>
      <div className="container section-padding mt-4">
        <div className="pdp-grid">
          
          {/* Left Column: Image Section */}
          <div className="pdp-image-section glass-panel" style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="pdp-main-image" style={{ position: 'relative', width: '100%' }}>
               <ProductBottle type={product.category} size="large" />
               
               {/* Clinical Badges overlay */}
               <div className="clinical-badges">
                  {(product.formulaRestrictions || []).slice(0, 3).map((restriction, idx) => (
                    <span key={idx} className="badge">{restriction}</span>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Column: Product Info Details */}
          <div className="pdp-info-section">
            <span className="product-category">{product.category}</span>
            <h1 style={{ color: 'var(--color-brand-blue)', fontSize: '2.5rem', marginBottom: '15px' }}>{product.name}</h1>
            <p className="pdp-desc" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>{product.description}</p>
            
            <div className="pdp-actions" style={{ marginBottom: '35px' }}>
              <button 
                className={`btn btn-full ${added ? 'btn-outline' : 'btn-primary'}`} 
                onClick={handleAdd}
                style={{ padding: '15px', fontSize: '1rem' }}
              >
                {added ? '✓ Added to Regimen' : 'Add to Regimen'}
              </button>
            </div>

            {/* Tabs details */}
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

              <div className="tab-content" style={{ marginTop: '20px' }}>
                {activeTab === 'ingredients' && (
                  <div className="ingredients-list animate-fade-in">
                    <p className="clinical-note" style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
                      Precise active molecule percentages for clinical efficacy.
                    </p>
                    
                    {/* Visual Progress Bar Chart */}
                    <div style={{ marginBottom: '25px' }}>
                      <h4 className="ingredient-bars-title">Active Ingredient Concentrations</h4>
                      {product.activeIngredients.map((ingredient, idx) => (
                        <div key={idx} className="ingredient-bar-item">
                          <div className="ingredient-bar-label">
                            <span>{ingredient.name}</span>
                            <span>{ingredient.percentage || 'Trace'}</span>
                          </div>
                          <div className="ingredient-bar-bg">
                            <div 
                              className="ingredient-bar-fill" 
                              style={{ '--target-width': getProgressWidth(ingredient.percentage) }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="specs-list animate-fade-in">
                    <ul>
                      {Object.entries(product.specifications || {}).map(([key, value]) => (
                        <li key={key}>
                          <span className="spec-name">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                          <span className="spec-value">{value}</span>
                        </li>
                      ))}
                      {product.formulaRestrictions && product.formulaRestrictions.length > 0 && (
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

            {/* Layering & Compatibility Section */}
            <div className="compatibility-matrix">
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-brand-blue)', marginBottom: '15px' }}>Clinical Layering Guide</h3>
              
              {renderLayeringGuide()}

              <div className="compatibility-grid">
                <div className="compatibility-card">
                  <h5>Synergistic Pairings</h5>
                  <p>{compat.bestWith}</p>
                </div>
                <div className="compatibility-card">
                  <h5>Usage Restrictions</h5>
                  <p>{compat.avoid}</p>
                </div>
              </div>

              <div className="compatibility-card" style={{ marginTop: '20px' }}>
                <h5>Recommended Timing</h5>
                <p><strong>Use:</strong> {compat.time}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
