import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Layered parallax backdrop inspired by BTS – Love Yourself album aesthetics:
 * warm ivory/cream sky, soft golden light, dried botanical silhouettes,
 * drifting petals and a delicate hazy sun.
 */
export function SkyBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const petal1Y  = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const petal2Y  = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const stemY    = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const sunY     = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const dustY    = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Base: warm ivory-to-blush gradient – Love Yourself H / Answer palette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, #fdf6ee 0%, #faeade 25%, #f5d5c0 52%, #eec4b4 74%, #e8b8c2 100%)",
        }}
      />

      {/* Soft paper-grain texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          mixBlendMode: "multiply",
          opacity: 0.6,
        }}
      />

      {/* Hazy diffused sun – soft, not harsh */}
      <motion.div
        className="absolute"
        style={{ top: "12%", left: "50%", translateX: "-50%", y: sunY }}
      >
        <div style={{
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,220,160,0.55) 0%, rgba(255,200,140,0.2) 45%, transparent 70%)",
          filter: "blur(18px)",
        }} />
        <div style={{
          position: "absolute",
          inset: 60,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,235,190,0.9) 0%, rgba(250,210,160,0.5) 60%, transparent 100%)",
          filter: "blur(4px)",
        }} />
      </motion.div>

      {/* Floating dust / bokeh particles */}
      <motion.div style={{ y: dustY }} className="absolute inset-0">
        {BOKEH.map((b, i) => (
          <span key={i} style={{
            position: "absolute",
            left: b.x,
            top: b.y,
            width: b.r,
            height: b.r,
            borderRadius: "50%",
            background: b.warm ? "rgba(240,185,120,0.55)" : "rgba(230,180,180,0.45)",
            filter: "blur(1.5px)",
            animation: `floatDust ${b.d}s ease-in-out infinite alternate`,
            animationDelay: `${b.delay}s`,
          }} />
        ))}
      </motion.div>

      {/* Dried botanical stems – left side */}
      <motion.svg
        viewBox="0 0 180 520"
        className="absolute bottom-0 left-0"
        style={{ width: "18%", bottom: 0, left: "2%", y: stemY, opacity: 0.55 }}
      >
        <BotanicalLeft />
      </motion.svg>

      {/* Dried botanical stems – right side */}
      <motion.svg
        viewBox="0 0 180 520"
        className="absolute bottom-0 right-0"
        style={{ width: "16%", bottom: 0, right: "1%", y: stemY, opacity: 0.5, transform: "scaleX(-1)" }}
      >
        <BotanicalLeft />
      </motion.svg>

      {/* Ground wash – soft earth */}
      <motion.svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full"
        style={{ y: stemY }}
      >
        <path
          d="M0 240 Q360 180 720 210 T1440 200 V320 H0 Z"
          fill="rgba(210,165,140,0.3)"
        />
        <path
          d="M0 275 Q280 230 560 255 T1120 245 T1440 265 V320 H0 Z"
          fill="rgba(200,150,130,0.4)"
        />
        <path
          d="M0 300 Q400 275 800 290 T1440 285 V320 H0 Z"
          fill="rgba(185,135,120,0.55)"
        />
      </motion.svg>

      {/* Drifting petals – layer 1, slower */}
      <motion.div style={{ y: petal1Y }} className="absolute inset-0 pointer-events-none">
        {PETALS_A.map((p, i) => (
          <span key={i} style={{
            position: "absolute",
            top: 0,
            left: p.left,
            width: p.w,
            height: p.h,
            borderRadius: "80% 10% 80% 10%",
            background: p.color,
            opacity: p.op,
            transform: `rotate(${p.rot}deg)`,
            animation: `driftPetal ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            filter: "blur(0.5px)",
          }} />
        ))}
      </motion.div>

      {/* Drifting petals – layer 2, faster, smaller */}
      <motion.div style={{ y: petal2Y }} className="absolute inset-0 pointer-events-none">
        {PETALS_B.map((p, i) => (
          <span key={i} style={{
            position: "absolute",
            top: 0,
            left: p.left,
            width: p.w,
            height: p.h,
            borderRadius: "70% 20% 70% 20%",
            background: p.color,
            opacity: p.op,
            transform: `rotate(${p.rot}deg)`,
            animation: `driftPetal ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }} />
        ))}
      </motion.div>

      <style>{`
        @keyframes floatDust {
          from { transform: translateY(0px) scale(1); opacity: 0.4; }
          to   { transform: translateY(-14px) scale(1.15); opacity: 0.75; }
        }
        @keyframes driftPetal {
          0%   { transform: translateY(-30px) rotate(0deg) translateX(0px); opacity: 0; }
          8%   { opacity: 0.9; }
          85%  { opacity: 0.7; }
          100% { transform: translateY(108vh) rotate(480deg) translateX(60px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ── Botanical illustration ─────────────────────────────────────── */

function BotanicalLeft() {
  return (
    <g fill="none" stroke="#8a6650" strokeLinecap="round" strokeLinejoin="round">
      {/* Main tall stem */}
      <path d="M90 520 Q88 400 92 300 Q95 220 85 140 Q80 90 88 50" strokeWidth="2.5" />

      {/* Branch left – upper */}
      <path d="M88 130 Q60 110 30 95" strokeWidth="1.8" />
      <path d="M30 95 Q15 88 8 80" strokeWidth="1.2" />
      {/* Seed head on upper branch */}
      <circle cx="8" cy="78" r="5" fill="#b8926a" opacity="0.7" />
      <path d="M8 73 Q4 65 6 58" strokeWidth="1" />
      <path d="M8 73 Q12 64 11 57" strokeWidth="1" />
      <path d="M8 73 Q0 67 -2 60" strokeWidth="1" />

      {/* Branch right – mid */}
      <path d="M91 200 Q118 185 145 178" strokeWidth="1.8" />
      <path d="M145 178 Q158 172 165 162" strokeWidth="1.2" />
      <ellipse cx="166" cy="160" rx="6" ry="9" fill="#c9a882" opacity="0.65" transform="rotate(-20 166 160)" />

      {/* Small left branch – mid-low */}
      <path d="M89 310 Q65 295 42 290" strokeWidth="1.5" />
      <path d="M42 290 Q30 287 22 278" strokeWidth="1.1" />
      {/* Tiny florets */}
      <circle cx="22" cy="276" r="3.5" fill="#d4a090" opacity="0.7" />
      <circle cx="18" cy="271" r="2.5" fill="#d4a090" opacity="0.55" />
      <circle cx="26" cy="272" r="2" fill="#d4a090" opacity="0.5" />

      {/* Drooping grass blades at base */}
      <path d="M85 480 Q70 450 55 420 Q40 390 30 360" strokeWidth="1.5" opacity="0.6" />
      <path d="M92 490 Q100 460 110 430 Q118 400 112 370" strokeWidth="1.3" opacity="0.55" />
      <path d="M80 500 Q60 470 45 445 Q30 418 35 390" strokeWidth="1.2" opacity="0.5" />

      {/* Top seed cluster */}
      <circle cx="88" cy="52" r="4" fill="#a07858" opacity="0.8" />
      <path d="M88 48 Q84 40 82 32" strokeWidth="0.9" />
      <path d="M88 48 Q92 39 94 31" strokeWidth="0.9" />
      <path d="M88 48 Q88 38 88 30" strokeWidth="0.9" />
      <circle cx="82" cy="30" r="2.5" fill="#a07858" opacity="0.6" />
      <circle cx="94" cy="29" r="2" fill="#a07858" opacity="0.55" />
      <circle cx="88" cy="28" r="2" fill="#a07858" opacity="0.6" />
    </g>
  );
}

/* ── Static data ────────────────────────────────────────────────── */

const BOKEH = Array.from({ length: 28 }, (_, i) => ({
  x: `${(i * 13.7 + 5) % 100}%`,
  y: `${(i * 9.3 + 8) % 80}%`,
  r: 3 + (i % 5) * 3,
  warm: i % 3 !== 0,
  d: 4 + (i % 5),
  delay: -(i * 0.6),
}));

const PETAL_COLORS_A = ["#f2c4c4", "#e8b0b8", "#f5d5c8", "#e8c8d0", "#f0d0c0"];
const PETALS_A = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.2 + 2) % 100}%`,
  w: 10 + (i % 4) * 4,
  h: 7 + (i % 3) * 3,
  color: PETAL_COLORS_A[i % PETAL_COLORS_A.length],
  op: 0.6 + (i % 4) * 0.1,
  rot: i * 28,
  dur: 16 + (i % 7) * 3,
  delay: -(i * 1.8),
}));

const PETAL_COLORS_B = ["#dda8a8", "#e8c0b8", "#f0c8c8", "#d8b8c0"];
const PETALS_B = Array.from({ length: 10 }, (_, i) => ({
  left: `${(i * 10.1 + 6) % 100}%`,
  w: 6 + (i % 3) * 3,
  h: 5 + (i % 3) * 2,
  color: PETAL_COLORS_B[i % PETAL_COLORS_B.length],
  op: 0.45 + (i % 3) * 0.15,
  rot: i * 35,
  dur: 11 + (i % 5) * 2.5,
  delay: -(i * 2.2),
}));