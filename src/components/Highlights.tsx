import Image from "next/image";
import { business } from "@/lib/business";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";
import ReviewsCarousel from "./ReviewsCarousel";

const stats = [
  { value: `${business.rating}★`, label: "Google Rating", image: "/images/p-ring-chandelier.webp" },
  {
    value: `${business.reviewCount}+`,
    label: "Customer Reviews",
    image: "/images/p-crystal-chandelier.webp",
  },
  { value: "2 Floors", label: "Lights & Bath Showroom", image: "/images/p-gold-basin.webp" },
  { value: "7 Days", label: "Open Every Week", image: "/images/p-gate-lantern.webp" },
];

export default function Highlights() {
  return (
    <section id="reviews" className="overflow-hidden bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <ReviewsCarousel />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-6 sm:mt-16 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="flex items-center gap-3">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-white sm:size-16">
                <Image src={s.image} alt="" fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <p className="text-2xl font-semibold sm:text-3xl">{s.value}</p>
                <p className="text-xs text-ink/60 sm:text-sm">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
