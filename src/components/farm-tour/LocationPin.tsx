
import React from 'react';
import { MapPin } from 'lucide-react';
import { LocationType } from './types';

interface LocationPinProps {
  location: LocationType;
  onClick: (location: LocationType) => void;
}

const LocationPin: React.FC<LocationPinProps> = ({ location, onClick }) => {
  return (
    <div
      className="absolute cursor-pointer transition-all duration-300 transform hover:scale-110 group"
      style={{ 
        left: `${location.coordinates.x}%`, 
        top: `${location.coordinates.y}%` 
      }}
      onClick={() => onClick(location)}
    >
      <div className="relative flex flex-col items-center">
        {/* Location icon in circle */}
        <div className="mb-1 bg-white rounded-full p-2 shadow-md border border-gray-100 transition-transform duration-300 group-hover:shadow-lg z-10">
          <div className="text-p85-sunset">
            {location.icon}
          </div>
        </div>
        
        {/* Location name card */}
        <div className="bg-white px-3 py-1.5 rounded-md shadow text-p85-green-dark font-medium text-sm min-w-24 text-center border border-gray-100 transition-all duration-300 group-hover:shadow-md">
          {location.name}
        </div>
        
        {/* Pin that connects to the ground */}
        <div className="absolute top-14 transform -z-10">
          <MapPin 
            size={32} 
            className="text-p85-sunset drop-shadow" 
            fill="#FF7F50" 
            fillOpacity={0.7} 
          />
        </div>
      </div>
    </div>
  );
};

export default LocationPin;
