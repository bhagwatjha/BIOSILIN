import React from 'react';
import PropTypes from 'prop-types';

const ProductBottle = ({ type, size = 'medium', customColor }) => {
  const normType = (type || 'serum').toLowerCase();

  const getLiquidColor = () => {
    if (customColor) return customColor;
    if (normType.includes('serum')) return 'rgba(238, 205, 131, 0.45)'; // Amber/pale yellow
    if (normType.includes('cream')) return 'rgba(253, 245, 230, 0.9)'; // Pearl/warm white
    if (normType.includes('sunscreen')) return 'rgba(255, 255, 255, 0.95)'; // Pure clinical white
    if (normType.includes('face wash') || normType.includes('cleanser')) return 'rgba(224, 242, 241, 0.7)'; // Aquamarine transparent
    return 'rgba(255, 255, 255, 0.8)';
  };

  const liquidColor = getLiquidColor();

  // Render specific SVG-based bottles
  const renderBottle = () => {
    if (normType.includes('serum')) {
      return (
        <svg viewBox="0 0 100 180" width="100" height="180" style={{ overflow: 'visible' }}>
          <defs>
            {/* Glass body gradient */}
            <linearGradient id="serumGlass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3d2b1f" />
              <stop offset="30%" stopColor="#8b5a2b" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#5c3a21" stopOpacity="0.75" />
              <stop offset="90%" stopColor="#3d2b1f" />
              <stop offset="100%" stopColor="#271b13" />
            </linearGradient>
            {/* Rubber bulb gradient */}
            <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#111" />
              <stop offset="50%" stopColor="#333" />
              <stop offset="100%" stopColor="#000" />
            </linearGradient>
            {/* Cap collar gradient */}
            <linearGradient id="collarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b8860b" />
              <stop offset="30%" stopColor="#ffd700" />
              <stop offset="70%" stopColor="#daa520" />
              <stop offset="100%" stopColor="#8b6508" />
            </linearGradient>
          </defs>

          {/* Squeeze bulb */}
          <path d="M 40,30 C 40,15 45,10 50,10 C 55,10 60,15 60,30 Z" fill="url(#bulbGrad)" />
          
          {/* Gold Collar cap */}
          <rect x="35" y="30" width="30" height="12" rx="2" fill="url(#collarGrad)" stroke="#ffd700" strokeWidth="0.5" />
          <line x1="38" y1="30" x2="38" y2="42" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <line x1="44" y1="30" x2="44" y2="42" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <line x1="50" y1="30" x2="50" y2="42" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <line x1="56" y1="30" x2="56" y2="42" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <line x1="62" y1="30" x2="62" y2="42" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />

          {/* Glass neck */}
          <rect x="42" y="42" width="16" height="10" fill="url(#serumGlass)" opacity="0.9" />

          {/* Bottle body */}
          <path d="M 28,52 
                   L 72,52 
                   C 78,52 82,56 82,62 
                   L 82,165 
                   C 82,172 76,178 68,178 
                   L 32,178 
                   C 24,178 18,172 18,165 
                   L 18,62 
                   C 18,56 22,52 28,52 Z" 
                fill="url(#serumGlass)" />

          {/* Liquid level (inside amber glass) */}
          <path d="M 20,80 
                   L 80,80 
                   L 80,165 
                   C 80,171 75,176 68,176 
                   L 32,176 
                   C 25,176 20,171 20,165 Z" 
                fill={liquidColor} 
                opacity="0.35" />

          {/* Pipette tube visible inside */}
          <rect x="47" y="42" width="6" height="100" fill="rgba(255, 255, 255, 0.4)" rx="2" />
          <path d="M 47,142 L 53,142 L 51,148 L 49,148 Z" fill="rgba(255, 255, 255, 0.4)" />
          {/* Droplet hanging at tip */}
          <circle cx="50" cy="151" r="2.5" fill="rgba(255, 255, 255, 0.6)" />

          {/* Clinical Minimalist Label */}
          <rect x="24" y="85" width="52" height="65" rx="3" fill="#ffffff" />
          {/* Label lines */}
          <text x="50" y="98" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#2A435D" fontFamily="Inter, sans-serif" letterSpacing="0.5">BIOSILIN</text>
          <line x1="30" y1="104" x2="70" y2="104" stroke="#2A435D" strokeWidth="0.5" />
          <text x="50" y="114" textAnchor="middle" fontSize="4.5" fontWeight="500" fill="#555" fontFamily="Inter, sans-serif">SERUM</text>
          <text x="50" y="123" textAnchor="middle" fontSize="4" fontWeight="600" fill="#C2A878" fontFamily="Inter, sans-serif">FORMULATION</text>
          <text x="50" y="132" textAnchor="middle" fontSize="3.5" fill="#777" fontFamily="Inter, sans-serif">CLINICAL PRECISION</text>
          <text x="50" y="141" textAnchor="middle" fontSize="3" fill="#999" fontFamily="Inter, sans-serif">pH 4.5 - 5.5</text>

          {/* Glass highlight glare (adds realism) */}
          <path d="M 22,62 L 22,165 C 22,170 25,173 28,174" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 78,62 L 78,130" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" fill="none" />
        </svg>
      );
    }

    if (normType.includes('cream')) {
      return (
        <svg viewBox="0 0 110 120" width="110" height="120" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="creamLid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="50%" stopColor="#444444" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            <linearGradient id="jarGlass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(240, 240, 240, 0.9)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.75)" />
              <stop offset="80%" stopColor="rgba(245, 245, 245, 0.7)" />
              <stop offset="100%" stopColor="rgba(215, 215, 215, 0.9)" />
            </linearGradient>
            <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C2A878" />
              <stop offset="50%" stopColor="#e5d0a6" />
              <stop offset="100%" stopColor="#a88d5d" />
            </linearGradient>
          </defs>

          {/* Jar cap */}
          <rect x="15" y="10" width="80" height="18" rx="3" fill="url(#creamLid)" />
          {/* Gold cap rim accent */}
          <rect x="15" y="25" width="80" height="3" fill="url(#goldRim)" />

          {/* Jar neck */}
          <rect x="22" y="28" width="66" height="6" fill="rgba(220, 220, 220, 0.8)" />

          {/* Jar body (glass) */}
          <path d="M 12,34 
                   L 98,34 
                   C 104,34 106,37 106,44 
                   L 106,98 
                   C 106,106 100,110 92,110 
                   L 18,110 
                   C 10,110 4,106 4,98 
                   L 4,44 
                   C 4,37 6,34 12,34 Z" 
                fill="url(#jarGlass)" 
                stroke="rgba(200, 200, 200, 0.4)" 
                strokeWidth="1" />

          {/* Inner product liquid cream container */}
          <path d="M 12,42 
                   L 98,42 
                   C 101,42 102,44 102,48 
                   L 102,94 
                   C 102,100 98,104 90,104 
                   L 20,104 
                   C 12,104 8,100 8,94 
                   L 8,48 
                   C 8,44 9,42 12,42 Z" 
                fill={liquidColor} />

          {/* Clean clinical label */}
          <rect x="20" y="52" width="70" height="42" rx="2" fill="#ffffff" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
          <text x="55" y="65" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#2A435D" fontFamily="Inter, sans-serif" letterSpacing="0.5">BIOSILIN</text>
          <text x="55" y="76" textAnchor="middle" fontSize="4.5" fontWeight="600" fill="#C2A878" fontFamily="Inter, sans-serif">HYDRATING CREAM</text>
          <text x="55" y="85" textAnchor="middle" fontSize="3.5" fill="#777" fontFamily="Inter, sans-serif">Optimal Skin Barrier Repair</text>
          <text x="55" y="91" textAnchor="middle" fontSize="3.2" fill="#999" fontFamily="Inter, sans-serif">pH 5.0 - 5.5</text>

          {/* Highlights */}
          <path d="M 8,48 L 8,94 C 8,98 10,101 13,102" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.7" />
          <path d="M 102,48 L 102,80" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" fill="none" />
        </svg>
      );
    }

    if (normType.includes('sunscreen')) {
      return (
        <svg viewBox="0 0 100 170" width="100" height="170" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e8e8e8" />
              <stop offset="15%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f7f7f7" />
              <stop offset="85%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#dedede" />
            </linearGradient>
            <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2A435D" />
              <stop offset="50%" stopColor="#436384" />
              <stop offset="100%" stopColor="#1b2d41" />
            </linearGradient>
            <linearGradient id="sunstripe" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C2A878" />
              <stop offset="100%" stopColor="#e5d0a6" />
            </linearGradient>
          </defs>

          {/* Squeeze Tube body */}
          <path d="M 22,20
                   L 78,20
                   C 76,40 73,80 66,130
                   L 34,130
                   C 27,80 24,40 22,20 Z"
                fill="url(#tubeGrad)"
                stroke="rgba(0, 0, 0, 0.05)"
                strokeWidth="0.5" />

          {/* Crimped top border */}
          <rect x="21.5" y="15" width="57" height="6" fill="#cccccc" rx="1" />
          <line x1="25" y1="15" x2="25" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
          <line x1="30" y1="15" x2="30" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
          <line x1="35" y1="15" x2="35" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
          <line x1="40" y1="15" x2="40" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
          <line x1="45" y1="15" x2="45" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
          <line x1="50" y1="15" x2="50" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
          <line x1="55" y1="15" x2="55" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
          <line x1="60" y1="15" x2="60" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
          <line x1="65" y1="15" x2="65" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
          <line x1="70" y1="15" x2="70" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
          <line x1="75" y1="15" x2="75" y2="21" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />

          {/* Gold accent stripe */}
          <path d="M 23.5,42 L 76.5,42 L 74.5,50 L 25.5,50 Z" fill="url(#sunstripe)" />

          {/* Text labels directly on the tube */}
          <text x="50" y="68" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#2A435D" fontFamily="Inter, sans-serif" letterSpacing="0.5">BIOSILIN</text>
          <text x="50" y="78" textAnchor="middle" fontSize="4.5" fontWeight="600" fill="#333" fontFamily="Inter, sans-serif">UV SHIELD</text>
          <text x="50" y="87" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2A435D" fontFamily="Inter, sans-serif">SPF 70</text>
          <text x="50" y="96" textAnchor="middle" fontSize="4" fontWeight="600" fill="#C2A878" fontFamily="Inter, sans-serif">PA++++</text>
          <text x="50" y="104" textAnchor="middle" fontSize="3.2" fill="#777" fontFamily="Inter, sans-serif">BROAD SPECTRUM</text>
          <text x="50" y="112" textAnchor="middle" fontSize="3.2" fill="#999" fontFamily="Inter, sans-serif">Ceramide Enriched</text>

          {/* Cap connector */}
          <path d="M 36,130 L 64,130 L 62,136 L 38,136 Z" fill="#dddddd" />
          
          {/* Flip cap */}
          <rect x="33" y="136" width="34" height="16" rx="2" fill="url(#capGrad)" />
        </svg>
      );
    }

    // Default: Face wash/Cleanser pump
    return (
      <svg viewBox="0 0 100 180" width="100" height="180" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="washGlass" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
            <stop offset="25%" stopColor="rgba(255, 255, 255, 0.85)" />
            <stop offset="75%" stopColor="rgba(255, 255, 255, 0.7)" />
            <stop offset="100%" stopColor="rgba(230, 230, 230, 0.8)" />
          </linearGradient>
          <linearGradient id="pumpGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#444" />
            <stop offset="50%" stopColor="#888" />
            <stop offset="100%" stopColor="#222" />
          </linearGradient>
        </defs>

        {/* Pump Head nozzle */}
        <path d="M 50,15 C 38,15 32,18 32,23 L 42,23 L 42,27 L 58,27 L 58,23 C 58,18 56,15 50,15 Z" fill="url(#pumpGrad)" />
        {/* Pump Spout */}
        <path d="M 34,20 L 20,22 L 20,24 L 34,22 Z" fill="#222" />

        {/* Pump collar */}
        <rect x="42" y="27" width="16" height="10" fill="url(#pumpGrad)" />
        {/* Screw threads */}
        <line x1="42" y1="31" x2="58" y2="31" stroke="#222" strokeWidth="1" />
        <line x1="42" y1="34" x2="58" y2="34" stroke="#222" strokeWidth="1" />

        {/* Straw visible inside */}
        <rect x="48" y="37" width="4" height="132" fill="rgba(42, 67, 93, 0.25)" rx="1" />

        {/* Bottle Body */}
        <path d="M 32,37 
                 L 68,37 
                 C 74,37 78,41 78,48 
                 L 78,162 
                 C 78,169 72,174 65,174 
                 L 35,174 
                 C 28,174 22,169 22,162 
                 L 22,48 
                 C 22,41 26,37 32,37 Z" 
              fill="url(#washGlass)" 
              stroke="rgba(200, 200, 200, 0.4)" 
              strokeWidth="0.75" />

        {/* Liquid level */}
        <path d="M 23.5,60 
                 L 76.5,60 
                 L 76.5,162 
                 C 76.5,168 71.5,172.5 65,172.5 
                 L 35,172.5 
                 C 28.5,172.5 23.5,168 23.5,162 Z" 
              fill={liquidColor} />

        {/* Bubbles in cleanser */}
        <circle cx="32" cy="75" r="2.5" fill="rgba(255, 255, 255, 0.8)" />
        <circle cx="68" cy="85" r="2" fill="rgba(255, 255, 255, 0.8)" />
        <circle cx="44" cy="98" r="3" fill="rgba(255, 255, 255, 0.7)" />
        <circle cx="58" cy="115" r="1.5" fill="rgba(255, 255, 255, 0.9)" />
        <circle cx="36" cy="132" r="2.5" fill="rgba(255, 255, 255, 0.8)" />
        <circle cx="62" cy="148" r="3" fill="rgba(255, 255, 255, 0.7)" />
        <circle cx="48" cy="160" r="2" fill="rgba(255, 255, 255, 0.8)" />

        {/* Label */}
        <rect x="27" y="68" width="46" height="62" rx="2.5" fill="#ffffff" />
        <text x="50" y="80" textAnchor="middle" fontSize="6" fontWeight="700" fill="#2A435D" fontFamily="Inter, sans-serif" letterSpacing="0.5">BIOSILIN</text>
        <line x1="32" y1="85" x2="68" y2="85" stroke="#2A435D" strokeWidth="0.4" />
        <text x="50" y="93" textAnchor="middle" fontSize="4" fontWeight="600" fill="#333" fontFamily="Inter, sans-serif">CLEANSING</text>
        <text x="50" y="100" textAnchor="middle" fontSize="4" fontWeight="600" fill="#333" fontFamily="Inter, sans-serif">WASH</text>
        <text x="50" y="109" textAnchor="middle" fontSize="3" fill="#888" fontFamily="Inter, sans-serif">Lactic Acid & Niacinamide</text>
        <text x="50" y="117" textAnchor="middle" fontSize="3" fill="#777" fontFamily="Inter, sans-serif">pH 4.5 - 5.0</text>

        {/* Highlight glare */}
        <path d="M 24,48 L 24,162 C 24,166 27,170 30,171" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.6" />
      </svg>
    );
  };

  return (
    <div className="bottle-wrapper">
      <div className={`bottle-container size-${size}`}>
        {renderBottle()}
      </div>
    </div>
  );
};

ProductBottle.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  customColor: PropTypes.string,
};

export default ProductBottle;
