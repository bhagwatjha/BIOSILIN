import React from 'react';

const Story = () => {
  return (
    <div className="page-transition animate-fade-in story-page">
      <div className="story-hero section-padding">
        <div className="container">
          <div className="section-header">
            <h2>The BIOSILIN Ethos</h2>
            <p>Clinical Precision meets Natural Balance.</p>
          </div>
        </div>
      </div>
      
      <div className="container section-padding">
        <div className="story-grid">
          <div className="story-content">
            <h3>Our Journey to Efficacy</h3>
            <p>
              Traditional skincare often forces a compromise between clinical efficacy and skin barrier health. At BIOSILIN, we fundamentally reject that compromise. 
            </p>
            <p>
              We formulate our products using rigorous dermatological science, ensuring precise percentages of active molecules like Niacinamide, Azelaic Acid, and Hyaluronic Acid are delivered exactly where they are needed.
            </p>
            
            <h4 className="mt-4">Our Strict Formulation Charter:</h4>
            <ul className="story-features">
              <li><span>✓</span> <strong>Silicon Free:</strong> Preventing clogged pores and allowing active ingredients to penetrate.</li>
              <li><span>✓</span> <strong>Paraben Free:</strong> Utilizing safe, modern preservation systems.</li>
              <li><span>✓</span> <strong>100% Vegan:</strong> No animal-derived ingredients, ever.</li>
              <li><span>✓</span> <strong>pH Optimized:</strong> Respecting the skin's natural acid mantle (pH 4.5 - 6.0).</li>
            </ul>
          </div>
          <div className="story-image">
             <div className="image-placeholder clinical-placeholder"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
