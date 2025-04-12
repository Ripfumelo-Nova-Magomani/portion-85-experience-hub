
import React, { useState } from 'react';
import NavLogo from './navbar/NavLogo';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import MobileMenuButton from './navbar/MobileMenuButton';
import { useNavbarScroll } from './navbar/useNavbarScroll';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useNavbarScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLogo isScrolled={isScrolled} />
          <DesktopNav isScrolled={isScrolled} />
          <MobileMenuButton 
            isMenuOpen={isMenuOpen} 
            isScrolled={isScrolled} 
            toggleMenu={toggleMenu} 
          />
        </div>
      </div>

      <MobileNav 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
    </header>
  );
};

export default Navbar;
