// "use client";
import HomePage from "../components/HomePage";
import TabSystemWrapper from "../components/TabSystemWrapper";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery } from "@/sanity/lib/queries";
import HeroWrapper from "../components/HeroWrapper";
import HouseListingWrapper from "../components/HouseListingWrapper";
import HousePageWrapper from "../components/HousePageWrapper";
import ExperiencePageWrapper from "../components/ExperiencePageWrapper";

export default  function Home() {
  // const houseListingRef = useRef<HTMLElement>(null);
  // const heroData = await sanityFetch({ query: heroQuery });
  return (
    <main>
      <HeroWrapper />
      <HouseListingWrapper />
      <HousePageWrapper />
      <TabSystemWrapper />
      <ExperiencePageWrapper />
      <HomePage />
    </main>
  );
}
