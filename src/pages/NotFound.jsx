import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-transition animate-fade-in" style={{ marginTop: '100px', textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--color-brand-blue)' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Return to Homepage</Link>
    </div>
  );
};

export default NotFound;
