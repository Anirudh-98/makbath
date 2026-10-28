import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { business, fullAddress } from "@/lib/business";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAK Bath & Lights | Chandeliers, Lights & Bath Fittings in Abids, Hyderabad",
  description:
    "MAK Bath & Lights, Troop Bazaar, Abids, Hyderabad. Wholesale & retail showroom for designer chandeliers, LED lights, outdoor lighting, wash basins, shower panels and sanitaryware. Call +91 99662 55571.",
  keywords: [
    "MAK Bath and Lights",
    "chandeliers Hyderabad",
    "lights shop Troop Bazaar",
    "bath fittings Abids",
    "sanitaryware Hyderabad",
    "designer wash basins",
  ],
  openGraph: {
    title: "MAK Bath & Lights — Hyderabad",
    description: "Designer lighting & bath fittings. Wholesale & retail in Troop Bazaar, Abids.",
    images: ["/images/hero.webp"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1714",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  name: "MAK BATH & LIGHTS",
  description: business.category,
  telephone: "+919966255571",
  image: "/images/storefront.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
  hasMap: business.mapsUrl,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:30",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:30",
      closes: "18:30",
    },
  ],
  areaServed: fullAddress,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="min-h-full font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
