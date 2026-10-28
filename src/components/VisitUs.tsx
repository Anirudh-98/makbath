import Image from "next/image";
import { business, enquiryLink, fullAddress } from "@/lib/business";
import { ArrowUpRight, Clock, MapPin, Phone, Star, WhatsApp } from "./icons";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "./motion/Reveal";

export default function VisitUs() {
  return (
    <section id="visit" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <Reveal>
            <p className="text-sm font-medium text-copper">Visit our showroom</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              See, Touch &amp; Compare Before You Choose.
            </h2>
          </Reveal>

          <ImageReveal className="relative mt-8 aspect-[4/3] rounded-2xl">
            <Image
              src="/images/storefront.webp"
              alt="MAK Bath & Lights storefront in Troop Bazaar, Abids"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
        </div>

        <Stagger className="flex flex-col gap-4">
          <StaggerItem className="rounded-2xl bg-cream p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white">
                <MapPin />
              </span>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="mt-1 text-sm text-ink/70">
                  MAK BATH &amp; LIGHTS
                  <br />
                  {fullAddress}
                </p>
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-copper hover:underline"
                >
                  Get directions <ArrowUpRight width={14} height={14} />
                </a>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-cream p-6">
              <span className="grid size-10 place-items-center rounded-full bg-ink text-white">
                <Phone />
              </span>
              <h3 className="mt-4 font-semibold">Call Us</h3>
              <a
                href={business.phoneHref}
                className="mt-1 block text-sm text-ink/70 hover:text-copper"
              >
                {business.phoneDisplay}
              </a>
            </div>
            <div className="rounded-2xl bg-cream p-6">
              <span className="grid size-10 place-items-center rounded-full bg-ink text-white">
                <Clock />
              </span>
              <h3 className="mt-4 font-semibold">Opening Hours</h3>
              <dl className="mt-1 space-y-1 text-sm text-ink/70">
                {business.hours.map((h) => (
                  <div key={h.days}>
                    <dt className="font-medium text-ink">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </StaggerItem>

          <StaggerItem className="flex items-center gap-3 rounded-2xl bg-cream px-6 py-4 text-sm">
            <span className="flex text-amber-500">
              <Star width={16} height={16} />
            </span>
            <span>
              <strong>{business.rating}</strong> rating from {business.reviewCount} Google reviews
            </span>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto font-semibold text-copper hover:underline"
            >
              View
            </a>
          </StaggerItem>

          <StaggerItem className="min-h-64 flex-1 overflow-hidden rounded-2xl border border-ink/10">
            <iframe
              title="MAK Bath & Lights on Google Maps"
              src={business.mapEmbedUrl}
              className="h-full min-h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </StaggerItem>

          <StaggerItem className="flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-ink py-3 text-sm font-semibold text-white transition hover:bg-ink/85"
            >
              <Phone width={16} height={16} /> Call Now
            </a>
            <a
              href={enquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              <WhatsApp width={16} height={16} /> WhatsApp Us
            </a>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
