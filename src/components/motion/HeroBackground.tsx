"use client";

import { motion, useScroll, useTransform } from "motion/react";
import ResponsiveImage from "../ResponsiveImage";

export default function HeroBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 220]);
  const overlay = useTransform(scrollY, [0, 700], [0, 0.45]);

  return (
    <>
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <motion.div
          className="relative h-full w-full"
          initial={{ scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <ResponsiveImage
            alt="Luxury living room lit by a gold LED ring chandelier"
            mobile={{ src: "/images/hero-mobile.webp", width: 1080, height: 1920 }}
            desktop={{ src: "/images/hero.webp", width: 1920, height: 1080 }}
            priority
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <motion.div className="absolute inset-0 -z-10 bg-black" style={{ opacity: overlay }} />
    </>
  );
}
