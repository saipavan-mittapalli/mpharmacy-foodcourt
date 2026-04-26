import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Story from './components/Story';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Menu from './components/Menu';
import Biryani from './components/Biryani';
import Cookies from './components/Cookies';
import Drinks from './components/Drinks';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Features />
      <Menu />
      <Biryani />
      <Cookies />
      <Drinks />
      <Media />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
