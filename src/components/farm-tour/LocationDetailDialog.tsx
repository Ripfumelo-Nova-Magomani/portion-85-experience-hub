
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LocationType } from './types';

interface LocationDetailDialogProps {
  location: LocationType | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LocationDetailDialog: React.FC<LocationDetailDialogProps> = ({ 
  location, 
  open, 
  onOpenChange 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        {location && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-p85-green-dark">
                {location.name}
              </DialogTitle>
              <DialogDescription className="text-base pt-2">
                {location.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 rounded-md overflow-hidden">
              <img 
                src={location.image} 
                alt={location.name} 
                className="w-full h-64 object-cover"
              />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LocationDetailDialog;
