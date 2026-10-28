import Image from "next/image";
import { business } from "@/lib/business";

export default function Feature() {
  return (
    <>
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium text-copper">Bath fittings crafted for modern living</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Bathrooms That Combine Style, Quality &amp; Innovation.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/75 sm:text-base">
              Walk through our dedicated bath floor to see designer vessel basins, marble-finish
              pedestals, rain shower panels, vanities and sanitaryware side by side. Compare
              finishes in person and get expert advice for homes, hotels and commercial projects.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Designer wash basins", "Shower panels & faucets", "Vanities & mirrors", `${business.brands.join(" · ")}`].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-copper" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <Image
              src="/images/showroom.webp"
              alt="Bath and sanitaryware showroom with hexagon LED ceiling"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative h-[50svh] min-h-[320px] sm:h-[70svh]">
        <Image
          src="/images/bathroom-wide.webp"
          alt="Luxury bathroom with gold vessel basin and marble pedestal basin"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>
    </>
  );
}
