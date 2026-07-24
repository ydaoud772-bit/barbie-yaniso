import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-black text-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight mb-4 leading-tight">
              <span className="text-yellow-500">TWO LOCATIONS.</span><br />
              ONE STANDARD OF EXCELLENCE.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              Experience precision barbering at its finest. Every cut crafted with expertise, every client treated with respect.
            </p>

            {/* Badge (Walk-In Only) without Learn More button */}
            <div className="mb-12">
              <span className="inline-block bg-yellow-500 text-black font-extrabold px-8 py-3.5 rounded-xl uppercase tracking-wider text-sm shadow-lg shadow-yellow-500/10">
                WALK-IN ONLY
              </span>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-yellow-600/20">
              <div>
                <p className="text-3xl font-black text-yellow-500">500+</p>
                <p className="text-xs text-gray-400 mt-1 uppercase font-medium">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-black text-yellow-500">15+</p>
                <p className="text-xs text-gray-400 mt-1 uppercase font-medium">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-black text-yellow-500">2</p>
                <p className="text-xs text-gray-400 mt-1 uppercase font-medium">Prime Locations</p>
              </div>
            </div>
          </div>

          {/* Right Side: Image Placeholder / Graphic */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square bg-gray-900 border-2 border-yellow-600/30 rounded-2xl flex items-center justify-center p-8 shadow-2xl">
              <div className="w-28 h-28 rounded-full bg-yellow-500/10 border border-yellow-500/40 flex items-center justify-center">
                <span className="text-5xl">😃</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
