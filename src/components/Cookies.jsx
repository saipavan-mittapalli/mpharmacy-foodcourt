import React from 'react';
import './Cookies.css';
import cookiesImg from '../assets/cookies.png'; 

const Cookies = () => {
  return (
    <section className="cookies-section" id="cookies">
      <div className="cookies-container">
        
        <div className="cookies-visual">
          <img src={cookiesImg} alt="M Pharmacy Homemade Cookies" className="cookies-img" />
        </div>
        
        <div className="cookies-content">
          <span className="cookies-badge">Freshly Baked</span>
          <h2 className="cookies-title">Homemade <br /><span>Artisanal Cookies</span></h2>
          <p className="cookies-desc">
            We ask our customers to try our range of cookies for an excellent experience and taste. 
            Every batch is homemade, healthy, and made using 100% natural products. 
            No preservatives or artificial sweeteners—just pure, baked goodness.
          </p>
          
          <ul className="cookies-features">
            <li>🍪 100% Natural Ingredients</li>
            <li>🍪 Healthy & Nutritious</li>
            <li>🍪 Traditional Homemade Taste</li>
          </ul>
        </div>


      </div>
    </section>
  );
};

export default Cookies;