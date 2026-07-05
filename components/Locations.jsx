import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: 'Downtown Location',
      address: '123 Main Street, Downtown Core',
      phone: '(555) 123-4567',
      hours: {
        weekdays: '9:00 AM - 7:00 PM',
        saturday: '9:00 AM - 6:00 PM',
        sunday: '10:00 AM - 4:00 PM',
      },
      description: 'Experience urban sophistication in our flagship downtown shop.',
    },
    {
      name: 'Uptown Location',
      address: '456 Oak Avenue, Uptown District',
      phone: '(555) 123-4568',
      hours: {
        weekdays: '9:00 AM - 7:00 PM',
        saturday: '9:00 AM - 6:00 PM',
        sunday: '11:00 AM - 5:00 PM',
      },
      description: 'Discover premium grooming in our relaxed uptown atmosphere.',
    },
  ];

  return (
    <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Visit<span className="text-yellow-600"> Our Locations</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Two conveniently located barbershops, both committed to the same standard of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-yellow-600/20 rounded-xl p-8 hover:border-yellow-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-600/10"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                <p className="text-gray-400">{location.description}</p>
              </div>

              <div className="space-y-4 mb-8 pb-8 border-b border-yellow-600/20">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-white font-medium">{location.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href={`tel:${location.phone}`} className="text-white font-medium hover:text-yellow-600 transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Hours</p>
                    <div className="space-y-1">
                      <p className="text-white text-sm">Mon-Fri: {location.hours.weekdays}</p>
                      <p className="text-white text-sm">Sat: {location.hours.saturday}</p>
                      <p className="text-white text-sm">Sun: {location.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300">
                DIRECTIONS
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1].map((idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-yellow-600/20 rounded-xl overflow-hidden h-80"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-yellow-600/50 mx-auto mb-3" />
                  <p className="text-gray-500">Map integration would go here</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
