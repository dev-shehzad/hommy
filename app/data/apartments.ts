import type { Apartment } from "../types"; // ✅ Import Apartment type

export const similarApartments: Apartment[] = [
  {
    id: 1, // ✅ Keep as number (matches Apartment type)
    title: "Title Fe-Wo",
    houseName: "Haus Mia",
    description: "Experience luxury living with stunning views and modern amenities.",
    imageUrl: "./luxury.jpg",
  },
  {
    id: 2,
    title: "Title Fe-Wo",
    houseName: "Haus Mia",
    description: "A perfect blend of comfort and style in a prime location.",
    imageUrl: "./castle.jpg",
  },
];
