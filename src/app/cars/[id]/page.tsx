"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { listCars, listTeams } from "@/lib/api";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const CarViewer = dynamic(() => import("@/components/3d/CarViewer").then((m) => m.CarViewer), { ssr: false });

const cars = listCars();
const teams = listTeams();

export default function CarDetailPage() {
  const params = useParams();
  const router = useRouter();
  const car = useMemo(() => cars.find((c) => c.id === params?.id), [params?.id]);
  const team = teams.find((t) => t.id === car?.teamId);

  if (!car) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-slate-200">
        <p className="text-lg">Car not found.</p>
        <button className="mt-4 rounded-full border border-white/20 px-4 py-2 text-sm" onClick={() => router.push("/cars")}>
          Back to cars
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-400">{team?.name ?? "Works"}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{car.name}</h1>
          <p className="text-lg text-slate-200/80">{car.description}</p>
          <div className="grid grid-cols-2 gap-3 text-sm text-white">
            <Spec label="Top speed" value={`${car.topSpeed} km/h`} />
            <Spec label="Power" value={`${car.power} kW`} />
            <Spec label="Weight" value={`${car.weight} kg`} />
            <Spec label="0-100" value={`${car.zeroToHundred}s`} />
            <Spec label="Hybrid" value={car.hybridSystem} />
            <Spec label="Downforce" value={car.downforce} />
          </div>
        </div>
        <CarViewer colors={car.liveries} accent={team?.colors.primary ?? "#ff2d55"} />
      </div>
    </div>
  );
}

const Spec = ({ label, value }: { label: string; value: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className="rounded-xl border border-white/10 bg-white/5 px-3 py-3"
  >
    <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">{label}</p>
    <p className="text-sm font-semibold text-white">{value}</p>
  </motion.div>
);
