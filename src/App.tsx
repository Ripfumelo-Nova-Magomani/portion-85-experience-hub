
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Conferencing from "./pages/Conferencing";
import Reservation from "./pages/Reservation";
import Directions from "./pages/visitor-info/Directions";
import Prices from "./pages/visitor-info/Prices";
import Hours from "./pages/visitor-info/Hours";
import PlanYourDay from "./pages/visitor-info/PlanYourDay";
import Dining from "./pages/visitor-info/Dining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conferencing" element={<Conferencing />} />
          <Route path="/reservation" element={<Reservation />} />
          
          {/* Visitor Info Routes */}
          <Route path="/visitor-info/directions" element={<Directions />} />
          <Route path="/visitor-info/prices" element={<Prices />} />
          <Route path="/visitor-info/hours" element={<Hours />} />
          <Route path="/visitor-info/plan" element={<PlanYourDay />} />
          <Route path="/visitor-info/dining" element={<Dining />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
