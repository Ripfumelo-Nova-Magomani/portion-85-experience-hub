
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Users, Cake, Book, Wine, MapPin, DollarSign, Clock, Calendar, Utensils } from 'lucide-react';

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ isScrolled }) => {
  const linkClasses = `px-4 py-2 font-medium hover:text-p85-sunset transition-colors duration-300 ${
    isScrolled ? 'text-p85-green-dark' : 'text-white'
  }`;

  const triggerClasses = `px-4 py-2 font-medium hover:text-p85-sunset transition-colors duration-300 ${
    isScrolled ? 'text-p85-green-dark bg-transparent hover:bg-transparent' : 'text-white bg-transparent hover:bg-transparent'
  }`;

  return (
    <nav className="hidden md:flex items-center space-x-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className={linkClasses}>Home</Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/#about" className={linkClasses}>About</Link>
          </NavigationMenuItem>

          {/* Portion 85 Events Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className={triggerClasses}>
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
            <NavigationMenuTrigger className={triggerClasses}>
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
            <Link to="/conferencing" className={linkClasses}>Conferencing</Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/reservation" className={linkClasses}>Reservation</Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/#contact" className={linkClasses}>Contact</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNav;
