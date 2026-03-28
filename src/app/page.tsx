"use client";

import { Preloader } from "@/components/animations/Preloader";
import { Hero } from "@/components/dashboard/Hero";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { SeriesSwitcher } from "@/components/dashboard/SeriesSwitcher";
import { TelemetryPanel } from "@/components/dashboard/TelemetryPanel";
import { TrackMap } from "@/components/dashboard/TrackMap";
import dynamic from "next/dynamic";
import { useLiveRaceData } from "@/hooks/useLiveRaceData";
import { seriesThemes } from "@/lib/mockData/series";
import { formatLap } from "@/lib/utils/format";
import { Series } from "@/lib/utils/types";
import { motion } from "framer-motion";
import { ReactNode, useMemo, useRef, useState } from "react";
import { listCars } from "@/lib/api";

const heroCar = listCars()[0];
const CarViewer = dynamic(() => import("@/components/3d/CarViewer").then((m) => m.CarViewer), { ssr: false });

const BackgroundSection = ({ backgroundImage, children }: { backgroundImage: string; children: ReactNode }) => (
  <section
    className="surface-grid relative isolate min-h-screen w-full overflow-hidden rounded-2xl border border-white/10 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14]/78 via-[#0f141a]/82 to-[#11161c]/90" />
    <div className="absolute top-0 left-0 h-28 w-full bg-gradient-to-b from-[#0b0f14] to-transparent" />
    <div className="relative z-10 h-full">
      {children}
    </div>
  </section>
);

export default function Home() {
  const [series, setSeries] = useState<Series>("f1");
  const { state, highlights } = useLiveRaceData(series);
  const accent = seriesThemes[series].accent;
  const heroImage = seriesThemes[series].heroImage;
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const leader = state.drivers[0];
  const secondary = state.drivers[1];
  const avgSpeed = useMemo(() => {
    if (!state.drivers.length) return 0;
    return state.drivers.reduce((acc, d) => acc + d.speed, 0) / state.drivers.length;
  }, [state.drivers]);

  const handleScrollToDashboard = () => scrollRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0f141a] to-[#11161c] text-slate-100">
      <Preloader accent={accent} />
      <Hero
        accent={accent}
        seriesLabel={series.toUpperCase()}
        onExplore={handleScrollToDashboard}
        backgroundImage={heroImage}
      />

      <main ref={scrollRef} className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 bg-[var(--bg-secondary)] px-6 pb-24 sm:px-10 lg:px-16">
        {heroCar && (
          <BackgroundSection backgroundImage="https://wallpapercave.com/wp/wp15597561.jpg">
            <div className="grid h-full items-center gap-6 p-4 sm:p-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="glass glow-edge relative overflow-hidden rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Cinematic 3D</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{heroCar.name}</h2>
                <p className="mt-2 text-sm text-slate-200/80">
                  Hero stage powered by React Three Fiber. Rotate, zoom, and recolor liveries in sync with page motion.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                  {heroCar.liveries.map((color) => (
                    <span key={color} className="h-7 w-7 rounded-full border border-white/20" style={{ background: color }} />
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                <CarViewer colors={heroCar.liveries} accent={accent} />
              </div>
            </div>
          </BackgroundSection>
        )}

        <SeriesSwitcher value={series} onChange={setSeries} accent={accent} />

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Leaderboard drivers={state.drivers} highlights={highlights} accent={accent} />

          <div className="glass glow-edge relative overflow-hidden rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Race pulse</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <StatBlock label="Leader" value={leader?.name ?? "--"} accent={accent} />
              <StatBlock label="Lap" value={formatLap(state.lap, state.totalLaps)} accent={accent} />
              <StatBlock label="Avg speed" value={`${Math.round(avgSpeed)} km/h`} accent={accent} />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <PulseCard title="Battle" subtitle={secondary?.name ?? "Pack"} accent={accent} />
              <PulseCard title="Weather" subtitle={seriesThemes[series].weather} accent={accent} />
            </div>
          </div>
        </section>

        <TelemetryPanel
          drivers={state.drivers}
          lap={state.lap}
          totalLaps={state.totalLaps}
          accent={accent}
          timestamp={state.timestamp}
        />
        <TrackMap drivers={state.drivers.slice(0, 6)} accent={accent} />
      </main>
    </div>
  );
}

const StatBlock = ({ label, value, accent }: { label: string; value: string; accent: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
  >
    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
    <p className="text-lg font-semibold" style={{ color: accent }}>
      {value}
    </p>
  </motion.div>
);

const PulseCard = ({ title, subtitle, accent }: { title: string; subtitle: string; accent: string }) => (
  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3">
    <div className="absolute right-4 top-4 h-8 w-8 rounded-full" style={{ background: accent, opacity: 0.2 }} />
    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{title}</p>
    <p className="text-lg font-semibold text-white">{subtitle}</p>
  </div>
);
