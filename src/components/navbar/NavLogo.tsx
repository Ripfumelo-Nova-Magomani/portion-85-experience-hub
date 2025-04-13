
import React from 'react';

interface NavLogoProps {
  isScrolled: boolean;
}

const NavLogo: React.FC<NavLogoProps> = ({ isScrolled }) => {
  return (
    <a href="#home" className="flex items-center">
      <img 
        src="/portion85-logo.png" 
        alt="Portion 85 Logo" 
        className={`h-10 md:h-12 transition-all duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-100'
        }`}
      />
    </a>
  );
};

export default NavLogo;
