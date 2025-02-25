import type { House, HouseType } from "../types"

export const houses: House[] = [
  {
    id: "haus-luna",
    name: "Haus Luna",
    apartments: [
      {
        id: 1,
        title: "Apartment 1",
        houseName: "Haus Luna",
        characteristics: ["Modern", "Spacious", "City View"],
        imageUrl: "./luna.jpg",
      },
      {
        id: 2,
        title: "Apartment 2",
        houseName: "Haus Luna",
        characteristics: ["Cozy", "Balcony", "Park View"],
        imageUrl: "./luna.jpg",
      },
      {
        id: 3,
        title: "Apartment 3",
        houseName: "Haus Luna",
        characteristics: ["Luxurious", "Terrace", "River View"],
        imageUrl: "./luna.jpg",
      },
      {
        id: 4,
        title: "Apartment 4",
        houseName: "Haus Luna",
        characteristics: ["Minimalist", "Open Plan", "Mountain View"],
        imageUrl: "./luna.jpg",
      },
      {
        id: 5,
        title: "Apartment 5",
        houseName: "Haus Luna",
        characteristics: ["Rustic", "Fireplace", "Garden Access"],
        imageUrl: "./luna.jpg",
      },
      {
        id: 6,
        title: "Apartment 6",
        houseName: "Haus Luna",
        characteristics: ["Contemporary", "High Ceiling", "Skyline View"],
        imageUrl: "./luna.jpg",
      },
      {
        id: 7,
        title: "Apartment 7",
        houseName: "Haus Luna",
        characteristics: ["Eco-friendly", "Solar Panels", "Green Roof"],
        imageUrl: "./luna.jpg",
      },
      {
        id: 8,
        title: "Apartment 8",
        houseName: "Haus Luna",
        characteristics: ["Penthouse", "Private Pool", "360° View"],
        imageUrl: "./luna.jpg",
      },
    ],
    details: undefined,
    link: ""
  },
  {
    id: "haus-mia",
    name: "Haus Mia",
    apartments: [
      {
        id: 9,
        title: "Apartment 1",
        houseName: "Haus Mia",
        characteristics: ["Vintage", "Hardwood Floors", "City Center"],
        imageUrl: "./mia.jpg",
      },
      {
        id: 10,
        title: "Apartment 2",
        houseName: "Haus Mia",
        characteristics: ["Art Deco", "High Ceilings", "Artistic Neighborhood"],
        imageUrl: "./mia.jpg",
      },
      {
        id: 11,
        title: "Apartment 3",
        houseName: "Haus Mia",
        characteristics: ["Industrial", "Exposed Brick", "Loft Style"],
        imageUrl: "./mia.jpg",
      },
      {
        id: 12,
        title: "Apartment 4",
        houseName: "Haus Mia",
        characteristics: ["Bohemian", "Colorful", "Rooftop Garden"],
        imageUrl: "./mia.jpg",
      },
      {
        id: 13,
        title: "Apartment 5",
        houseName: "Haus Mia",
        characteristics: ["Scandinavian", "Minimalist", "Light & Airy"],
        imageUrl: "./mia.jpg",
      },
      {
        id: 14,
        title: "Apartment 6",
        houseName: "Haus Mia",
        characteristics: ["Mediterranean", "Terracotta", "Sea View"],
        imageUrl: "./mia.jpg",
      },
      {
        id: 15,
        title: "Apartment 7",
        houseName: "Haus Mia",
        characteristics: ["Japanese", "Zen Garden", "Tatami Room"],
        imageUrl: "./mia.jpg",
      },
      {
        id: 16,
        title: "Apartment 8",
        houseName: "Haus Mia",
        characteristics: ["Moroccan", "Intricate Tiles", "Courtyard"],
        imageUrl: "./mia.jpg",
      },
    ],
    details: undefined,
    link: ""
  },
  {
    id: "haus-luna-balanca",
    name: "Haus Luna Balanca",
    apartments: [
      {
        id: 17,
        title: "Apartment 1",
        houseName: "Haus Luna Balanca",
        characteristics: ["Modern Rustic", "Stone Walls", "Mountain View"],
        imageUrl: "./balanca.jpg",
      },
      {
        id: 18,
        title: "Apartment 2",
        houseName: "Haus Luna Balanca",
        characteristics: ["Alpine Chic", "Wooden Beams", "Ski-in/Ski-out"],
        imageUrl: "./balanca.jpg",
      },
      {
        id: 19,
        title: "Apartment 3",
        houseName: "Haus Luna Balanca",
        characteristics: ["Contemporary", "Floor-to-Ceiling Windows", "Panoramic View"],
        imageUrl: "./balanca.jpg",
      },
      {
        id: 20,
        title: "Apartment 4",
        houseName: "Haus Luna Balanca",
        characteristics: ["Eco-Lodge", "Sustainable Materials", "Forest View"],
        imageUrl: "./balanca.jpg",
      },
      {
        id: 21,
        title: "Apartment 5",
        houseName: "Haus Luna Balanca",
        characteristics: ["Luxury Cabin", "Hot Tub", "Private Deck"],
        imageUrl: "./balanca.jpg",
      },
      {
        id: 22,
        title: "Apartment 6",
        houseName: "Haus Luna Balanca",
        characteristics: ["Modern Farmhouse", "Barn Door", "Meadow View"],
        imageUrl: "./balanca.jpg",
      },
      {
        id: 23,
        title: "Apartment 7",
        houseName: "Haus Luna Balanca",
        characteristics: ["Treehouse Style", "Elevated", "Canopy View"],
        imageUrl: "./balanca.jpg",
      },
      {
        id: 24,
        title: "Apartment 8",
        houseName: "Haus Luna Balanca",
        characteristics: ["Glass House", "Minimalist", "Stargazing Roof"],
        imageUrl: "./balanca.jpg",
      },
    ],
    details: undefined,
    link: ""
  },
]


