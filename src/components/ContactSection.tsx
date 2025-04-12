
import React from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative bg-gradient-to-br from-p85-green-light/20 to-p85-earth-light/20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-16 animated-scroll-item">CONTACT US</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animated-scroll-item">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-p85-green-dark mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-p85-sunset">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Contact Person</h4>
                    <p className="text-gray-700">Ms Siyanda Bani</p>
                    <p className="text-gray-700">067 963 4795</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-p85-sunset">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Address</h4>
                    <p className="text-gray-700">Portion 85 M26 Knopjeslaagte</p>
                    <p className="text-gray-700">Centurion, 0014</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-p85-sunset">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email / RSVP</h4>
                    <a href="mailto:info@portion85.co.za" className="text-gray-700 hover:text-p85-sunset transition-colors">
                      info@portion85.co.za
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-3">Our Services Include:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="mr-2 text-p85-sunset" />
                    <span>Farm Experiences</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="mr-2 text-p85-sunset" />
                    <span>Educational Programs</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="mr-2 text-p85-sunset" />
                    <span>Skills Development Workshops</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="mr-2 text-p85-sunset" />
                    <span>Venue Hire for Private Events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animated-scroll-item">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-p85-green-dark mb-6">Send Us a Message</h3>
              
              <form action="#" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-p85-green focus:border-p85-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-p85-green focus:border-p85-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-p85-green focus:border-p85-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-p85-green focus:border-p85-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-p85-green focus:border-p85-green"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-p85-green text-white py-2 px-6 rounded-md hover:bg-p85-green-dark transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
