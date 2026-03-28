"use client";

import { TeamCard } from "@/components/cards/TeamCard";
import { pageBanners } from "@/lib/data/media";
import { listTeams } from "@/lib/api";
import { motion } from "framer-motion";

const teamData = listTeams();
const banner = pageBanners.teams;

export default function TeamsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg sm:p-8">
        <div className="absolute inset-0 opacity-60" aria-hidden>
          <div className="absolute inset-0 scale-105 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }} />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/80" />
        </div>
        <div className="relative flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-200">Teams</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Factory-grade visuals.</h1>
          <p className="max-w-3xl text-lg text-slate-100/85">
            Team cards pulse with brand colors, hover glows, and layout-ready metadata. Swap data sources to connect real
            backends without touching the UI composition.
          </p>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "60%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 rounded-full bg-gradient-to-r from-[var(--accent-f1)] via-[var(--accent-lemans)] to-[var(--accent-nascar)]"
          />
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {teamData.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
