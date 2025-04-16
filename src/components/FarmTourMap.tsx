
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Utensils, Farm, Palette, Wine, Cat } from 'lucide-react';

type LocationType = {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  description: string;
  image: string;
  icon: React.ReactNode;
};

const locations: LocationType[] = [
  {
    id: "gate",
    name: "Main Gate",
    coordinates: { x: 15, y: 60 },
    description: "Welcome to Portion 85! Your adventure begins at our beautiful entrance gate.",
    image: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <MapPin size={24} className="text-p85-sunset" fill="#FF7F50" fillOpacity={0.8} />
  },
  {
    id: "restaurant",
    name: "Farm Restaurant",
    coordinates: { x: 35, y: 75 },
    description: "Enjoy farm-to-table dining with fresh ingredients harvested right from our property.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <Utensils size={24} className="text-p85-sunset" />
  },
  {
    id: "planting",
    name: "Where We Plant",
    coordinates: { x: 55, y: 60 },
    description: "Explore our sustainable farming practices and see where we grow our organic produce.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <Farm size={24} className="text-p85-sunset" />
  },
  {
    id: "artgallery",
    name: "Art Gallery",
    coordinates: { x: 70, y: 40 },
    description: "Discover local artistry and craftsmanship in our rural-themed gallery space.",
    image: "https://images.unsplash.com/photo-1545033131-485ea67fd7c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <Palette size={24} className="text-p85-sunset" />
  },
  {
    id: "winery",
    name: "Wine Processing Rooms",
    coordinates: { x: 85, y: 25 },
    description: "See how we create our award-winning wines from vineyard to bottle.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <Wine size={24} className="text-p85-sunset" />
  },
  {
    id: "animals",
    name: "Side of Animals",
    coordinates: { x: 25, y: 25 },
    description: "Meet our friendly farm animals and learn about ethical animal husbandry.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <Cat size={24} className="text-p85-sunset" />
  },
];

const LocationPin: React.FC<{
  location: LocationType;
  onClick: (location: LocationType) => void;
}> = ({ location, onClick }) => {
  return (
    <div
      className="absolute cursor-pointer transition-transform hover:scale-110"
      style={{ 
        left: `${location.coordinates.x}%`, 
        top: `${location.coordinates.y}%` 
      }}
      onClick={() => onClick(location)}
    >
      <div className="relative">
        {/* Pin icon */}
        <MapPin size={36} className="text-p85-sunset drop-shadow-lg" fill="#FF7F50" fillOpacity={0.6} />
        
        {/* Small visual representation */}
        <div className="absolute -left-6 -top-16 flex flex-col items-center gap-1">
          <div className="p-2 bg-white rounded-full shadow-md">
            {location.icon}
          </div>
          <div className="text-xs bg-white px-2 py-1 rounded shadow text-p85-green-dark font-medium w-24 text-center">
            {location.name}
          </div>
        </div>
      </div>
    </div>
  );
};

const MapPath: React.FC<{ fromX: number; fromY: number; toX: number; toY: number }> = ({
  fromX, fromY, toX, toY
}) => {
  // Calculate control points for a curved path
  const midX = (fromX + toX) / 2;
  const midY = fromY < toY ? (fromY + toY) / 2 - 10 : (fromY + toY) / 2 + 10;

  // Path definition for SVG (quadratic bezier curve)
  const path = `M${fromX},${fromY} Q${midX},${midY} ${toX},${toY}`;

  return (
    <path
      d={path}
      stroke="#FF7F50"
      strokeWidth="3"
      fill="none"
      strokeDasharray="5,5"
      className="animate-dash"
    />
  );
};

const FarmTourMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);

  const handleLocationClick = (location: LocationType) => {
    setSelectedLocation(location);
  };

  const closeDialog = () => {
    setSelectedLocation(null);
  };

  // Create paths connecting locations in order
  const createPaths = () => {
    const paths = [];
    for (let i = 0; i < locations.length - 1; i++) {
      const from = locations[i];
      const to = locations[i + 1];
      
      // Get the center positions of the pins
      const fromX = from.coordinates.x;
      const fromY = from.coordinates.y;
      const toX = to.coordinates.x;
      const toY = to.coordinates.y;
      
      paths.push(
        <MapPath 
          key={`path-${from.id}-to-${to.id}`} 
          fromX={fromX} 
          fromY={fromY} 
          toX={toX} 
          toY={toY} 
        />
      );
    }
    // Connect the last location back to the first for a complete tour
    const firstLocation = locations[0];
    const lastLocation = locations[locations.length - 1];
    paths.push(
      <MapPath
        key="path-last-to-first"
        fromX={lastLocation.coordinates.x}
        fromY={lastLocation.coordinates.y}
        toX={firstLocation.coordinates.x}
        toY={firstLocation.coordinates.y}
      />
    );
    
    return paths;
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12 text-center">Farm Tour Map</h2>
        <p className="text-center text-lg mb-8">
          Explore our farm by clicking on the map pins to discover all the exciting locations!
        </p>
        
        <div className="relative mx-auto w-full max-w-4xl aspect-[4/3] bg-gradient-to-br from-[#e3f4e1] to-[#a8e0a2] rounded-lg shadow-xl overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-pattern"></div>
          
          {/* Farm features (silhouette) */}
          <div className="absolute top-1/4 left-1/3 w-64 h-32 rounded-full bg-p85-green-light/30 transform -rotate-12"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-24 rounded-full bg-p85-earth-light/40"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-p85-sky-light/30"></div>
          
          {/* Map container with SVG for paths */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%" className="absolute inset-0">
              {createPaths()}
            </svg>
            
            {/* Pins for each location */}
            {locations.map((location) => (
              <LocationPin
                key={location.id}
                location={location}
                onClick={handleLocationClick}
              />
            ))}
          </div>
          
          {/* Map legend */}
          <div className="absolute top-4 left-4 bg-white/80 p-3 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-p85-green-dark mb-1">Portion 85 Tour</h3>
            <p className="text-sm text-muted-foreground">Click on pins to explore</p>
          </div>
        </div>
        
        {/* Location dialog */}
        <Dialog open={selectedLocation !== null} onOpenChange={closeDialog}>
          <DialogContent className="sm:max-w-lg">
            {selectedLocation && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-p85-green-dark">
                    {selectedLocation.name}
                  </DialogTitle>
                  <DialogDescription className="text-base pt-2">
                    {selectedLocation.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 rounded-md overflow-hidden">
                  <img 
                    src={selectedLocation.image} 
                    alt={selectedLocation.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FarmTourMap;
