import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { events } from '../../data/cityData';
import EventCard from '../events/EventCard';
import Button from '../ui/Button';

const EventsSection: React.FC = () => {
  // Get the first 3 upcoming events
  const upcomingEvents = events.slice(0, 3);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover what's happening in CityVille. Join us for community gatherings, workshops, and celebrations.
            </p>
          </div>
          <a 
            href="/events" 
            className="hidden md:flex items-center text-blue-800 hover:text-blue-900 transition-colors"
          >
            View all events 
            <ChevronRight className="ml-1 h-5 w-5" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {upcomingEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            variant="outline"
            icon={<Calendar className="h-5 w-5" />}
            iconPosition="left"
            className="md:hidden"
          >
            View All Events
          </Button>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Have an event to share?</h3>
            <p className="text-gray-600 mb-4">
              Submit your community event for consideration in our city calendar.
            </p>
            <Button>Submit an Event</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;