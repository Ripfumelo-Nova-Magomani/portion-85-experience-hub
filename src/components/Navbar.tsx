
import React, { useState, useEffect } from 'react';
import { MenuIcon, X, ChevronDown, MapPin, DollarSign, Clock, Calendar, Utensils, Users, Cake, Book, Wine } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <div className={`font-serif font-bold text-2xl md:text-3xl transition-colors duration-300 ${
              isScrolled ? 'text-p85-green-dark' : 'text-white'
            }`}>
              PORTION 85
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/"
                    className={`px-4 py-2 font-medium hover:text-p85-sunset transition-colors duration-300 ${
                      isScrolled ? 'text-p85-green-dark' : 'text-white'
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/#about"
                    className={`px-4 py-2 font-medium hover:text-p85-sunset transition-colors duration-300 ${
                      isScrolled ? 'text-p85-green-dark' : 'text-white'
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                {/* Portion 85 Events Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`px-4 py-2 font-medium hover:text-p85-sunset transition-colors duration-300 ${
                      isScrolled ? 'text-p85-green-dark bg-transparent hover:bg-transparent' : 'text-white bg-transparent hover:bg-transparent'
                    }`}
                  >
                    Portion 85 Events
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4 bg-white">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/events/guided-tours" className="flex items-center p-2 hover:bg-muted rounded-md">
                            <Users className="mr-2 h-4 w-4" />
                            <span>Guided Tours</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/events/birthday-parties" className="flex items-center p-2 hover:bg-muted rounded-md">
                            <Cake className="mr-2 h-4 w-4" />
                            <span>Birthday Parties</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/events/school-groups" className="flex items-center p-2 hover:bg-muted rounded-md">
                            <Users className="mr-2 h-4 w-4" />
                            <span>School Groups</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/events/educational" className="flex items-center p-2 hover:bg-muted rounded-md">
                            <Book className="mr-2 h-4 w-4" />
                            <span>Wire Educational Event</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/events/wine-sip" className="flex items-center p-2 hover:bg-muted rounded-md">
                            <Wine className="mr-2 h-4 w-4" />
                            <span>Wine & Sip</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Visitor Info Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`px-4 py-2 font-medium hover:text-p85-sunset transition-colors duration-300 ${
                      isScrolled ? 'text-p85-green-dark bg-transparent hover:bg-transparent' : 'text-white bg-transparent hover:bg-transparent'
                    }`}
                  >
                    Visitor Info
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4 bg-white">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/visitor-info/directions" className="flex items-center p-2 hover:bg-muted rounded-md">
                            <MapPin className="mr-2 h-4 w-4" />
                            <span>How to get there</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/visitor-info/prices" className="flex items-center p-2 hover:bg-muted rounded-md">
                            <DollarSign className="mr-2 h-4 w-4" />
                            <span>Admission Prices</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/visitor-info/hours" className="flex items-center p-2 hover:bg-muted rounded-md">
                            <Clock className="mr-2 h-4 w-4" />
                            <span>Trading Hours</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/visitor-info/plan" className="flex items-center p-2 hover:bg-muted rounded-md">
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>Plan your day</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/visitor-info/dining" className="flex items-center p-2 hover:bg-muted rounded-md">
                            <Utensils className="mr-2 h-4 w-4" />
                            <span>Where to eat</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/conferencing"
                    className={`px-4 py-2 font-medium hover:text-p85-sunset transition-colors duration-300 ${
                      isScrolled ? 'text-p85-green-dark' : 'text-white'
                    }`}
                  >
                    Conferencing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/reservation"
                    className={`px-4 py-2 font-medium hover:text-p85-sunset transition-colors duration-300 ${
                      isScrolled ? 'text-p85-green-dark' : 'text-white'
                    }`}
                  >
                    Reservation
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/#contact"
                    className={`px-4 py-2 font-medium hover:text-p85-sunset transition-colors duration-300 ${
                      isScrolled ? 'text-p85-green-dark' : 'text-white'
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-p85-green-dark' : 'text-white'} size={24} />
            ) : (
              <MenuIcon className={isScrolled ? 'text-p85-green-dark' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="text-p85-green-dark font-medium py-2 hover:text-p85-sunset transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/#about"
                className="text-p85-green-dark font-medium py-2 hover:text-p85-sunset transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Dropdowns */}
              <div className="border-b border-gray-200 py-2">
                <div className="flex justify-between items-center cursor-pointer text-p85-green-dark hover:text-p85-sunset" 
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling;
                    if (content) content.classList.toggle('hidden');
                  }}>
                  <span className="font-medium">Portion 85 Events</span>
                  <ChevronDown size={18} />
                </div>
                <div className="hidden pl-4 mt-2 space-y-2">
                  <Link to="/events/guided-tours" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={() => setIsMenuOpen(false)}>
                    Guided Tours
                  </Link>
                  <Link to="/events/birthday-parties" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={() => setIsMenuOpen(false)}>
                    Birthday Parties
                  </Link>
                  <Link to="/events/school-groups" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={() => setIsMenuOpen(false)}>
                    School Groups
                  </Link>
                  <Link to="/events/educational" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={() => setIsMenuOpen(false)}>
                    Wire Educational Event
                  </Link>
                  <Link to="/events/wine-sip" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={() => setIsMenuOpen(false)}>
                    Wine & Sip
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-200 py-2">
                <div className="flex justify-between items-center cursor-pointer text-p85-green-dark hover:text-p85-sunset" 
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling;
                    if (content) content.classList.toggle('hidden');
                  }}>
                  <span className="font-medium">Visitor Info</span>
                  <ChevronDown size={18} />
                </div>
                <div className="hidden pl-4 mt-2 space-y-2">
                  <Link to="/visitor-info/directions" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={() => setIsMenuOpen(false)}>
                    How to get there
                  </Link>
                  <Link to="/visitor-info/prices" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={() => setIsMenuOpen(false)}>
                    Admission Prices
                  </Link>
                  <Link to="/visitor-info/hours" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={() => setIsMenuOpen(false)}>
                    Trading Hours
                  </Link>
                  <Link to="/visitor-info/plan" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={() => setIsMenuOpen(false)}>
                    Plan your day
                  </Link>
                  <Link to="/visitor-info/dining" className="block py-1 text-p85-green hover:text-p85-sunset" onClick={() => setIsMenuOpen(false)}>
                    Where to eat
                  </Link>
                </div>
              </div>

              <Link 
                to="/conferencing"
                className="text-p85-green-dark font-medium py-2 hover:text-p85-sunset transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Conferencing
              </Link>

              <Link 
                to="/reservation"
                className="text-p85-green-dark font-medium py-2 hover:text-p85-sunset transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservation
              </Link>

              <Link 
                to="/#contact"
                className="text-p85-green-dark font-medium py-2 hover:text-p85-sunset transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
