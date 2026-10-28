"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";
import { ImageReveal } from "./motion/Reveal";

const slides = [
  { src: "/images/about.webp", alt: "Crystal chandeliers and globe pendants in a luxury lounge" },
  {
    src: "/images/store-lights.webp",
    alt: "Wall lights and ring chandeliers on display at MAK Bath & Lights",
  },
  {
    src: "/images/store-basins.webp",
    alt: "Designer wash basins at the MAK Bath & Lights showroom",
  },
  { src: "/images/store-lanterns.webp", alt: "Outdoor lanterns and gate lights on display" },
];

const buttonClass =
  "grid size-9 place-items-center rounded-md border border-ink/20 text-ink transition hover:bg-ink hover:text-white";

export default function StoreCarousel() {
  const [index, setIndex] = useState(0);
  const step = (d: number) => setIndex((i) => (i + d + slides.length) % slides.length);

  return (
    <div>
      <div className="mb-4 flex items-center justify-end gap-4">
        <span className="text-xs font-medium text-ink/60">
          {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous image"
            className={buttonClass}
          >
            <ArrowLeft width={16} height={16} />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next image"
            className={buttonClass}
          >
            <ArrowRight width={16} height={16} />
          </button>
        </div>
      </div>
      <ImageReveal className="relative aspect-[3/2] rounded-2xl bg-sand">
        {slides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading={i === 0 ? "eager" : "lazy"}
            className={`object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </ImageReveal>
    </div>
  );
}
