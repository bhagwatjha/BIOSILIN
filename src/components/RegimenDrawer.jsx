import React from 'react';
import { useRegimen } from '../context/RegimenContext';
import { useAuth } from '../context/AuthContext';

const RegimenDrawer = () => {
  const { regimen, isDrawerOpen, toggleDrawer, removeFromRegimen } = useRegimen();
  const { user, toggleAuthModal } = useAuth();

  if (!isDrawerOpen) return null;

  const subtotal = regimen.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);

  const handleCheckout = () => {
    if (!user) {
      toggleDrawer(false);
      toggleAuthModal(true);
    } else {
      alert("Proceeding to secure checkout!");
    }
  };

  return (
    <>
      <div className="drawer-overlay animate-fade-in" onClick={() => toggleDrawer(false)}></div>
      <div className={`drawer animate-slide-in`}>
        <div className="drawer-header">
          <h2>Your Regimen</h2>
          <button className="drawer-close" onClick={() => toggleDrawer(false)}>×</button>
        </div>

        <div className="drawer-content">
          {regimen.length === 0 ? (
            <div className="empty-cart">
              <p>Your regimen is currently empty.</p>
              <button className="btn btn-outline mt-4" onClick={() => toggleDrawer(false)}>Explore Formulations</button>
            </div>
          ) : (
            <ul className="cart-list">
              {regimen.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-img">
                    <div className="placeholder-bottle small">{item.category}</div>
                  </div>
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">${item.price?.toFixed(2)}</p>
                    <button className="text-link remove-btn" onClick={() => removeFromRegimen(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {regimen.length > 0 && (
          <div className="drawer-footer">
            <div className="subtotal">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="shipping-note">Shipping & taxes calculated at checkout</p>
            <button className="btn btn-primary btn-full" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RegimenDrawer;
