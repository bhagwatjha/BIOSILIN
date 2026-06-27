import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  // Initialize from localStorage if available
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('biosilin_favorites');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Sync to localStorage on every change
  useEffect(() => {
    localStorage.setItem('biosilin_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((product) => {
    if (!product || !product.id) return;
    
    setFavorites((prev) => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  }, []);

  const isFavorite = useCallback((productId) => {
    return favorites.some(p => p.id === productId);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
