import React from 'react';
import './Drinks.css';

const faloodaImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606668/falooda_lvoutq.jpg";
const badamMilkImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606668/badam-milk_gfl8vw.png";
const kesariBadamMilkImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606671/kesar-badam-milk_qkjhrt.png";
const roseMilkImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606671/rose-milk_kbysr2.png";
const pistaMilkImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606670/pista-milk_oi74rg.png";
const splLassiImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606671/lassi_n4mzzj.png"; 
const juiceImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606669/juice_o1gw8v.png";
const veggieJuiceImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606671/veggies_ihn9ci.png";
const sharbatImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606670/sharbath_m9rekr.png";
const mocktailImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606669/mocktail_vtzp7l.png";
const fruitSaladImg = "https://res.cloudinary.com/dadeb48sd/image/upload/v1776606674/fruit-salad_ntffjg.png";


const Drinks = () => {
  const drinksData = [
    { name: "Falooda", img: faloodaImg },
    { name: "Badam Milk", img: badamMilkImg },
    { name: "Kesari Badam Milk", img: kesariBadamMilkImg },
    { name: "Rose Milk",  img: roseMilkImg },
    { name: "Pista Milk", img: pistaMilkImg },
    { name: "SPL Lassi", img: splLassiImg },
    { name: "Fruit Salad", img: fruitSaladImg },
    { name: "Juice", img: juiceImg },
    { name: "Veggie Juice", img: veggieJuiceImg },
    { name: "Sharbat", img: sharbatImg },
    { name: "Mocktail", img: mocktailImg }
  ];

  return (
    <section className="drinks-section" id='drinks'>
      <div className="drinks-header">
        <span className="subtitle">Summer Coolers</span>
        <h2 className="title">Hygiene Meet <span>Refreshment</span></h2>
        <p>100% natural, made with Alkaline water and premium milk. No chemical colors.</p>
      </div>

      <div className="drinks-grid">
        {drinksData.map((drink, index) => (
          <div className="drink-card" key={index}>
            <div 
              className="drink-visual-circle" 
              style={{ backgroundImage: `url(${drink.img})` }}
            >
            </div>
            <h3>{drink.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Drinks;