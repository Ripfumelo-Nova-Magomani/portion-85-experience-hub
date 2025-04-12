
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { initScrollAnimation } from '../../utils/animation';
import { MapPin, Navigation, Map } from 'lucide-react';

const Directions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const cleanupAnimation = initScrollAnimation();
    
    return () => {
      cleanupAnimation();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-16 lg:pt-0">
        <div className="w-full h-[40vh] bg-black/40 bg-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?farm,map')" }}>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animated-scroll-item">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                How to Get to Portion 85
              </h1>
              <p className="text-white text-lg md:text-xl">
                Find your way to our educational farm experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* GPS Coordinates */}
            <div className="mb-12 animated-scroll-item">
              <div className="flex items-center mb-4">
                <MapPin className="text-p85-green-dark h-8 w-8 mr-3" />
                <h2 className="section-title">GPS Coordinates</h2>
              </div>
              <div className="bg-pattern p-6 rounded-lg">
                <p className="text-xl font-medium text-center">25° 58' 39.5'' S</p>
                <p className="text-xl font-medium text-center">27° 56' 40.5'' E</p>
              </div>
            </div>
            
            {/* Directions */}
            <div className="animated-scroll-item">
              <div className="flex items-center mb-6">
                <Navigation className="text-p85-green-dark h-8 w-8 mr-3" />
                <h2 className="section-title">Directions</h2>
              </div>
              
              <div className="space-y-8">
                <div className="bg-pattern p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-3">From Johannesburg South</h3>
                  <p className="text-gray-700">
                    From the N3 turn onto Malibongwe (R512) towards Lanseria Airport, past Ferreiras Northriding and 
                    cross over Witkoppen Rd, past Kya Sands, Past Cosmo City on left, downhill and up long hill. 
                    Continue straight until you reach M26. Turn right and Portion 85 will be 2.5km on the left.
                  </p>
                </div>
                
                <div className="bg-pattern p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-3">From Pretoria</h3>
                  <p className="text-gray-700">
                    Take the R28/N14 to Krugersdorp, turn off at the R512 (Lanseria/Randburg) offramp and keep 
                    to the left (South) towards Randburg. Continue for approximately 10km, then turn onto M26 Knopjeslaagte.
                    Portion 85 will be 2.5km on the left.
                  </p>
                </div>
                
                <div className="bg-pattern p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-3">From Johannesburg Central / Northern Suburbs</h3>
                  <p className="text-gray-700">
                    From the M1/N1, after the Woodmead Offramp take Western Bypass (N3), take the William Nicol Offramp (R511) 
                    past Monte Casino, turn left into Witkoppen, and keep right. At the first traffic light, turn right onto 
                    Cedar Rd. Drive 8 km on Cedar until the T-junction. Turn left at the junction (M26) and travel 300m. 
                    Portion 85 is on the right hand side.
                  </p>
                </div>
                
                <div className="bg-pattern p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-3">From Sandton</h3>
                  <p className="text-gray-700">
                    Take William Nicol Drive (R511) northbound. Continue past Fourways Mall and Monte Casino. 
                    Turn left onto Witkoppen Road, then right onto Cedar Road. Follow Cedar Road for approximately 
                    8km until it intersects with M26. Turn left onto M26 Knopjeslaagte and Portion 85 will be 300m 
                    on the right.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed Placeholder */}
            <div className="mt-12 animated-scroll-item">
              <div className="flex items-center mb-6">
                <Map className="text-p85-green-dark h-8 w-8 mr-3" />
                <h2 className="section-title">Interactive Map</h2>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* In a real implementation, you would embed a Google Map here */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Interactive map would be embedded here</p>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-600">
                For assistance with directions, please call us at: <span className="font-bold">067 963 4795</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Directions;
