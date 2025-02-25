import type { NavItem, House, MenuLink } from "../types";

export const navItems: NavItem[] = [
  {
    id: "check-in",
    label: "Check-In Wann?",
    link: "/check-in",
  },
  {
    id: "check-out",
    label: "Check-Out Wann?",
    link: "/check-out",
  },
  {
    id: "persons",
    label: "Anzal Personen Wer?",
    link: "/persons",
  },
  {
    id: "apartments",
    label: "Apartment",
    link: "/apartment",
  },
  {
    id: "houses",
    label: "Houses",
    link: "/houses",
  },
  {
    id: "blogs",
    label: "Blogs",
    link: "/blogs",
  }
];

export const houses: House[] = [
  {
    id: "luna", name: "Haus Luna", link: "/haus-luna", apartments: [],
    details: undefined
  }, // ✅ Add apartments
  {
    id: "mia", name: "Haus Mia", link: "/haus-mia", apartments: [],
    details: undefined
  }, // ✅ Add apartments
  {
    id: "luna-b", name: "Haus Luna B", link: "/haus-luna-b", apartments: [],
    details: undefined
  }, // ✅ Add apartments
];

export const menuLinks: MenuLink[] = [
  { id: "deals", label: "Deals", link: "/deals" },
  { id: "guides", label: "Guides", link: "/guides" },
  { id: "local", label: "Local", link: "/local" },
  { id: "sustainable", label: "Sustainable", link: "/sustainable" },
];
