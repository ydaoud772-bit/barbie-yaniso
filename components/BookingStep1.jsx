import React from 'react';

const BarberInfo = () => {
  const branches = [
    { id: 'downtown', name: '📍 Downtown Location', address: '123 Main Street, Montreal' },
    { id: 'jeantalon', name: '📍 Jean-Talon Location', address: 'Jean-Talon, Montreal' }
  ];

  const services = [
    { id: 1, name: 'Classic Haircut', price: '$35' },
    { id: 2, name: 'Premium Haircut + Fade', price: '$50' },
    { id: 3, name: 'Beard Trim & Styling', price: '$25' },
    { id: 4, name: 'Full VIP Package (Hair + Beard)', price: '$65' }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-2xl border border-gray-800">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-500 mb-2">Barber Shop</h1>
        <p className="text-gray-400 text-sm">Walk-ins Welcome | First-Come, First-Served</p>
      </div>

      {/* Notice Banner */}
      <div className="bg-yellow-600/10 border border-yellow-600/40 rounded-lg p-4 mb-6 text-center">
        <p className="text-yellow-500 font-bold text-base mb-1">
          ⚡ No Appointments Needed
        </p>
        <p className="text-gray-300 text-sm">
          We operate strictly on a first-come, first-served basis. Simply visit us at any of our Montreal locations during business hours!
        </p>
      </div>

      {/* Branches Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-yellow-500/90 border-b border-gray-800 pb-2">
          Our Locations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {branches.map((b) => (
            <div key={b.id} className="p-4 border border-gray-800 rounded-lg bg-gray-800/40">
              <p className="font-bold text-white">{b.name}</p>
              <p className="text-xs text-gray-400 mt-1">{b.address}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services & Prices Section */}
      <div>
        <h2 className="text-xl font-semibold mb-3 text-yellow-500/90 border-b border-gray-800 pb-2">
          Services & Pricing
        </h2>
        <div className="space-y-3">
          {services.map((s) => (
            <div key={s.id} className="flex justify-between items-center p-3 border border-gray-800 rounded-lg bg-gray-800/20">
              <span className="font-medium text-gray-200">{s.name}</span>
              <span className="font-bold text-yellow-500">{s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberInfo;
