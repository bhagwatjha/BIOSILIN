import React from 'react';

const OurStory = React.memo(() => {
  return (
    <section id="story" className="story-section section-padding">
      <div className="container">
        <div className="story-grid">
          <div className="story-image">
            <div className="image-placeholder"></div>
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
