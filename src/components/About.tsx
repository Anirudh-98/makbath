import Image from "next/image";
import { business } from "@/lib/business";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";
import StoreCarousel from "./StoreCarousel";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <p className="text-sm font-medium text-copper">
            Premium lighting &amp; bath solutions for modern homes
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
            Elegant Lighting &amp; Bath Fittings That Elevate Every Interior.
          </h2>
        </Reveal>
        <div className="relative hidden h-28 w-44 lg:block">
          <Image
            src="/images/p-globe-pendant.webp"
            alt=""
            fill
            sizes="176px"
            loading="eager"
            className="object-contain mix-blend-multiply"
          />
        </div>
      </div>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Stagger className="order-2 space-y-5 text-sm leading-relaxed text-ink/75 sm:text-base lg:order-1">
          <StaggerItem>
            <p>
              {business.name} is a two-floor wholesale &amp; retail showroom in the heart of Troop
              Bazaar, Abids — Hyderabad&apos;s favourite lighting market. We bring together
              chandeliers, LED ring lights, wall sconces, outdoor lanterns and complete bathroom
              solutions under one roof.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p>
              From designer wash basins and shower panels to sanitaryware from trusted brands like{" "}
              {business.brands.join(", ")}, our team helps homeowners, architects and contractors
              pick fixtures that look beautiful and last for years.
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-wrap gap-2 pt-2">
            {[
              "Chandeliers",
              "LED Lights",
              "Outdoor Lights",
              "Wash Basins",
              "Shower Panels",
              "Sanitaryware",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink"
              >
                {t}
              </span>
            ))}
          </StaggerItem>
        </Stagger>
        <div className="order-1 lg:order-2">
          <StoreCarousel />
        </div>
      </div>
    </section>
  );
}
