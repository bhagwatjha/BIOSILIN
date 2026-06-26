import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthModal = () => {
  const { isAuthModalOpen, toggleAuthModal, login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={() => toggleAuthModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => toggleAuthModal(false)}>×</button>
        
        <div className="modal-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Log in to access your regimen and checkout.' : 'Join BIOSILIN for exclusive formulations.'}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              required 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full mt-4">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="modal-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button className="text-link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
