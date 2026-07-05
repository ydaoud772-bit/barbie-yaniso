import React from 'react';
import { CreditCard, Lock, Loader } from 'lucide-react';

const BookingStep2 = ({
  appointment,
  services,
  onSelectPayment,
  isLoading,
  selectedPayment,
}) => {
  const getServicePrice = () => {
    const service = services.find(s => s.id === appointment.service);
    return service ? service.price : 0;
  };

  const getServiceName = () => {
    const service = services.find(s => s.id === appointment.service);
    return service ? service.name : '';
  };

  const servicePrice = getServicePrice();
  const serviceName = getServiceName();

  const appointmentDate = new Date(appointment.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 border border-yellow-600/20 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Appointment Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-gray-300">
            <span>Service:</span>
            <span className="text-white font-medium">{serviceName}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Date:</span>
            <span className="text-white font-medium">{appointmentDate}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Time:</span>
            <span className="text-white font-medium">{appointment.time}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Location:</span>
            <span className="text-white font-medium">
              {appointment.branch === 'downtown' ? 'Downtown' : 'Uptown'}
            </span>
          </div>
          <div className="pt-3 border-t border-gray-700 flex justify-between">
            <span className="font-bold text-white">Total:</span>
            <span className="text-2xl font-black text-yellow-600">${servicePrice}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white">How would you like to pay?</h3>

        <div
          onClick={() => !isLoading && onSelectPayment('full_online')}
          className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
            selectedPayment === 'full_online'
              ? 'border-yellow-600 bg-yellow-600/10'
              : 'border-gray-700 hover:border-yellow-600/50 bg-gray-800'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-yellow-600/20 border border-yellow-600/50 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="text-white font-bold">Pay Full Price Online</h4>
                <p className="text-sm text-gray-400">Instant confirmation</p>
              </div>
            </div>
            {selectedPayment === 'full_online' && !isLoading && (
              <div className="w-5 h-5 rounded-full bg-yellow-600 border-2 border-white"></div>
            )}
            {selectedPayment === 'full_online' && isLoading && (
              <Loader className="h-5 w-5 text-yellow-600 animate-spin" />
            )}
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-yellow-600">${servicePrice}</p>
            <p className="text-xs text-gray-500 mt-1">Secure payment via Stripe</p>
          </div>
        </div>

        <div
          onClick={() => !isLoading && onSelectPayment('deposit_online')}
          className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
            selectedPayment === 'deposit_online'
              ? 'border-yellow-600 bg-yellow-600/10'
              : 'border-gray-700 hover:border-yellow-600/50 bg-gray-800'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-yellow-600/20 border border-yellow-600/50 flex items-center justify-center">
                <Lock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="text-white font-bold">Pay Secure Deposit</h4>
                <p className="text-sm text-gray-400">Reserve your slot</p>
              </div>
            </div>
            {selectedPayment === 'deposit_online' && !isLoading && (
              <div className="w-5 h-5 rounded-full bg-yellow-600 border-2 border-white"></div>
            )}
            {selectedPayment === 'deposit_online' && isLoading && (
              <Loader className="h-5 w-5 text-yellow-600 animate-spin" />
            )}
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-yellow-600">$10</p>
            <p className="text-xs text-gray-500 mt-1">
              Remainder of ${servicePrice - 10} due at shop
            </p>
          </div>
        </div>

        <div
          onClick={() => !isLoading && onSelectPayment('pay_at_shop')}
          className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
            selectedPayment === 'pay_at_shop'
              ? 'border-yellow-600 bg-yellow-600/10'
              : 'border-gray-700 hover:border-yellow-600/50 bg-gray-800'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-yellow-600/20 border border-yellow-600/50 flex items-center justify-center">
                <svg className="h-6 w-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold">Pay at the Shop</h4>
                <p className="text-sm text-gray-400">No upfront payment</p>
              </div>
            </div>
            {selectedPayment === 'pay_at_shop' && !isLoading && (
              <div className="w-5 h-5 rounded-full bg-yellow-600 border-2 border-white"></div>
            )}
            {selectedPayment === 'pay_at_shop' && isLoading && (
              <Loader className="h-5 w-5 text-yellow-600 animate-spin" />
            )}
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-gray-400">FREE</p>
            <p className="text-xs text-gray-500 mt-1">Pay ${servicePrice} when you arrive</p>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 space-y-2">
        <p>By proceeding, you agree to our cancellation policy: Free cancellation up to 24 hours before your appointment.</p>
        <p>Your personal information is encrypted and secure.</p>
      </div>

      {selectedPayment && (
        <button
          onClick={() => onSelectPayment(selectedPayment)}
          disabled={isLoading}
          className="w-full mt-6 px-6 py-4 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader className="h-5 w-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <span>
              {selectedPayment === 'full_online'
                ? `PAY $${servicePrice} NOW`
                : selectedPayment === 'deposit_online'
                ? 'PAY $10 DEPOSIT'
                : 'CONFIRM BOOKING'}
            </span>
          )}
        </button>
      )}

      {!selectedPayment && (
        <div className="text-center py-8 text-gray-500">
          Select a payment method above to continue
        </div>
      )}
    </div>
  );
};

export default BookingStep2;
