import type { TabContent } from "../types"

export const mainContent = {
  title: "Living like a Local Family in Schwemgau",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R9AZMW5ab3seqJjbZDBXBwH70osthT.png",
}

export const tabContents: TabContent[] = [
  {
    id: "family-holiday",
    title: "Family Holiday",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R9AZMW5ab3seqJjbZDBXBwH70osthT.png",
    description: "Experience the perfect family getaway",
  },
  {
    id: "honey-moon",
    title: "Honey Moon",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R9AZMW5ab3seqJjbZDBXBwH70osthT.png",
    description: "Romantic escapes for newlyweds",
  },
  {
    id: "living-local",
    title: "Living like a local",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R9AZMW5ab3seqJjbZDBXBwH70osthT.png",
    description: "Immerse yourself in local culture",
  },
  {
    id: "boutique",
    title: "Boutique",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R9AZMW5ab3seqJjbZDBXBwH70osthT.png",
    description: "Unique and stylish accommodations",
  },
]

import type { BulletPoint } from "../types"

export const homeContent = {
  title: "Schwangau Homes",
  subtitle: '"Living like a local"',
  description: `Experience authentic local living in our carefully selected homes. 
  Immerse yourself in the rich culture and traditions of Schwangau while enjoying 
  modern comforts and amenities. Our properties offer the perfect blend of 
  traditional charm and contemporary convenience.`,
}

export const bulletPoints: BulletPoint[] = Array.from({ length: 6 }, (_, i) => ({
  id: `point-${i + 1}`,
  title: "Bullet Point",
  description: "Detailed information about this feature or amenity",
  isHighlighted: i === 1, // Highlighting the second bullet point
}))

