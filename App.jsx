import React, { useState } from 'react';
import { Scissors } from 'lucide-react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Locations from './Locations';
import Reviews from './Reviews';
import BookingModal from './BookingModal';
import ConfirmationPage from './ConfirmationPage';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBookingSuccess = (bookingDetails) => {
    setConfirmedBooking(bookingDetails);
    setBookingConfirmed(true);
    setIsBookingOpen(false);
  };

  const handleNewBooking = () => {
    setBookingConfirmed(false);
    setConfirmedBooking(null);
    setIsBookingOpen(true);
  };

  if (bookingConfirmed && confirmedBooking) {
    return (
      <ConfirmationPage 
        booking={confirmedBooking} 
        onNewBooking={handleNewBooking}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header 
        onBookClick={() => setIsBookingOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <About />
        <Services />
        <Locations />
        <Reviews />
      </main>

      {isBookingOpen && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          onSuccess={handleBookingSuccess}
        />
      )}

      <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-yellow-600/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Scissors className="h-6 w-6 text-yellow-600" />
                <span className="text-xl font-bold text-yellow-600">BARBIER YANISO</span>
              </div>
              <p className="text-gray-400 text-sm">Two locations. One standard of excellence.</p>
            </div>
            <div>
              <h3 className="text-yellow-600 font-semibold mb-4">HOURS</h3>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-yellow-600 font-semibold mb-4">CONTACT</h3>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Downtown: (555) 123-4567</p>
                <p>Uptown: (555) 123-4568</p>
                <p>info@barbieryanniso.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-yellow-600/20 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Barbier Yaniso. All rights reserved. Crafted with precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
