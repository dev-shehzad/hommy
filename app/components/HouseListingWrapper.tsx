import { houseListingQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import HouseListing from "./HouseListing";

// Define TypeScript type for House data
interface House {
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
    } | null; // Image might be null
    characteristics: string[];
  }[];
}

const HouseListingWrapper = async () => {
  const houses: House[] = await sanityFetch({
    query: houseListingQuery,
  });

  // Ensure houses is an array before passing it
  if (!Array.isArray(houses)) {
    console.error("Sanity data is not an array:", houses);
    return null;
  }

  return <HouseListing houses={houses} />;
};

export default HouseListingWrapper;
