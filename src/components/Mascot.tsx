import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Kodama-inspired forest spirit mascot.
 * Floats in the corner, blinks, and reacts to scroll position.
 */
export function Mascot() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const tilt = useTransform(smooth, [0, 1], [-6, 6]);
  const bob = useTransform(smooth, [0, 0.5, 1], [0, -6, 0]);

  const [mood, setMood] = useState<"happy" | "wow" | "sleepy">("happy");

  useEffect(() => {
    const unsub = smooth.on("change", (v) => {
      if (v < 0.2) setMood("happy");
      else if (v < 0.75) setMood("wow");
      else setMood("sleepy");
    });
    return () => unsub();
  }, [smooth]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed bottom-4 right-4 z-40 hidden sm:block"
      style={{ rotate: tilt, y: bob }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <div className="relative h-28 w-28 animate-float">
        {/* Shadow */}
        <div className="absolute bottom-0 left-1/2 h-2 w-16 -translate-x-1/2 rounded-full bg-ink/15 blur-md" />
        <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-[0_8px_16px_rgba(120,80,160,0.18)]">
          {/* Body */}
          <ellipse cx="60" cy="62" rx="38" ry="42" fill="var(--cream)" stroke="var(--ink)" strokeWidth="2" />
          {/* Belly blush */}
          <ellipse cx="44" cy="78" rx="7" ry="4" fill="var(--sakura)" opacity="0.55" />
          <ellipse cx="76" cy="78" rx="7" ry="4" fill="var(--sakura)" opacity="0.55" />
          {/* Leaf on head */}
          <path
            d="M50 22 Q60 6 78 16 Q70 30 58 30 Z"
            fill="var(--moss)"
            stroke="var(--ink)"
            strokeWidth="1.6"
            className="animate-wiggle"
            style={{ transformOrigin: "60px 26px" }}
          />
          <path d="M60 22 L70 18" stroke="var(--ink)" strokeWidth="1" fill="none" />
          {/* Eyes */}
          <g className="animate-blink" style={{ transformOrigin: "60px 60px" }}>
            <ellipse cx="48" cy="60" rx="3.5" ry="4.5" fill="var(--ink)" />
            <ellipse cx="72" cy="60" rx="3.5" ry="4.5" fill="var(--ink)" />
            <circle cx="49" cy="59" r="1" fill="white" />
            <circle cx="73" cy="59" r="1" fill="white" />
          </g>
          {/* Mouth — changes with mood */}
          {mood === "happy" && (
            <path d="M55 72 Q60 76 65 72" stroke="var(--ink)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          )}
          {mood === "wow" && (
            <ellipse cx="60" cy="74" rx="2.5" ry="3.5" fill="var(--ink)" />
          )}
          {mood === "sleepy" && (
            <path d="M55 74 Q60 72 65 74" stroke="var(--ink)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          )}
        </svg>
      </div>
    </motion.div>
  );
}