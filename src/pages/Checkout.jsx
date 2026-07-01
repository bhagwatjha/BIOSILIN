import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRegimen } from '../context/RegimenContext';
import { useAuth } from '../context/AuthContext';
import ProductBottle from '../components/ProductBottle';

const Checkout = () => {
  const navigate = useNavigate();
  const { regimen, removeFromRegimen } = useRegimen();
  const { user } = useAuth();
  
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [shippingInfo, setShippingInfo] = useState({
    fullName: user?.name || '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    saveInfo: true
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  
  const [shippingMethod, setShippingMethod] = useState('standard'); // standard or express
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null); // { code: 'WELCOME10', discount: 0.1 } or null
  const [promoError, setPromoError] = useState(null);
  const [formError, setFormError] = useState(null);
  const [orderNumber, setOrderNumber] = useState('');

  // Load saved shipping details from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('biosilin_saved_shipping');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setShippingInfo(prev => ({
          ...prev,
          ...parsed,
          fullName: prev.fullName || parsed.fullName // Prefer current user name
        }));
      } catch (e) {
        console.error('Failed to parse saved shipping details', e);
      }
    }
    setOrderNumber(`BS-${Math.floor(100000 + Math.random() * 900000)}`);
  }, []);

  // Redirect if cart is empty and not on success step
  if (regimen.length === 0 && step < 3) {
    return (
      <div className="container section-padding text-center" style={{ paddingTop: '120px', minHeight: '70vh' }}>
        <h2 style={{ color: 'var(--color-brand-blue)' }}>Your Regimen is Empty</h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: '15px 0 30px' }}>
          You need to add products to your regimen before proceeding to checkout.
        </p>
        <Link to="/shop" className="btn btn-primary">Browse Formulations</Link>
      </div>
    );
  }

  const subtotal = regimen.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);
  
  // Calculate discount
  const discountAmount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const discountedSubtotal = subtotal - discountAmount;

  // Shipping cost logic
  const shippingCost = shippingMethod === 'express' 
    ? 19.99 
    : (discountedSubtotal > 100 ? 0 : 9.99);

  const tax = discountedSubtotal * 0.08;
  const total = discountedSubtotal + shippingCost + tax;

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    const { fullName, address, city, zipCode, phone, saveInfo } = shippingInfo;
    
    if (fullName.trim() && address.trim() && city.trim() && zipCode.trim() && phone.trim()) {
      if (saveInfo) {
        localStorage.setItem('biosilin_saved_shipping', JSON.stringify({
          fullName, address, city, zipCode, phone
        }));
      } else {
        localStorage.removeItem('biosilin_saved_shipping');
      }
      setStep(2);
    } else {
      setFormError('Please fill in all shipping fields.');
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    const { cardNumber, expiry, cvv } = paymentInfo;
    
    if (cardNumber.trim() && expiry.trim() && cvv.trim()) {
      if (cardNumber.replace(/\s/g, '').length !== 16) {
        setFormError('Card number must be 16 digits.');
        return;
      }
      if (expiry.length !== 5 || !expiry.includes('/')) {
        setFormError('Expiry date must be in MM/YY format.');
        return;
      }
      if (cvv.trim().length !== 3) {
        setFormError('CVV must be 3 digits.');
        return;
      }
      setStep(3);
      // Clear regimen cart items since checkout is complete
      regimen.forEach(item => removeFromRegimen(item.id));
    } else {
      setFormError('Please fill in all payment fields.');
    }
  };

  const applyPromo = () => {
    setPromoError(null);
    const cleanCode = promoCode.trim().toUpperCase();
    if (cleanCode === 'WELCOME10') {
      setAppliedPromo({ code: 'WELCOME10', discount: 0.1 });
      setPromoCode('');
    } else if (cleanCode === 'BIOSILIN') {
      setAppliedPromo({ code: 'BIOSILIN', discount: 0.2 });
      setPromoCode('');
    } else if (cleanCode === '') {
      setPromoError('Please enter a code.');
    } else {
      setPromoError('Invalid promo code.');
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    }
    return v;
  };

  const getClinicalTip = () => {
    return "Clinical Tip: Store active formulas away from moisture and direct sunlight. Always introduce Reti-N Agedefine Cream gradually to allow the epidermal barrier to adjust to HPR retinoids.";
  };

  return (
    <div className="page-transition animate-fade-in checkout-page" style={{ paddingTop: '80px', minHeight: '85vh' }}>
      <div className="container section-padding">
        
        {/* Step Progress Tracker */}
        <div style={{ maxWidth: '600px', margin: '0 auto 40px auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          {/* Background Connecting Line */}
          <div style={{ position: 'absolute', top: '15px', left: '10%', right: '10%', height: '2px', background: 'var(--color-bg-tertiary)', zIndex: 1 }}>
            <div style={{ 
              height: '100%', 
              background: 'var(--color-brand-blue)', 
              width: step === 1 ? '0%' : step === 2 ? '50%' : '100%',
              transition: 'width 0.4s ease'
            }}></div>
          </div>

          {/* Step 1 Indicator */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, position: 'relative' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '50%', 
              background: step >= 1 ? 'var(--color-brand-blue)' : 'var(--color-bg-tertiary)', 
              color: '#fff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '0.85rem',
              boxShadow: step === 1 ? '0 0 0 4px rgba(42, 67, 93, 0.15)' : 'none'
            }}>
              {step > 1 ? '✓' : '1'}
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', marginTop: '8px', color: step >= 1 ? 'var(--color-brand-blue)' : 'var(--color-text-light)' }}>Shipping</span>
          </div>

          {/* Step 2 Indicator */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, position: 'relative' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '50%', 
              background: step >= 2 ? 'var(--color-brand-blue)' : 'var(--color-bg-tertiary)', 
              color: '#fff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '0.85rem',
              boxShadow: step === 2 ? '0 0 0 4px rgba(42, 67, 93, 0.15)' : 'none'
            }}>
              {step > 2 ? '✓' : '2'}
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', marginTop: '8px', color: step >= 2 ? 'var(--color-brand-blue)' : 'var(--color-text-light)' }}>Payment</span>
          </div>

          {/* Step 3 Indicator */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, position: 'relative' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '50%', 
              background: step === 3 ? 'var(--color-brand-blue)' : 'var(--color-bg-tertiary)', 
              color: '#fff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '0.85rem',
              boxShadow: step === 3 ? '0 0 0 4px rgba(42, 67, 93, 0.15)' : 'none'
            }}>
              3
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', marginTop: '8px', color: step === 3 ? 'var(--color-brand-blue)' : 'var(--color-text-light)' }}>Order Success</span>
          </div>
        </div>

        {step < 3 ? (
          <div>
            <div className="section-header" style={{ marginBottom: '30px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1.5px', color: 'var(--color-accent)', textTransform: 'uppercase' }}>Secure Gateway</span>
              <h1 style={{ color: 'var(--color-brand-blue)', fontSize: '2.5rem', marginTop: '5px' }}>Place Your Order</h1>
            </div>

            <div className="shop-layout">
              {/* Left Column: Form Steps */}
              <div className="glass-panel" style={{ padding: '30px 40px', background: '#fff' }}>
                
                {formError && (
                  <div style={{
                    background: 'rgba(226, 115, 103, 0.1)',
                    border: '1px solid rgba(226, 115, 103, 0.3)',
                    borderRadius: '6px',
                    color: '#c0392b',
                    padding: '10px 15px',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>⚠</span>
                    <span>{formError}</span>
                  </div>
                )}

                {step === 1 && (
                  <form onSubmit={handleShippingSubmit} className="auth-form animate-fade-in">
                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-brand-blue)', marginBottom: '20px' }}>Shipping Details</h3>
                    <div className="form-group" style={{ marginBottom: '18px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-brand-blue)' }}>Full Name</label>
                      <input 
                        type="text" 
                        required 
                        value={shippingInfo.fullName}
                        onChange={e => setShippingInfo({...shippingInfo, fullName: e.target.value})}
                        placeholder="Evelyn Chen"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '18px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-brand-blue)' }}>Delivery Address</label>
                      <input 
                        type="text" 
                        required 
                        value={shippingInfo.address}
                        onChange={e => setShippingInfo({...shippingInfo, address: e.target.value})}
                        placeholder="123 Clinical Way"
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '18px' }}>
                      <div className="form-group">
                        <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-brand-blue)' }}>City</label>
                        <input 
                          type="text" 
                          required 
                          value={shippingInfo.city}
                          onChange={e => setShippingInfo({...shippingInfo, city: e.target.value})}
                          placeholder="New York"
                        />
                      </div>
                      <div className="form-group">
                        <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-brand-blue)' }}>ZIP Code</label>
                        <input 
                          type="text" 
                          required 
                          value={shippingInfo.zipCode}
                          onChange={e => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                          placeholder="10001"
                        />
                      </div>
                    </div>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-brand-blue)' }}>Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={shippingInfo.phone}
                        onChange={e => setShippingInfo({...shippingInfo, phone: e.target.value})}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    
                    {/* Delivery Method Selector */}
                    <div style={{ marginBottom: '25px', borderTop: '1px solid var(--color-border)', paddingTop: '20px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-brand-blue)', display: 'block', marginBottom: '12px' }}>Select Delivery Method</label>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between',
                          padding: '12px 18px', 
                          border: `1px solid ${shippingMethod === 'standard' ? 'var(--color-brand-blue)' : 'var(--color-border)'}`, 
                          borderRadius: '8px', 
                          cursor: 'pointer',
                          background: shippingMethod === 'standard' ? 'rgba(42, 67, 93, 0.02)' : 'none'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input 
                              type="radio" 
                              name="shipping_method" 
                              checked={shippingMethod === 'standard'} 
                              onChange={() => setShippingMethod('standard')}
                              style={{ width: '16px', height: '16px', accentColor: 'var(--color-brand-blue)' }}
                            />
                            <div>
                              <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>Standard Delivery</strong>
                              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Delivered in 3-5 business days</span>
                            </div>
                          </div>
                          <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                            {discountedSubtotal > 100 ? 'FREE' : '$9.99'}
                          </span>
                        </label>

                        <label style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between',
                          padding: '12px 18px', 
                          border: `1px solid ${shippingMethod === 'express' ? 'var(--color-brand-blue)' : 'var(--color-border)'}`, 
                          borderRadius: '8px', 
                          cursor: 'pointer',
                          background: shippingMethod === 'express' ? 'rgba(42, 67, 93, 0.02)' : 'none'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input 
                              type="radio" 
                              name="shipping_method" 
                              checked={shippingMethod === 'express'} 
                              onChange={() => setShippingMethod('express')}
                              style={{ width: '16px', height: '16px', accentColor: 'var(--color-brand-blue)' }}
                            />
                            <div>
                              <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>Express Air Delivery</strong>
                              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Priority shipping (1-2 business days)</span>
                            </div>
                          </div>
                          <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>$19.99</span>
                        </label>
                      </div>
                    </div>

                    <div className="filter-checkbox-label" style={{ marginBottom: '25px' }}>
                      <input 
                        type="checkbox" 
                        id="save-info-checkbox"
                        checked={shippingInfo.saveInfo}
                        onChange={e => setShippingInfo({...shippingInfo, saveInfo: e.target.checked})}
                      />
                      <label htmlFor="save-info-checkbox" style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
                        Save shipping details for future formulation checkouts
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-full" style={{ padding: '12px', borderRadius: '30px', fontWeight: '600' }}>
                      Continue to Payment
                    </button>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={handlePaymentSubmit} className="auth-form animate-fade-in">
                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-brand-blue)', marginBottom: '20px' }}>Secure Payment</h3>
                    
                    <div className="form-group" style={{ marginBottom: '18px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-brand-blue)', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Card Number</span>
                        <span style={{ fontSize: '0.65rem', color: 'var(--color-text-light)' }}>Visa, MasterCard, Amex</span>
                      </label>
                      <input 
                        type="text" 
                        required 
                        maxLength="19"
                        value={paymentInfo.cardNumber}
                        onChange={e => setPaymentInfo({...paymentInfo, cardNumber: formatCardNumber(e.target.value)})}
                        placeholder="4111 2222 3333 4444"
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
                      <div className="form-group">
                        <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-brand-blue)' }}>Expiry Date</label>
                        <input 
                          type="text" 
                          required 
                          maxLength="5"
                          value={paymentInfo.expiry}
                          onChange={e => setPaymentInfo({...paymentInfo, expiry: formatExpiry(e.target.value)})}
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="form-group">
                        <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-brand-blue)' }}>CVV Code</label>
                        <input 
                          type="password" 
                          required 
                          maxLength="3"
                          value={paymentInfo.cvv}
                          onChange={e => setPaymentInfo({...paymentInfo, cvv: e.target.value.replace(/[^0-9]/g, '')})}
                          placeholder="•••"
                        />
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <button type="button" className="btn btn-outline" style={{ flex: '1', borderRadius: '30px' }} onClick={() => setStep(1)}>
                        Back
                      </button>
                      <button type="submit" className="btn btn-primary" style={{ flex: '2', borderRadius: '30px', fontWeight: '600' }}>
                        Complete Purchase (${total.toFixed(2)})
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Order Summary */}
              <aside className="filter-sidebar glass-panel" style={{ padding: '25px', background: '#fff' }}>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-brand-blue)', marginBottom: '20px', borderBottom: '1px solid var(--color-border)', paddingBottom: '10px' }}>
                  Order Summary
                </h3>
                
                {/* Cart items */}
                <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '20px', paddingRight: '5px' }}>
                  {regimen.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '15px', marginBottom: '15px', alignItems: 'center' }}>
                      <div style={{ width: '35px', height: '45px', flexShrink: 0 }}>
                        <ProductBottle type={item.category} size="small" />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', margin: 0 }}>{item.name}</h4>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', margin: 0 }}>Qty: {item.quantity || 1}</p>
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-brand-blue)' }}>
                        ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Promo Code Input */}
                <div style={{ borderTop: '1px solid var(--color-border)', padding: '15px 0' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-brand-blue)', display: 'block', marginBottom: '8px' }}>Promo Code</label>
                  
                  {appliedPromo ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(194, 168, 120, 0.1)', border: '1px dashed var(--color-accent)', padding: '8px 12px', borderRadius: '6px' }}>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-brand-blue)' }}>
                        <strong>{appliedPromo.code}</strong> Applied ({(appliedPromo.discount * 100)}% Off)
                      </div>
                      <button 
                        onClick={removePromo}
                        style={{ background: 'none', border: 'none', color: '#c0392b', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' }}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <input 
                          type="text" 
                          placeholder="e.g. WELCOME10"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          style={{
                            flex: 1,
                            padding: '8px 12px',
                            border: '1px solid var(--color-border)',
                            borderRadius: '6px',
                            outline: 'none',
                            fontSize: '0.8rem'
                          }}
                        />
                        <button 
                          type="button" 
                          className="btn btn-outline"
                          onClick={applyPromo}
                          style={{ padding: '8px 15px', fontSize: '0.75rem', borderRadius: '6px' }}
                        >
                          Apply
                        </button>
                      </div>
                      {promoError && <span style={{ display: 'block', color: '#c0392b', fontSize: '0.75rem', marginTop: '5px' }}>{promoError}</span>}
                      <span style={{ display: 'block', color: 'var(--color-text-light)', fontSize: '0.7rem', marginTop: '5px' }}>Try code: WELCOME10 (10% off) or BIOSILIN (20% off)</span>
                    </div>
                  )}
                </div>

                {/* Subtotals & Total */}
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {appliedPromo && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#27ae60', fontWeight: '500' }}>
                      <span>Discount ({appliedPromo.code})</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    <span>Shipping ({shippingMethod === 'express' ? 'Express' : 'Standard'})</span>
                    <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-brand-blue)', marginTop: '10px', borderTop: '1px solid var(--color-border)', paddingTop: '10px' }}>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        ) : (
          /* Step 3: Success Screen */
          <div className="empty-favorites-state" style={{ 
            textAlign: 'center', 
            padding: '60px 40px', 
            background: 'var(--color-bg-secondary)', 
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            maxWidth: '650px',
            margin: '40px auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2A435D" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" fill="rgba(42, 67, 93, 0.05)" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-accent)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Order Confirmed
            </span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--color-brand-blue)', marginTop: '5px', marginBottom: '15px' }}>
              Thank You for Your Order!
            </h2>
            
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '25px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Your order has been received and is being prepared in our clinical laboratory facility. A confirmation email with tracking details has been sent to <strong>{user?.email}</strong>.
            </p>
            
            <div className="glass-panel" style={{ padding: '18px 22px', textAlign: 'left', marginBottom: '30px', fontSize: '0.88rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div><strong>Order Reference:</strong> {orderNumber}</div>
              <div><strong>Deliver to:</strong> {shippingInfo.fullName}, {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.zipCode}</div>
              <div><strong>Estimated Delivery:</strong> {shippingMethod === 'express' ? '1 - 2 Business Days' : '3 - 5 Business Days'}</div>
            </div>

            <div className="glass-panel" style={{
              background: 'rgba(194, 168, 120, 0.06)',
              border: '1px solid rgba(194, 168, 120, 0.2)',
              borderRadius: '8px',
              padding: '15px 20px',
              fontSize: '0.82rem',
              color: 'var(--color-brand-blue)',
              textAlign: 'left',
              lineHeight: '1.5',
              marginBottom: '35px',
              fontWeight: 500
            }}>
              {getClinicalTip()}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <button className="btn btn-outline" onClick={() => window.print()} style={{ borderRadius: '30px', padding: '12px 30px' }}>
                Print Receipt
              </button>
              <button className="btn btn-primary" onClick={() => navigate('/')} style={{ borderRadius: '30px', padding: '12px 30px' }}>
                Return Home
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
