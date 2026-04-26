import React from 'react';
import './Hero.css';

// Image Imports - Ensure these paths match your src/assets folder exactly
import bannerImage from '../assets/banner1.jpg'; 
import mainHeroImg from '../assets/hero.png';
import panipuriIcon from '../assets/panipuri.png';
import biryaniIcon from '../assets/biryani.jpg';
import drinksIcon from '../assets/badam-milk.png';
import cookiesIcon from '../assets/cookies.png';

const Hero = () => {
  return (
    <>

      <section className="hero-section" id="home">

        <div className="hero-brand">
          
          <h1 className="hero-brand-title">
            M.PHARMACY <span>FOOD COURT</span>
          </h1>
          <p className="hero-desc">
            Infused with health, powered by purity. 
            Serving Karimnagar’s most hygienic Panipuri, Biryani, and artisanal treats. <br/>
            All prepared exclusively with alkaline water.
          </p>
          <h3>
            Follow us on Instagram for daily updates and behind-the-scenes glimpses of our Kitchen.
          </h3>
          <a 
              href="https://www.instagram.com/m_pharmacy_panipuri_wali_pro/" 
              target="_blank" 
              rel="noreferrer" 
              className="instagram-badge"
            >
              <span className="ig-icon">📸</span>
              <span>@m_pharmacy_panipuri_wali_pro</span>
          </a>
        </div>

        <div className="hero-wrapper">
          
          {/* 2. LEFT CONTENT SIDE */}
          <div className="hero-content">
            <div className="status-badge">✨ 100% Hygienic & Natural</div>
            
            <h1 className="hero-title">
              The Science of <br /><span>Perfect Taste.</span>
            </h1>
            
            <p className="hero-description">
              Founded by an M. Pharmacy graduate, we bring pharmaceutical-grade 
              cleanliness to Karimnagar's favorite street treats using Kangen water.
            </p>

            {/* 3. PRODUCT RANGE BAR (With Images) */}
            <div className="product-range">
              <div className="range-item">
                <div className="range-img-wrapper">
                  <img src={panipuriIcon} alt="Panipuri" />
                </div>
                <span className="range-label">Panipuri</span>
              </div>
              
              <div className="range-divider"></div>

              <div className="range-item">
                <div className="range-img-wrapper">
                  <img src={biryaniIcon} alt="Biryani" />
                </div>
                <span className="range-label">Biryani</span>
              </div>

              <div className="range-divider"></div>

              <div className="range-item">
                <div className="range-img-wrapper">
                  <img src={drinksIcon} alt="Drinks" />
                </div>
                <span className="range-label">Cool Drinks</span>
              </div>

              <div className="range-divider"></div>

              <div className="range-item">
                <div className="range-img-wrapper">
                  <img src={cookiesIcon} alt="Cookies" />
                </div>
                <span className="range-label">Cookies</span>
              </div>
            </div>

            {/* 4. CALL TO ACTION BUTTONS */}
            <div className="hero-btns">
              <a href="#menu" className="btn-primary">Explore Menu</a>
              <a href="#contact" className="btn-secondary">Visit Us</a>
            </div>
          </div>

          {/* 5. RIGHT VISUAL SIDE */}
          <div className="hero-visual">
            <img src={mainHeroImg} alt="M Pharmacy Specials" className="main-img" />
            <div className="blob-shape"></div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;