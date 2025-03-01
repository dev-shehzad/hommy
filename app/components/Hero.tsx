"use client";

import { useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

interface HeroProps {
  title: string;
  description: string;
  backgroundVideo?: {
    asset: {
      url: string;
    };
  };
  backgroundImage?: any; // Sanity image type
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  backgroundVideo,
  backgroundImage,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const houseListingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const handleScroll = () => {
    if (houseListingRef.current) {
      houseListingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative h-[90vh] w-full overflow-hidden flex flex-col justify-center">
        {/* Background Video or Image */}
        {backgroundVideo ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo.asset.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : backgroundImage ? (
          <Image
            src={urlForImage(backgroundImage).url() || "/placeholder.svg"}
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        ) : null}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content Section (Left-Aligned) */}
        <div className="relative  z-10 text-white px-8 md:px-16 w-full container mx-auto  ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-80">
            {description}
          </p>
        </div>

        {/* Scroll Down Button (Centered Bottom) */}
        <button
          onClick={handleScroll}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white"
          aria-label="Scroll to content"
        >
          <BsChevronDown size={32} />
        </button>
      </section>

      {/* House Listing Section (Scroll Target) */}
      <section ref={houseListingRef} id="house-listing" className="">
        {/* Your content here */}
      </section>
    </>
  );
};

export default Hero;
