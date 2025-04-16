
import { ReactNode } from 'react';

export type LocationType = {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  description: string;
  image: string;
  icon: ReactNode;
};
