
import React from 'react';

interface NavLogoProps {
  isScrolled: boolean;
}

const NavLogo: React.FC<NavLogoProps> = ({ isScrolled }) => {
  return (
    <a href="#home" className="flex items-center">
      <div className={`font-serif font-bold text-2xl md:text-3xl transition-colors duration-300 ${
        isScrolled ? 'text-p85-green-dark' : 'text-white'
      }`}>
        PORTION 85
      </div>
    </a>
  );
};

export default NavLogo;
