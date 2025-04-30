import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { indianCities } from '../../data/indianCities';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const CitiesSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(indianCities[0]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Indian Cities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the rich cultural heritage and famous landmarks of India's major cities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* City Selection Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-lg p-4">
              {indianCities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city)}
                  className={`w-full text-left p-4 rounded-lg mb-2 transition-colors ${
                    selectedCity.id === city.id
                      ? 'bg-blue-800 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    <MapPin className={`h-5 w-5 ${
                      selectedCity.id === city.id ? 'text-blue-200' : 'text-blue-800'
                    } mr-2`} />
                    <div>
                      <h3 className="font-bold">{city.name}</h3>
                      <p className={`text-sm ${
                        selectedCity.id === city.id ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {city.state}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* City Details */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{selectedCity.name}</h2>
                  <p className="flex items-center text-sm">
                    <Navigation className="h-4 w-4 mr-1" />
                    Population: {selectedCity.population}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{selectedCity.description}</p>

                <h3 className="text-xl font-bold mb-4">Famous Places</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCity.places.map((place) => (
                    <Card key={place.id} hoverable className="h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover"
                        />
                        <Badge
                          type="primary"
                          className="absolute top-2 right-2"
                        >
                          {place.type}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-2">{place.name}</h4>
                        <p className="text-gray-600 text-sm">{place.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;