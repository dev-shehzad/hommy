export default function LocalLifeBanner() {
    return (
      <div className="max-w-7xl mx-auto my-8 sm:my-16 px-4 sm:px-8">
        <div className="bg-gray-400 p-4 sm:p-8 rounded-lg">
          {/* Content Box */}
          <div className="bg-gray-300 p-4 sm:p-8 rounded-lg relative overflow-hidden shadow-lg">
            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL || "/luna.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
  
            {/* Content */}
            <div className="relative z-10 text-center space-y-4 py-4 sm:py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Experience Life as a Local in the Alps
              </h2>
  
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                Immerse yourself in the authentic Alpine lifestyle, where traditional charm meets modern comfort. Our
                carefully curated accommodations offer you the unique opportunity to live like a local, experiencing the
                daily rhythms and hidden treasures of mountain life that most tourists never discover.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  