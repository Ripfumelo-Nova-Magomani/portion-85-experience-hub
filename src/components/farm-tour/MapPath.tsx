
import React from 'react';

interface MapPathProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  highlighted?: boolean;
}

const MapPath: React.FC<MapPathProps> = ({
  fromX, fromY, toX, toY, highlighted = false
}) => {
  // Calculate control points for a curved path
  const midX = (fromX + toX) / 2;
  const midY = fromY < toY ? (fromY + toY) / 2 - 10 : (fromY + toY) / 2 + 10;

  // Path definition for SVG (quadratic bezier curve)
  const path = `M${fromX},${fromY} Q${midX},${midY} ${toX},${toY}`;

  // Determine path styling based on whether it's highlighted
  const strokeColor = highlighted ? "#FF4500" : "#FF7F50";
  const strokeWidth = highlighted ? "5" : "3";
  const strokeDasharray = highlighted ? "10,5" : "5,5";
  const animationClass = highlighted ? "animate-dash-fast" : "animate-dash";

  return (
    <path
      d={path}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="none"
      strokeDasharray={strokeDasharray}
      className={animationClass}
    />
  );
};

export default MapPath;
