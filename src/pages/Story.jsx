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
            <div className="story-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="image-placeholder clinical-placeholder" style={{ width: '100%', height: '350px', backgroundColor: 'var(--color-bg-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>
                <span style={{ fontStyle: 'italic', fontWeight: '500' }}>[ Cellular Science Lab ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Science & Formulation Charter Section */}
      <section id="science" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="story-grid" style={{ gridTemplateColumns: '1fr 1.2fr', gap: '60px' }}>
            <div className="story-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', order: 2 }}>
              <div className="image-placeholder clinical-placeholder" style={{ width: '100%', height: '400px', backgroundColor: 'var(--color-bg-dark)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255, 255, 255, 0.7)' }}>
                <span style={{ fontStyle: 'italic', fontWeight: '500' }}>[ High-Performance Formulations ]</span>
              </div>
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
            <div className="story-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="image-placeholder clinical-placeholder" style={{ width: '100%', height: '350px', backgroundColor: 'var(--color-bg-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>
                <span style={{ fontStyle: 'italic', fontWeight: '500' }}>[ Dr. Evelyn Chen, MD, PhD ]</span>
              </div>
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
