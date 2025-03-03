"use client";

import { useState, useEffect } from "react";
import { urlFor } from "../../sanity/lib/sanity";
import { getSimilarApartments } from "../../sanity/lib/getSimilar";

type Apartment = {
  _id: string;
  slug: string;
  title: string;
  houseName: string;
  description: string;
  imageUrl?: {
    asset: {
      _ref?: string;
      url?: string;
    };
  };
};

type Button = {
  label: string;
  subtext: string;
  link: string;
  linkedApartments?: Apartment[];
};

type SimilarApartmentsData = {
  sectionTitle?: string;
  buttons?: Button[];
};

export default function SimilarApartments() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState<SimilarApartmentsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getSimilarApartments();
        console.log("✅ Similar Apartments Data:", result);
        setData(result);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!data || !data.buttons || data.buttons.length === 0) {
    return <p className="text-center">No data found</p>;
  }

  const selectedButton = data.buttons[selectedTab];

  console.log("🔹 Current Selected Tab Data:", selectedButton);

  return (
    <div className="bg-white container mx-auto p-8 rounded-lg  px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">
        {data.sectionTitle || "Similar Apartments"}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Apartments List */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
          {selectedButton?.linkedApartments?.length > 0 ? (
            selectedButton.linkedApartments.map((apartment) => (
              <div key={apartment._id} className="bg-white rounded-lg shadow-md">
                <div className="aspect-square bg-[#ffded4]">
                  <img
                    src={
                      apartment.imageUrl?.asset?._ref
                        ? urlFor(apartment.imageUrl.asset._ref)
                        : "/placeholder.svg"
                    }
                    alt={apartment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold">{apartment.title}</h3>
                  <p className="text-gray-600">{apartment.houseName}</p>
                  <p className="text-gray-500 text-sm">{apartment.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No apartments available for this category.</p>
          )}
        </div>

        {/* Tabs Section */}
        <div className="space-y-4">
          {data.buttons.map((button, index) => (
            <button
              key={button.label || index}
              onClick={() => setSelectedTab(index)}
              className={`w-full p-4 text-left rounded-lg transition-colors ${
                selectedTab === index ? "bg-gray-200" : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <span className="block text-lg font-medium">
                {button.label || "Untitled Button"}
              </span>
              <span className="text-gray-600">{button.subtext || "No description available"}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
