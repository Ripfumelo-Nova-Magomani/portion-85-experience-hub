
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LocationType } from './types';

interface LocationDetailDialogProps {
  location: LocationType | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isInTour?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  tourPosition?: {
    current: number;
    total: number;
  };
}

const LocationDetailDialog: React.FC<LocationDetailDialogProps> = ({ 
  location, 
  open, 
  onOpenChange,
  isInTour = false,
  onNext,
  onPrevious,
  tourPosition
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
            
            {isInTour && tourPosition && (
              <>
                <div className="mt-4 flex items-center justify-center">
                  <div className="text-sm text-muted-foreground">
                    {tourPosition.current} of {tourPosition.total}
                  </div>
                </div>
                <DialogFooter className="flex justify-between mt-4">
                  <Button 
                    variant="outline" 
                    onClick={onPrevious}
                    disabled={tourPosition.current === 1}
                    className="flex items-center gap-1"
                  >
                    <ChevronLeft size={18} />
                    Previous
                  </Button>
                  
                  <Button 
                    onClick={onNext}
                    disabled={tourPosition.current === tourPosition.total}
                    className="flex items-center gap-1 bg-p85-sunset hover:bg-p85-sunset/80"
                  >
                    Next
                    <ChevronRight size={18} />
                  </Button>
                </DialogFooter>
              </>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LocationDetailDialog;
