import React from 'react';
import { Search } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-blue-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="City skyline" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/90" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Welcome to <span className="text-blue-300">CityVille</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Your source for city news, events, and services. Stay connected with what's happening in our community.
        </p>
        
        <div className="max-w-xl mx-auto mb-12">
          <form className="relative">
            <input 
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-white/90 backdrop-blur-sm rounded-full pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-800" />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-full transition-colors"
            >
              Search
            </button>
          </form>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="primary" 
            size="lg"
          >
            Explore City Services
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
          >
            View Upcoming Events
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;