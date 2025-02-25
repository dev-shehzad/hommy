import { client } from "@/sanity/lib/client";
import FeaturesSection from "@/app/components/Features-Section";
import GridLayout from "@/app/components/grid-layout";
import AvailabilityBanner from "@/app/components/availability-banner";
import SimilarApartments from "@/app/components/similar-apartments";
import HeroHeader from "@/app/components/Hero-Header";
import { getSimilarApartments } from "@/sanity/lib/getSimilar";

export default async function Page() {
  try {
    const [heroData] = await Promise.all([
      client.fetch(`*[_type == "heroHeader"][0]`),
    ]);
    const data = await getSimilarApartments(); // Sanity se data fetch karo


    return (
      <>
        <HeroHeader data={heroData} />
        <FeaturesSection  />
        <GridLayout />
        <AvailabilityBanner />
        <SimilarApartments data={data} />
        </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading content</div>;
  }
}
