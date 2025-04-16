
import React from 'react';

interface MapPathProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}

const MapPath: React.FC<MapPathProps> = ({
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
      strokeWidth="2.5"
      fill="none"
      strokeDasharray="5,5"
      className="animate-dash opacity-70 drop-shadow-sm"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
};

export default MapPath;
