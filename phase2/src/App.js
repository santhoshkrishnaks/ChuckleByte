import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
    <Navigation/>
      <HeroSection />
      <AboutUs />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
