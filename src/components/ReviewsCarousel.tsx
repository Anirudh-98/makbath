"use client";

import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";
import { reviews } from "@/lib/reviews";
import { ArrowLeft, ArrowRight, Star } from "./icons";

const buttonClass =
  "grid size-9 place-items-center rounded-md border border-ink/20 text-ink transition hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-30";

function ReviewText({ text }: { text: string }) {
  const ref = useRef<HTMLQuoteElement>(null);
  const [open, setOpen] = useState(false);
  const [clamped, setClamped] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setClamped(el.scrollHeight > el.clientHeight + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <blockquote
        ref={ref}
        className={`mt-4 flex-1 text-sm leading-relaxed text-ink/80 sm:text-[15px] ${open ? "" : "line-clamp-6"}`}
      >
        &ldquo;{text}&rdquo;
      </blockquote>
      {(clamped || open) && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="mt-2 self-start text-xs font-semibold text-copper hover:underline"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function ReviewsCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      setActive(Math.round(el.scrollLeft / (card.offsetWidth + 16)));
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollTo = (i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-ink/60">What our customers say on Google</p>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-3xl font-semibold sm:text-4xl">{business.rating}</span>
            <div>
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={16} height={16} />
                ))}
              </div>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ink/60 hover:text-copper"
              >
                Based on {business.reviewCount} Google reviews
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollTo(Math.max(active - 1, 0))}
            disabled={active === 0}
            aria-label="Previous review"
            className={buttonClass}
          >
            <ArrowLeft width={16} height={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollTo(Math.min(active + 1, reviews.length - 1))}
            disabled={atEnd}
            aria-label="Next review"
            className={buttonClass}
          >
            <ArrowRight width={16} height={16} />
          </button>
        </div>
      </div>

      <div
        ref={track}
        className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, i) => (
            <article
              key={i}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl bg-white p-6 shadow-sm sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
            >
              <div className="flex text-amber-500">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} width={14} height={14} />
                ))}
              </div>
              <ReviewText text={r.text} />
              <div className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
                  {r.name === "Google Reviewer" ? "G" : initials(r.name)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-ink/50">
                    {[r.meta, r.date].filter(Boolean).join(" · ") || "Verified Google review"}
                  </p>
                </div>
              </div>
            </article>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to review ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-copper" : "w-1.5 bg-ink/20"}`}
          />
        ))}
      </div>
    </div>
  );
}
