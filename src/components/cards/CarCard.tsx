"use client";

import { Car, Team } from "@/lib/utils/types";
import { motion } from "framer-motion";
import Link from "next/link";

interface CarCardProps {
  car: Car;
  team?: Team;
}

export const CarCard = ({ car, team }: CarCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
      style={{ boxShadow: `0 0 28px ${(team?.colors.primary ?? "#fff")}44` }}
    >
      <div className="absolute inset-0 opacity-35" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(140deg, ${(team?.colors.primary ?? "#999")}22, transparent 60%)` }}
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{team?.name ?? "Works"}</p>
          <h3 className="text-xl font-semibold text-white">{car.name}</h3>
          <p className="text-sm text-slate-300">{car.description}</p>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{car.topSpeed} km/h</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
        <Pill label="Power" value={`${car.power} kW`} />
        <Pill label="Weight" value={`${car.weight} kg`} />
        <Pill label="0-100" value={`${car.zeroToHundred}s`} />
      </div>
      <div className="mt-3 flex items-center gap-2">
        {car.liveries.map((color) => (
          <span key={color} className="h-4 w-4 rounded-full border border-white/20" style={{ background: color }} />
        ))}
      </div>
      <Link
        href={`/cars/${car.id}`}
        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
      >
        Open viewer
        <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
          →
        </motion.span>
      </Link>
    </motion.div>
  );
};

const Pill = ({ label, value }: { label: string; value: string }) => (
  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-slate-200">
    {label}: {value}
  </span>
);