// Define the main house
export const mainHouse: HouseType = {
  id: "main-house",
  name: "Haus Luna Mia",
  subtitle: "The Countryhouse",
  description:
    "Experience the charm of our countryside retreat with modern amenities and traditional architecture. Perfect for those seeking a peaceful getaway with all the comforts of home.",
  image: "./countryside.jpg",
  style: "Countryhouse",
}

// Define different house variants
export const houseVariants: HouseType[] = [
  {
    id: "luna-1",
    name: "Luna Mia 1",
    subtitle: "Modern Comfort",
    style: "Landhaus",
    description: "A perfect blend of traditional countryside living with modern amenities.",
    image: "./lunamia.jpg",
  },
  {
    id: "luna-2",
    name: "Luna Mia 2",
    subtitle: "Classic Style",
    style: "Vintage",
    description: "Experience the timeless charm of vintage design with contemporary comfort.",
    image: "mia.jpg",
  },
  {
    id: "luna-3",
    name: "Luna Mia 3",
    subtitle: "Retro Living",
    style: "Retro",
    description: "Step back in time with our retro-themed accommodation featuring modern conveniences.",
    image: "./luna.jpg",
  },
]

// Define a general house list
export const house: HouseType[] = [
  {
    id: "main-house",
    name: "Haus Luna Mia",
    subtitle: "The Countryhouse",
    image: "./hausluna.jpg",
    description:
      "Experience the charm of countryside living in our beautifully restored farmhouse. Featuring traditional architecture with modern amenities, this house offers a perfect blend of rustic appeal and contemporary comfort.",
    style: "Countryhouse",
  },
  {
    id: "luna-mia-1",
    name: "Luna Mia 1",
    subtitle: "Landhaus",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MCrZUfxZa23tU0OR202qkeGihsxdak.png",
    description: "A traditional countryside retreat featuring authentic architectural elements and modern comfort.",
    style: "Landhaus",
  },
  {
    id: "luna-mia-2",
    name: "Luna Mia 2",
    subtitle: "Vintage",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MCrZUfxZa23tU0OR202qkeGihsxdak.png",
    description: "Classic vintage design meets contemporary living in this uniquely styled house.",
    style: "Vintage",
  },
  {
    id: "luna-mia-3",
    name: "Luna Mia 3",
    subtitle: "Retro",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MCrZUfxZa23tU0OR202qkeGihsxdak.png",
    description: "Step back in time with our retro-themed house while enjoying modern amenities.",
    style: "Retro",
  },
]

// Set the main house from the list
export const mainHouses = houses[0] // ✅ Fix still valid

