import React from 'react';
import { CalendarDays } from 'lucide-react';
import { NewsItem } from '../../types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

const getCategoryBadgeType = (category: string) => {
  switch (category) {
    case 'event': return 'primary';
    case 'update': return 'info';
    case 'announcement': return 'warning';
    case 'emergency': return 'error';
    default: return 'default';
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'event': return 'Event';
    case 'update': return 'Update';
    case 'announcement': return 'Announcement';
    case 'emergency': return 'Emergency';
    default: return category;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const NewsCard: React.FC<NewsCardProps> = ({ news, featured = false }) => {
  return (
    <Card 
      hoverable 
      elevated={featured}
      className={`h-full flex flex-col ${featured ? 'md:flex-row' : ''}`}
    >
      <div 
        className={`relative overflow-hidden ${featured ? 'md:w-1/2' : ''}`}
        style={{ paddingTop: featured ? (featured ? '0%' : '56.25%') : '56.25%' }}
      >
        <img 
          src={news.image} 
          alt={news.title}
          className={`
            absolute top-0 left-0 w-full h-full object-cover
            transition-transform duration-500 ease-in-out
            group-hover:scale-105
          `}
        />
        {news.featured && (
          <div className="absolute top-0 left-0 bg-blue-800 text-white text-xs font-medium px-2 py-1">
            Featured
          </div>
        )}
      </div>
      
      <div className={`flex flex-col ${featured ? 'md:w-1/2' : ''}`}>
        <div className="p-4 flex-grow">
          <div className="flex items-center space-x-2 mb-3">
            <Badge type={getCategoryBadgeType(news.category)}>
              {getCategoryLabel(news.category)}
            </Badge>
            <div className="flex items-center text-gray-500 text-sm">
              <CalendarDays className="h-3 w-3 mr-1" />
              {formatDate(news.date)}
            </div>
          </div>
          
          <h3 className={`font-bold mb-2 ${featured ? 'text-xl' : 'text-lg'}`}>
            {news.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {news.description}
          </p>
          
          <a 
            href={`/news/${news.id}`} 
            className="text-blue-800 font-medium hover:text-blue-900 transition-colors mt-auto inline-block"
          >
            Read more →
          </a>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;