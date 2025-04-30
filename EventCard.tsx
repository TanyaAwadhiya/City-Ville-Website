import React from 'react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { EventItem } from '../../types';
import Card from '../ui/Card';

interface EventCardProps {
  event: EventItem;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card hoverable className="h-full flex flex-col">
      <div 
        className="relative overflow-hidden"
        style={{ paddingTop: '56.25%' }}
      >
        <img 
          src={event.image} 
          alt={event.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-bold mb-2">{event.title}</h3>
        
        <div className="space-y-2 mb-3 text-gray-600">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-blue-800" />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-blue-800" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-blue-800" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>
        
        <div className="mt-auto pt-4">
          <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md transition-colors w-full">
            View Details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;