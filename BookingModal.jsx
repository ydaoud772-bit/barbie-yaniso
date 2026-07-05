import React, { useState } from 'react';
import { X, ChevronRight, Loader } from 'lucide-react';
import BookingStep1 from './BookingStep1';
import BookingStep2 from './BookingStep2';

const BookingModal = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'downtown',
    date: '',
    time: '',
    service: '',
  });
  const [selectedPayment, setSelectedPayment] = useState(null);

  const services = [
    { id: 'classic', name: 'Classic Haircut', price: 35 },
    { id: 'fade', name: 'Premium Haircut + Fade', price: 50 },
    { id: 'grooming', name: 'Full Grooming Package', price: 75 },
    { id: 'beard', name: 'Beard Trim Only', price: 25 },
    { id: 'kids', name: 'Kids Haircut', price: 25 },
    { id: 'shave', name: 'Hot Shave', price: 40 },
  ];

  const getServicePrice = () => {
    const service = services.find(s => s.id === formData.service);
    return service ? service.price : 0;
  };

  const handleStep1Submit = (data) => {
    setFormData(data);
    setStep(2);
  };

  const handlePaymentSelect = async (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setIsLoading(true);

    try {
      if (paymentMethod === 'full_online' || paymentMethod === 'deposit_online') {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            appointment: formData,
            paymentMethod,
            price: paymentMethod === 'full_online' ? getServicePrice() : 10,
          }),
        });

        const { sessionId } = await response.json();

        if (window.Stripe) {
          const stripe = await window.Stripe;
          await stripe.redirectToCheckout({ sessionId });
        }
      } else if (paymentMethod === 'pay_at_shop') {
        const response = await fetch('/api/create-appointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            paymentMethod: 'pay_at_shop',
            paymentStatus: 'unpaid',
          }),
        });

        const { appointment } = await response.json();
        onSuccess(appointment);
      }
    } catch (error) {
      console.error('Error processing booking:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 border border-yellow-600/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-yellow-600/20">
        <div className="sticky top-0 bg-black border-b border-yellow-600/20 px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-white">
            {step === 1 ? 'Booking Details' : 'Select Payment Method'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-yellow-600/20 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <BookingStep1
              initialData={formData}
              onSubmit={handleStep1Submit}
              services={services}
            />
          ) : (
            <BookingStep2
              appointment={formData}
              services={services}
              onSelectPayment={handlePaymentSelect}
              isLoading={isLoading}
              selectedPayment={selectedPayment}
            />
          )}

          <div className="mt-8 pt-6 border-t border-yellow-600/20 flex justify-between items-center">
            <div className="flex gap-2">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-2 w-8 rounded-full transition-all ${
                    s <= step ? 'bg-yellow-600' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">
              Step {step} of 2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
