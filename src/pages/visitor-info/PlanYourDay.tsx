
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { initScrollAnimation } from '../../utils/animation';
import { Calendar, Clock, Info, Camera, Sun, MapPin } from 'lucide-react';

const PlanYourDay = () => {
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
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?farm,planning')" }}>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animated-scroll-item">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                Plan Your Day
              </h1>
              <p className="text-white text-lg md:text-xl">
                Get the most out of your visit to Portion 85
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Daily Schedule */}
            <div className="mb-12 animated-scroll-item">
              <div className="flex items-center mb-8">
                <Calendar className="text-p85-green-dark h-8 w-8 mr-3" />
                <h2 className="section-title">Plan Your Day</h2>
              </div>
              
              <div className="bg-pattern p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-6">
                  Get some insight for your day out at Portion 85 Educational Farm.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-p85-green-dark mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 mb-1">During the week:</p>
                      <p className="text-gray-700">
                        Tours and farm animal interactions happen as you arrive or every hour. Our guides are 
                        ready to show you our 25 different facilities and explain the educational aspects of our farm.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-p85-green-dark mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 mb-1">Weekends and public holidays:</p>
                      <p className="text-gray-700">
                        Animal and farm interactions are scheduled every hour, with special demonstrations 
                        throughout the day.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-p85-green-dark mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 mb-1">Wine processing demonstrations:</p>
                      <p className="text-gray-700">
                        Saturdays and Sundays from 12:00 during the guided tours and will continue until 15:00 
                        with each guided tour. Experience our unique wine processing simulation and learn about 
                        the entire process from fruit to bottle.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-p85-green-dark mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 mb-1">Educational farming presentations:</p>
                      <p className="text-gray-700">
                        Sundays and Public Holidays at 11:00. Our guide presents a special show about 
                        sustainable farming practices and agricultural education. This is separate from 
                        the regular farm interaction experience.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* What to Bring */}
            <div className="animated-scroll-item">
              <div className="flex items-center mb-8">
                <Info className="text-p85-green-dark h-8 w-8 mr-3" />
                <h2 className="section-title">What to Bring When Visiting Portion 85</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-pattern p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Sun className="h-6 w-6 text-p85-sunset mr-3" />
                    <h3 className="text-xl font-bold text-p85-green-dark">Be Sun Smart</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    Gauteng's sun can be quite fierce, even during winter, so remember to bring:
                  </p>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                      A hat or cap
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                      Sunglasses
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                      Sunscreen (SPF 30+)
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                      Light, breathable clothing
                    </li>
                  </ul>
                </div>
                
                <div className="bg-pattern p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Camera className="h-6 w-6 text-p85-sunset mr-3" />
                    <h3 className="text-xl font-bold text-p85-green-dark">Camera</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    There will be plenty of fantastic photo opportunities during your visit, so make sure you bring:
                  </p>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                      Camera or smartphone
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                      Extra memory cards
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                      Spare batteries or power bank
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                      Selfie stick (optional)
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-pattern p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-p85-sunset mr-3" />
                  <h3 className="text-xl font-bold text-p85-green-dark">Additional Recommendations</h3>
                </div>
                
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                    Comfortable walking shoes (you'll be exploring our 25 different facilities)
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                    Reusable water bottle (water refill stations available throughout the farm)
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                    A light jacket or sweater (for variable weather conditions)
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-p85-green-dark mr-2"></span>
                    Cash or card for purchases at our restaurant and gift shop
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-p85-sunset/10 border border-p85-sunset/20 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> Outside food and beverages are permitted in designated picnic areas only. 
                    Our restaurant offers a variety of refreshments and meals for purchase.
                  </p>
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

export default PlanYourDay;
