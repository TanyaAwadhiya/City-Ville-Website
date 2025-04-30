import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl">
          {/* Map section */}
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876!3d40.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzU1LjQiTiA3M8KwNTknMTUuNCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              className="absolute w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CityVille Map"
            ></iframe>
          </div>
          
          {/* Contact info section */}
          <div className="md:w-1/2 bg-blue-800 text-white p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-8 text-blue-100">
              We're here to help! Reach out to us with any questions, concerns, or feedback about city services.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-blue-300 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Visit Us</h3>
                  <p className="text-blue-100">123 Main Street<br />CityVille, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 text-blue-300 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-blue-100">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 text-blue-300 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-blue-100">info@cityville.gov</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Directory
              </Button>
              <Button
                variant="primary"
                className="bg-white text-blue-800 hover:bg-blue-50"
              >
                Report an Issue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;