
import React, { useState } from 'react';
import LocationPin from './farm-tour/LocationPin';
import LocationDetailDialog from './farm-tour/LocationDetailDialog';
import MapPathsGenerator from './farm-tour/MapPathsGenerator';
import GuidedTourControls from './farm-tour/GuidedTourControls';
import { locations } from './farm-tour/locations-data';
import { LocationType } from './farm-tour/types';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

const FarmTourMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentTourIndex, setCurrentTourIndex] = useState(0);

  const handleLocationClick = (location: LocationType) => {
    setSelectedLocation(location);
  };

  const closeDialog = () => {
    setSelectedLocation(null);
  };

  const startTour = () => {
    setIsTourActive(true);
    setCurrentTourIndex(0);
    setSelectedLocation(locations[0]);
  };

  const endTour = () => {
    setIsTourActive(false);
    setSelectedLocation(null);
  };

  const goToNextLocation = () => {
    if (currentTourIndex < locations.length - 1) {
      const nextIndex = currentTourIndex + 1;
      setCurrentTourIndex(nextIndex);
      setSelectedLocation(locations[nextIndex]);
    }
  };

  const goToPreviousLocation = () => {
    if (currentTourIndex > 0) {
      const prevIndex = currentTourIndex - 1;
      setCurrentTourIndex(prevIndex);
      setSelectedLocation(locations[prevIndex]);
    }
  };

  // Highlight the current tour location pin if the tour is active
  const getHighlightClass = (locationId: string) => {
    if (isTourActive && locations[currentTourIndex].id === locationId) {
      return "animate-pulse border-4 border-p85-sunset bg-white rounded-full";
    }
    return "";
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12 text-center">Farm Tour Map</h2>
        <p className="text-center text-lg mb-8">
          Explore our farm by clicking on the map pins to discover all the exciting locations!
        </p>
        
        <div className="flex justify-center mb-6">
          <Button 
            onClick={startTour}
            className="bg-p85-sunset hover:bg-p85-sunset/80 text-white flex items-center gap-2"
            disabled={isTourActive}
          >
            <MapPin size={18} /> Start Guided Tour
          </Button>
        </div>
        
        <div className="relative mx-auto w-full max-w-4xl aspect-[4/3] bg-gradient-to-br from-[#e3f4e1] to-[#a8e0a2] rounded-lg shadow-xl overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-pattern"></div>
          
          {/* Farm features (silhouette) */}
          <div className="absolute top-1/4 left-1/3 w-64 h-32 rounded-full bg-p85-green-light/30 transform -rotate-12"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-24 rounded-full bg-p85-earth-light/40"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-p85-sky-light/30"></div>
          
          {/* Map container with SVG for paths */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%" className="absolute inset-0">
              <MapPathsGenerator locations={locations} highlightIndex={isTourActive ? currentTourIndex : -1} />
            </svg>
            
            {/* Pins for each location */}
            {locations.map((location) => (
              <LocationPin
                key={location.id}
                location={location}
                onClick={handleLocationClick}
                highlightClass={getHighlightClass(location.id)}
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
          onOpenChange={(open) => {
            if (!open) {
              closeDialog();
            }
          }}
          isInTour={isTourActive}
          onNext={isTourActive ? goToNextLocation : undefined}
          onPrevious={isTourActive ? goToPreviousLocation : undefined}
          tourPosition={isTourActive ? {
            current: currentTourIndex + 1,
            total: locations.length
          } : undefined}
        />
        
        {/* Guided tour controls */}
        <GuidedTourControls
          locations={locations}
          currentLocationIndex={currentTourIndex}
          onNext={goToNextLocation}
          onPrevious={goToPreviousLocation}
          onClose={endTour}
          isOpen={isTourActive}
        />
      </div>
    </section>
  );
};

export default FarmTourMap;
