import type { TabItem } from "../types"

export const tabData: TabItem[] = [
  {
    id: "family-holiday",
    title: "Family Holiday",
    content: {
      heading: "Family Holiday in Schwangau",
      description: "Experience the perfect family getaway in the beautiful town of Schwangau.",
      image: "/crafts.jpg",
      buttons: [
        { label: "view", action: "view-family-holiday" },
        { label: "family", action: "book-family-holiday" },
      ],
    },
  },
  {
    id: "honey-moon",
    title: "Honey Moon",
    content: {
      heading: "Romantic Honeymoon Escape",
      description: "Create unforgettable memories in our romantic honeymoon suites.",
      image: "/luxury.jpg",
      buttons: [
        { label: "view", action: "view-honeymoon" },
        { label: "couple", action: "book-honeymoon" },
      ],
    },
  },
  {
    id: "living-local",
    title: "Living like a local",
    content: {
      heading: "Living like a Local Family in Schwangau",
      description: "Immerse yourself in the local culture and lifestyle of Schwangau.",
      image: "/custom.jpg",
      buttons: [
        { label: "view", action: "view-local" },
        { label: "family", action: "book-local" },
      ],
    },
  },
  {
    id: "boutique",
    title: "Boutique",
    content: {
      heading: "Boutique Experience",
      description: "Discover our curated collection of boutique accommodations.",
      image: "/festa.jpg",
      buttons: [
        { label: "view", action: "view-boutique" },
        { label: "book", action: "book-boutique" },
      ],
    },
  },
]

