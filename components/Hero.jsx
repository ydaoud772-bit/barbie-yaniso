import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onBookClick }) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                TWO LOCATIONS
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                One Standard of Excellence
              </h2>
            </div>

            <p className="text-lg text-gray-300 max-w-md leading-relaxed">
              Experience precision barbering at its finest. Every cut crafted with expertise, every client treated with respect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <span className="px-8 py-4 bg-yellow-600 text-black font-bold rounded-lg text-sm tracking-wider uppercase inline-block">
  WALK-IN ONLY
</span>
              <button className="px-8 py-4 bg-transparent border-2 border-yellow-600 text-yellow-600 font-bold rounded-lg hover:bg-yellow-600/10 transition-all duration-300">
                LEARN MORE
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-yellow-600/20">
              <div>
                <div className="text-4xl font-black text-yellow-600">500+</div>
                <div className="text-sm text-gray-400 mt-2">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-black text-yellow-600">15+</div>
                <div className="text-sm text-gray-400 mt-2">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-black text-yellow-600">2</div>
                <div className="text-sm text-gray-400 mt-2">Prime Locations</div>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative z-10 bg-gradient-to-br from-yellow-600/20 to-transparent p-8 rounded-2xl border border-yellow-600/30 backdrop-blur-sm">
              <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-48 h-48 text-yellow-600/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
