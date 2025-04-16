
import React, { useState, useEffect } from 'react';
import LocationPin from './farm-tour/LocationPin';
import LocationDetailDialog from './farm-tour/LocationDetailDialog';
import MapPathsGenerator from './farm-tour/MapPathsGenerator';
import { locations } from './farm-tour/locations-data';
import { LocationType } from './farm-tour/types';

const FarmTourMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Control the staggered animation of location pins
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000); // Give paths time to animate before showing pins
    
    return () => clearTimeout(timer);
  }, []);

  const handleLocationClick = (location: LocationType) => {
    setSelectedLocation(location);
  };

  const closeDialog = () => {
    setSelectedLocation(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-p85-green-light/10 to-p85-earth-light/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-6 text-center">Farm Tour Map</h2>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          Explore our farm by clicking on the location markers to discover all the exciting spots at Portion 85!
        </p>
        
        <div className="relative mx-auto w-full max-w-4xl aspect-[4/3] bg-gradient-to-br from-[#e3f4e1] to-[#c8e6c3] rounded-xl shadow-xl overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-20 bg-pattern"></div>
          <div className="absolute top-1/4 left-1/3 w-64 h-32 rounded-full bg-p85-green-light/40 transform -rotate-12"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-24 rounded-full bg-p85-earth-light/40"></div>
          <div className="absolute top-1/2 right-1/4 w-36 h-36 rounded-full bg-p85-sky-light/40"></div>
          
          {/* Map container with SVG for paths */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%" className="absolute inset-0">
              <MapPathsGenerator locations={locations} />
            </svg>
            
            {/* Location pins with staggered animation */}
            <div className={`transition-opacity duration-700 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
              {locations.map((location, index) => (
                <div 
                  key={location.id}
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 200 + 1000}ms`, animationFillMode: 'both' }}
                >
                  <LocationPin
                    location={location}
                    onClick={handleLocationClick}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Map legend */}
          <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg shadow-md border border-white animate-fade-in">
            <h3 className="text-lg font-semibold text-p85-green-dark mb-1">Portion 85 Tour</h3>
            <p className="text-sm text-muted-foreground">Click on markers to explore</p>
          </div>
        </div>
        
        {/* Location dialog */}
        <LocationDetailDialog 
          location={selectedLocation}
          open={selectedLocation !== null}
          onOpenChange={closeDialog}
        />
      </div>
    </section>
  );
};

export default FarmTourMap;
