"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { listCars, listTeams } from "@/lib/api";
import { CarCard } from "@/components/cards/CarCard";
import { pageBanners } from "@/lib/data/media";

const CarViewer = dynamic(() => import("@/components/3d/CarViewer").then((m) => m.CarViewer), { ssr: false });

const cars = listCars();
const teams = listTeams();
const banner = pageBanners.cars;

export default function CarsPage() {
  const [selectedId, setSelectedId] = useState<string>(cars[0]?.id ?? "");
  const selected = useMemo(() => cars.find((c) => c.id === selectedId) ?? cars[0], [selectedId]);
  const team = teams.find((t) => t.id === selected?.teamId);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg sm:p-8">
        <div className="absolute inset-0 opacity-60" aria-hidden>
          <div className="absolute inset-0 scale-105 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }} />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/80" />
        </div>
        <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
          <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Cars</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Interactive 3D garage.</h1>
          <p className="text-lg text-slate-200/80">
            Rotate, zoom, and swap liveries. Hotspots-ready mesh with SSR-safe dynamic import keeps performance sharp.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
            {selected?.liveries.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedId(selected.id)}
                className="h-7 w-7 rounded-full border border-white/30"
                style={{ background: color, boxShadow: `0 0 12px ${color}` }}
                aria-label="Livery color"
              />
            ))}
          </div>
          </div>
          {selected && <CarViewer colors={selected.liveries} accent={team?.colors.primary ?? "#ff2d55"} />}
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {cars.map((car) => (
          <button key={car.id} onClick={() => setSelectedId(car.id)} className="text-left">
            <CarCard car={car} team={teams.find((t) => t.id === car.teamId)} />
          </button>
        ))}
      </div>
    </div>
  );
}
