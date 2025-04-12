
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// Placeholder images - in a real project, these would be replaced with actual images
const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    title: 'PORTION 85',
    subtitle: 'Experience Farming & Educational Tourism',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    title: 'LEARN & GROW',
    subtitle: 'Skills Development & Training Programs',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1594396871059-e91a905ae0f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    title: '25 UNIQUE FACILITIES',
    subtitle: 'Creating Unforgettable Experiences',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="slider relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center' 
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="slide-content">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
            <a
              href="#about"
              className="inline-block bg-p85-sunset text-white py-2 px-6 rounded-md hover:bg-p85-sunset-dark transition-colors duration-300"
            >
              Discover More
            </a>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white z-20 cursor-pointer" onClick={scrollToAbout}>
        <ChevronDown size={32} className="animate-bounce-subtle" />
      </div>
    </div>
  );
};

export default HeroSlider;
