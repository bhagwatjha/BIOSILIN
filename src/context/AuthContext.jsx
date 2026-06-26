import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('biosilin_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse user', e);
      }
    }
  }, []);

  const login = (email, password) => {
    // Mock login logic
    const mockUser = { name: email.split('@')[0], email };
    setUser(mockUser);
    localStorage.setItem('biosilin_user', JSON.stringify(mockUser));
    setAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('biosilin_user');
  };

  const toggleAuthModal = (isOpen) => {
    setAuthModalOpen(isOpen);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthModalOpen, toggleAuthModal }}>
      {children}
    </AuthContext.Provider>
  );
};
