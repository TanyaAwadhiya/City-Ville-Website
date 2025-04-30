export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: 'event' | 'update' | 'announcement' | 'emergency';
  featured?: boolean;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  hours: string;
}

export interface CityService {
  id: string;
  name: string;
  description: string;
  icon: string;
  departmentId: string;
  link: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export interface AlertItem {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  active: boolean;
}

export interface City {
  id: string;
  name: string;
  description: string;
  image: string;
  state: string;
  population: string;
  places: Place[];
  colleges: Institution[];
  hospitals: Institution[];
}

export interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  type: 'monument' | 'temple' | 'park' | 'museum' | 'market' | 'other';
}

export interface Institution {
  id: string;
  name: string;
  description: string;
  established?: string;
  type: string;
  rating?: string;
  specialties?: string[];
  image: string;
}