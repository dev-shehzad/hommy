"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function ExperiencePage({
  experiences = [],
}: ExperiencePageProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experiences</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={experience.imageUrl}
                  alt={experience.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {experience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
