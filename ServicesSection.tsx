import React from 'react';
import { cityServices } from '../../data/cityData';
import ServiceCard from '../services/ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">City Services</h2>
          <p className="max-w-2xl mx-auto text-blue-100">
            Access the services and resources provided by the city to enhance your quality of life and meet your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityServices.map(service => (
            <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/services" 
            className="inline-block bg-white text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;