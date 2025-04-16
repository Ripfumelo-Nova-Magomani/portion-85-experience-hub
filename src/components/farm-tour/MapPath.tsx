
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
      strokeWidth="3"
      fill="none"
      strokeDasharray="5,5"
      className="animate-dash"
    />
  );
};

export default MapPath;
