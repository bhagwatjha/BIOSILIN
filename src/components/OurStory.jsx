import React from 'react';

const OurStory = React.memo(() => {
  return (
    <section id="story" className="story-section section-padding">
      <div className="container">
        <div className="story-grid">
          <div className="story-image">
            <svg viewBox="0 0 400 400">
              <defs>
                <linearGradient id="cellBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FAF9F6" />
                  <stop offset="100%" stopColor="#F0EBE1" />
                </linearGradient>
                <linearGradient id="blueActive" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#436384" />
                  <stop offset="100%" stopColor="#2A435D" />
                </linearGradient>
                <linearGradient id="goldActive" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e5d0a6" />
                  <stop offset="100%" stopColor="#C2A878" />
                </linearGradient>
              </defs>
              
              {/* Background grid */}
              <rect width="400" height="400" fill="url(#cellBg)" rx="16" />
              <line x1="50" y1="0" x2="50" y2="400" stroke="rgba(0,0,0,0.02)" />
              <line x1="100" y1="0" x2="100" y2="400" stroke="rgba(0,0,0,0.02)" />
              <line x1="150" y1="0" x2="150" y2="400" stroke="rgba(0,0,0,0.02)" />
              <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(0,0,0,0.02)" />
              <line x1="250" y1="0" x2="250" y2="400" stroke="rgba(0,0,0,0.02)" />
              <line x1="300" y1="0" x2="300" y2="400" stroke="rgba(0,0,0,0.02)" />
              <line x1="350" y1="0" x2="350" y2="400" stroke="rgba(0,0,0,0.02)" />
              
              <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(0,0,0,0.02)" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(0,0,0,0.02)" />
              <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(0,0,0,0.02)" />
              <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(0,0,0,0.02)" />
              <line x1="0" y1="250" x2="400" y2="250" stroke="rgba(0,0,0,0.02)" />
              <line x1="0" y1="300" x2="400" y2="300" stroke="rgba(0,0,0,0.02)" />
              <line x1="0" y1="350" x2="400" y2="350" stroke="rgba(0,0,0,0.02)" />

              {/* Molecular Bonds Diagram */}
              <g transform="translate(40, 20)">
                {/* Node 1 */}
                <circle cx="160" cy="180" r="45" fill="none" stroke="#2A435D" strokeWidth="1" strokeDasharray="3,3" />
                <circle cx="160" cy="180" r="30" fill="none" stroke="rgba(42, 67, 93, 0.15)" strokeWidth="6" />
                <circle cx="160" cy="180" r="10" fill="url(#blueActive)" />
                <text x="160" y="210" textAnchor="middle" fontSize="10" fontWeight="600" fill="#2A435D" fontFamily="Inter, sans-serif">Active Core</text>

                {/* Node 2 */}
                <line x1="160" y1="180" x2="70" y2="120" stroke="#2A435D" strokeWidth="1.5" />
                <circle cx="70" cy="120" r="18" fill="none" stroke="#C2A878" strokeWidth="1" />
                <circle cx="70" cy="120" r="6" fill="url(#goldActive)" />
                <text x="70" y="148" textAnchor="middle" fontSize="9" fontWeight="500" fill="#777" fontFamily="Inter, sans-serif">L-Lipid</text>

                {/* Node 3 */}
                <line x1="160" y1="180" x2="250" y2="120" stroke="#2A435D" strokeWidth="1.5" />
                <circle cx="250" cy="120" r="22" fill="none" stroke="#2A435D" strokeWidth="1" />
                <circle cx="250" cy="120" r="7" fill="url(#blueActive)" />
                <text x="250" y="152" textAnchor="middle" fontSize="9" fontWeight="500" fill="#777" fontFamily="Inter, sans-serif">H2O Carrier</text>

                {/* Node 4 */}
                <line x1="160" y1="180" x2="160" y2="280" stroke="#2A435D" strokeWidth="1.5" />
                <circle cx="160" cy="280" r="25" fill="none" stroke="#C2A878" strokeWidth="1" strokeDasharray="2,2" />
                <circle cx="160" cy="280" r="8" fill="url(#goldActive)" />
                <text x="160" y="312" textAnchor="middle" fontSize="9" fontWeight="500" fill="#777" fontFamily="Inter, sans-serif">Synthesizer</text>

                {/* Satellite small nodes */}
                <line x1="70" y1="120" x2="30" y2="160" stroke="#C2A878" strokeWidth="1" opacity="0.5" />
                <circle cx="30" cy="160" r="4" fill="rgba(194, 168, 120, 0.4)" />

                <line x1="250" y1="120" x2="290" y2="80" stroke="#2A435D" strokeWidth="1" opacity="0.5" />
                <circle cx="290" cy="80" r="3.5" fill="rgba(42, 67, 93, 0.4)" />
                
                {/* Mathematical notation markers */}
                <text x="310" y="330" fontSize="11" fontFamily="Playfair Display, serif" fontStyle="italic" fill="#C2A878">pH = 5.34</text>
                <text x="20" y="50" fontSize="11" fontFamily="Playfair Display, serif" fontStyle="italic" fill="#2A435D">Efficacy: 99.4%</text>
              </g>
            </svg>
          </div>
          <div className="story-content">
            <h2>The Science of BIOSILIN</h2>
            <p>
              At BIOSILIN, we bridge the gap between advanced dermatological science and pure, effective ingredients. Our mission is to provide high-performance skincare solutions that are both clinically effective and gentle on the skin.
            </p>
            <p>
              Every formulation is meticulously crafted with precise percentages of active molecules, ensuring optimal results without compromising the skin barrier. 
            </p>
            <ul className="story-features">
              <li><span>✓</span> Silicon & Paraben Free</li>
              <li><span>✓</span> Clinically Tested</li>
              <li><span>✓</span> 100% Vegan</li>
              <li><span>✓</span> Optimal pH Balanced</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

OurStory.displayName = 'OurStory';

export default OurStory;
