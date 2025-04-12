
import React from 'react';
import { Wine, Camera, Bike, Utensils, Coffee, SunMedium } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Wine Processing Simulation',
    description: 'Experience the complete wine-making process from grape crushing to bottling.',
    icon: Wine
  },
  {
    id: 2,
    title: 'Guided Tours',
    description: 'Explore our facilities with knowledgeable guides who share insights about our operations.',
    icon: Bike
  },
  {
    id: 3,
    title: 'Photography Sessions',
    description: 'Capture memorable moments in our scenic surroundings with professional photography services.',
    icon: Camera
  },
  {
    id: 4,
    title: 'Restaurant & Dining',
    description: 'Enjoy farm-to-table cuisine featuring fresh ingredients grown on our property.',
    icon: Utensils
  },
  {
    id: 5,
    title: 'Café & Refreshments',
    description: 'Relax and recharge with beverages and light snacks at our welcoming café.',
    icon: Coffee
  },
  {
    id: 6,
    title: 'Outdoor Activities',
    description: 'Participate in various outdoor recreational activities suitable for all ages.',
    icon: SunMedium
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title inline-block mb-6 animated-scroll-item">EXPERIENCES & SERVICES</h2>
          <p className="text-lg text-gray-700 animated-scroll-item">
            Discover a variety of unique experiences and services designed to create lasting memories and meaningful connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-gray-50 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animated-scroll-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-p85-sunset">
                <service.icon size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-p85-green-dark">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-p85-earth/10 rounded-lg p-8 animated-scroll-item">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-p85-earth mb-2">Looking for a Unique Venue?</h3>
              <p className="text-gray-700">
                Our facilities are available for private events, corporate functions, and special occasions.
              </p>
            </div>
            <a 
              href="#contact" 
              className="inline-block bg-p85-earth text-white py-2 px-6 rounded-md hover:bg-p85-earth-dark transition-colors duration-300 whitespace-nowrap"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
