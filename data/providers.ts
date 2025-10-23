export type Provider = {
  id: string;
  name: string;
  category: string;
  area: string;
  basePrice: number;
  rating: number;
  photos: string[];
  bio: string;
};

export const PROVIDERS: Provider[] = [
  {
    id: "thabo-plumb",
    name: "Thabo Plumbing",
    category: "Home & Maintenance",
    area: "Randburg",
    basePrice: 450,
    rating: 4.8,
    photos: ["/hero.jpg", "/hero.jpg"],
    bio: "Licensed plumber with 8+ years experience. Burst pipes, geysers, leaks and renovations."
  },
  {
    id: "lerato-clean",
    name: "Lerato Clean Co.",
    category: "Cleaning & Lifestyle",
    area: "Parktown",
    basePrice: 300,
    rating: 4.7,
    photos: ["/hero.jpg", "/hero.jpg"],
    bio: "Professional home & office cleaning. Eco-friendly products on request."
  },
  {
    id: "kg-tune",
    name: "KG Auto Tune",
    category: "Automotive",
    area: "Soweto",
    basePrice: 600,
    rating: 4.6,
    photos: ["/hero.jpg", "/hero.jpg"],
    bio: "Mobile mechanic — diagnostics, servicing, brakes & suspensions."
  }
];
