"use client";

import { listDrivers } from "@/lib/api";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";

const data = listDrivers();

export default function DriverDetailPage() {
  const params = useParams();
  const router = useRouter();
  const driver = data.find((d) => d.id === params?.id);

  if (!driver) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-slate-200">
        <p className="text-lg">Driver not found.</p>
        <button className="mt-4 rounded-full border border-white/20 px-4 py-2 text-sm" onClick={() => router.push("/drivers")}>
          Back to drivers
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
        style={{ boxShadow: `0 0 45px ${driver.helmetColor}55` }}
      >
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(circle at 20% 20%, ${driver.helmetColor}33, transparent 45%)` }}
          />
        </div>
        <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-slate-400">#{driver.number}</p>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">{driver.name}</h1>
            <p className="text-lg text-slate-200/80">{driver.team} · {driver.nationality}</p>
            <p className="mt-4 max-w-2xl text-slate-200/80">{driver.bio}</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm text-white">
              <StatBlock label="Wins" value={driver.wins} accent={driver.helmetColor} />
              <StatBlock label="Podiums" value={driver.podiums} accent={driver.helmetColor} />
              <StatBlock label="Poles" value={driver.poles} accent={driver.helmetColor} />
            </div>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Career timeline</p>
            <div className="mt-4 space-y-3">
              {driver.highlights.map((event) => (
                <motion.div
                  key={`${driver.id}-${event.year}`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex items-center justify-between text-sm text-white">
                    <span className="font-semibold">{event.title}</span>
                    <span className="text-slate-300">{event.year}</span>
                  </div>
                  <p className="text-sm text-slate-200/80">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const StatBlock = ({ label, value, accent }: { label: string; value: number; accent: string }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 shadow-inner">
    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{label}</p>
    <motion.p
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="text-xl font-semibold"
      style={{ color: accent }}
    >
      {value}
    </motion.p>
  </div>
);
