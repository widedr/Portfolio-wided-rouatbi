"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

// "turn" is a normalized, signed position of the rotation: 0 = facing
// forward, +/-1 = fully turned to the side/back. Hover only ever nudges
// within HOVER_RANGE (front photo stays fully opaque there, just tilts a
// little for life); dragging unlocks the full front -> side -> back sweep.
const HOVER_RANGE = 0.25;
const DRAG_RANGE = 1;
const TILT_DEG = 22;

export default function HeroPortrait({
  front,
  side,
  rear,
  alt,
}: {
  front: string;
  side: string;
  rear: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartTurn = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const turn = useMotionValue(0);
  const turnSpring = useSpring(turn, { stiffness: 130, damping: 20, mass: 0.6 });
  const absTurn = useTransform(turnSpring, (v) => Math.abs(v));

  const rotateY = useTransform(turnSpring, [-1, 1], [-TILT_DEG, TILT_DEG]);
  const frontOpacity = useTransform(absTurn, [0, 0.3, 0.5], [1, 1, 0]);
  const sideRightOpacity = useTransform(turnSpring, [0.3, 0.55, 0.8], [0, 1, 0]);
  const sideLeftOpacity = useTransform(turnSpring, [-0.8, -0.55, -0.3], [0, 1, 0]);
  const rearOpacity = useTransform(absTurn, [0.6, 0.85, 1], [0, 1, 1]);

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
      const next = dragStartTurn.current + (deltaX / (rect.width * 0.7)) * DRAG_RANGE;
      turn.set(Math.max(-DRAG_RANGE, Math.min(DRAG_RANGE, next)));
    } else {
      turn.set(hoverTargetFor(e.clientX));
    }
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartTurn.current = turn.get();
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    isDragging.current = false;
    turn.set(prefersReducedMotion ? 0 : hoverTargetFor(e.clientX));
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }

  function handlePointerLeave() {
    if (!isDragging.current) turn.set(0);
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
        style={{ rotateY, transformPerspective: 1200 }}
        className="relative h-full w-full"
      >
        <motion.div style={{ opacity: frontOpacity }} className="absolute inset-0">
          <Image
            src={front}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 380px, 480px"
            className="object-contain object-bottom drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>
        <motion.div style={{ opacity: sideRightOpacity }} className="absolute inset-0">
          <Image
            src={side}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 1024px) 380px, 480px"
            className="object-contain object-bottom drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>
        <motion.div
          style={{ opacity: sideLeftOpacity, transform: "scaleX(-1)" }}
          className="absolute inset-0"
        >
          <Image
            src={side}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 1024px) 380px, 480px"
            className="object-contain object-bottom drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>
        <motion.div style={{ opacity: rearOpacity }} className="absolute inset-0">
          <Image
            src={rear}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 1024px) 380px, 480px"
            className="object-contain object-bottom drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
