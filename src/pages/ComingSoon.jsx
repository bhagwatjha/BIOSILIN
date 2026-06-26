import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="page-transition animate-fade-in" style={{ marginTop: '100px', textAlign: 'center', padding: '100px 20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--color-brand-blue)', marginBottom: '20px' }}>Coming Soon</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 40px auto' }}>
        We are currently engineering this section of the BIOSILIN platform. 
        Please check back soon for advanced clinical features, resources, and expert consultations.
      </p>
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button onClick={() => navigate(-1)} className="btn btn-outline">Go Back</button>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    </div>
  );
};

export default ComingSoon;
