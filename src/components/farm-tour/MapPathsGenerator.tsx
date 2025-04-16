
import React from 'react';
import MapPath from './MapPath';
import { LocationType } from './types';

interface MapPathsGeneratorProps {
  locations: LocationType[];
}

const MapPathsGenerator: React.FC<MapPathsGeneratorProps> = ({ locations }) => {
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

  return <>{createPaths()}</>;
};

export default MapPathsGenerator;
