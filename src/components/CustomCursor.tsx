"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const x = useSpring(cx, springConfig);
  const y = useSpring(cy, springConfig);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const move = (e: MouseEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("[data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [cx, cy]);

  return (
    <motion.div
      aria-hidden
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[70] mix-blend-difference"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: hovering ? 56 : 16,
          height: hovering ? 56 : 16,
          opacity: 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="rounded-full bg-[#f3f1ee]"
      />
    </motion.div>
  );
}
