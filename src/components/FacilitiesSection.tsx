
import React from 'react';
import { Tractor, GraduationCap, School, FlaskConical, BookOpen, Users } from 'lucide-react';

const facilities = [
  {
    id: 1,
    title: 'FARMING',
    description: 'Experience sustainable farming practices and agricultural techniques firsthand.',
    icon: Tractor,
    color: 'bg-p85-green',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
  },
  {
    id: 2,
    title: 'EDUCATIONAL TOURISM',
    description: 'Educational tourism happens in a way that promotes knowledge, enhances skills, educates and also enables research opportunities.',
    icon: BookOpen,
    color: 'bg-p85-earth',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
  },
  {
    id: 3,
    title: 'EDUCATION',
    description: 'Learn about agriculture, sustainability, and environmental conservation through our educational programs.',
    icon: School,
    color: 'bg-p85-sky',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2622&q=80'
  },
  {
    id: 4,
    title: 'SKILLS DEVELOPMENT',
    description: 'Develop practical skills in agriculture, hospitality, and environmental management.',
    icon: FlaskConical,
    color: 'bg-p85-sunset',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
  {
    id: 5,
    title: 'TRAINING',
    description: 'Specialized training programs for individuals and groups in various agricultural and tourism-related fields.',
    icon: GraduationCap,
    color: 'bg-p85-green',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
  },
  {
    id: 6,
    title: 'JOB CREATION & BUSINESS DEVELOPMENT',
    description: 'Supporting local communities through employment opportunities and business initiatives.',
    icon: Users,
    color: 'bg-p85-earth',
    image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
  },
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-16 animated-scroll-item">OUR FACILITIES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={facility.id} 
              className="feature-card animated-scroll-item"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className={`absolute top-4 right-4 ${facility.color} p-3 rounded-full text-white`}>
                  <facility.icon size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-p85-green-dark">{facility.title}</h3>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animated-scroll-item">
          <p className="text-lg mb-4">We also provide venue hire for private events</p>
          <a 
            href="#contact" 
            className="inline-block bg-p85-sunset text-white py-2 px-6 rounded-md hover:bg-p85-sunset-dark transition-colors duration-300"
          >
            Book Your Event
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
