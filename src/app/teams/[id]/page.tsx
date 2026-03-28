"use client";

import { listDrivers, listTeams } from "@/lib/api";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";

const teamData = listTeams();
const driverData = listDrivers();

export default function TeamDetailPage() {
  const params = useParams();
  const router = useRouter();
  const team = teamData.find((t) => t.id === params?.id);
  const roster = driverData.filter((d) => d.teamId === team?.id);

  if (!team) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-slate-200">
        <p className="text-lg">Team not found.</p>
        <button className="mt-4 rounded-full border border-white/20 px-4 py-2 text-sm" onClick={() => router.push("/teams")}>
          Back to teams
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
        style={{ boxShadow: `0 0 50px ${team.colors.primary}55` }}
      >
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(120deg, ${team.colors.primary}33, ${team.colors.secondary}22)` }}
          />
        </div>
        <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-slate-400">{team.base}</p>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">{team.name}</h1>
            <p className="text-lg text-slate-200/80">{team.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-white">
              <Badge color={team.colors.primary}>{team.championships} titles</Badge>
              <Badge color={team.colors.secondary}>Car: {team.carId.toUpperCase()}</Badge>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Drivers</p>
            <div className="mt-3 space-y-2">
              {roster.map((driver) => (
                <motion.div
                  key={driver.id}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{driver.name}</p>
                    <p className="text-xs text-slate-300">#{driver.number} · {driver.nationality}</p>
                  </div>
                  <span className="h-3 w-3 rounded-full" style={{ background: driver.helmetColor }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Badge = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: `${color}22`, color }}>
    {children}
  </span>
);
