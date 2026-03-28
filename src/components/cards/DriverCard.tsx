"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DriverProfile } from "@/lib/utils/types";

export const DriverCard = ({ driver }: { driver: DriverProfile }) => {
  return (
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, translateZ: 6 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
      style={{ boxShadow: `0 0 30px ${driver.helmetColor}55` }}
    >
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${driver.helmetColor}22, transparent 65%)` }}
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">#{driver.number}</p>
          <h3 className="text-lg font-semibold text-white">{driver.name}</h3>
          <p className="text-sm text-slate-300">{driver.team}</p>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{driver.nationality}</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-300">
        <Stat label="Wins" value={driver.wins} />
        <Stat label="Podiums" value={driver.podiums} />
        <Stat label="Poles" value={driver.poles} />
      </div>
      <p className="mt-3 line-clamp-2 text-sm text-slate-200/80">{driver.bio}</p>
      <Link
        href={`/drivers/${driver.id}`}
        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
      >
        View profile
        <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
          →
        </motion.span>
      </Link>
    </motion.div>
  );
};

const Stat = ({ label, value }: { label: string; value: number }) => (
  <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">
    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{label}</p>
    <p className="text-sm font-semibold text-white">{value}</p>
  </div>
);
