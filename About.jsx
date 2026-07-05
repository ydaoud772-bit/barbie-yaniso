import React from 'react';
import { Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-2xl border border-yellow-600/20">
              <div className="space-y-6 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-600/10 rounded-full border border-yellow-600/30">
                  <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6zm9 11h2v2h-2v-2zm0-4h2v2h-2V9zM7 9h2v2H7V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Barbier Yaniso</h3>
                <p className="text-gray-400">Established 2009</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Crafted Excellence<span className="text-yellow-600">.</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Since 2009, Barbier Yaniso has been the destination for men who refuse to compromise on quality. Our master barbers combine traditional techniques with contemporary styles to deliver cuts that turn heads.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-600/20 border border-yellow-600/40">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Master Craftsmen</h3>
                  <p className="text-gray-400 mt-1">Each barber is trained to the highest standards with 10+ years of experience.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-600/20 border border-yellow-600/40">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Community First</h3>
                  <p className="text-gray-400 mt-1">We believe in building lasting relationships with every client who walks through our doors.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-600/20 border border-yellow-600/40">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Innovation & Tradition</h3>
                  <p className="text-gray-400 mt-1">Honoring classic barbering while staying ahead of modern style trends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
