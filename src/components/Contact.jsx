import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-info">
          <span className="subtitle">Get in Touch</span>
          <h2 className="title">Visit Our <span>Food Court</span></h2>
          <p className="contact-desc">
            Experience the hygiene of M Pharmacy Panipuri in person. 
            Located conveniently for all Karimnagar foodies.
          </p>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-text">
              <h4>Location</h4>
              <p>Beside RTC workshop 2nd gate,  Sitarampur, Karimnagar, Telangana 505001</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-text">
              <h4>Phone</h4>
              <p>+91 90595 17074</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📸</div>
            <div className="info-text">
              <h4>Instagram</h4>
              <a href="https://www.instagram.com/m_pharmacy_panipuri_wali_pro/" target="_blank" rel="noreferrer">
                @m_pharmacy_panipuri_wali_pro
              </a>
            </div>
          </div>
          
          <div className="social-actions">
            <a href="https://wa.me/919059517074" className="btn-whatsapp">Chat on WhatsApp</a>
          </div>
        </div>

        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1601.1033396202197!2d79.11405834530574!3d18.460382703537036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd9001e721ef7%3A0xab224da0d3321397!2sMPharmacy%20Food%20Court%20-%20Karimnagar!5e1!3m2!1sen!2sin!4v1776609700442!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;