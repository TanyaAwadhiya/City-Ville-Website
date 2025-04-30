import React, { useState, useRef } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  mobile?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ mobile }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a search
    console.log('Searching for:', searchQuery);
  };
  
  const expandSearch = () => {
    if (!mobile) {
      setIsExpanded(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };
  
  const collapseSearch = () => {
    if (!mobile && searchQuery === '') {
      setIsExpanded(false);
    }
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    if (!mobile) {
      setIsExpanded(false);
    }
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      clearSearch();
    }
  };
  
  if (mobile) {
    return (
      <form 
        onSubmit={handleSearch} 
        className="relative w-full"
        role="search"
      >
        <input
          ref={inputRef}
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-gray-100 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
          aria-label="Search website"
        />
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" 
          aria-hidden="true"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-gray-500" aria-hidden="true" />
          </button>
        )}
      </form>
    );
  }
  
  return (
    <form 
      onSubmit={handleSearch} 
      className={`relative flex items-center ${isExpanded ? 'w-60' : 'w-10'} transition-all duration-300`}
      role="search"
    >
      <button
        type="button"
        onClick={expandSearch}
        className={`absolute left-2 z-10 p-1 rounded-full hover:bg-gray-100 transition-colors ${
          isExpanded ? 'text-gray-500' : 'text-gray-700 hover:text-blue-800'
        }`}
        aria-label={isExpanded ? 'Submit search' : 'Open search'}
        aria-expanded={isExpanded}
      >
        <Search className="h-5 w-5" aria-hidden="true" />
      </button>
      
      <input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onBlur={collapseSearch}
        onKeyDown={handleKeyDown}
        className={`
          bg-gray-100 rounded-full 
          ${isExpanded ? 'pl-9 pr-8 py-2 w-full opacity-100' : 'w-0 p-0 opacity-0'} 
          transition-all duration-300 
          focus:outline-none focus:ring-2 focus:ring-blue-800
        `}
        aria-label="Search website"
        aria-hidden={!isExpanded}
      />
      
      {isExpanded && searchQuery && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
          aria-label="Clear search"
        >
          <X className="h-4 w-4 text-gray-500" aria-hidden="true" />
        </button>
      )}
    </form>
  );
};

export default SearchBar;