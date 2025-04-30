import React from 'react';
import { ChevronRight } from 'lucide-react';
import { newsItems } from '../../data/cityData';
import NewsCard from '../news/NewsCard';

const FeaturedNews: React.FC = () => {
  // Get the featured news items first, then the rest
  const featured = newsItems.filter(item => item.featured);
  const otherNews = newsItems.filter(item => !item.featured).slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Latest News & Updates</h2>
          <a 
            href="/news" 
            className="flex items-center text-blue-800 hover:text-blue-900 transition-colors"
          >
            View all news 
            <ChevronRight className="ml-1 h-5 w-5" />
          </a>
        </div>
        
        {featured.length > 0 && (
          <div className="mb-12">
            <NewsCard news={featured[0]} featured />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherNews.map(newsItem => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;