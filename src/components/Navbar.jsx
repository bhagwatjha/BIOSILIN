import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRegimen } from '../context/RegimenContext';
import { useAuth } from '../context/AuthContext';

const Navbar = React.memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const { regimen, toggleDrawer } = useRegimen();
  const { user, toggleAuthModal, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">BIOSILIN</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/story">Our Story</Link></li>
          <li><Link to="/shop">Formulations</Link></li>
        </ul>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          
          {user ? (
            <div className="user-nav" style={{ fontSize: '0.9rem', cursor: 'pointer' }} onClick={logout}>
              Hi, {user.name} (Logout)
            </div>
          ) : (
            <button className="text-link" style={{ fontWeight: 600, fontSize: '0.9rem' }} onClick={() => toggleAuthModal(true)}>
              Log In
            </button>
          )}

          <div 
            className="regimen-cart" 
            style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-brand-blue)', cursor: 'pointer' }}
            onClick={() => toggleDrawer(true)}
          >
            Regimen ({regimen.length})
          </div>
          <Link to="/shop" className="btn btn-primary btn-sm">Shop Now</Link>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
