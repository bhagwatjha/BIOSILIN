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
    const savedName = localStorage.getItem(`biosilin_name_${email}`) || email.split('@')[0];
    const mockUser = { name: savedName, email };
    setUser(mockUser);
    localStorage.setItem('biosilin_user', JSON.stringify(mockUser));
    setAuthModalOpen(false);
  };

  const signup = (name, email, password) => {
    // Mock signup logic
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem('biosilin_user', JSON.stringify(newUser));
    localStorage.setItem(`biosilin_name_${email}`, name); // Persist name for mock logins
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
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthModalOpen, toggleAuthModal }}>
      {children}
    </AuthContext.Provider>
  );
};
