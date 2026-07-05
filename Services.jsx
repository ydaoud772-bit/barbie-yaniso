import React from 'react';
import { Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: 'Classic Haircut',
      price: 35,
      description: 'Precision cut with wash, dry, and finish styling',
      features: ['Professional wash', 'Blow dry', 'Styling gel'],
      duration: '30 min',
    },
    {
      name: 'Premium Haircut + Fade',
      price: 50,
      description: 'Expert fade with detailed line work and shape up',
      features: ['Detailed fade', 'Line work', 'Styling', 'Hot towel finish'],
      duration: '45 min',
      featured: true,
    },
    {
      name: 'Full Grooming Package',
      price: 75,
      description: 'Haircut, beard trim, and facial grooming',
      features: ['Haircut & fade', 'Beard trim', 'Beard oil', 'Facial massage'],
      duration: '60 min',
    },
    {
      name: 'Beard Trim Only',
      price: 25,
      description: 'Expert beard shaping and conditioning',
      features: ['Beard shaping', 'Beard oil', 'Hot towel'],
      duration: '20 min',
    },
    {
      name: 'Kids Haircut',
      price: 25,
      description: 'Patient, professional haircuts for children',
      features: ['Expert care', 'Kid-friendly', 'Styling'],
      duration: '25 min',
    },
    {
      name: 'Hot Shave',
      price: 40,
      description: 'Classic straight razor shave with aromatherapy',
      features: ['Hot towel prep', 'Premium cream', 'Aftershave lotion'],
      duration: '30 min',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our<span className="text-yellow-600"> Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Premium grooming experiences tailored to perfection. From classic cuts to complete transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                service.featured
                  ? 'bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 border-yellow-600/50 shadow-lg shadow-yellow-600/20'
                  : 'bg-gray-900/50 border-yellow-600/20 hover:border-yellow-600/50'
              } p-6`}
            >
              {service.featured && (
                <div className="inline-flex items-center space-x-2 mb-4 px-3 py-1 bg-yellow-600/20 border border-yellow-600/50 rounded-full">
                  <span className="text-xs font-bold text-yellow-600 uppercase">Most Popular</span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-yellow-600/20">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-3xl font-black text-yellow-600">${service.price}</span>
                  <span className="text-gray-400 text-sm">CAD</span>
                </div>
                <p className="text-gray-500 text-xs">{service.duration}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                service.featured
                  ? 'bg-yellow-600 text-black hover:bg-yellow-500'
                  : 'bg-yellow-600/20 text-yellow-600 border border-yellow-600/50 hover:bg-yellow-600/30'
              }`}>
                BOOK SERVICE
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-yellow-600/10 to-transparent border border-yellow-600/20 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-2">💳 Full Pricing Transparency</h3>
          <p className="text-gray-400">
            All prices are in Canadian dollars (CAD) and include HST. Online booking includes 5% discount on selected services. No hidden fees, no surprises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
