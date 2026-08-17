"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type ReactNode } from "react";

export default function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springConf = { stiffness: 150, damping: 20, mass: 0.5 };
  const sx = useSpring(x, springConf);
  const sy = useSpring(y, springConf);

  const rotateX = useTransform(sy, [0, 1], [7, -7]);
  const rotateY = useTransform(sx, [0, 1], [-7, 7]);
  const glowX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(sy, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    // Clipping (overflow-hidden/rounded corners) lives on this outer,
    // non-transformed element — combining overflow-hidden with a 3D
    // perspective transform on the same layer breaks image compositing
    // in some Chromium builds (renders children as solid black).
    <div className={className}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="relative h-full w-full"
      >
        <motion.div
          aria-hidden
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) =>
                `radial-gradient(500px circle at ${gx} ${gy}, rgba(143,91,255,0.2), transparent 65%)`
            ),
          }}
          className="pointer-events-none absolute inset-0 z-10"
        />
        {children}
      </motion.div>
    </div>
  );
}
