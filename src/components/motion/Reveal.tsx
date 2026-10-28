"use client";

import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
};

type Props = { children: ReactNode; className?: string; delay?: number };

/** Fades and lifts content into view once, as it scrolls into the viewport. */
export function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Staggers its StaggerItem children in sequence. */
export function Stagger({ children, className, delay = 0, gap = 0.12 }: Props & { gap?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: Omit<Props, "delay">) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

/** Slides each word of a heading up from behind a mask. */
export function WordsReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.h1
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              show: { y: "0%", transition: { duration: 0.9, ease } },
            }}
          >
            {word}
          </motion.span>
          {i < text.split(" ").length - 1 && " "}
        </span>
      ))}
    </motion.h1>
  );
}

/** Wipes an image block open from the bottom while the image settles from a slight zoom. */
export function ImageReveal({ children, className }: Omit<Props, "delay">) {
  // The observed wrapper stays unclipped: a fully clipped element never registers as in view.
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
        variants={{
          hidden: { clipPath: "inset(100% 0% 0% 0%)" },
          show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.2, ease } },
        }}
      >
        <motion.div
          className="relative h-full w-full"
          variants={{
            hidden: { scale: 1.25 },
            show: { scale: 1, transition: { duration: 1.6, ease } },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/** Moves its content vertically at a slower rate than the scroll for a depth effect. */
export function Parallax({
  children,
  className,
  offset = 80,
}: Omit<Props, "delay"> & { offset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div className="absolute inset-x-0" style={{ y, top: -offset, bottom: -offset }}>
        {children}
      </motion.div>
    </div>
  );
}
