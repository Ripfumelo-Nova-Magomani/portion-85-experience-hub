
import React from 'react';

interface NavLogoProps {
  isScrolled: boolean;
}

const NavLogo: React.FC<NavLogoProps> = ({ isScrolled }) => {
  return (
    <a href="#home" className="flex items-center">
      <div className={`font-serif font-bold text-2xl md:text-3xl transition-colors duration-300 flex items-center ${
        isScrolled ? 'text-black' : 'text-white'
      }`}>
        PORTION <span className="text-[#F97316]">85</span>
      </div>
    </a>
  );
};

export default NavLogo;
