import React, { useState } from 'react';
import { ChevronRight, AlertCircle } from 'lucide-react';

const BookingStep1 = ({ initialData, onSubmit, services }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

const downtownSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM',
  '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM',
  '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM',
  '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'
];

const uptownSlots = [
  '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
  '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM',
  '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM', '12:00 AM', '12:30 AM'
];

const timeSlots = formData.branch === 'downtown' ? downtownSlots : uptownSlots;


 const branches = [
  { id: 'downtown', name: '📍 Downtown Location - 123 Main Street' },
  { id: 'uptown', name: '📍 Jean-Talon Location' }
];
  // Generate available dates (next 30 days, excluding past dates)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      if (date.getDay() !== 0) { // Exclude Sundays for simplicity
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.match(/^\d{10}$|^\d{3}-\d{3}-\d{4}$/)) {
      newErrors.phone = 'Valid phone number required';
    }
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.service) newErrors.service = 'Service is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 transition-all ${
            errors.name ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.name && (
          <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.name}
          </div>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="(555) 123-4567 or 555-123-4567"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 transition-all ${
            errors.phone ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.phone && (
          <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.phone}
          </div>
        )}
      </div>

      {/* Branch Selection */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Select Location
        </label>
        <div className="space-y-2">
          {branches.map((branch) => (
            <label
              key={branch.id}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                formData.branch === branch.id
                  ? 'border-yellow-600 bg-yellow-600/10'
                  : 'border-gray-700 hover:border-yellow-600/50'
              }`}
            >
              <input
                type="radio"
                name="branch"
                value={branch.id}
                checked={formData.branch === branch.id}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="w-5 h-5 accent-yellow-600"
              />
              <span className="ml-3 text-white font-medium">{branch.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Date Picker */}
      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Preferred Date
        </label>
        <select
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 transition-all ${
            errors.date ? 'border-red-500' : 'border-gray-700'
          }`}
        >
          <option value="">Select a date...</option>
          {getAvailableDates().map((date) => {
            const dateObj = new Date(date);
            const formatted = dateObj.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            });
            return (
              <option key={date} value={date}>
                {formatted}
              </option>
            );
          })}
        </select>
        {errors.date && (
          <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.date}
          </div>
        )}
      </div>

      {/* Time Slot */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Preferred Time
        </label>
        <div className="grid grid-cols-4 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setFormData({ ...formData, time: slot })}
              className={`py-2 px-2 rounded-lg text-sm font-medium transition-all ${
                formData.time === slot
                  ? 'bg-yellow-600 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
        {errors.time && (
          <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.time}
          </div>
        )}
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Select Service
        </label>
        <div className="space-y-2">
          {services.map((service) => (
            <label
              key={service.id}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                formData.service === service.id
                  ? 'border-yellow-600 bg-yellow-600/10'
                  : 'border-gray-700 hover:border-yellow-600/50'
              }`}
            >
              <input
                type="radio"
                name="service"
                value={service.id}
                checked={formData.service === service.id}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-5 h-5 accent-yellow-600"
              />
              <div className="ml-3 flex-1">
                <span className="text-white font-medium">{service.name}</span>
                <span className="ml-2 text-yellow-600 font-bold">${service.price}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.service && (
          <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
            <AlertCircle className="h-4 w-4" />
            {errors.service}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-8 px-6 py-4 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2 group"
      >
        <span>PROCEED TO PAYMENT</span>
        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};

export default BookingStep1;
