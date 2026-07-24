import React, { useState } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-yellow-500 font-extrabold text-xl uppercase tracking-wider">
            <Scissors className="h-6 w-6" />
            <span>Barbier Yaniso</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">Services</a>
            <a href="#locations" className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">Locations</a>
            <a href="#reviews" className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">Reviews</a>
            <span className="bg-yellow-500/10 border border-yellow-500/40 text-yellow-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase">
              Walk-In Only
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-500 p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-yellow-600/20 px-4 pt-4 pb-6 space-y-4 text-center">
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-yellow-500 py-2 text-lg font-semibold"
          >
            Services
          </a>
          <a 
            href="#locations" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-yellow-500 py-2 text-lg font-semibold"
          >
            Locations
          </a>
          <a 
            href="#reviews" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-yellow-500 py-2 text-lg font-semibold"
          >
            Reviews
          </a>
          <div className="pt-2">
            <span className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-sm uppercase">
              Walk-In Only
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
