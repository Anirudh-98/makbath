import { business } from "@/lib/business";
import { GoogleG } from "./GoogleReviewBadge";
import { ArrowUpRight, Star } from "./icons";
import HeroBackground from "./motion/HeroBackground";
import { Stagger, StaggerItem, WordsReveal } from "./motion/Reveal";

export default function Hero() {
  return (
    <section id="home" className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative isolate flex min-h-[100svh] items-end overflow-hidden rounded-b-[2rem] rounded-t-2xl sm:min-h-[92svh] sm:rounded-b-[3rem]">
        <HeroBackground />

        <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:pb-20">
          <Stagger delay={0.2}>
            <StaggerItem>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 py-1 pl-1 pr-3 text-[11px] font-medium text-white backdrop-blur transition hover:bg-white/20 sm:text-xs"
              >
                <span className="grid size-6 place-items-center rounded-full bg-white">
                  <GoogleG size={14} />
                </span>
                <span className="inline-flex items-center gap-1">
                  {business.rating}
                  <Star width={11} height={11} className="text-amber-400" />
                </span>
                <span className="text-white/70">·</span>
                {business.reviewCount} Google reviews
              </a>
            </StaggerItem>
          </Stagger>
          <WordsReveal
            text="Illuminate Every Space With Timeless Luxury"
            delay={0.35}
            className="max-w-2xl text-[2rem] font-semibold leading-[1.12] text-white min-[400px]:text-4xl sm:text-5xl lg:text-6xl"
          />
          <Stagger delay={0.9}>
            <StaggerItem>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base">
                Designer chandeliers, LED lights and premium bath fittings at Hyderabad&apos;s Troop
                Bazaar.
                <span className="hidden sm:inline">
                  {" "}
                  Wholesale &amp; retail, crafted to transform every room with elegance.
                </span>
              </p>
            </StaggerItem>
            <StaggerItem className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-lg bg-white py-1.5 pl-4 pr-1.5 text-sm font-semibold text-ink transition hover:bg-cream sm:py-2 sm:pl-5 sm:pr-2"
              >
                Explore Collection
                <span className="grid size-7 place-items-center rounded-md bg-ink text-white">
                  <ArrowUpRight width={14} height={14} />
                </span>
              </a>
              <a
                href="#visit"
                className="inline-flex items-center rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-5"
              >
                Visit Showroom
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
