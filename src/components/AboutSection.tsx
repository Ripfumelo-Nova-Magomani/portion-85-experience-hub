
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animated-scroll-item');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-8 animated-scroll-item">ABOUT PORTION 85</h2>
          
          <div className="space-y-6 animated-scroll-item">
            <p className="text-lg">
              Portion 85 is a portion of Farm 385 in Knopjeslaagte in Centurion, Gauteng. It is in the same belt that splits the City of Johannesburg and the City of Tshwane. Historically these different portions of farms were under the same roof.
            </p>
            
            <p className="text-lg">
              We have 25 different facilities that provide a variety of experiences and attraction to our visitors and guests, enabling them to build memories and satisfy a wide range of personal needs, from pleasure to a search for meaning.
            </p>
            
            <p className="text-lg">
              As a unique addition to the bouquet of experiences, we intend to offer a simulation of wine processing which will give our guests and visitors a live observation of wine processing including key steps like preparation (fruit de-stemming/crushing) to bottling.
            </p>
          </div>
          
          <div className="mt-12 text-center animated-scroll-item">
            <h3 className="text-3xl font-serif text-p85-earth mb-4">Explore Portion 85</h3>
            <a 
              href="#facilities" 
              className="inline-block bg-p85-green text-white py-2 px-6 rounded-md hover:bg-p85-green-dark transition-colors duration-300"
            >
              Discover Our Facilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
