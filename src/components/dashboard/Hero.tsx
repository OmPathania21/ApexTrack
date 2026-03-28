"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  accent: string;
  seriesLabel: string;
  onExplore: () => void;
  backgroundImage: string;
}

export const Hero = ({ accent, seriesLabel, onExplore, backgroundImage }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !glowRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        xPercent: 12,
        yPercent: -10,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=600",
          scrub: 1,
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>("[data-hero-card]");
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: idx * 0.08,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center+=120",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-screen w-full overflow-hidden px-6 pt-24 pb-20 sm:px-10 sm:pt-28 lg:px-16"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: "brightness(1.12) contrast(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14]/80 via-[#0f141a]/85 to-[#0f141a]/95" />
      </div>
      <div className="blur-blob left-10 top-8 h-64 w-64 rounded-full" style={{ background: accent }} />
      <div className="blur-blob right-6 top-20 h-72 w-72 rounded-full" style={{ background: "rgba(77,225,255,0.45)" }} />

      <div ref={glowRef} className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-300/80">Live Race Control</p>
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-semibold leading-[1.05] text-white md:text-6xl"
            >
              Cinematic telemetry for
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, #fff, #e5e7eb, ${accent})`,
                }}
              >
                apex speed addicts
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="max-w-2xl text-lg text-slate-200/80"
            >
              A premium, Awwwards-inspired control room for F1, NASCAR, and Le Mans. Live-feeling data,
              neon-grade motion, backend-ready APIs.
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-4" data-hero-card>
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white backdrop-blur transition hover:border-white/30"
              style={{ boxShadow: `0 0 35px ${accent}` }}
            >
              Enter race control
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            <span className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm text-slate-300" data-hero-card>
              Series: <span className="font-semibold" style={{ color: accent }}>{seriesLabel}</span>
            </span>
          </div>
        </div>

        <div className="relative grid gap-4" data-hero-card>
          <div className="glass glow-edge relative overflow-hidden rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-300/80">Race pulse</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex-1">
                <p className="text-4xl font-semibold" style={{ color: accent }}>
                  1.8s
                </p>
                <p className="text-sm text-slate-300">Median gap across pack</p>
              </div>
              <div className="flex-1 text-sm text-slate-300">
                <p className="text-lg font-semibold text-white">+18%</p>
                <p>Overtake probability next sector</p>
              </div>
            </div>
            <div className="mt-6 h-24 w-full rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent">
              <motion.div
                className="h-full rounded-xl"
                initial={{ width: "20%" }}
                animate={{ width: ["20%", "95%", "60%", "82%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: accent, boxShadow: `0 10px 45px ${accent}` }}
              />
            </div>
          </div>
          <div className="glass relative overflow-hidden rounded-2xl p-4" data-hero-card>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Cinematic scroll</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-200/80">
              <div className="flex items-center justify-between">
                <span>GSAP parallax</span>
                <span className="text-green-400">Armed</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Framer transitions</span>
                <span className="text-green-400">Synced</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mock live API</span>
                <span className="text-green-400">Streaming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
