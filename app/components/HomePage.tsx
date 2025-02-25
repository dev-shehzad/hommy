import { FaArrowRight } from "react-icons/fa";
import { client } from "@/sanity/lib/client";

interface Experience {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
}

interface HomeContent {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

export default async function HomePage() {
  try {
    // Fetch experiences and home content from Sanity
    const [experiences, homeContent] = await Promise.all([
      client.fetch<Experience[]>(`*[_type == "experience"] | order(order asc) {
        _id,
        title,
        description,
        "imageUrl": image.asset->url,
        order
      }`),
      client.fetch<HomeContent>(`*[_type == "homeContent"][0] {
        title,
        subtitle,
        description,
        buttonText
      }`),
    ]);

    if (!experiences || !homeContent) {
      return <div>Loading content...</div>;
    }

    return (
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {homeContent.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 italic">
                {homeContent.subtitle}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {homeContent.description}
              </p>
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
              <span>{homeContent.buttonText || "View all apartments"}</span>
              <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Right Section - Bullet Points Grid */}
          <div className="grid grid-cols-2 gap-4">
            {experiences.map((experience) => (
              <div
                key={experience._id}
                className="p-4 rounded-lg border border-gray-200 bg-white"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gray-900" />
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading content. Please try again later.</div>;
  }
}
