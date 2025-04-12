
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { initScrollAnimation } from '../utils/animation';
import { CheckIcon } from 'lucide-react';

const ConferencingPage = () => {
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
        <div className="w-full h-[60vh] bg-black/40 bg-blend-overlay bg-cover bg-center" 
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?conference,meeting')" }}>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animated-scroll-item">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                Conferencing at Portion 85
              </h1>
              <p className="text-white text-lg md:text-xl mb-8">
                Expert planning, world-class facilities, and a unique farm environment for your next meeting or event
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animated-scroll-item">
              <h2 className="section-title text-center mb-8">Our Conference Facilities</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Portion 85, we provide exceptional conference facilities set in the serene environment of our farm in Centurion. 
                With 25 different facilities across our property, we can accommodate everything from intimate strategy sessions to 
                large corporate events, all while surrounded by nature.
              </p>
              <p className="text-lg text-gray-700">
                Our conference packages combine professional meeting spaces with unique farm-to-table catering options and 
                team-building opportunities that aren't available in conventional conference venues.
              </p>
            </div>

            {/* Packages */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="feature-card p-6 animated-scroll-item">
                <h3 className="text-2xl font-serif font-bold text-p85-green-dark mb-4">Half-Day Package</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Conference room setup of your choice',
                    'AV equipment and Wi-Fi',
                    'Morning OR afternoon refreshment break',
                    'Farm-inspired lunch buffet',
                    'Notepads and pens',
                    'Mineral water and mints',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-p85-sunset flex-shrink-0 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-bold text-p85-earth">Starting from R395 per person</p>
              </div>

              <div className="feature-card p-6 animated-scroll-item">
                <h3 className="text-2xl font-serif font-bold text-p85-green-dark mb-4">Full-Day Package</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Conference room setup of your choice',
                    'AV equipment and Wi-Fi',
                    'Morning AND afternoon refreshment breaks',
                    'Farm-inspired lunch buffet',
                    'Notepads and pens',
                    'Mineral water and mints',
                    'Complimentary farm tour',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-p85-sunset flex-shrink-0 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-bold text-p85-earth">Starting from R595 per person</p>
              </div>
            </div>

            {/* Conference Room Types */}
            <div className="mb-16 animated-scroll-item">
              <h2 className="section-title text-center mb-8">Conference Room Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 border border-p85-green/20 rounded-lg bg-p85-green/5 text-center">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-2">Boardroom</h3>
                  <p className="text-gray-700">Ideal for executive meetings</p>
                  <p className="mt-2 font-semibold">Up to 20 people</p>
                </div>
                <div className="p-4 border border-p85-green/20 rounded-lg bg-p85-green/5 text-center">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-2">Classroom</h3>
                  <p className="text-gray-700">Perfect for training sessions</p>
                  <p className="mt-2 font-semibold">Up to 50 people</p>
                </div>
                <div className="p-4 border border-p85-green/20 rounded-lg bg-p85-green/5 text-center">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-2">Theatre</h3>
                  <p className="text-gray-700">Suitable for presentations</p>
                  <p className="mt-2 font-semibold">Up to 100 people</p>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mb-16 animated-scroll-item">
              <h2 className="section-title text-center mb-8">Unique Add-ons</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="feature-card overflow-hidden rounded-lg">
                  <img src="https://source.unsplash.com/random/600x400/?farm,teambuilding" alt="Team Building" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-p85-green-dark mb-2">Team Building Activities</h3>
                    <p className="text-gray-700 mb-4">
                      From farm-based challenges to wine processing simulations, our team-building activities 
                      combine fun with learning in a unique agricultural setting.
                    </p>
                  </div>
                </div>
                <div className="feature-card overflow-hidden rounded-lg">
                  <img src="https://source.unsplash.com/random/600x400/?organic,food" alt="Farm-to-Table Dining" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-p85-green-dark mb-2">Farm-to-Table Dining</h3>
                    <p className="text-gray-700 mb-4">
                      Experience our special farm-to-table dining options featuring fresh produce from our farm, 
                      paired with wines from our simulation facility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-p85-earth/10 p-8 rounded-lg animated-scroll-item">
              <h2 className="text-3xl font-serif font-bold text-p85-green-dark mb-4">Ready to book your conference?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Contact our events team to discuss your specific requirements and create a custom package for your next event.
              </p>
              <a href="/reservation" className="inline-block bg-p85-sunset hover:bg-p85-sunset/90 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Make a Reservation
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConferencingPage;
