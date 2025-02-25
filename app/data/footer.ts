import type { FooterColumn } from "../types"

export const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about" },
      { title: "Our Properties", href: "/properties" },
      { title: "Contact", href: "/contact" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Apartment Booking", href: "/booking" },
      { title: "Local Experiences", href: "/experiences" },
      { title: "Tourist Guide", href: "/guide" },
      { title: "Special Offers", href: "/offers" },
      { title: "Support", href: "/support" },
    ],
  },
  {
    title: "Information",
    links: [
      { title: "Terms & Conditions", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Cookie Policy", href: "/cookies" },
      { title: "Sitemap", href: "/sitemap" },
      { title: "Blog", href: "/blog" },
    ],
  },
]

