import React from 'react';
import { departments } from '../../data/cityData';
import Card, { CardBody } from '../ui/Card';

const DepartmentsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">City Departments</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our departments work together to provide essential services and ensure CityVille remains a great place to live, work, and visit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map(department => (
            <Card key={department.id} hoverable>
              <CardBody>
                <h3 className="text-lg font-bold mb-2">{department.name}</h3>
                <p className="text-gray-600 mb-4">{department.description}</p>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex flex-col space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Email:</span>{' '}
                      <a href={`mailto:${department.contactEmail}`} className="text-blue-800 hover:underline">
                        {department.contactEmail}
                      </a>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Phone:</span>{' '}
                      <a href={`tel:${department.contactPhone}`} className="text-blue-800 hover:underline">
                        {department.contactPhone}
                      </a>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Hours:</span>{' '}
                      <span>{department.hours}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <a
                    href={`/departments/${department.id}`}
                    className="text-blue-800 font-medium hover:text-blue-900 transition-colors"
                  >
                    Learn more →
                  </a>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;