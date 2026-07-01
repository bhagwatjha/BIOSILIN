import React, { useState, useMemo } from 'react';
import Products from '../components/Products';
import { products } from '../data/products';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Concern mapping helper for filtering
  const getProductConcerns = (product) => {
    const id = product.id.toLowerCase();
    const concerns = [];
    if (id.includes('dipigmenting') || id.includes('pigment')) concerns.push('depigmentation');
    if (id.includes('hya') || id.includes('drops')) concerns.push('hydration');
    if (id.includes('niasil') || id.includes('b3') || id.includes('uv') || id.includes('shield')) concerns.push('barrier');
    if (id.includes('age') || id.includes('reti')) concerns.push('aging');
    if (id.includes('clear') || id.includes('wash') || id.includes('niasil')) concerns.push('pores');
    return concerns;
  };

  const categories = ['Serum', 'Cream', 'Sunscreen', 'Face Wash'];
  const concerns = [
    { id: 'depigmentation', label: 'Depigmentation & Spots' },
    { id: 'barrier', label: 'Barrier Repair & Redness' },
    { id: 'hydration', label: 'Hydration & Dullness' },
    { id: 'aging', label: 'Anti-aging & Wrinkles' },
    { id: 'pores', label: 'Pore Refinement & Acne' }
  ];
  const keyIngredients = ['Niacinamide', 'Hyaluronic Acid', 'Kojic Acid', 'Ceramides', 'Lactic Acid'];

  const toggleFilter = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedConcerns([]);
    setSelectedIngredients([]);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // 1. Search Query filter (matches name, description or active ingredients)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesIng = product.activeIngredients.some(ing => ing.name.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesIng) return false;
      }

      // 2. Category filter
      if (selectedCategories.length > 0) {
        if (!selectedCategories.includes(product.category)) return false;
      }

      // 3. Concerns filter
      if (selectedConcerns.length > 0) {
        const pConcerns = getProductConcerns(product);
        const hasConcern = selectedConcerns.some(concern => pConcerns.includes(concern));
        if (!hasConcern) return false;
      }

      // 4. Ingredients filter
      if (selectedIngredients.length > 0) {
        const hasIngredient = selectedIngredients.some(ing => 
          product.activeIngredients.some(pIng => pIng.name.toLowerCase().includes(ing.toLowerCase()))
        );
        if (!hasIngredient) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategories, selectedConcerns, selectedIngredients]);

  return (
    <div className="page-transition animate-fade-in shop-page" style={{ paddingTop: '80px' }}>
      <div className="container section-padding">
        
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '600', letterSpacing: '2px', color: 'var(--color-accent)', textTransform: 'uppercase' }}>Clinical Formulations</span>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-brand-blue)', marginTop: '5px' }}>The Apothecary</h1>
          <p>Scientific active layers crafted to bring cellular equilibrium back to your skin.</p>
        </div>

        <div className="shop-layout">
          {/* Filters Sidebar */}
          <aside className="filter-sidebar glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-brand-blue)', marginBottom: 0 }}>Filters</h3>
              {(selectedCategories.length > 0 || selectedConcerns.length > 0 || selectedIngredients.length > 0 || searchQuery) && (
                <button 
                  onClick={clearAllFilters} 
                  style={{ background: 'none', border: 'none', color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Search Filter */}
            <div className="search-input-wrapper">
              <span className="search-icon-svg">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Search actives or names..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <h4>Categories</h4>
              <div className="filter-options">
                {categories.map(cat => (
                  <label key={cat} className="filter-checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Concerns Filter */}
            <div className="filter-group">
              <h4>Concerns</h4>
              <div className="filter-options">
                {concerns.map(concernItem => (
                  <label key={concernItem.id} className="filter-checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={selectedConcerns.includes(concernItem.id)}
                      onChange={() => toggleFilter(concernItem.id, selectedConcerns, setSelectedConcerns)}
                    />
                    {concernItem.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Key Active Ingredients */}
            <div className="filter-group">
              <h4>Key Actives</h4>
              <div className="filter-options">
                {keyIngredients.map(ing => (
                  <label key={ing} className="filter-checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={selectedIngredients.includes(ing)}
                      onChange={() => toggleFilter(ing, selectedIngredients, setSelectedIngredients)}
                    />
                    {ing}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Section */}
          <div className="shop-products-content" style={{ width: '100%' }}>
            <Products items={filteredProducts} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;
