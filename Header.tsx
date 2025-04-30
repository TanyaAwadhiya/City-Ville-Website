import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, Search, MapPin, LogIn } from 'lucide-react';
import { NavLink } from '../ui/NavLink';
import SearchBar from '../ui/SearchBar';
import { alerts } from '../../data/cityData';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeAlerts = alerts.filter(alert => alert.active);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-800" />
            <h1 className="text-xl md:text-2xl font-bold text-blue-900">CityVille</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" label="Home" />
            <NavLink to="/news" label="News" />
            <NavLink to="/events" label="Events" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/contact" label="Contact" />
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <button 
              className="relative p-2 text-gray-700 hover:text-blue-800 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              {activeAlerts.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {activeAlerts.length}
                </span>
              )}
            </button>
            <Link 
              to="/login"
              className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
            >
              <LogIn className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>
          
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-blue-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink to="/" label="Home" mobile onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/news" label="News" mobile onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/events" label="Events" mobile onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/services" label="Services" mobile onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/contact" label="Contact" mobile onClick={() => setIsMenuOpen(false)} />
            <SearchBar mobile />
            <Link 
              to="/login"
              className="flex items-center justify-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      )}
      
      {/* Alert banner */}
      {activeAlerts.length > 0 && (
        <div className={`w-full py-2 ${activeAlerts[0].type === 'warning' ? 'bg-amber-500' : activeAlerts[0].type === 'error' ? 'bg-red-500' : activeAlerts[0].type === 'success' ? 'bg-green-500' : 'bg-blue-500'} text-white`}>
          <div className="container mx-auto px-4 text-center text-sm font-medium">
            {activeAlerts[0].message}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;