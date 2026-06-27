import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';
import ErrorBoundary from './components/ErrorBoundary';
import { RegimenProvider } from './context/RegimenContext';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import AuthModal from './components/AuthModal';
import RegimenDrawer from './components/RegimenDrawer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <FavoritesProvider>
          <RegimenProvider>
            <Router>
              <ScrollToTop />
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/story" element={<Story />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/coming-soon" element={<ComingSoon />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <RegimenDrawer />
              <AuthModal />
            </Router>
          </RegimenProvider>
        </FavoritesProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
