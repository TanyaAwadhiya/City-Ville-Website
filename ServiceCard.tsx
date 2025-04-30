import React from 'react';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { CityService } from '../../types';
import Card from '../ui/Card';

interface ServiceCardProps {
  service: CityService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically get the icon component
  const IconComponent = Icons[service.icon as keyof typeof Icons] || Icons.HelpCircle;
  
  return (
    <Card 
      hoverable 
      className="h-full flex flex-col transition-all duration-300"
      onClick={() => window.location.href = service.link}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="bg-blue-100 text-blue-800 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <IconComponent className="h-6 w-6" />
        </div>
        
        <h3 className="text-lg font-bold mb-2">{service.name}</h3>
        
        <p className="text-gray-600 mb-6 flex-grow">
          {service.description}
        </p>
        
        <div className="mt-auto">
          <a 
            href={service.link} 
            className="text-blue-800 font-medium hover:text-blue-900 transition-colors flex items-center"
          >
            Learn more
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;