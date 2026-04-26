import React from 'react';
import './Features.css';

const Features = () => {
  const data = [
    {
      title: "Standards",
      desc: "Designed with the hygiene precision of a Master of Pharmacy graduate.",
      icon: "🧪"
    },
    {
      title: "Alkaline Water",
      desc: "We exclusively use Alkaline water for pure, healthy flavors.",
      icon: "💧"
    },
    {
      title: "Zero Artificials",
      desc: "100% natural herbs and hand-ground spices. No chemical colors.",
      icon: "🌿"
    }
  ];

  return (
    <section className="features-section" id='features'>
      <div className="features-container">
        {data.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-text">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;