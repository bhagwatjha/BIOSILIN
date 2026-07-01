import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthModal = () => {
  const { isAuthModalOpen, toggleAuthModal, login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (isLogin) {
      if (email && password) {
        // Password validation (optional mock check)
        if (password.length < 6) {
          setError('Password must be at least 6 characters.');
          return;
        }
        login(email, password);
        clearFields();
      } else {
        setError('Please fill in all fields.');
      }
    } else {
      if (name.trim() && email && password && confirmPassword) {
        if (password !== confirmPassword) {
          setError('Passwords do not match.');
          return;
        }
        if (password.length < 6) {
          setError('Password must be at least 6 characters.');
          return;
        }
        signup(name.trim(), email, password);
        clearFields();
      } else {
        setError('Please fill in all fields.');
      }
    }
  };

  const clearFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
  };

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  const handleClose = () => {
    clearFields();
    toggleAuthModal(false);
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={handleClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()} style={{ borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.4)', padding: '30px 40px' }}>
        <button className="modal-close" onClick={handleClose}>×</button>
        
        <div className="modal-header text-center" style={{ marginBottom: '25px' }}>
          {/* Clinical Shield Emblem Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-blue)" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(42, 67, 93, 0.05)" />
              <path d="M12 8v4" strokeLinecap="round" />
              <path d="M12 16h.01" strokeLinecap="round" />
            </svg>
          </div>
          <h2 style={{ color: 'var(--color-brand-blue)', marginBottom: '5px' }}>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: 0 }}>
            {isLogin ? 'Log in to access your regimen and checkout.' : 'Join BIOSILIN for exclusive formulations.'}
          </p>
        </div>

        {/* Error Banner */}
        {error && (
          <div style={{
            background: 'rgba(226, 115, 103, 0.1)',
            border: '1px solid rgba(226, 115, 103, 0.3)',
            borderRadius: '6px',
            color: '#c0392b',
            padding: '10px 15px',
            fontSize: '0.82rem',
            fontWeight: 500,
            marginBottom: '20px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '1rem', lineHeight: 1 }}>⚠</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group" style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-brand-blue)' }}>Full Name</label>
              <input 
                type="text" 
                required 
                value={name} 
                onChange={e => setName(e.target.value)} 
                placeholder="Evelyn Chen"
                style={{
                  border: '1px solid var(--color-border)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  padding: '10px 12px',
                  borderRadius: '6px'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-brand-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>
          )}

          <div className="form-group" style={{ marginBottom: '18px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-brand-blue)' }}>Email Address</label>
            <input 
              type="email" 
              required 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="name@example.com"
              style={{
                border: '1px solid var(--color-border)',
                outline: 'none',
                transition: 'border-color 0.2s',
                padding: '10px 12px',
                borderRadius: '6px'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-brand-blue)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '18px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-brand-blue)' }}>Password</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="••••••••"
              style={{
                border: '1px solid var(--color-border)',
                outline: 'none',
                transition: 'border-color 0.2s',
                padding: '10px 12px',
                borderRadius: '6px'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-brand-blue)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
            />
          </div>

          {!isLogin && (
            <div className="form-group" style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-brand-blue)' }}>Confirm Password</label>
              <input 
                type="password" 
                required 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
                placeholder="••••••••"
                style={{
                  border: '1px solid var(--color-border)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  padding: '10px 12px',
                  borderRadius: '6px'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-brand-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-full mt-4" style={{ padding: '12px', borderRadius: '30px', fontWeight: '600' }}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="modal-footer" style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button className="text-link" onClick={handleToggleMode}>
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
