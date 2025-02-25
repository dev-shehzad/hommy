export interface Apartment {
  id: number; // Ensure ID type matches your data (string or number)
  title: string;
  houseName: string;
  description?: string;
  characteristics?: string[];
  imageUrl: string;
}



export type House = {
  details: any;
  link: string;
  id: string
  name: string
  apartments: {
    id: number
    title: string
    houseName: string
    characteristics: string[]
    imageUrl: string
  }[]
}

export type HouseType = {
  id: string
  name: string
  subtitle?: string
  description?: string
  image: string
  style: string
}



export interface TabContent {
  id: string
  title: string
  image: string
  description: string
}

export interface Experience {
  id: string
  title: string
  description: string
  image: string
}

export interface BulletPoint {
  id: string
  title: string
  description: string
  isHighlighted?: boolean
}

export interface FooterLink {
  title: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface ApartmentFeatures {
  rooms: {
    count: number
    view: string
  }
  themes: string[]
  bed: {
    kingSize: number
    couch: number
  }
  nature: string[]
  bathroom: {
    count: number
    amenities: string[]
  }
}

export interface GridItem {
  id: string
  type: "image" | "text"
  content: string
}

export interface PropertyFeature {
  icon: string
  text: string
}

export interface Property {
  id: string
  title: string
  description: string
  imageUrl: string
  features: PropertyFeature[]
  isHighlighted?: boolean
}

export interface Tab {
  id: string
  label: string
}

export interface NearbyPlace {
  id: string
  title: string
  distance: string
  description: string
}

export interface NavItem {
  id: string
  label: string
  link: string
}

export interface MenuLink {
  id: string
  label: string
  link: string
}
export interface TabItem {
  id: string
  title: string
  content: {
    heading: string
    description: string
    image: string
    buttons: {
      label: string
      action: string
    }[]
  }
}


