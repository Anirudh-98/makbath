import Image from "next/image";
import { business } from "@/lib/business";
import { ArrowUpRight, Star } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative isolate flex min-h-[100svh] items-end overflow-hidden rounded-b-[2rem] rounded-t-2xl sm:min-h-[92svh] sm:rounded-b-[3rem]">
        <Image
          src="/images/hero.webp"
          alt="Luxury living room lit by a gold LED ring chandelier"
          fill
          preload
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:pb-20">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur sm:text-xs">
            <Star width={12} height={12} className="text-amber-400" />
            {business.rating} on Google · {business.reviewCount} reviews
          </p>
          <h1 className="max-w-2xl text-[2rem] font-semibold leading-[1.12] text-white min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
            Illuminate Every Space With Timeless Luxury
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base">
            Designer chandeliers, LED lights and premium bath fittings at Hyderabad&apos;s Troop
            Bazaar.
            <span className="hidden sm:inline">
              {" "}
              Wholesale &amp; retail, crafted to transform every room with elegance.
            </span>
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
