export default function HeaderBanner() {
    return (
      <div className="w-full bg-gray-400 py-8 px-4 rounded-lg mx-auto my-4 max-w-6xl">
        <div className="space-y-4">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">Discover Your Perfect Stay</h1>
  
          {/* Subtitle */}
          <h2 className="text-lg md:text-xl text-white/90 text-center font-light">
            Luxury Accommodations for Every Traveler
          </h2>
  
          {/* Wavy Separator */}
          <div className="flex justify-center py-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-1 bg-white mx-1 rounded-full" />
            ))}
          </div>
  
          {/* Description */}
          <div className="text-white/80 max-w-2xl mx-auto text-center leading-relaxed">
            <p className="text-sm md:text-base">
              Welcome to our exclusive collection of handpicked accommodations, where luxury meets comfort in perfect
              harmony. Each property is carefully selected to ensure the highest standards of quality and guest
              satisfaction. From modern city apartments to cozy mountain retreats, we offer diverse options to suit every
              taste and preference. Experience personalized service and attention to detail that makes your stay truly
              memorable. Book your dream accommodation today and create lasting memories in our exceptional properties.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  