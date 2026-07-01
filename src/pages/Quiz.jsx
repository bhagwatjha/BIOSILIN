import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useRegimen } from '../context/RegimenContext';
import ProductBottle from '../components/ProductBottle';

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [skinType, setSkinType] = useState(null);
  const [concern, setConcern] = useState(null);
  const [preference, setPreference] = useState(null);
  const [addedAll, setAddedAll] = useState(false);
  const { addToRegimen } = useRegimen();

  const handleNext = (val) => {
    if (step === 1) {
      setSkinType(val);
      setStep(2);
    } else if (step === 2) {
      setConcern(val);
      setStep(3);
    } else if (step === 3) {
      setPreference(val);
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetQuiz = () => {
    setSkinType(null);
    setConcern(null);
    setPreference(null);
    setAddedAll(false);
    setStep(1);
  };

  // Build recommendation logic
  const getRecommendations = () => {
    const recommendedList = [];

    // Helper to get product by id safely
    const getProduct = (id) => (products || []).find(p => p.id === id);

    const cleanser = getProduct('bioclear-cleansing-wash');
    const sunscreen = getProduct('biosol-uv-shield-sunscreen');
    const hyaCream = getProduct('biodrops-hya-cream');
    const b3Serum = getProduct('niasil-b3-serum');
    const pigmentSerum = getProduct('biofit-dipigmenting-serum');
    const retinoidCream = getProduct('reti-n-agedefine-cream');

    // 1. Cleanser is always recommended
    if (cleanser) recommendedList.push(cleanser);

    // 2. Add treatment serums based on concerns
    if (concern === 'depigmentation' && pigmentSerum) {
      recommendedList.push(pigmentSerum);
    } else if ((concern === 'barrier' || concern === 'pores') && b3Serum) {
      recommendedList.push(b3Serum);
    } else if (concern === 'hydration') {
      if (b3Serum) recommendedList.push(b3Serum);
    }

    // 3. Add moisturizer / retinoid cream
    if (skinType !== 'sensitive' && (concern === 'depigmentation' || concern === 'barrier') && retinoidCream) {
      recommendedList.push(retinoidCream);
    }
    if (hyaCream) {
      recommendedList.push(hyaCream);
    }

    // 4. Sunscreen is always recommended
    if (sunscreen) recommendedList.push(sunscreen);

    // Filter unique items
    const uniqueRecommended = Array.from(new Set(recommendedList.filter(Boolean)));

    // AM Routine structure
    const amRoutine = [];
    if (cleanser) amRoutine.push({ product: cleanser, instructions: 'Apply on damp face, massage gently, and rinse.' });
    
    if (preference === 'advanced') {
      if (concern === 'depigmentation' && pigmentSerum) {
        amRoutine.push({ product: pigmentSerum, instructions: 'Apply 3-4 drops, pat into skin.' });
      } else if (b3Serum) {
        amRoutine.push({ product: b3Serum, instructions: 'Apply 3-4 drops to target redness.' });
      }
      if (hyaCream) {
        amRoutine.push({ product: hyaCream, instructions: 'Apply a dime-sized amount to lock in hydration.' });
      }
    } else {
      // Minimalist: Cleanse ➔ Hydrate/Protect
      if (hyaCream && concern === 'hydration') {
        amRoutine.push({ product: hyaCream, instructions: 'Apply to damp face.' });
      }
    }
    if (sunscreen) amRoutine.push({ product: sunscreen, instructions: 'Apply generously 15 minutes before sun exposure.' });

    // PM Routine structure
    const pmRoutine = [];
    if (cleanser) pmRoutine.push({ product: cleanser, instructions: 'Double cleanse to remove pollutants.' });
    
    if (concern === 'depigmentation' && pigmentSerum) {
      pmRoutine.push({ product: pigmentSerum, instructions: 'Pat 3-4 drops into skin.' });
    } else if (b3Serum) {
      pmRoutine.push({ product: b3Serum, instructions: 'Pat 3-4 drops to reinforce skin barrier.' });
    }

    if (skinType !== 'sensitive' && retinoidCream) {
      pmRoutine.push({ product: retinoidCream, instructions: 'Apply pea-sized amount. Introduce slowly (2-3x a week).' });
    } else if (hyaCream) {
      pmRoutine.push({ product: hyaCream, instructions: 'Apply generously to soothe and hydrate overnight.' });
    }

    return {
      products: uniqueRecommended,
      am: amRoutine,
      pm: pmRoutine,
      explanation: getExplanation()
    };
  };

  const getExplanation = () => {
    let explanation = '';
    if (concern === 'depigmentation') {
      explanation = 'Your skin will benefit from our Biofit Depigmenting Serum containing Kojic Acid, Tranexamic Acid, and Azelaic Acid to actively inhibit melanin synthesis, while maintaining hydration.';
    } else if (concern === 'barrier') {
      explanation = 'To repair your skin barrier, we recommend Niasil B3 Serum with Niacinamide and Ceramides to soothe redness, prevent moisture loss, and reinforce cellular junctions.';
    } else if (concern === 'hydration') {
      explanation = 'Deep cellular hydration is achieved by layering multi-molecular Hyaluronic Acid and Probiotics, preventing trans-epidermal water loss.';
    } else {
      explanation = 'For pore refinement and oil control, Niacinamide and soothing Centella will regulate sebum production without stripping your skin.';
    }

    if (skinType === 'sensitive') {
      explanation += ' Since you have sensitive skin, we have excluded high-strength retinoids and focused on barrier-reinforcing and anti-inflammatory formulations.';
    }
    return explanation;
  };

  const handleAddAll = (recommendedProducts) => {
    recommendedProducts.forEach(product => {
      addToRegimen(product);
    });
    setAddedAll(true);
  };

  const recs = step === 4 ? getRecommendations() : null;

  return (
    <div className="page-transition animate-fade-in" style={{ paddingTop: '80px', minHeight: '85vh' }}>
      <div className="container section-padding">
        {step < 4 ? (
          <div className="quiz-container glass-panel">
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${(step - 1) * 33.33 + 10}%` }}></div>
            </div>

            {step === 1 && (
              <div className="animate-fade-in">
                <div className="quiz-step-header">
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-accent)', textTransform: 'uppercase' }}>Step 1 / 3</span>
                  <h2>Describe Your Skin Behavior</h2>
                  <p>Select the option that matches how your skin feels on a normal day.</p>
                </div>
                <div className="quiz-options-grid">
                  <div className={`quiz-option-card ${skinType === 'dry' ? 'selected' : ''}`} onClick={() => handleNext('dry')}>
                    <h3>Dry / Dehydrated</h3>
                    <p>Feels tight, rough, or flaky, and lacks natural radiance.</p>
                  </div>
                  <div className={`quiz-option-card ${skinType === 'oily' ? 'selected' : ''}`} onClick={() => handleNext('oily')}>
                    <h3>Oily / Shine-Prone</h3>
                    <p>Visible pores, overall shine, and prone to congestion or breakouts.</p>
                  </div>
                  <div className={`quiz-option-card ${skinType === 'combination' ? 'selected' : ''}`} onClick={() => handleNext('combination')}>
                    <h3>Combination</h3>
                    <p>Oily T-zone (forehead, nose, chin) with normal or dry cheeks.</p>
                  </div>
                  <div className={`quiz-option-card ${skinType === 'sensitive' ? 'selected' : ''}`} onClick={() => handleNext('sensitive')}>
                    <h3>Sensitive</h3>
                    <p>Prone to redness, stinging, itching, or reacting to active skincare.</p>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <div className="quiz-step-header">
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-accent)', textTransform: 'uppercase' }}>Step 2 / 3</span>
                  <h2>Identify Your Primary Concern</h2>
                  <p>Choose the target area you want our clinical actives to focus on.</p>
                </div>
                <div className="quiz-options-grid">
                  <div className={`quiz-option-card ${concern === 'depigmentation' ? 'selected' : ''}`} onClick={() => handleNext('depigmentation')}>
                    <h3>Hyperpigmentation & Spots</h3>
                    <p>Sun spots, post-acne marks, melasma, or overall uneven skin tone.</p>
                  </div>
                  <div className={`quiz-option-card ${concern === 'barrier' ? 'selected' : ''}`} onClick={() => handleNext('barrier')}>
                    <h3>Barrier Repair & Redness</h3>
                    <p>Tightness, stinging, damaged barrier, or reactive skin conditions.</p>
                  </div>
                  <div className={`quiz-option-card ${concern === 'hydration' ? 'selected' : ''}`} onClick={() => handleNext('hydration')}>
                    <h3>Dehydration & Dullness</h3>
                    <p>Fine lines, loss of elasticity, and dehydrated cellular texture.</p>
                  </div>
                  <div className={`quiz-option-card ${concern === 'pores' ? 'selected' : ''}`} onClick={() => handleNext('pores')}>
                    <h3>Acne & Clogged Pores</h3>
                    <p>Pore congestion, blackheads, sebum control, or blemishes.</p>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <div className="quiz-step-header">
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-accent)', textTransform: 'uppercase' }}>Step 3 / 3</span>
                  <h2>Choose Routine Complexity</h2>
                  <p>Select how many steps you prefer in your daily skincare ritual.</p>
                </div>
                <div className="quiz-options-grid">
                  <div className={`quiz-option-card ${preference === 'minimalist' ? 'selected' : ''}`} onClick={() => handleNext('minimalist')}>
                    <h3>Minimalist Routine</h3>
                    <p>A quick 2-3 step high-impact routine for optimal results with minimal time.</p>
                  </div>
                  <div className={`quiz-option-card ${preference === 'advanced' ? 'selected' : ''}`} onClick={() => handleNext('advanced')}>
                    <h3>Advanced Clinical Routine</h3>
                    <p>A comprehensive multi-step regimen for layered treatment and active molecule delivery.</p>
                  </div>
                </div>
              </div>
            )}

            {step > 1 && (
              <div className="quiz-actions">
                <button className="btn btn-outline" onClick={handleBack}>Back</button>
                <span></span>
              </div>
            )}
          </div>
        ) : (
          <div className="quiz-results">
            <div className="section-header text-center">
              <span style={{ fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', color: 'var(--color-accent)', textTransform: 'uppercase' }}>Diagnostic Result</span>
              <h1 style={{ color: 'var(--color-brand-blue)', fontSize: '2.5rem', marginTop: '10px' }}>Your Clinical Regimen</h1>
              <p style={{ maxWidth: '650px', margin: '15px auto 0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
                {recs.explanation}
              </p>
            </div>

            <div className="routine-columns">
              {/* AM Column */}
              <div className="routine-column">
                <h3>☀️ Morning (AM) Routine</h3>
                {recs.am.map((stepItem, idx) => (
                  <div key={idx} className="routine-step-card">
                    <span className="routine-step-number">0{idx + 1}</span>
                    <div style={{ width: '40px', height: '40px' }}>
                      <ProductBottle type={stepItem.product.category} size="small" />
                    </div>
                    <div className="routine-step-info">
                      <h4>{stepItem.product.name}</h4>
                      <p>{stepItem.instructions}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* PM Column */}
              <div className="routine-column">
                <h3>🌙 Evening (PM) Routine</h3>
                {recs.pm.map((stepItem, idx) => (
                  <div key={idx} className="routine-step-card">
                    <span className="routine-step-number">0{idx + 1}</span>
                    <div style={{ width: '40px', height: '40px' }}>
                      <ProductBottle type={stepItem.product.category} size="small" />
                    </div>
                    <div className="routine-step-info">
                      <h4>{stepItem.product.name}</h4>
                      <p>{stepItem.instructions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <button 
                className={`btn btn-lg ${addedAll ? 'btn-outline' : 'btn-primary'}`} 
                style={{ padding: '15px 40px', borderRadius: '30px' }}
                onClick={() => handleAddAll(recs.products)}
              >
                {addedAll ? '✓ Added to Regimen' : 'Add AM & PM Routine to Regimen'}
              </button>
              <button 
                className="btn btn-outline" 
                style={{ padding: '15px 40px', borderRadius: '30px' }}
                onClick={resetQuiz}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
