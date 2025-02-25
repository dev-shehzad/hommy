"use client"

export default function AvailabilityBanner() {
  return (
    <div
      className="relative h-[200px] w-full bg-[#ffded4] overflow-hidden px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL || "./lunamia.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-200 bg-opacity-80" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <button
          className="px-8 py-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          onClick={() => console.log("Check availability clicked")}
        >
          CHECK AVAILABILITY
        </button>
      </div>
    </div>
  )
}

