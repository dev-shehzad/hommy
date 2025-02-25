import { tabSystemQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import TabSystem from "./tab-system";

const TabSystemWrapper = async () => {
  try {
    const tabs = await sanityFetch({
      query: tabSystemQuery,
    });

    console.log("Fetched tabs:", tabs); // Debug log

    // Add a check to ensure tabs is an array and has items
    if (!Array.isArray(tabs) || tabs.length === 0) {
      return (
        <div className="container mx-auto px-4 py-8">
          <p className="text-lg text-gray-600">
            Please add some tabs in Sanity Studio to get started.
          </p>
        </div>
      );
    }

    return <TabSystem tabs={tabs} />;
  } catch (error) {
    console.error("Error fetching tabs:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg text-red-600">
          Error loading tabs. Please try again later.
        </p>
      </div>
    );
  }
};

export default TabSystemWrapper;
