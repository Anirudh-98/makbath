// Business details sourced from the MAK BATH & LIGHTS Google Maps listing.
export const business = {
  name: "MAK Bath & Lights",
  tagline: "Wholesale & Retail",
  category: "Bath fittings, lights & chandeliers",
  phoneDisplay: "+91 99662 55571",
  phoneHref: "tel:+919966255571",
  whatsappHref: "https://wa.me/919966255571",
  address: {
    street: "Troop Bazaar, Abids",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500001",
    country: "IN",
  },
  geo: { lat: 17.3852098, lng: 78.4767494 },
  mapsUrl: "https://maps.app.goo.gl/1nr2xA62cnyrzYy6A",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=17.3852098,78.4767494",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sMAK+BATH+%26+LIGHTS,+Troop+Bazaar,+Abids,+Hyderabad!6i17",
  rating: 4.3,
  reviewCount: 92,
  hours: [
    { days: "Monday – Saturday", time: "10:30 AM – 10:00 PM" },
    { days: "Sunday", time: "10:30 AM – 6:30 PM" },
  ],
  brands: ["Jaquar", "Hindware", "CERA"],
  review:
    "Best products for all items in home — kitchen, bathroom. Best employees, best owners.",
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.postalCode}`;

export function enquiryLink(product?: string) {
  const text = product
    ? `Hi MAK Bath & Lights, I'm interested in the ${product}. Could you share more details?`
    : "Hi MAK Bath & Lights, I'd like to know more about your products.";
  return `${business.whatsappHref}?text=${encodeURIComponent(text)}`;
}

export type Product = {
  name: string;
  description: string;
  image: string;
};

export const lightingProducts: Product[] = [
  {
    name: "Triple Ring LED Chandelier",
    description: "Brushed gold rings, warm LED glow",
    image: "/images/p-ring-chandelier.webp",
  },
  {
    name: "Crystal Cascade Chandelier",
    description: "Tiered crystal drops on a gold frame",
    image: "/images/p-crystal-chandelier.webp",
  },
  {
    name: "Opal Globe Pendant",
    description: "Brass cluster with opal glass globes",
    image: "/images/p-globe-pendant.webp",
  },
  {
    name: "Gold Branch Wall Sconce",
    description: "Sculptural LED wall light",
    image: "/images/p-wall-sconce.webp",
  },
];

export const bathProducts: Product[] = [
  {
    name: "Gold Vessel Wash Basin",
    description: "Glossy gold ceramic, hexagon finish",
    image: "/images/p-gold-basin.webp",
  },
  {
    name: "Marble Pedestal Basin",
    description: "Free-standing designer ceramic",
    image: "/images/p-pedestal-basin.webp",
  },
  {
    name: "Black & Gold Shower Panel",
    description: "Rain shower with body jets",
    image: "/images/p-shower-panel.webp",
  },
  {
    name: "Classic Gate Pillar Lantern",
    description: "Weather-ready outdoor lighting",
    image: "/images/p-gate-lantern.webp",
  },
];
