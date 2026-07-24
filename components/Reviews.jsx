import React from 'react';

const stats = {
  rating: "4.9",
  totalReviews: "1,777",
  recommendPercent: "98%"
};

const realReviews = [
  {
    id: 1,
    name: "faisal boker",
    role: "Local Guide",
    rating: 5,
    text: "Was worried about getting my first haircut in Montreal, but the professionalism and amazing atmosphere put my mind at ease. I am not sure I could have gotten a better haircut back home."
  },
  {
    id: 2,
    name: "Yliana Delgado",
    role: "Verified Client",
    rating: 5,
    text: "My son wanted a buzzcut and gave many details and his problems of hair. The barbers were extremely nice with us followed the instructions with no problems and were very social and profesional. They even gave us a Juice and we give them 40 dollar tip. Amazing service"
  },
  {
    id: 3,
    name: "Mihir Rathore",
    role: "Local Guide",
    rating: 5,
    text: "Mahrez did my haircut and was very professional and detail-oriented. He even recommended a few styles that suited me well. I would definitely recommend this place."
  },
  {
    id: 4,
    name: "Stephon Besancon",
    role: "Verified Client",
    rating: 5,
    text: "Haircut was great barber was very friendly. Educated me when I asked questions. No complaints at all took his time was through, would recommend 100%. Taki is the man !"
  },
  {
    id: 5,
    name: "KJ James",
    role: "Verified Client",
    rating: 5,
    text: "Needed a last-minute cut on a Saturday night and Taki came through. Fresh fade, sharp attention to detail, and clearly knows what he’s doing. One of the better cuts I’ve gotten while traveling he fixed a bad haircut i got in panama. I’ll definitely be back next time I’m in Montreal. Bc i know ppl want to know i have black hair lol"
  },
  {
    id: 6,
    name: "Christopher DiLoreto",
    role: "Verified Client",
    rating: 5,
    text: "Man these guys are amazing. Rolled in at 930 on a Friday with three teenagers needing fresh back to school fades and boy did they deliver. Absolutely magnificent work, kids are saying best haircuts of their lives. Friendly, fun atmosphere and real craftsmanship. Will come back next time we are in Montreal."
  }
];

const Reviews = () => {
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Barbier+Yaniso+2/@45.4977354,-73.5805355,17z";

  return (
    <section id="reviews" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900/60 border border-yellow-600/20 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-extrabold text-yellow-500 mb-1">{stats.rating} ★</h3>
            <p className="text-gray-400 text-sm font-semibold">Average Rating</p>
          </div>
          <div className="bg-gray-900/60 border border-yellow-600/20 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-extrabold text-yellow-500 mb-1">{stats.totalReviews}+</h3>
            <p className="text-gray-400 text-sm font-semibold">Verified Google Reviews</p>
          </div>
          <div className="bg-gray-900/60 border border-yellow-600/20 p-6 rounded-2xl text-center">
            <h3 className="text-4xl font-extrabold text-yellow-500 mb-1">{stats.recommendPercent}</h3>
            <p className="text-gray-400 text-sm font-semibold">Recommend Us</p>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {realReviews.map((item) => (
            <div key={item.id} className="bg-gray-900/40 border border-yellow-600/20 p-6 rounded-2xl flex flex-col justify-between hover:border-yellow-600/50 transition-all">
              <div>
                <div className="text-yellow-500 text-sm mb-4">
                  {"★".repeat(item.rating)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
                <span className="text-blue-500 font-bold text-xs bg-blue-500/10 px-2.5 py-1 rounded-full">Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* Button to open Google Maps */}
        <div className="text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded-lg text-sm tracking-wider uppercase transition-all duration-300"
          >
            SEE ALL REVIEWS ON GOOGLE MAPS
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
