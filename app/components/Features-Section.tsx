"use client";

import {
  FaBed,
  FaBath,
  FaDoorOpen,
  FaMountain,
  FaPalette,
} from "react-icons/fa";

interface FeatureProps {
  featureData: {
    rooms: { count: number; view: string };
    themes: string[];
    bed: { kingSize: number; couch: number };
    nature: string[];
    bathroom: { count: number; amenities: string[] };
  };
}

export default function FeaturesSection({ featureData }: FeatureProps) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Apartment Features
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Features */}
          <div className="space-y-10">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <FaDoorOpen className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-700">ROOMS</p>
                    <p className="text-lg">{featureData.rooms.count}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMountain className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-700">VIEW</p>
                    <p className="text-lg">{featureData.rooms.view}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Themes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaPalette className="w-6 h-6 text-purple-600" />
                <h3 className="font-bold text-lg text-gray-800">Themes</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {featureData.themes.map((theme, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    {theme}
                  </div>
                ))}
              </div>
            </div>

            {/* Bed */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaBed className="w-6 h-6 text-amber-600" />
                <h3 className="font-bold text-lg text-gray-800">
                  Sleeping Arrangements
                </h3>
              </div>
              <div className="flex gap-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold">{featureData.bed.kingSize}x</p>
                  <p className="text-gray-600">King-size Beds</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold">{featureData.bed.couch}x</p>
                  <p className="text-gray-600">Couches</p>
                </div>
              </div>
            </div>

            {/* Bathroom */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaBath className="w-6 h-6 text-cyan-600" />
                <h3 className="font-bold text-lg text-gray-800">Bathroom</h3>
              </div>
              <p className="text-lg mb-3">
                {featureData.bathroom.count} Bathroom(s)
              </p>
              <div className="grid grid-cols-2 gap-3">
                {featureData.bathroom.amenities.map((amenity, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Nature Features */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaMountain className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-xl text-gray-800">
                Natural Surroundings
              </h3>
            </div>
            <div className="grid gap-4">
              {featureData.nature.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
