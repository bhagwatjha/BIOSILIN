import React from 'react';

const Story = () => {
  return (
    <div className="page-transition animate-fade-in story-page" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <div className="story-hero section-padding" style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container text-center">
          <div className="section-header" style={{ marginBottom: '0' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', letterSpacing: '2px', color: 'var(--color-brand-blue)', textTransform: 'uppercase' }}>Our Ethos</span>
            <h1 style={{ fontSize: '3rem', color: 'var(--color-text-primary)', marginTop: '10px', marginBottom: '15px' }}>The BIOSILIN Story</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Where clinical precision meets skin barrier integrity. Formulating the future of dermatological care.
            </p>
          </div>
        </div>
      </div>
      
      {/* 1. Integrated Skincare Philosophy Section */}
      <section id="philosophy" className="section-padding" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-brand-blue)', textTransform: 'uppercase' }}>01 / Philosophy</span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '10px', marginBottom: '20px' }}>Our Integrated Skincare Philosophy</h2>
              <p>
                Traditional skincare often forces a compromise between clinical efficacy and skin barrier health. High-potency active molecules can irritate the skin, while overly soothing products often fail to deliver visible results. 
              </p>
              <p>
                At BIOSILIN, we fundamentally reject that compromise. We believe in an **integrated approach**: pairing scientifically validated active molecules at their optimal clinical percentages with bio-compatible lipids and botanical extracts that reinforce the skin's natural defense systems.
              </p>
              <p>
                This ensures maximum therapeutic delivery of active ingredients like Kojic Acid, Niacinamide, and Hyaluronic Acid, without triggering inflammation or compromising the delicate acid mantle.
              </p>
            </div>
            <div className="story-image">
              {/* SVG 1: Cellular Science Lab Diagram */}
              <svg viewBox="0 0 400 350">
                <rect width="100%" height="100%" fill="#FAF9F6" rx="8" />
                <circle cx="200" cy="175" r="120" fill="none" stroke="rgba(42, 67, 93, 0.05)" strokeWidth="4" />
                
                {/* Lab Beaker silhouette with liquid */}
                <g transform="translate(140, 95)">
                  {/* Beaker neck */}
                  <path d="M 40,0 L 80,0 M 45,0 L 45,40 L 15,110 C 5,130 15,150 40,150 L 85,150 C 110,150 120,130 110,110 L 80,40 L 80,0" fill="none" stroke="#2A435D" strokeWidth="2.5" />
                  {/* Beaker lines */}
                  <line x1="75" y1="60" x2="85" y2="60" stroke="#2A435D" strokeWidth="1" />
                  <line x1="70" y1="80" x2="85" y2="80" stroke="#2A435D" strokeWidth="1" />
                  <line x1="60" y1="100" x2="85" y2="100" stroke="#2A435D" strokeWidth="1" />
                  <line x1="50" y1="120" x2="85" y2="120" stroke="#2A435D" strokeWidth="1" />
                  
                  {/* Liquid inside beaker */}
                  <path d="M 23,105 C 50,100 70,110 102,105 L 109,120 C 117,135 110,147 90,147.5 L 35,147.5 C 15,147.5 8,135 16,120 Z" fill="rgba(194, 168, 120, 0.3)" />
                  
                  {/* Floating active molecules */}
                  <circle cx="45" cy="120" r="4.5" fill="#2A435D" />
                  <circle cx="75" cy="130" r="3.5" fill="#C2A878" />
                  <circle cx="58" cy="135" r="2.5" fill="#2A435D" />
                </g>

                {/* Laboratory Text notations */}
                <text x="35" y="50" fontSize="8" fontWeight="600" fill="#2A435D" fontFamily="Inter, sans-serif" letterSpacing="1">FLASK 092 // SYNTHESIS</text>
                <text x="35" y="65" fontSize="7" fill="#888" fontFamily="Inter, sans-serif">Active Complex: Kojic/Azelaic/Tranexamic</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Science & Formulation Charter Section */}
      <section id="science" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="story-grid" style={{ gridTemplateColumns: '1fr 1.2fr', gap: '60px' }}>
            <div className="story-image dark-theme" style={{ order: 2 }}>
              {/* SVG 2: Formulation Active Layer Penetration */}
              <svg viewBox="0 0 400 400">
                <rect width="100%" height="100%" fill="#1A1A1A" rx="8" />
                
                {/* Skin Layer Strata */}
                {/* Stratum Corneum (surface) */}
                <line x1="30" y1="90" x2="370" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <text x="40" y="80" fontSize="8" fontWeight="600" fill="rgba(255,255,255,0.4)" fontFamily="Inter">STRATUM CORNEUM</text>
                
                {/* Epidermis */}
                <line x1="30" y1="210" x2="370" y2="210" stroke="rgba(255,255,255,0.08)" strokeWidth="3" strokeDasharray="5,5" />
                <text x="40" y="200" fontSize="8" fontWeight="600" fill="rgba(255,255,255,0.4)" fontFamily="Inter">EPIDERMIS (CELLULAR LAYER)</text>

                {/* Dermis */}
                <text x="40" y="320" fontSize="8" fontWeight="600" fill="rgba(255,255,255,0.4)" fontFamily="Inter">DERMIS BOUNDARY</text>

                {/* Penetrating active molecules (golden gradient paths) */}
                {/* Path 1 */}
                <path d="M 120,40 Q 130,120 180,240 T 260,370" fill="none" stroke="#C2A878" strokeWidth="2.5" opacity="0.8" />
                <circle cx="260" cy="370" r="5" fill="#C2A878" />
                <circle cx="180" cy="240" r="3.5" fill="#C2A878" />
                <text x="272" y="373" fontSize="8" fill="#C2A878" fontFamily="Inter">Deep Bio-actives</text>

                {/* Path 2 */}
                <path d="M 280,40 Q 250,150 210,290" fill="none" stroke="#2A435D" strokeWidth="1.5" opacity="0.6" />
                <circle cx="210" cy="290" r="4.5" fill="#436384" />
                
                {/* Lipid cell spheres */}
                <circle cx="100" cy="140" r="14" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="100" cy="140" r="3" fill="#ffffff" opacity="0.3" />

                <circle cx="300" cy="140" r="14" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="300" cy="140" r="3" fill="#ffffff" opacity="0.3" />

                <circle cx="200" cy="170" r="16" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="200" cy="170" r="4" fill="#C2A878" opacity="0.4" />

                <circle cx="140" cy="270" r="18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="270" cy="270" r="18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                <text x="320" y="50" fontSize="10" fontWeight="700" fill="#ffffff" fontFamily="Playfair Display">NO SILICON</text>
              </svg>
            </div>
            <div className="story-content" style={{ order: 1 }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-brand-blue)', textTransform: 'uppercase' }}>02 / Formulation Science</span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '10px', marginBottom: '20px' }}>Our Formulation Charter</h2>
              <p>
                Every BIOSILIN formula undergoes a rigorous molecular engineering process. We select ingredients based on clinical peer-reviewed research, verifying their synergy and stability.
              </p>
              
              <h4 style={{ marginTop: '25px', marginBottom: '15px', color: 'var(--color-text-primary)' }}>Our Strict Formulation Standards:</h4>
              <ul className="story-features" style={{ listStyle: 'none', padding: '0' }}>
                <li style={{ marginBottom: '12px' }}><span style={{ color: 'var(--color-brand-blue)', marginRight: '10px', fontWeight: 'bold' }}>✓</span> <strong>Silicon Free:</strong> We replace occlusive silicons with light, breathable plant-derived emollients to ensure active ingredients penetrate deep into the epidermis rather than sitting on top.</li>
                <li style={{ marginBottom: '12px' }}><span style={{ color: 'var(--color-brand-blue)', marginRight: '10px', fontWeight: 'bold' }}>✓</span> <strong>Paraben Free:</strong> Formulated using advanced, non-disruptive preservation systems to protect both the product integrity and your skin microbiome.</li>
                <li style={{ marginBottom: '12px' }}><span style={{ color: 'var(--color-brand-blue)', marginRight: '10px', fontWeight: 'bold' }}>✓</span> <strong>100% Vegan & Cruelty-Free:</strong> We never utilize animal-derived raw materials, and we absolutely reject animal testing at every stage of development.</li>
                <li style={{ marginBottom: '12px' }}><span style={{ color: 'var(--color-brand-blue)', marginRight: '10px', fontWeight: 'bold' }}>✓</span> <strong>pH Optimized:</strong> Each formulation is calibrated to respect the skin's natural acidic pH (4.5 - 6.0), preserving the lipid barrier and preventing pathogenic colonization.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Founder Section */}
      <section id="founder" className="section-padding" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-brand-blue)', textTransform: 'uppercase' }}>03 / Leadership</span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '10px', marginBottom: '20px' }}>Meet Our Founder</h2>
              <p>
                BIOSILIN was founded by **Dr. Evelyn Chen**, a leading clinical dermatologist and molecular biologist. After over fifteen years of treating complex dermatological conditions and conducting laboratory research, Dr. Chen grew frustrated with the industry's polarization.
              </p>
              <p>
                "Patients were constantly forced to choose between the immediate cosmetic results of harsh chemical treatments and the gentle but slow progress of organic remedies," says Dr. Chen. "I wanted to create a brand that uses medical-grade, high-potency molecules, but embeds them in breathable, bio-compatible vectors that respect and heal the skin's lipid barrier."
              </p>
              <p>
                Today, Dr. Chen leads our team of clinical researchers and chemists in our dedicated research facility, personally overseeing the development, stability testing, and clinical validation of every single formulation.
              </p>
            </div>
            <div className="story-image">
              {/* SVG 3: Clinical Research Logo/Seal representing Dr. Evelyn Chen research */}
              <svg viewBox="0 0 400 350">
                <rect width="100%" height="100%" fill="#FAF9F6" rx="8" />
                <g transform="translate(100, 75)">
                  {/* Outer circle */}
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#2A435D" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="84" fill="none" stroke="#C2A878" strokeWidth="0.75" />
                  
                  {/* DNA Double Helix Abstract Center */}
                  <g transform="translate(50, 45)">
                    {/* Sine wave 1 */}
                    <path d="M 10,50 Q 25,10 50,50 T 90,50" fill="none" stroke="#2A435D" strokeWidth="3" strokeLinecap="round" />
                    {/* Sine wave 2 */}
                    <path d="M 10,50 Q 25,90 50,50 T 90,50" fill="none" stroke="#C2A878" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Connecting bonds */}
                    <line x1="20" y1="32" x2="20" y2="68" stroke="#555" strokeWidth="1" />
                    <line x1="30" y1="22" x2="30" y2="78" stroke="#555" strokeWidth="1" />
                    <line x1="40" y1="35" x2="40" y2="65" stroke="#555" strokeWidth="1" />
                    
                    <line x1="60" y1="65" x2="60" y2="35" stroke="#555" strokeWidth="1" />
                    <line x1="70" y1="78" x2="70" y2="22" stroke="#555" strokeWidth="1" />
                    <line x1="80" y1="68" x2="80" y2="32" stroke="#555" strokeWidth="1" />
                  </g>

                  {/* Scientific seals/labels inside circle */}
                  <text x="100" y="160" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2A435D" fontFamily="Inter" letterSpacing="2">DR. EVELYN CHEN</text>
                  <text x="100" y="172" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="#C2A878" fontFamily="Inter">MD, PHD // MOLECULAR CLINICAL RESEARCH</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Values Section */}
      <section id="values" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--color-brand-blue)', textTransform: 'uppercase' }}>04 / Our Core Values</span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '10px' }}>The Principles That Guide Us</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '30px' }}>
            <div style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ color: 'var(--color-brand-blue)', marginBottom: '15px' }}>Clinical Efficacy</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                We do not believe in "marketing percentages." We formulate our products using active ingredients at the precise concentrations proven in double-blind, peer-reviewed clinical trials to achieve physiological results.
              </p>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ color: 'var(--color-brand-blue)', marginBottom: '15px' }}>Absolute Transparency</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Every ingredient in our formulations is listed with its purpose and concentration. We disclose our full ingredient lists, our pH ranges, and our clinical testing results, so you know exactly what you are putting on your skin.
              </p>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ color: 'var(--color-brand-blue)', marginBottom: '15px' }}>Microbiome Integrity</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Skincare should work with your skin, not against it. We avoid harsh surfactants, stripping alcohols, and heavy silicons that disrupt the microbiome and acid mantle, ensuring long-term cellular health.
              </p>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ color: 'var(--color-brand-blue)', marginBottom: '15px' }}>Eco-Responsibility</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                We utilize highly recyclable glass packaging, biodegradable soy-based inks, and responsibly sourced, renewable botanical ingredients. Our production facilities are designed to minimize carbon output.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
