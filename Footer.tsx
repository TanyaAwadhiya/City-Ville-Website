import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* City Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6" />
              <h3 className="text-xl font-bold">CityVille</h3>
            </div>
            <p className="mb-4 text-blue-200">
              123 Main Street<br />
              CityVille, State 12345
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="h-4 w-4 text-blue-300" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-blue-300" />
              <span>info@cityville.gov</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/news" className="text-blue-200 hover:text-white transition-colors">News & Updates</a></li>
              <li><a href="/events" className="text-blue-200 hover:text-white transition-colors">Events Calendar</a></li>
              <li><a href="/services" className="text-blue-200 hover:text-white transition-colors">City Services</a></li>
              <li><a href="/departments" className="text-blue-200 hover:text-white transition-colors">Departments</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/jobs" className="text-blue-200 hover:text-white transition-colors">Job Opportunities</a></li>
              <li><a href="/volunteer" className="text-blue-200 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="/permits" className="text-blue-200 hover:text-white transition-colors">Permits & Forms</a></li>
              <li><a href="/meetings" className="text-blue-200 hover:text-white transition-colors">City Council Meetings</a></li>
              <li><a href="/faq" className="text-blue-200 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="mb-4 text-blue-200">
              Subscribe to our newsletter to receive the latest updates and news.
            </p>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <button 
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {currentYear} CityVille. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;