import React from 'react';
import './Story.css';
import purnimaImg from '../assets/purnima.png'; 

const Story = () => {
  return (
    <section className="story-section" id="story">
      <div className="story-container">
        

        <div className="story-visual">
          <div className="experience-badge">
            <span className="years">M. Pharmacy</span>
            <span className="type">Qualified</span>
          </div>
          <img src={purnimaImg} alt="Purnima - M Pharmacy Panipuri" className="story-img" />
          <div className="story-accent-box"></div>
        </div>


        <div className="story-content">
          <span className="story-subtitle">Our Journey</span>
          <h2 className="story-title">From Medicine to <span>Street Gastronomy</span></h2>
          
          <div className="story-text">
            <p>
              Founded by <strong>Purnima</strong>, a Master of Pharmacy graduate and former Biology teacher, 
              M Pharmacy Panipuri was born out of a vision to redefine street food in Karimnagar. 
            </p>
            <p>
              Combining her deep understanding of health and science with a passion for traditional flavors, 
              she introduced a "scientific" approach to Panipuri focusing on medical grade hygiene and 
              the use of alkaline Kangen water.
            </p>
            <p className="story-highlight">
              "It’s not just about the taste; it’s about the trust you feel when you know exactly 
              how your food is prepared."
            </p>
          </div>

          <div className="story-stats">
            <div className="stat-item">
              <h4>100%</h4>
              <p>Kangen Water</p>
            </div>
            <div className="stat-item">
              <h4>6</h4>
              <p>Natural Infusions</p>
            </div>
            <div className="stat-item">
              <h4>0</h4>
              <p>Artificial Colors</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;