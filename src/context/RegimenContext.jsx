import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RegimenContext = createContext();

export const useRegimen = () => {
  return useContext(RegimenContext);
};

export const RegimenProvider = ({ children }) => {
  // Initialize from localStorage if available
  const [regimen, setRegimen] = useState(() => {
    const saved = localStorage.getItem('biosilin_regimen');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return []; }
    }
    return [];
  });
  
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Sync to localStorage on every change
  useEffect(() => {
    localStorage.setItem('biosilin_regimen', JSON.stringify(regimen));
  }, [regimen]);

  const addToRegimen = useCallback((product) => {
    setRegimen((prev) => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev;
      return [...prev, { ...product, quantity: 1 }];
    });
    // Open drawer automatically when an item is added
    setDrawerOpen(true);
  }, []);

  const removeFromRegimen = useCallback((productId) => {
    setRegimen((prev) => prev.filter(p => p.id !== productId));
  }, []);

  const toggleDrawer = useCallback((isOpen) => {
    setDrawerOpen(isOpen);
  }, []);

  return (
    <RegimenContext.Provider value={{ regimen, addToRegimen, removeFromRegimen, isDrawerOpen, toggleDrawer }}>
      {children}
    </RegimenContext.Provider>
  );
};
