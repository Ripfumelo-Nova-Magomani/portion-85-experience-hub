
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    const content = e.currentTarget.nextElementSibling;
    if (content) content.classList.toggle('hidden');
  };

  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/"
            className="text-p85-green-dark font-medium py-2 hover:text-p85-sunset transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link 
            to="/#about"
            className="text-p85-green-dark font-medium py-2 hover:text-p85-sunset transition-colors duration-300"
            onClick={handleLinkClick}
          >
            About
          </Link>
          
          {/* Mobile Dropdowns */}
          <div className="border-b border-gray-200 py-2">
            <div 
              className="flex justify-between items-center cursor-pointer text-p85-green-dark hover:text-p85-sunset" 
              onClick={toggleDropdown}
            >
              <span className="font-medium">Portion 85 Events</span>
              <ChevronDown size={18} />
            </div>
            <div className="hidden pl-4 mt-2 space-y-2">
              <Link to="/events/guided-tours" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={handleLinkClick}>
                Guided Tours
              </Link>
              <Link to="/events/birthday-parties" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={handleLinkClick}>
                Birthday Parties
              </Link>
              <Link to="/events/school-groups" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={handleLinkClick}>
                School Groups
              </Link>
              <Link to="/events/educational" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={handleLinkClick}>
                Wire Educational Event
              </Link>
              <Link to="/events/wine-sip" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={handleLinkClick}>
                Wine & Sip
              </Link>
            </div>
          </div>

          <div className="border-b border-gray-200 py-2">
            <div 
              className="flex justify-between items-center cursor-pointer text-p85-green-dark hover:text-p85-sunset" 
              onClick={toggleDropdown}
            >
              <span className="font-medium">Visitor Info</span>
              <ChevronDown size={18} />
            </div>
            <div className="hidden pl-4 mt-2 space-y-2">
              <Link to="/visitor-info/directions" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={handleLinkClick}>
                How to get there
              </Link>
              <Link to="/visitor-info/prices" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={handleLinkClick}>
                Admission Prices
              </Link>
              <Link to="/visitor-info/hours" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={handleLinkClick}>
                Trading Hours
              </Link>
              <Link to="/visitor-info/plan" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={handleLinkClick}>
                Plan your day
              </Link>
              <Link to="/visitor-info/dining" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={handleLinkClick}>
                Where to eat
              </Link>
            </div>
          </div>

          <Link 
            to="/conferencing"
            className="text-p85-green-dark font-medium py-2 hover:text-p85-sunset transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Conferencing
          </Link>

          <Link 
            to="/reservation"
            className="text-p85-green-dark font-medium py-2 hover:text-p85-sunset transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Reservation
          </Link>

          <Link 
            to="/#contact"
            className="text-p85-green-dark font-medium py-2 hover:text-p85-sunset transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
