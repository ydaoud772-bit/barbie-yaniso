import React from 'react';

const servicesList = [
  {
    title: "Haircut",
    price: "35",
    duration: "30 min"
  },
  {
    title: "Beard Trim",
    price: "25",
    duration: "25 min"
  },
  {
    title: "Combo (Hair + Beard)",
    price: "50",
    duration: "45 min"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-yellow-500 uppercase tracking-wider mb-2">
            Our Services
          </h2>
          <p className="text-gray-400 text-sm">
            Professional grooming tailored to your style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900/40 border border-yellow-600/20 p-6 rounded-2xl flex flex-col justify-between hover:border-yellow-600/50 transition-all text-center"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <div className="flex items-baseline justify-center space-x-2 mb-2">
                  <span className="text-3xl font-black text-yellow-500">${service.price}</span>
                  <span className="text-gray-400 text-sm">CAD</span>
                </div>
                <p className="text-gray-500 text-xs">{service.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-16 p-8 bg-gradient-to-r from-yellow-600/10 to-transparent border border-yellow-600/20 rounded-xl text-center">
          <h3 className="text-xl font-bold text-white mb-2">💳 Full Pricing Transparency</h3>
          <p className="text-gray-400 text-sm">
            All prices are in Canadian dollars (CAD) including GST/QST. Walk-ins strictly welcome. Cash only — no hidden fees, no surprises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
