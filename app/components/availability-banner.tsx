"use client";
import { useEffect, useState } from "react";
import { getAvailabilityBanner } from "@/sanity/lib/getAvailabilityBanner";

interface AvailabilityBannerData {
  backgroundImage?: string;
  buttonText?: string;
}

export default function AvailabilityBanner() {
  const [data, setData] = useState<AvailabilityBannerData | null>(null);

  useEffect(() => {
    getAvailabilityBanner().then((res) => setData(res));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div
      className="relative h-[200px] w-full bg-[#ffded4] overflow-hidden px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage: `url(${data.backgroundImage || "./lunamia.jpg"})`,
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
          {data.buttonText}
        </button>
      </div>
    </div>
  );
}
