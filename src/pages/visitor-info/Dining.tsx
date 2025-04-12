
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { initScrollAnimation } from '../../utils/animation';
import { Utensils, Coffee, Wine, AlertTriangle } from 'lucide-react';

const Dining = () => {
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
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?farm,restaurant')" }}>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animated-scroll-item">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                Where to Eat
              </h1>
              <p className="text-white text-lg md:text-xl">
                Dining options at Portion 85
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Restaurant Info */}
            <div className="mb-12 animated-scroll-item">
              <div className="flex items-center mb-8">
                <Utensils className="text-p85-green-dark h-8 w-8 mr-3" />
                <h2 className="section-title">Farm Fresh Restaurant</h2>
              </div>
              
              <div className="bg-pattern p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-6 text-lg">
                  Our Farm Fresh Restaurant is rated as serving the best farm-to-table cuisine in the area!
                </p>
                
                <div className="mb-6 p-4 bg-p85-sunset/10 border border-p85-sunset/20 rounded-lg flex items-start">
                  <AlertTriangle className="h-5 w-5 text-p85-sunset mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> All beverages must be purchased from our restaurant. 
                    We do not allow cooler boxes into the farm.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-p85-green-dark mb-2">Opening Hours:</h3>
                    <p className="text-gray-700">Daily: 9:30am - 16:00pm</p>
                  </div>
                  
                  <div className="flex space-x-3">
                    <div className="px-3 py-1 bg-p85-green text-white rounded-full text-sm">
                      Breakfast
                    </div>
                    <div className="px-3 py-1 bg-p85-green text-white rounded-full text-sm">
                      Lunch
                    </div>
                    <div className="px-3 py-1 bg-p85-green text-white rounded-full text-sm">
                      Snacks
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Menu */}
            <div className="animated-scroll-item">
              <div className="flex items-center mb-8">
                <Coffee className="text-p85-green-dark h-8 w-8 mr-3" />
                <h2 className="section-title">Our Menu</h2>
              </div>
              
              <div className="bg-pattern p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-p85-green-dark mb-4 text-center">
                  FARM PIZZA MENU – Large only
                </h3>
                
                <p className="text-gray-700 mb-6 text-center">
                  All our pizzas are made with fresh farm ingredients and baked the traditional way 
                  in our wood-fired oven, all with homemade tomato sauce & mozzarella cheese.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                    <div className="mb-6">
                      <h4 className="font-bold text-p85-earth-dark mb-2">Gardener's Delight</h4>
                      <p className="text-gray-700">Farm chicken, red onion, mushroom, sun-dried tomato and avocado</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-p85-earth-dark mb-2">Farmer's Special</h4>
                      <p className="text-gray-700">Salami, ham, mushroom, onion, peppers, chilli, garlic and olives</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-p85-earth-dark mb-2">Harvest Chicken</h4>
                      <p className="text-gray-700">Chicken, mushroom, pineapple and sweet and sour sauce</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-p85-earth-dark mb-2">Country Bacon</h4>
                      <p className="text-gray-700">Bacon, mushroom, onion, avocado, garlic</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-p85-earth-dark mb-2">Garden Vegetable</h4>
                      <p className="text-gray-700">Ham, Mushroom, Olives and green pepper</p>
                    </div>
                  </div>
                  
                  <div className="md:pl-6">
                    <div className="mb-6">
                      <h4 className="font-bold text-p85-earth-dark mb-2">Barnyard</h4>
                      <p className="text-gray-700">Chicken and mushroom</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-p85-earth-dark mb-2">Gourmet</h4>
                      <p className="text-gray-700">Camembert cheese, bacon, chicken and Avocado</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-p85-earth-dark mb-2">Smokey</h4>
                      <p className="text-gray-700">Bacon, salami, peppadews</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-p85-earth-dark mb-2">Farm Special</h4>
                      <p className="text-gray-700">Farm sausage, onion, mushroom, garlic, sweet and sour sauce</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-p85-earth-dark mb-2">Spicy Harvest</h4>
                      <p className="text-gray-700">Fresh Chilli, mushrooms, salami, chicken and blue cheese</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-pattern p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Coffee className="h-6 w-6 text-p85-sunset mr-3" />
                    <h3 className="text-xl font-bold text-p85-green-dark">Light Meals & Snacks</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex justify-between text-gray-700">
                      <span>Farm Burgers</span>
                      <span>Various</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Fresh Salads</span>
                      <span>Various</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Sandwiches</span>
                      <span>Various</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Homemade Pies</span>
                      <span>Various</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Kids Meals</span>
                      <span>Various</span>
                    </li>
                  </ul>
                  
                  <p className="mt-4 text-sm text-gray-600">
                    * Full menu available at the restaurant
                  </p>
                </div>
                
                <div className="bg-pattern p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Wine className="h-6 w-6 text-p85-sunset mr-3" />
                    <h3 className="text-xl font-bold text-p85-green-dark">Beverages</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex justify-between text-gray-700">
                      <span>Freshly Brewed Coffee</span>
                      <span>Various</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Specialty Teas</span>
                      <span>Various</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Fresh Fruit Juices</span>
                      <span>Various</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Soft Drinks</span>
                      <span>Various</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Milkshakes</span>
                      <span>Various</span>
                    </li>
                  </ul>
                  
                  <p className="mt-4 text-sm text-gray-600">
                    * Full beverage menu available at the restaurant
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

export default Dining;
