import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { business, fullAddress } from "@/lib/business";
import SmoothScroll from "@/components/motion/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const shareTitle = "MAK Bath & Lights | Designer Lighting & Bath Fittings, Hyderabad";
const shareDescription =
  "Chandeliers, LED lights, designer wash basins & shower panels. Wholesale & retail showroom in Troop Bazaar, Abids. Rated 4.3★ on Google.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: shareTitle,
  description: shareDescription,
  keywords: [
    "MAK Bath and Lights",
    "chandeliers Hyderabad",
    "lights shop Troop Bazaar",
    "bath fittings Abids",
    "sanitaryware Hyderabad",
    "designer wash basins",
  ],
  // Share images come from app/opengraph-image.jpg and app/twitter-image.jpg.
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    siteName: "MAK Bath & Lights",
    locale: "en_IN",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
