import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery } from "@/sanity/lib/queries";
import Hero from "./Hero";

// Define types for the Hero data from Sanity
interface HeroData {
  title: string;
  description: string;
  backgroundVideo?: {
    asset: {
      url: string;
    };
  };
  backgroundImage?: any; // Adjust based on your Sanity image type
}

export default async function HeroWrapper() {
  const heroData: HeroData = await sanityFetch({ query: heroQuery, tags: ["hero"] });

  return (
    <Hero
      title={heroData.title || "Default Title"}
      description={heroData.description || "Default Description"}
      backgroundVideo={heroData.backgroundVideo || null}
      backgroundImage={heroData.backgroundImage || null}
    />
  );
}