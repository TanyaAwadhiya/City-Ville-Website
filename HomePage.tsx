import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedNews from '../components/home/FeaturedNews';
import EventsSection from '../components/home/EventsSection';
import ServicesSection from '../components/home/ServicesSection';
import DepartmentsSection from '../components/home/DepartmentsSection';
import CitiesSection from '../components/home/CitiesSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <CitiesSection />
      <FeaturedNews />
      <EventsSection />
      <ServicesSection />
      <DepartmentsSection />
      <CTASection />
    </main>
  );
};

export default HomePage;