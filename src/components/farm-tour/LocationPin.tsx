
import React from 'react';
import { MapPin } from 'lucide-react';
import { LocationType } from './types';

interface LocationPinProps {
  location: LocationType;
  onClick: (location: LocationType) => void;
  highlightClass?: string;
}

const LocationPin: React.FC<LocationPinProps> = ({ location, onClick, highlightClass = '' }) => {
  return (
    <div
      className={`absolute cursor-pointer transition-transform hover:scale-110 ${highlightClass}`}
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

export default LocationPin;
