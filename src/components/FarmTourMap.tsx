
import React, { useState } from 'react';
import LocationPin from './farm-tour/LocationPin';
import LocationDetailDialog from './farm-tour/LocationDetailDialog';
import MapPathsGenerator from './farm-tour/MapPathsGenerator';
import { locations } from './farm-tour/locations-data';
import { LocationType } from './farm-tour/types';

const FarmTourMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);

  const handleLocationClick = (location: LocationType) => {
    setSelectedLocation(location);
  };

  const closeDialog = () => {
    setSelectedLocation(null);
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
              <MapPathsGenerator locations={locations} />
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
