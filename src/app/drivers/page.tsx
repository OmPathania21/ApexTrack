"use client";

import { DriverCard } from "@/components/cards/DriverCard";
import { listDrivers } from "@/lib/api";
import { motion } from "framer-motion";

const driverData = listDrivers();

export default function DriversPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <header className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Drivers</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Grid talent, animated.</h1>
          <p className="text-lg text-slate-200/80">
            Hover-tilt cards, live-style stats, and bios built for a cinematic roster view. Each profile is ready for
            deeper storytelling and backend data wiring.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glow-edge relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Live roster</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="rounded-full bg-white/10 px-3 py-1">Real-time ready</span>
            <span className="rounded-full bg-white/10 px-3 py-1">GSAP scroll reveals</span>
            <span className="rounded-full bg-white/10 px-3 py-1">3D tilt hover</span>
          </div>
          <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[var(--accent-f1)] via-[var(--accent-lemans)] to-[var(--accent-nascar)]"
              initial={{ width: "10%" }}
              animate={{ width: "92%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {driverData.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>
    </div>
  );
}
