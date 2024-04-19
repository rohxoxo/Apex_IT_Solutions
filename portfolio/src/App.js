import React  from 'react';
import NavBar from './components/NAVBAR/NavBar';
import HeroSection from './components/hero/HeroSection';
import Video from './components/video/Video';
import BecomeAClient from './components/BecomeAClient/BecomeAClient';
import ContactUs from './components/contactUs/ContactUs';

export default function App() {

  

  return (
      <div className="main">  
        <NavBar />
        <HeroSection />
        <Video />
        <BecomeAClient />
        <ContactUs />
      </div>
  );
}
