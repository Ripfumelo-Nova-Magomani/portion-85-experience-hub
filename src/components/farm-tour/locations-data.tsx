
import React from 'react';
import { MapPin, Utensils, Palette, Wine, Cat } from 'lucide-react';
import { GiWheat } from 'react-icons/gi';
import { LocationType } from './types';

export const locations: LocationType[] = [
  {
    id: "gate",
    name: "Main Gate",
    coordinates: { x: 15, y: 60 },
    description: "Welcome to Portion 85! Your adventure begins at our beautiful entrance gate.",
    image: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <MapPin size={24} className="text-p85-sunset" fill="#FF7F50" fillOpacity={0.8} />
  },
  {
    id: "restaurant",
    name: "Farm Restaurant",
    coordinates: { x: 35, y: 75 },
    description: "Enjoy farm-to-table dining with fresh ingredients harvested right from our property.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <Utensils size={24} className="text-p85-sunset" />
  },
  {
    id: "planting",
    name: "Where We Plant",
    coordinates: { x: 55, y: 60 },
    description: "Explore our sustainable farming practices and see where we grow our organic produce.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <GiWheat size={24} className="text-p85-sunset" />
  },
  {
    id: "artgallery",
    name: "Art Gallery",
    coordinates: { x: 70, y: 40 },
    description: "Discover local artistry and craftsmanship in our rural-themed gallery space.",
    image: "https://images.unsplash.com/photo-1545033131-485ea67fd7c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <Palette size={24} className="text-p85-sunset" />
  },
  {
    id: "winery",
    name: "Wine Processing Rooms",
    coordinates: { x: 85, y: 25 },
    description: "See how we create our award-winning wines from vineyard to bottle.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <Wine size={24} className="text-p85-sunset" />
  },
  {
    id: "animals",
    name: "Side of Animals",
    coordinates: { x: 25, y: 25 },
    description: "Meet our friendly farm animals and learn about ethical animal husbandry.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    icon: <Cat size={24} className="text-p85-sunset" />
  },
];
