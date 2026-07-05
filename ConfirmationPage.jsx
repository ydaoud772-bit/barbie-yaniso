import React from 'react';
import { CheckCircle, MapPin, Clock, User, Phone, Download, ArrowRight } from 'lucide-react';
import { Scissors } from 'lucide-react';

const ConfirmationPage = ({ booking, onNewBooking }) => {
  const services = [
    { id: 'classic', name: 'Classic Haircut', price: 35 },
    { id: 'fade', name: 'Premium Haircut + Fade', price: 50 },
    { id: 'grooming', name: 'Full Grooming Package', price: 75 },
    { id: 'beard', name: 'Beard Trim Only', price: 25 },
    { id: 'kids', name: 'Kids Haircut', price: 25 },
    { id: 'shave', name: 'Hot Shave', price: 40 },
  ];

  const getServiceName = () => {
    const service = services.find(s => s.id === booking.service);
    return service ? service.name : '';
  };

  const getServicePrice = () => {
    const service = services.find(s => s.id === booking.service);
    return service ? service.price : 0;
  };

  const appointmentDate = new Date(booking.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const confirmationNumber = `BY-${Date.now().toString().slice(-8).toUpperCase()}`;

  const handleDownloadConfirmation = () => {
    const confirmationText = `
BARBIER YANISO - BOOKING CONFIRMATION
======================================

Confirmation Number: ${confirmationNumber}

APPOINTMENT DETAILS
-------------------
Service: ${getServiceName()}
Date: ${appointmentDate}
Time: ${booking.time}
Location: ${booking.branch === 'downtown' ? 'Downtown - 123 Main Street' : 'Uptown - 456 Oak Avenue'}

CUSTOMER INFORMATION
--------------------
Name: ${booking.name}
Phone: ${booking.phone}

PAYMENT INFORMATION
-------------------
Amount: $${getServicePrice()}
Status: Confirmed

Thank you for choosing Barbier Yaniso!
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(confirmationText));
    element.setAttribute('download', `BarbierYaniso-Confirmation-${confirmationNumber}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-600/20 to-yellow-600/10 border border-yellow-600/50 rounded-full mb-6 animate-pulse">
            <CheckCircle className="h-12 w-12 text-yellow-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Booking <span className="text-yellow-600">Confirmed!</span> ✂️
          </h1>
          <p className="text-xl text-gray-400">Your appointment is locked and ready</p>
        </div>

        <div className="bg-gray-900 border-2 border-yellow-600/30 rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-yellow-600/20">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black text-sm font-semibold uppercase opacity-80">Confirmation #</p>
                <p className="text-black text-2xl font-black">{confirmationNumber}</p>
              </div>
              <Scissors className="h-12 w-12 text-black/50" />
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white mb-6">Your Appointment</h2>

              <div className="flex items-start gap-4 p-4 bg-gray-800/50 border border-yellow-600/20 rounded-lg">
                <div className="h-12 w-12 rounded-lg bg-yellow-600/20 border border-yellow-600/40 flex items-center justify-center flex-shrink-0">
                  <Scissors className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">Service</p>
                  <p className="text-white font-bold text-lg">{getServiceName()}</p>
                  <p className="text-yellow-600 font-bold mt-1">${getServicePrice()}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 bg-gray-800/50 border border-yellow-600/20 rounded-lg">
                  <Clock className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Date & Time</p>
                    <p className="text-white font-bold">{appointmentDate}</p>
                    <p className="text-yellow-600 font-semibold text-lg">{booking.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/50 border border-yellow-600/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-bold">
                      {booking.branch === 'downtown' ? 'Downtown' : 'Uptown'}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {booking.branch === 'downtown'
                        ? '123 Main Street'
                        : '456 Oak Avenue'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-yellow-600/20 pt-8">
              <h3 className="text-lg font-bold text-white">Customer Details</h3>

              <div className="flex items-start gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                <User className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p className="text-white font-medium">{booking.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                <Phone className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">{booking.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-yellow-600/20 pt-8">
              <h3 className="text-lg font-bold text-white">Important Information</h3>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-yellow-600 font-bold flex-shrink-0">✓</span>
                  <div>
                    <p className="text-white font-medium">Arrive Early</p>
                    <p className="text-gray-400 text-sm">Please arrive 5 minutes before your scheduled time</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-yellow-600 font-bold flex-shrink-0">✓</span>
                  <div>
                    <p className="text-white font-medium">Free Cancellation</p>
                    <p className="text-gray-400 text-sm">Cancel free up to 24 hours before your appointment</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-yellow-600 font-bold flex-shrink-0">✓</span>
                  <div>
                    <p className="text-white font-medium">Confirmation Saved</p>
                    <p className="text-gray-400 text-sm">Your booking details have been saved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <button
            onClick={handleDownloadConfirmation}
            className="px-6 py-4 bg-gray-800 border border-yellow-600/30 text-white font-bold rounded-lg hover:border-yellow-600/60 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <Download className="h-5 w-5" />
            <span>Download Confirmation</span>
          </button>

          <button
            onClick={onNewBooking}
            className="px-6 py-4 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Make Another Booking</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-400">
            Questions? Call us at <span className="text-yellow-600 font-bold">(555) 123-4567</span>
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Barbier Yaniso. Crafted with precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
