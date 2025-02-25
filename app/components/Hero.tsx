"use client";

import { useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

interface HeroProps {
  title: string;
  description: string;
  backgroundVideo: {
    asset: {
      url: string;
    };
  };
  backgroundImage: any; // Sanity image type
}

const Hero: React.FC <HeroProps> = ({
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
      <section className="relative h-screen w-full overflow-hidden">
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
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl mx-auto opacity-80">
            {description}
          </p>
          <button
            onClick={handleScroll}
            className="absolute bottom-8 animate-bounce"
            aria-label="Scroll to content"
          >
            <BsChevronDown size={32} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
