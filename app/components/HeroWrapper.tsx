"use client"; // ✅ Client component banaya

import { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery } from "@/sanity/lib/queries";
import Hero from "./Hero";

interface HeroData {
  title: string;
  description: string;
  backgroundVideo?: {
    asset: {
      url: string;
    };
  };
  backgroundImage?: any;
}

export default function HeroWrapper() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data: HeroData = await sanityFetch({ query: heroQuery, tags: ["hero"] });
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHero();
  }, []);

  if (!heroData) return <p>Loading...</p>; // ✅ Until data loads

  return (
    <Hero
      title={heroData.title || "Default Title"}
      description={heroData.description || "Default Description"}
      backgroundVideo={heroData.backgroundVideo || null}
      backgroundImage={heroData.backgroundImage || null}
    />
  );
}
