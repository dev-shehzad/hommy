import { urlFor } from "../../sanity/lib/sanity" // Ensure you have a utility function for Sanity images
import Link from "next/link";

type Apartment = {
  _id: string;
  title: string;
  houseName: string;
  description: string;
  imageUrl?: {
    asset: {
      _ref?: string;
      url?: string;
    };
  };
};

type Button = {
  label: string;
  subtext: string;
  link: string;
};

type SimilarApartmentsProps = {
  data: {
    sectionTitle: string;
    apartments: Apartment[];
    buttons: Button[];
  };
};

export default function SimilarApartments({ data }: SimilarApartmentsProps) {
  console.log("SimilarApartments Data:", data); // Debugging

  if (!data) return <p className="text-center">No data found</p>;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">{data.sectionTitle}</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Apartment Cards */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
          {data.apartments?.map((apartment, index) => (
            <div key={apartment._id || index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square relative bg-[#ffded4]">
                <img
                  src={apartment.imageUrl?.asset?._ref ? urlFor(apartment.imageUrl.asset._ref) : "/placeholder.svg"}
                  alt={apartment.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{apartment.title}</h3>
                <p className="text-gray-600">{apartment.houseName}</p>
                <p className="text-gray-500 text-sm">{apartment.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overview Buttons */}
        <div className="space-y-4">
          {data.buttons?.map((button, index) => {
            const buttonLink = button.link || "#"; // Default fallback
            return (
              <Link key={button.label || index} href={buttonLink} passHref>
                <button className="w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="block text-lg font-medium">{button.label || "Untitled Button"}</span>
                  <span className="text-gray-600">{button.subtext || "No description available"}</span>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
