"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";
import { ArrowUpRight, Close, Logo, Menu } from "./icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#reviews", label: "Reviews" },
  { href: "#collections", label: "Collections" },
  { href: "#bath", label: "Bath Fittings" },
  { href: "#visit", label: "Visit Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white/95 px-4 py-2.5 shadow-lg shadow-black/10 backdrop-blur sm:px-6">
        <Link href="#home" className="flex items-center gap-2 text-ink">
          <Logo />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide">MAK</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-copper">
              Bath &amp; Lights
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-medium text-ink/80 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-copper">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-lg bg-ink py-2 pl-4 pr-2 text-sm font-medium text-white transition hover:bg-copper sm:inline-flex"
          >
            Contact Us
            <span className="grid size-6 place-items-center rounded-md bg-white text-ink">
              <ArrowUpRight width={14} height={14} />
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-lg text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl bg-white p-4 shadow-xl lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={business.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-ink py-3 text-sm font-medium text-white"
          >
            Call {business.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
