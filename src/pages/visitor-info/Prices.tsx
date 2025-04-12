
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { initScrollAnimation } from '../../utils/animation';
import { DollarSign, Check, Info } from 'lucide-react';

const Prices = () => {
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
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?farm,tickets')" }}>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animated-scroll-item">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                Admission Prices
              </h1>
              <p className="text-white text-lg md:text-xl">
                Experience the educational farm at Portion 85
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Price Table */}
            <div className="mb-12 animated-scroll-item">
              <div className="flex items-center mb-8">
                <DollarSign className="text-p85-green-dark h-8 w-8 mr-3" />
                <h2 className="section-title">Portion 85 Entrance Fees</h2>
              </div>
              
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-p85-green-dark">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                        Visitor Category
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Adult
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        R115
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Pensioner
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        R100
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Child
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        R85
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>* Children under 2 years enter free</p>
                <p>* Group discounts available for 15+ people (Please contact us for pricing)</p>
              </div>
            </div>
            
            {/* What's Included */}
            <div className="animated-scroll-item">
              <div className="flex items-center mb-6">
                <Info className="text-p85-green-dark h-8 w-8 mr-3" />
                <h2 className="section-title">What is included in your entrance fee at Portion 85?</h2>
              </div>
              
              <div className="bg-pattern p-8 rounded-lg">
                <p className="text-gray-700 mb-6">
                  Your entrance fee provides a full experience at our educational farm, including:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-p85-green flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-gray-700">
                      Interaction with farm animals and agricultural displays assisted by a professional guide, 
                      who will provide educational information about our farming practices.
                    </p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-p85-green flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-gray-700">
                      A guided tour where our knowledgeable staff will explain our 25 different facilities 
                      and the various educational aspects of Portion 85.
                    </p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-p85-green flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-gray-700">
                      On Saturdays and Sundays from noon until 15:00 with every tour, you will get a chance 
                      to see our special wine processing simulation demonstration.
                    </p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-p85-green flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-gray-700">
                      Access to all general areas including our educational displays, farming exhibits, 
                      and observation areas.
                    </p>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-p85-sunset/10 border border-p85-sunset/20 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <strong>Note:</strong> Special events, private tours, and workshop activities may incur 
                    additional fees. Please check our Events section or contact us for more information.
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

export default Prices;
