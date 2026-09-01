"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const HOVER_RANGE = 16;
const DRAG_RANGE = 45;

export default function HeroPortrait({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartRotation = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const rotateY = useMotionValue(0);
  const rotateYSpring = useSpring(rotateY, { stiffness: 140, damping: 20, mass: 0.6 });

  function hoverTargetFor(clientX: number) {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (clientX - rect.left) / rect.width - 0.5;
    return Math.max(-HOVER_RANGE, Math.min(HOVER_RANGE, relX * HOVER_RANGE * 2));
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !containerRef.current) return;
    if (isDragging.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const deltaX = e.clientX - dragStartX.current;
      const next = dragStartRotation.current + (deltaX / rect.width) * (DRAG_RANGE * 2);
      rotateY.set(Math.max(-DRAG_RANGE, Math.min(DRAG_RANGE, next)));
    } else {
      rotateY.set(hoverTargetFor(e.clientX));
    }
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartRotation.current = rotateY.get();
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    isDragging.current = false;
    rotateY.set(prefersReducedMotion ? 0 : hoverTargetFor(e.clientX));
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }

  function handlePointerLeave() {
    if (!isDragging.current) rotateY.set(0);
  }

  return (
    <div
      ref={containerRef}
      data-cursor-hover
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      className="relative h-full w-full touch-none select-none cursor-grab active:cursor-grabbing"
    >
      <motion.div
        style={{ rotateY: rotateYSpring, transformPerspective: 1200 }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 380px, 480px"
          className="object-contain object-bottom drop-shadow-2xl"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
