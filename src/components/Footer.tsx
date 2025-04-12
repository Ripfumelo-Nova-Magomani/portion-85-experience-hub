
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-p85-green-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">PORTION 85</h3>
            <p className="mb-4">
              Providing farming, educational tourism, education, skills development, training, job creation and business development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-p85-sunset transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-p85-sunset transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-p85-sunset transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-p85-sunset transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-p85-sunset transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-p85-sunset transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-p85-sunset transition-colors duration-300">Our Facilities</a>
              </li>
              <li>
                <a href="#services" className="hover:text-p85-sunset transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-p85-sunset transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>Farming Experiences</li>
              <li>Educational Tourism</li>
              <li>Skills Development</li>
              <li>Training Programs</li>
              <li>Wine Processing Simulation</li>
              <li>Venue Hire</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="mb-2">Ms Siyanda Bani</p>
            <p className="mb-2">067 963 4795</p>
            <p className="mb-2">info@portion85.co.za</p>
            <p>Portion 85 M26 Knopjeslaagte, Centurion, 0014</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="flex justify-center items-center">
            &copy; {currentYear} Portion 85. All Rights Reserved. Made with <Heart size={16} className="mx-1 text-p85-sunset" /> in South Africa
          </p>
          <p className="mt-2 text-sm opacity-75">
            <a href="https://www.portion85.co.za" className="hover:text-p85-sunset transition-colors duration-300">www.portion85.co.za</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
