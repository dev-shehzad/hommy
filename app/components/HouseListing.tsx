"use client";

import { useState, forwardRef } from "react";
import { FaHome } from "react-icons/fa";
import Image from "next/image";

interface HouseListingProps {
  houses: {
    _id: string;
    name: string;
    apartments: {
      _id: string;
      title: string;
      houseName: string;
      image: {
        asset: {
          _id: string;
          url: string;
        };
      } | null;
      characteristics: string[];
    }[];
  }[];
}

const HouseListing = forwardRef<HTMLElement, HouseListingProps>(
  ({ houses }, ref) => {
    const [activeTab, setActiveTab] = useState<string>("All");
    const [visibleCount, setVisibleCount] = useState<number>(3);

    const getFilteredApartments = () => {
      if (activeTab === "All") {
        return houses.flatMap((house) => house.apartments);
      } else {
        const selectedHouse = houses.find((house) => house.name === activeTab);
        return selectedHouse?.apartments || [];
      }
    };

    const filteredApartments = getFilteredApartments();
    const visibleApartments = filteredApartments.slice(0, visibleCount);

    const loadMore = () => {
      setVisibleCount((prevCount) => prevCount + 3);
    };

    return (
      <main ref={ref} className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => {
                setActiveTab("All");
                setVisibleCount(3);
              }}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "All"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              } border border-gray-200 rounded-l-lg`}
            >
              All
            </button>
            {houses.map((house, index) => (
              <button
                key={house.name}
                onClick={() => {
                  setActiveTab(house.name);
                  setVisibleCount(3);
                }}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === house.name
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border border-gray-200 ${index === houses.length - 1 ? "rounded-r-lg" : ""}`}
              >
                {house.name}
              </button>
            ))}
          </div>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleApartments.map((apartment) => {
            console.log("Apartment data:", apartment);

            return (
              <div
                key={apartment._id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative h-48">
                  {apartment.image?.asset?.url ? (
                    <Image
                      src={apartment.image.asset.url}
                      alt={apartment.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src="/placeholder.svg"
                      alt="Placeholder"
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {apartment.title}
                  </h3>
                  <p className="text-gray-600 mb-2 flex items-center gap-2">
                    <FaHome className="inline" />
                    {apartment.houseName}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(apartment.characteristics || []).map(
                      (characteristic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {characteristic}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredApartments.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    );
  }
);

HouseListing.displayName = "HouseListing";

export default HouseListing;
