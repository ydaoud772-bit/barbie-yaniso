import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Marcus Johnson',
      role: 'Regular Client',
      rating: 5,
      text: 'The attention to detail is unmatched. Every visit feels like a personalized experience. I wouldn\'t trust my hair to anyone else.',
      avatar: '👨‍💼',
    },
    {
      name: 'David Chen',
      role: 'Business Professional',
      rating: 5,
      text: 'Professional, punctual, and precise. They understand what makes a great haircut and deliver every single time.',
      avatar: '👨‍💻',
    },
    {
      name: 'Alex Rodriguez',
      role: 'Long-time Client',
      rating: 5,
      text: 'I\'ve been going to Barbier Yaniso for 8 years. The quality has never dipped, and the team treats you like family.',
      avatar: '👨‍🎨',
    },
    {
      name: 'James Mitchell',
      role: 'First Timer',
      rating: 5,
      text: 'Booked my first appointment online and was impressed from start to finish. Best barber shop in the city, hands down.',
      avatar: '👨‍🔧',
    },
    {
      name: 'Chris Thompson',
      role: 'Regular Client',
      rating: 5,
      text: 'The online booking system is convenient, and the barbers never disappoint. Worth every penny.',
      avatar: '👨‍⚖️',
    },
    {
      name: 'Robert Williams',
      role: 'Corporate Account',
      rating: 5,
      text: 'We bring our entire team here for their grooming needs. Professional, efficient, and exceptional results.',
      avatar: '👨‍💼',
    },
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Client<span className="text-yellow-600"> Reviews</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied clients who have experienced Barbier Yaniso excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900/50 border border-yellow-600/20 rounded-xl p-8 text-center">
            <div className="text-4xl font-black text-yellow-600 mb-2">4.9★</div>
            <p className="text-gray-400">Average Rating</p>
          </div>
          <div className="bg-gray-900/50 border border-yellow-600/20 rounded-xl p-8 text-center">
            <div className="text-4xl font-black text-yellow-600 mb-2">500+</div>
            <p className="text-gray-400">Verified Reviews</p>
          </div>
          <div className="bg-gray-900/50 border border-yellow-600/20 rounded-xl p-8 text-center">
            <div className="text-4xl font-black text-yellow-600 mb-2">98%</div>
            <p className="text-gray-400">Recommend Us</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-yellow-600/20 rounded-xl p-6 hover:border-yellow-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-600/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-600 text-yellow-600"
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">"{review.text}"</p>

              <div className="flex items-center gap-4 pt-6 border-t border-yellow-600/20">
                <div className="text-3xl">{review.avatar}</div>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-600/20 via-transparent to-yellow-600/10 border border-yellow-600/30 rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready for an Exceptional Experience?
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Join hundreds of satisfied clients who have discovered the Barbier Yaniso difference.
          </p>
          <span className="inline-block px-8 py-3 bg-yellow-600 text-black font-bold rounded-lg text-sm tracking-wider uppercase">
  WALK-IN ONLY
</span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
