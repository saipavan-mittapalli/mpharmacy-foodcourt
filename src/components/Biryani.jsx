import React from 'react';
import './Biryani.css';
import biryaniImg from '../assets/biryani.jpg'; 

const Biryani = () => {
  return (
    <section className="biryani-section" id='biryani'>
      <div className="biryani-container">

        
        <div className="biryani-content">
          <span className="biryani-badge">New Arrival</span>
          <h2 className="biryani-title">Aromatic <br /><span>Chicken Biryani</span></h2>
          <p className="biryani-desc">
            Bringing  Karimnagar’s favorite comfort food. <br/>
            Our Biryani is slow-cooked with premium Basmati rice, hand-ground spices and pure Ghee. Absolutely no 
            artificial colors or tasting salts.
          </p>
          
          <ul className="biryani-features">
            <li>✨ Authentic Wood-Fired Biryani</li>
            <li>✨ 100% Natural Hand-ground spices</li>
            <li>✨ Desi Ghee</li>
            <li>✨ Premium Long-Grain Basmati</li>
            <li>✨ Hygienic Preparation</li>
          </ul>

        </div>

        <div className="biryani-visual">
          <div className="steam-effect"></div>
          <img src={biryaniImg} alt="M Pharmacy Chicken Biryani" className="biryani-img" />
        </div>

      </div>
    </section>
  );
};

export default Biryani;