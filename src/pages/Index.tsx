
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import FacilitiesSection from '../components/FacilitiesSection';
import ServicesSection from '../components/ServicesSection';
import FarmTourMap from '../components/FarmTourMap';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { initScrollAnimation } from '../utils/animation';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanupAnimation = initScrollAnimation();
    
    // Handle anchor navigation for when user clicks on navbar links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a small delay to ensure the navbar is fully visible
          setTimeout(() => {
            const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navbarHeight,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Check for hash in URL on initial load
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup function
    return () => {
      cleanupAnimation();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div id="home">
        <HeroSlider />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="facilities">
        <FacilitiesSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="tour-map" className="animated-scroll-item">
        <FarmTourMap />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
