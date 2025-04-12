import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { initScrollAnimation } from '../utils/animation';
import { CalendarIcon, Users, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  eventType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

const ReservationPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    eventType: 'visit',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const cleanupAnimation = initScrollAnimation();
    
    return () => {
      cleanupAnimation();
    };
  }, []);

  const validateForm = () => {
    const errors: FormErrors = {};
    
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    if (!formData.guests) errors.guests = "Number of guests is required";
    
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          eventType: 'visit',
          message: '',
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-16 lg:pt-0">
        <div className="w-full h-[50vh] bg-black/40 bg-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?farm,booking')" }}>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animated-scroll-item">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                Make a Reservation
              </h1>
              <p className="text-white text-lg md:text-xl">
                Book your visit, event, or experience at Portion 85
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form Section */}
              <div className="animated-scroll-item">
                <h2 className="section-title mb-8">Book Your Experience</h2>
                
                {isSubmitted ? (
                  <div className="bg-p85-green/10 border border-p85-green rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-p85-green-dark mb-2">Thank You!</h3>
                    <p className="text-gray-700">
                      Your reservation request has been submitted successfully. We'll contact you shortly to confirm the details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-p85-green focus:border-p85-green ${
                          formErrors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-p85-green focus:border-p85-green ${
                            formErrors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-p85-green focus:border-p85-green ${
                            formErrors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Date*
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                            <CalendarIcon className="w-5 h-5" />
                          </span>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-p85-green focus:border-p85-green ${
                              formErrors.date ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                        </div>
                        {formErrors.date && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.date}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Time*
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                            <Clock className="w-5 h-5" />
                          </span>
                          <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-p85-green focus:border-p85-green ${
                              formErrors.time ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                        </div>
                        {formErrors.time && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.time}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Guests*
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                            <Users className="w-5 h-5" />
                          </span>
                          <input
                            type="number"
                            id="guests"
                            name="guests"
                            min="1"
                            value={formData.guests}
                            onChange={handleChange}
                            className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-p85-green focus:border-p85-green ${
                              formErrors.guests ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                        </div>
                        {formErrors.guests && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.guests}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                          Reservation Type
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-p85-green focus:border-p85-green"
                        >
                          <option value="visit">General Visit</option>
                          <option value="guided-tour">Guided Tour</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="school">School Group</option>
                          <option value="education">Educational Event</option>
                          <option value="wine">Wine & Sip Experience</option>
                          <option value="conference">Conference/Meeting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Requirements or Questions
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-p85-green focus:border-p85-green"
                      />
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 text-white font-medium rounded-md ${
                          isSubmitting ? 'bg-p85-green/70' : 'bg-p85-green hover:bg-p85-green-dark'
                        } transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-p85-green`}
                      >
                        {isSubmitting ? 'Processing...' : 'Submit Reservation Request'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Info Section */}
              <div className="animated-scroll-item">
                <h2 className="section-title mb-8">Reservation Information</h2>
                
                <div className="bg-pattern rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-4">General Visits</h3>
                  <p className="mb-4">
                    Experience our 25 different facilities that provide a variety of attractions for visitors.
                    From farming demonstrations to educational tours, there's something for everyone.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Reservations are recommended for groups of 10 or more.
                  </p>
                </div>
                
                <div className="bg-pattern rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-4">Special Events</h3>
                  <ul className="space-y-3">
                    <li>
                      <strong className="text-p85-earth-dark">Guided Tours:</strong> Explore the farm with our knowledgeable guides
                    </li>
                    <li>
                      <strong className="text-p85-earth-dark">Birthday Parties:</strong> Celebrate with a unique farm experience
                    </li>
                    <li>
                      <strong className="text-p85-earth-dark">School Groups:</strong> Educational outings for students of all ages
                    </li>
                    <li>
                      <strong className="text-p85-earth-dark">Educational Events:</strong> Hands-on learning experiences
                    </li>
                    <li>
                      <strong className="text-p85-earth-dark">Wine & Sip:</strong> Experience our unique wine processing simulation
                    </li>
                  </ul>
                </div>
                
                <div className="bg-pattern rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-4">Conferencing</h3>
                  <p className="mb-4">
                    Our venue provides an ideal setting for corporate meetings, team building, and private events. 
                    Custom packages available to suit your needs.
                  </p>
                  <a href="/conferencing" className="text-p85-sunset hover:text-p85-sunset-dark font-medium">
                    Learn more about our conferencing facilities →
                  </a>
                </div>
                
                <div className="bg-p85-earth/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-p85-green-dark mb-4">Contact Us Directly</h3>
                  <p className="mb-2">If you prefer to speak with us directly:</p>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <span className="font-bold mr-2">Phone:</span> 067 963 4795
                    </p>
                    <p className="flex items-center">
                      <span className="font-bold mr-2">Email:</span> info@portion85.co.za
                    </p>
                    <p className="flex items-center">
                      <span className="font-bold mr-2">Address:</span> Portion 85 M26 Knopjeslaagte, Centurion, 0014
                    </p>
                  </div>
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

export default ReservationPage;
