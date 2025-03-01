"use client";

import { useState } from "react";

interface Experience {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
}

interface ExperiencePageProps {
  experiences: Experience[];
}

export default function ExperiencePage({ experiences = [] }: ExperiencePageProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-left mb-12">Popular Destinations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {experiences.map((experience) => (
            <div key={experience._id} className="flex flex-col">
              <div className="h-72 w-full overflow-hidden">
                <img
                  src={experience.imageUrl}
                  alt={experience.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold mt-3">{experience.title}</h3>
              <p className="text-gray-600 text-sm">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
