import React from 'react';
import { Link } from 'react-router-dom';

// Inline SVGs for social media icons
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer = React.memo(() => {
  return (
    <footer id="contact" className="mega-footer section-padding">
      <div className="container">
        
        {/* Brand & Newsletter Top Row */}
        <div className="footer-brand-row">
          <div className="footer-brand">
            <h2>BIOSILIN</h2>
            <p>Advanced Dermatological Solutions.</p>
            <div className="social-links mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h4>Stay Connected</h4>
            <p>Subscribe to learn about new formulations.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Top Row: Skincare, About Us, Services */}
        <div className="mega-footer-grid mt-footer-row">
          <div className="footer-column">
            <h4>SKINCARE &gt;</h4>
            <ul>
              <li><Link to="/shop">Shop Skincare</Link></li>
              <li><Link to="/coming-soon">Shop Serums</Link></li>
              <li><Link to="/coming-soon">Shop Routines</Link></li>
              <li><Link to="/coming-soon">Shop by Skin Concern</Link></li>
              <li><Link to="/coming-soon">Expert Advice Articles</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>ABOUT US &gt;</h4>
            <ul>
              <li><Link to="/story">Our Integrated Skincare Philosophy</Link></li>
              <li><Link to="/coming-soon">Our Founder</Link></li>
              <li><Link to="/coming-soon">Our Pro Partners</Link></li>
              <li><Link to="/coming-soon">Our Science</Link></li>
              <li><Link to="/coming-soon">Our Sustainability Goals</Link></li>
              <li><Link to="/coming-soon">Our Values</Link></li>
              <li><Link to="/coming-soon">Employment Opportunities</Link></li>
              <li><Link to="/coming-soon">For Professionals</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>SERVICES &gt;</h4>
            <ul>
              <li><Link to="/coming-soon">Live Chat with an Aesthetician</Link></li>
              <li><Link to="/coming-soon">Livestream Shopping Event</Link></li>
              <li><Link to="/coming-soon">Book a Private Online Consultation</Link></li>
              <li><Link to="/coming-soon">Explore Professional Treatments</Link></li>
              <li><Link to="/coming-soon">Find an Advanced Clinical Spa</Link></li>
              <li><Link to="/coming-soon">Find a Skincare Professional</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: My Account, Help, Resources */}
        <div className="mega-footer-grid mt-footer-row">
          <div className="footer-column">
            <h4>MY ACCOUNT &gt;</h4>
            <ul>
              <li><Link to="/coming-soon">Order Status</Link></li>
              <li><Link to="/coming-soon">Manage Subscription</Link></li>
              <li><Link to="/coming-soon">Join BIOSILIN Rewards</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>HELP &gt;</h4>
            <ul>
              <li><Link to="/coming-soon">Customer Service</Link></li>
              <li><Link to="/coming-soon">FAQ</Link></li>
              <li><Link to="/coming-soon">Contact Us</Link></li>
              <li><Link to="/coming-soon">Authorized Retailers</Link></li>
              <li><Link to="/coming-soon">Afterpay</Link></li>
              <li><Link to="/coming-soon">Consumer Health Data Notice</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>RESOURCES &gt;</h4>
            <ul>
              <li><Link to="/coming-soon">Privacy Policy</Link></li>
              <li><Link to="/coming-soon">Terms of Use</Link></li>
              <li><Link to="/coming-soon">Online Preferences</Link></li>
              <li><Link to="/coming-soon">Ad Choices</Link></li>
              <li><Link to="/coming-soon">User Generated Content Permission Terms</Link></li>
              <li><Link to="/coming-soon">Accessibility Statement</Link></li>
              <li><Link to="/coming-soon">✓ Your Privacy Choices</Link></li>
              <li><Link to="/coming-soon">Notice At Collection</Link></li>
              <li><Link to="/coming-soon">Consumer Health Data Notice</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom mt-4">
          <p>&copy; {new Date().getFullYear()} BIOSILIN Derma Pharmaceuticals. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
