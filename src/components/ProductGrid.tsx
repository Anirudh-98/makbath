import Image from "next/image";
import { enquiryLink, type Product } from "@/lib/business";
import { ArrowUpRight, WhatsApp } from "./icons";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

type Props = {
  id: string;
  title: string;
  products: Product[];
};

export default function ProductGrid({ id, title, products }: Props) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <Reveal className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        <a
          href={enquiryLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-ink/15 py-1.5 pl-4 pr-1.5 text-sm font-medium transition hover:border-ink"
        >
          View All
          <span className="grid size-6 place-items-center rounded-md bg-ink text-white">
            <ArrowUpRight width={13} height={13} />
          </span>
        </a>
      </Reveal>

      <Stagger className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {products.map((p) => (
          <StaggerItem key={p.name} className="flex">
            <article className="group flex w-full flex-col overflow-hidden rounded-xl border border-ink/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden bg-[#f6f2ec]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-3 py-4 text-center">
                <h3 className="text-sm font-semibold sm:text-base">{p.name}</h3>
                <p className="mt-1 text-xs text-ink/60 sm:text-sm">{p.description}</p>
                <a
                  href={enquiryLink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-copper px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-copper-dark"
                >
                  <WhatsApp width={14} height={14} />
                  Enquire
                </a>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
