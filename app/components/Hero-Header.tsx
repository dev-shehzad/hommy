"use client";

import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";

interface HeroHeaderProps {
  data: {
    title: string;
    subtitle: string;
    apartmentTitle: string;
    houseSubtitle: string;
    backgroundImage: SanityImageSource;
  };
}

export default function HeroHeader({ data }: HeroHeaderProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Ensure we have stable values
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    apartmentTitle = "Default Apartment",
    houseSubtitle = "Default House",
  } = data || {};

  // Using urlForImage from utils
  const backgroundImageUrl = data?.backgroundImage
    ? urlForImage(data.backgroundImage).url()
    : "/lunamia.jpg";

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={backgroundImageUrl}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      <div className="relative h-full text-white px-4">
        <div className="absolute top-8 right-8">
          <button className="text-white hover:text-gray-200 transition-colors">
            <FaBookmark className="w-8 h-8" />
          </button>
        </div>

        <div className="text-center mb-12 flex-1 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          <p className="text-xl md:text-2xl">{subtitle}</p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["overview", "details", "book"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full border-2 border-white transition-colors
                  ${
                    activeTab === tab
                      ? "bg-white text-gray-800"
                      : "bg-transparent hover:bg-white hover:text-gray-800"
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
