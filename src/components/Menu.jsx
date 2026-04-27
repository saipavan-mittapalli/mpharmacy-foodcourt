import React from 'react';
import './Menu.css';

import pudinaImg from '../assets/pudina.jpg';
import garlicImg from '../assets/garlic.jpg';
import hingImg from '../assets/hing.jpg';
import khattaImg from '../assets/khatta.jpg';
import gingerImg from '../assets/ginger.jpg';
import jeeraImg from '../assets/jeera.jpg';

import panipuriImg from '../assets/panipuri.png';
import dahipuriImg from '../assets/dahipuri.png';
import sevpuriImg from '../assets/sevpuri.png';
import masalapuriImg from '../assets/masalapuri.png';
import cutletImg from '../assets/cutlet.png';
import bhelpuriImg from '../assets/bhelpuri.png';




const Menu = () => {
  const chatItems = [
  { name: "Pani Puri", desc: "Classic crisp spheres with 6 signature waters.", image: panipuriImg },
  { name: "Dahi Puri", desc: "Creamy yogurt, chutneys, and fine sev.", image: dahipuriImg },
  { name: "Sev Puri", desc: "Loaded with potatoes, onions, and crispy sev.", image: sevpuriImg },
  { name: "Masala Puri", desc: "Crushed puris in a warm, spiced pea gravy.", image: masalapuriImg },
  { name: "Cutlet", desc: "Hearty mashed potato patty with spicy peas.", image: cutletImg },
  { name: "Bhelpuri", desc: "Tangy puffed rice mix with fresh veggies.", image: bhelpuriImg }
];

  const flavors = [
    { name: "Classic Pudina", benefit: "Refreshing & Cooling", image: pudinaImg },
    { name: "Garlic Punch", benefit: "Heart-Healthy Spice", image: garlicImg },
    { name: "Medicinal Hing", benefit: "Boosts Digestion", image: hingImg },
    { name: "Khatta Meetha", benefit: "Balanced Harmony", image: khattaImg },
    { name: "Zesty Ginger", benefit: "Immunity Booster", image: gingerImg },
    { name: "Jeera Special", benefit: "Metabolism Support", image: jeeraImg }
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">
      
        <div className="menu-header">
          <span className="subtitle">Medical Grade Purity</span>
          <h2 className="title">Signature <span>Flavors</span></h2>
          <p>Infused with natural herbs and Kangen water for maximum health benefits.</p>
        </div>

        <div className="menu-grid">
          {flavors.map((f, i) => (
            <div className="menu-card" key={i}>
              <div className="menu-card-image" style={{ backgroundImage: `url(${f.image})` }}></div>
              <div className="menu-card-content">
                <h3>{f.name}</h3>
                <p>{f.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-header chat-header">
          <span className="subtitle">Street Classics</span>
          <h2 className="title">Chat <span>Specialties</span></h2>
          <p>Every item is prepared with 100% hygiene and premium ingredients.</p>
        </div>

        <div className="menu-grid">
          {chatItems.map((item, i) => (
            <div className="menu-card" key={i}>
              <div className="menu-card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="menu-card-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;