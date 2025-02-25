import type { Property } from "../types"

export const apartments: Property[] = [
  {
    id: "1",
    title: "LUNA II",
    description: "Luxury apartment with stunning views",
    imageUrl: "./mountain.jpg",
    features: [
      { icon: "bed", text: "King Size Bed" },
      { icon: "home", text: "2 Rooms" },
      { icon: "sun", text: "Balcony" },
      { icon: "star", text: "Mountain View" },
      { icon: "layout", text: "Modern Theme" },
    ],
    isHighlighted: false,
  },
  {
    id: "2",
    title: "LUNA II",
    description: "Modern comfort with traditional charm",
    imageUrl: "castle.jpg",
    features: [
      { icon: "bed", text: "Queen Size Bed" },
      { icon: "home", text: "3 Rooms" },
      { icon: "sun", text: "Balcony" },
      { icon: "star", text: "Castle View" },
      { icon: "layout", text: "Classic Theme" },
    ],
    isHighlighted: true,
  },
  {
    id: "3",
    title: "LUNA II",
    description: "Cozy retreat in the heart of nature",
    imageUrl: "garden.jpg",
    features: [
      { icon: "bed", text: "Twin Beds" },
      { icon: "home", text: "2 Rooms" },
      { icon: "sun", text: "Balcony" },
      { icon: "star", text: "Garden View" },
      { icon: "layout", text: "Nature Theme" },
    ],
    isHighlighted: false,
  },
]

