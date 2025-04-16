
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LocationType } from './types';

interface GuidedTourControlsProps {
  locations: LocationType[];
  currentLocationIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const GuidedTourControls: React.FC<GuidedTourControlsProps> = ({
  locations,
  currentLocationIndex,
  onNext,
  onPrevious,
  onClose,
  isOpen
}) => {
  if (!isOpen) return null;

  const totalLocations = locations.length;
  const currentLocation = locations[currentLocationIndex];
  
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg z-50 w-full max-w-md transition-all duration-300 ease-in-out animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-p85-green-dark">
          Guided Tour: {currentLocation?.name}
        </h3>
        <Button variant="ghost" size="sm" onClick={onClose} className="text-muted-foreground">
          Exit Tour
        </Button>
      </div>
      
      <div className="relative h-1 w-full bg-muted mb-4 rounded-full overflow-hidden">
        <div 
          className="absolute h-full bg-p85-sunset transition-all duration-300 ease-out"
          style={{ width: `${((currentLocationIndex + 1) / totalLocations) * 100}%` }}
        ></div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        Location {currentLocationIndex + 1} of {totalLocations}
      </p>
      
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={onPrevious} 
          disabled={currentLocationIndex === 0}
          className="flex items-center gap-1"
        >
          <ChevronLeft size={18} />
          Previous
        </Button>
        
        <Button 
          onClick={onNext} 
          disabled={currentLocationIndex === totalLocations - 1}
          className="flex items-center gap-1 bg-p85-sunset hover:bg-p85-sunset/80"
        >
          Next
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default GuidedTourControls;
