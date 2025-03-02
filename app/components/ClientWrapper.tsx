"use client";
import dynamic from "next/dynamic";
import { getSimilarApartments } from "@/sanity/lib/getSimilar";

// ✅ Saare client components yahan add karo
const componentsMap: { [key: string]: any } = {
  properti: dynamic(() => import("./Tabs"), { ssr: false }),
  property: dynamic(() => import("./HousePageWrapper"), { ssr: false }),
  tab: dynamic(() => import("./TabSystemWrapper"), { ssr: false }),
  experience: dynamic(() => import("./ExperiencePageWrapper"), { ssr: false }),
  hero: dynamic(() => import("./HeroWrapper"), { ssr: false }), // ✅ Added HeroWrapper
  housefeatures: dynamic(() => import("./FeaturesWrapper"), { ssr: false }), // ✅ Added FeaturesWrapper
  heroHeader: dynamic(() => import("./Hero-Header"), { ssr: false }), // ✅ HeroHeader added
  housepics: dynamic(() => import("./grid-layout"), { ssr: false }), 
  availabilityBanner: dynamic(() => import("./availability-banner"), { ssr: false }), // ✅ Added AvailabilityBanner
  similarapart: dynamic(() => import("./similar-apartments"), { ssr: false }),
  houses: dynamic(() => import("./housedetails"), { ssr: false }),
  honeymoon:dynamic(() => import("./honeymoon-section"), {ssr:false}),
  blogmodule2:dynamic(() => import("./HeaderBanner"), {ssr:false}),
  honeymoonlayout:dynamic(()=> import("./HoneymoonLayout"), {ssr:false}),
  place:dynamic(() => import("./PopularPlaces"), {ssr:false}),
  blogmodule5:dynamic(() => import("./LocalLifeBanner"), {ssr:false}),
  blogmodule6:dynamic(() => import("./ImageLayout"), {ssr:false}),
  blogmodule7:dynamic(()=> import("./HighlightSection"), {ssr:false}),
  blogmodule8:dynamic(() => import("./ThreeColumnInfo"), {ssr:false}),
  blogmodule9:dynamic(() => import("./AlternatingFeatures"), {ssr:false})

};
const data = await getSimilarApartments(); // Sanity se data fetch karo

export default function ClientWrapper({
  componentType,
  componentProps,
}: {
  componentType: string;
  componentProps?: any;
}) {
  const Component = componentsMap[componentType];

  if (!Component) return null; // Agar component mapping mein nahi mila to ignore karo

  return <Component data={data} {...componentProps} />;
}
