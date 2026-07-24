import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Header = ({ onBookClick, mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-yellow-600/30 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Scissors className="h-8 w-8 text-yellow-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              BARBIER YANISO
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-300 hover:text-yellow-600 transition-colors text-sm font-medium"
            >
              SERVICES
            </a>
            <a
              href="#locations"
              className="text-gray-300 hover:text-yellow-600 transition-colors text-sm font-medium"
            >
              LOCATIONS
            </a>
            <a
              href="#reviews"
              className="text-gray-300 hover:text-yellow-600 transition-colors text-sm font-medium"
            >
              REVIEWS
            </a>
          </div>

          <div className="flex items-center space-x-4">
           <span className="hidden md:inline-block px-6 py-2.5 bg-yellow-600 text-black font-bold rounded-lg text-sm tracking-wider uppercase">
  WALK-IN ONLY
</span>
 
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-yellow-600/20 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-yellow-600" />
              ) : (
                <Menu className="h-6 w-6 text-yellow-600" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-yellow-600/20 pt-4 space-y-4">
            <a
              href="#services"
              className="block text-gray-300 hover:text-yellow-600 transition-colors text-sm font-medium"
            >
              SERVICES
            </a>
            <a
              href="#locations"
              className="block text-gray-300 hover:text-yellow-600 transition-colors text-sm font-medium"
            >
              LOCATIONS
            </a>
            <a
              href="#reviews"
              className="block text-gray-300 hover:text-yellow-600 transition-colors text-sm font-medium"
            >
              REVIEWS
            </a>
            <button
              onClick={() => {
                onBookClick();
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-3 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
