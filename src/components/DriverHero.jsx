"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultHero = "/Alex%20Albon%201.png";

export const DriverHero = ({
  backgroundImage = defaultHero,
  firstName = "Alexander",
  lastName = "ALBON",
  chips = ["🇹🇭 Thailand", "Williams", "#23"],
  teamLabel = "Williams Racing",
}) => {
  const bgRef = useRef(null);
  const cutoutRef = useRef(null);

  useEffect(() => {
    if (!bgRef.current || !cutoutRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scale: 1.08,
        yPercent: -6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "+=500",
          scrub: true,
        },
      });

      gsap.to(cutoutRef.current, {
        yPercent: -12,
        ease: "power1.out",
        scrollTrigger: {
          trigger: cutoutRef.current,
          start: "top center",
          end: "+=400",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-24 sm:px-10 lg:px-16">
      <div ref={bgRef} className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712]/90 via-[#0a1024]/75 to-[#0b1d3a]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,120,246,0.18),transparent_45%)]" />
      </div>

      <div className="relative grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-white">
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-sm uppercase tracking-[0.4em] text-blue-200/80"
            >
              {teamLabel}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-5xl font-black leading-tight sm:text-6xl"
            >
              <span className="block font-serif italic text-4xl text-blue-100/90">{firstName}</span>
              <span className="block text-6xl sm:text-7xl">{lastName}</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap gap-3 text-sm text-blue-100/85"
            >
              {chips.map((chip) => (
                <span key={chip} className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-xl text-base text-blue-100/80"
          >
            A cinematic portrait of Albon in deep Williams hues. Parallax motion, layered glows, and bold typography set the tone for a premium driver experience.
          </motion.p>
        </div>

        <div className="relative flex justify-end">
          <motion.img
            ref={cutoutRef}
            src={backgroundImage}
            alt={`${firstName} ${lastName}`}
            className="relative z-10 h-[480px] w-auto object-contain drop-shadow-[0_25px_55px_rgba(52,120,246,0.55)]"
            initial={{ opacity: 0, x: 40, scale: 1.02 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
          />
          <div className="absolute -left-12 top-10 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" aria-hidden />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" aria-hidden />
        </div>
      </div>
    </section>
  );
};
