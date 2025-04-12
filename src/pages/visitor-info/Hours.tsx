
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { initScrollAnimation } from '../../utils/animation';
import { Clock, Calendar, AlertTriangle } from 'lucide-react';

const Hours = () => {
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
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?farm,clock')" }}>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animated-scroll-item">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                Trading Hours
              </h1>
              <p className="text-white text-lg md:text-xl">
                When to visit Portion 85
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Opening Hours */}
            <div className="mb-12 animated-scroll-item">
              <div className="flex items-center mb-8">
                <Clock className="text-p85-green-dark h-8 w-8 mr-3" />
                <h2 className="section-title">Trading Hours</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Weekdays */}
                <div className="bg-pattern p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Weekdays
                  </h3>
                  
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Monday:</span>
                      <span>9:00am – 16:30pm</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Tuesday:</span>
                      <span>9:00am – 16:30pm</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Wednesday:</span>
                      <span>9:00am – 16:30pm</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Thursday:</span>
                      <span>9:00am – 16:30pm</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Friday:</span>
                      <span>9:00am – 16:30pm</span>
                    </li>
                  </ul>
                </div>
                
                {/* Weekends */}
                <div className="bg-pattern p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Weekends
                  </h3>
                  
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Saturday:</span>
                      <span>9:00am – 16:30pm</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Sunday:</span>
                      <span>9:00am – 16:30pm</span>
                    </li>
                    <li className="pt-4 text-sm text-gray-600">
                      <span className="font-medium">Public Holidays:</span>
                      <span className="block mt-1">9:00am – 16:30pm</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Special Notice */}
              <div className="mt-8 p-4 bg-p85-sunset/10 border border-p85-sunset/20 rounded-lg flex items-start">
                <AlertTriangle className="h-5 w-5 text-p85-sunset mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm">
                  <strong>Note:</strong> Portion 85 will be closed on Christmas day. We may also have altered hours 
                  during other major holidays, please check our social media or call us to confirm before your visit 
                  during these times.
                </p>
              </div>
            </div>
            
            {/* Last Entry Info */}
            <div className="animated-scroll-item">
              <div className="bg-pattern p-6 rounded-lg">
                <h3 className="text-xl font-bold text-p85-green-dark mb-4">Important Information</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-p85-green flex items-center justify-center mt-0.5">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-gray-700">
                      Last entry is 1 hour before closing time (15:30pm).
                    </p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-p85-green flex items-center justify-center mt-0.5">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-gray-700">
                      Guided tours run every hour, with the last tour starting at 15:00pm.
                    </p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-p85-green flex items-center justify-center mt-0.5">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-gray-700">
                      Weekend demonstrations and special activities run from 12:00pm to 15:00pm.
                    </p>
                  </li>
                </ul>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    For any questions about our trading hours, please contact us at:
                  </p>
                  <p className="font-bold text-p85-green-dark mt-1">067 963 4795</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hours;
