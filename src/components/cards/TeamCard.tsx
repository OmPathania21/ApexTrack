"use client";

import { Team } from "@/lib/utils/types";
import { motion } from "framer-motion";
import Link from "next/link";

export const TeamCard = ({ team }: { team: Team }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
      style={{ boxShadow: `0 0 32px ${team.colors.primary}44` }}
    >
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(120deg, ${team.colors.primary}22, ${team.colors.secondary}11)` }}
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Base</p>
          <p className="text-sm text-slate-200">{team.base}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{team.name}</h3>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
          {team.championships} titles
        </span>
      </div>
      <p className="mt-3 line-clamp-2 text-sm text-slate-200/80">{team.description}</p>
      <Link
        href={`/teams/${team.id}`}
        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
      >
        View team
        <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
          →
        </motion.span>
      </Link>
    </motion.div>
  );
};
