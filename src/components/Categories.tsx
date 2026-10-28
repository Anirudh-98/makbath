import Image from "next/image";
import { enquiryLink } from "@/lib/business";
import { ArrowUpRight } from "./icons";

const categories = [
  {
    title: "Chandeliers & Lights",
    text: "LED ring chandeliers, crystal cascades, globe pendants and sculptural wall lights for every room.",
    image: "/images/cat-lighting.webp",
    href: "#products",
  },
  {
    title: "Bath Fittings",
    text: "Designer wash basins, shower panels, faucets and sanitaryware from leading brands.",
    image: "/images/cat-bath.webp",
    href: "#bath",
  },
  {
    title: "Outdoor Lighting",
    text: "Classic wall lanterns, gate pillar lights and garden lamps built for Hyderabad weather.",
    image: "/images/cat-outdoor.webp",
    href: enquiryLink("outdoor lighting range"),
  },
];

export default function Categories() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((c) => (
          <article
            key={c.title}
            className="group relative isolate flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl p-6"
          >
            <Image
              src={c.image}
              alt={c.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/20 to-black/60" />
            <div>
              <h3 className="text-2xl font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{c.text}</p>
            </div>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-white py-1.5 pl-4 pr-1.5 text-sm font-semibold text-ink transition hover:bg-cream"
            >
              Explore
              <span className="grid size-6 place-items-center rounded-md bg-ink text-white">
                <ArrowUpRight width={13} height={13} />
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
