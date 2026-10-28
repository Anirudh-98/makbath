import Image from "next/image";
import { business, enquiryLink, fullAddress } from "@/lib/business";
import { ArrowUpRight, Logo } from "./icons";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Collections", href: "#collections" },
      { label: "Showroom", href: "#visit" },
      { label: "Contact", href: business.phoneHref },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Chandeliers", href: "#products" },
      { label: "Wall & Pendant Lights", href: "#products" },
      { label: "Outdoor Lighting", href: "#collections" },
      { label: "Bath Fittings", href: "#bath" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden px-2 pb-2 sm:px-3 sm:pb-3">
      <div className="relative isolate overflow-hidden rounded-t-[2rem] rounded-b-2xl">
        <Image src="/images/about.webp" alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink/90" />

        <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 text-white sm:px-8 sm:pt-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr_1.6fr]">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold">{col.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="transition hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-sm font-semibold">Customer Care</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                <li>
                  <a href={business.phoneHref} className="transition hover:text-white">
                    {business.phoneDisplay}
                  </a>
                </li>
                <li>{fullAddress}</li>
                {business.hours.map((h) => (
                  <li key={h.days}>
                    {h.days}: {h.time}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Stay Inspired With Exclusive Lighting</h3>
              <p className="mt-4 text-sm text-white/65">
                Ask us about new arrivals, bulk orders for projects and showroom availability — we
                reply quickly on WhatsApp.
              </p>
              <a
                href={enquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white py-2 pl-5 pr-2 text-sm font-semibold text-ink transition hover:bg-cream"
              >
                Chat on WhatsApp
                <span className="grid size-7 place-items-center rounded-md bg-ink text-white">
                  <ArrowUpRight width={14} height={14} />
                </span>
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-xl font-extrabold tracking-wide sm:text-2xl">MAK BATH &amp; LIGHTS</span>
            </div>
            <p className="text-xs text-white/50">
              © {business.name} · {business.tagline} · Troop Bazaar, Abids, Hyderabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
