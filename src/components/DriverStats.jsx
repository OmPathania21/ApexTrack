"use client";

import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const isNumber = (v) => typeof v === "number" && Number.isFinite(v);

const AnimatedValue = ({ value }) => {
  if (!isNumber(value)) return <span>{value}</span>;
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(mv, value, { duration: 1.0, ease: "easeOut" });
    return () => controls.stop();
  }, [value, mv]);

  return <motion.span>{rounded}</motion.span>;
};

const SeasonStat = ({ label, value }) => (
  <motion.div
    whileHover={{ scale: 1.015, boxShadow: "0 12px 28px rgba(59,130,246,0.18)" }}
    className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
  >
    <p className="text-[11px] uppercase tracking-[0.32em] text-blue-100/70">{label}</p>
    <p className="text-xl font-semibold text-white">
      <AnimatedValue value={value} />
    </p>
  </motion.div>
);

const CareerRow = ({ label, value }) => (
  <motion.div
    whileHover={{ x: 4, scale: 1.005 }}
    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4"
  >
    <span className="text-sm text-blue-100/80">{label}</span>
    <span className="text-base font-semibold text-white">
      <AnimatedValue value={value} />
    </span>
  </motion.div>
);

export const DriverStats = ({ seasonStats, careerStats, seasonLabel = "2026 Season", careerLabel = "Alexander Albon" }) => {
  const seasonData = [
    { label: "Season Position", value: seasonStats.position },
    { label: "Season Points", value: seasonStats.points },
    { label: "Races", value: seasonStats.races },
    { label: "Wins", value: seasonStats.wins },
    { label: "Podiums", value: seasonStats.podiums },
    { label: "Poles", value: seasonStats.poles },
    { label: "Fastest Laps", value: seasonStats.fastestLaps },
    { label: "DNFs", value: seasonStats.dnfs },
    { label: "Sprint Races", value: seasonStats.sprintRaces },
    { label: "Sprint Wins", value: seasonStats.sprintWins },
    { label: "Sprint Podiums", value: seasonStats.sprintPodiums },
  ];

  const careerData = [
    { label: "Grand Prix Entered", value: careerStats.grandPrixEntered },
    { label: "Career Points", value: careerStats.careerPoints },
    { label: "Highest Finish", value: careerStats.highestFinish },
    { label: "Podiums", value: careerStats.podiums },
    { label: "Highest Grid Position", value: careerStats.highestGrid },
    { label: "Pole Positions", value: careerStats.polePositions },
    { label: "World Championships", value: careerStats.worldChampionships },
    { label: "DNFs", value: careerStats.dnfs },
  ];

  return (
    <section className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_45%)]" aria-hidden />
        <div className="flex items-center justify-between gap-3 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-100/75">Statistics</p>
            <h3 className="text-3xl font-semibold">{seasonLabel}</h3>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {seasonData.map((item) => (
            <SeasonStat key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(15,21,36,0.9),rgba(16,27,52,0.9))] p-8 backdrop-blur"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_45%)]" aria-hidden />
        <div className="flex items-center justify-between text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-100/75">Career Stats</p>
            <h3 className="text-3xl font-semibold">{careerLabel}</h3>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {careerData.map((item) => (
            <CareerRow key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
