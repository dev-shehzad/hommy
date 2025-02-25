"use client";

import { useState, useEffect } from "react";
import { FaHome, FaBed, FaSun, FaStar, FaThLarge, FaEye, FaBook, FaMapMarkerAlt, FaCircle } from "react-icons/fa";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Apartment {
  _key: string;
  title: string;
  description: string;
  imageUrl: string;
  features: { icon: string; text: string }[];
}

interface Location {
  mapImageUrl: string;
  neighborhood: string;
  nearbyPlaces: {
    title: string;
    distance: string;
    description: string;
  }[];
}

interface House {
  slug: string;
  name: string;
  details: string;
  apartments: Apartment[];
  location: Location;
}

export default function HouseDetails() {
  const [houses, setHouses] = useState<House[]>([]);
  const [activeHouse, setActiveHouse] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"apartments" | "details">("details");

  useEffect(() => {
    async function fetchHouses() {
      const query = `*[_type == "houses"]{
        name,
        "slug": slug.current,
        details,
        apartments[] {
          _key,
          title,
          description,
          "imageUrl": image.asset->url,
          features[] {
            icon,
            text
          }
        },
        location {
          "mapImageUrl": mapImage.asset->url,
          neighborhood,
          nearbyPlaces[] {
            title,
            distance,
            description
          }
        }
      }`;
      const data = await client.fetch(query);
      setHouses(data);
      if (data.length > 0) setActiveHouse(data[0].slug);
    }

    fetchHouses();
  }, []);

  const currentHouse = houses.find((house) => house.slug === activeHouse);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "bed":
        return <FaBed className="text-lg" />;
      case "sun":
        return <FaSun className="text-lg" />;
      case "star":
        return <FaStar className="text-lg" />;
      case "layout":
        return <FaThLarge className="text-lg" />;
      default:
        return <FaStar className="text-lg" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* House Selection Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {houses.map((house) => (
          <button
            key={house.slug}
            onClick={() => setActiveHouse(house.slug)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              activeHouse === house.slug ? "bg-gray-900 text-white" : "hover:bg-gray-100"
            }`}
          >
            <FaHome />
            <span>{house.name}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative bg-white rounded-xl p-6 md:p-8 min-h-[300px] shadow-lg">
        {currentHouse && (
          <>
            <h1 className="text-3xl font-bold text-center mb-8">HOUSE {currentHouse.name}</h1>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab("apartments")}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === "apartments" ? "bg-gray-900 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Apartments
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === "details" ? "bg-gray-900 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Details
              </button>
            </div>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto">
              {activeTab === "details" ? (
                <p className="text-lg text-center max-w-2xl mx-auto">{currentHouse.details}</p>
              ) : (
                <div className="space-y-8">
                  {currentHouse.apartments?.map((apartment) => (
                    <div key={apartment._key} className="grid md:grid-cols-2 gap-6 p-6 rounded-xl bg-gray-50 shadow-md">
                      {/* Image Section */}
                      <div className="relative aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={apartment.imageUrl}
                          alt={apartment.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                          {[...Array(4)].map((_, i) => (
                            <span
                              key={i}
                              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold">{apartment.title}</h2>
                        <p className="text-gray-600">{apartment.description}</p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {apartment.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-700">
                              {getIcon(feature.icon)}
                              <span>{feature.text}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-6">
                          <button className="flex-1 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                            <FaEye />
                            View
                          </button>
                          <button className="flex-1 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                            <FaBook />
                            Book
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Location Section */}
      {currentHouse?.location && (
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="bg-gray-200 rounded-lg overflow-hidden relative min-h-[400px]">
              <Image
                src={currentHouse.location.mapImageUrl}
                alt="Location Map"
                fill
                className="object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-purple-100 p-2 rounded shadow-lg">
                  <p className="text-sm font-medium">{currentHouse.name}</p>
                  <p className="text-xs">Boutique Apartments</p>
                </div>
                <FaMapMarkerAlt className="text-2xl text-purple-600 mx-auto mt-1" />
              </div>
            </div>

            {/* Neighborhood Section */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Located in the</h2>
                <h3 className="text-xl">{currentHouse.location.neighborhood}</h3>
              </div>
            </div>
          </div>

          {/* Nearby Places */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {currentHouse.location.nearbyPlaces.map((place, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <FaCircle className="text-gray-400" />
                  <h3 className="font-medium">{place.title}</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">{place.distance}</p>
                  <p className="text-sm">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}