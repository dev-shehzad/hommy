import { propertiesQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import HousePage from "./HousePage";

const HousePageWrapper = async () => {
  try {
    const properties = await sanityFetch({
      query: propertiesQuery,
    });

    // Add a check to ensure properties is an array
    if (!Array.isArray(properties)) {
      console.error("Properties is not an array:", properties);
      return <div>Error loading properties</div>;
    }

    return <HousePage properties={properties} />;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return <div>Error loading properties</div>;
  }
};

export default HousePageWrapper;
