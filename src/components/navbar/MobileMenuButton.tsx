
import React from 'react';
import { MenuIcon, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  isScrolled: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ 
  isMenuOpen, 
  isScrolled, 
  toggleMenu 
}) => {
  return (
    <button 
      className="md:hidden"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      {isMenuOpen ? (
        <X className={isScrolled ? 'text-p85-green-dark' : 'text-white'} size={24} />
      ) : (
        <MenuIcon className={isScrolled ? 'text-p85-green-dark' : 'text-white'} size={24} />
      )}
    </button>
  );
};

export default MobileMenuButton;
