"use client";

import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const careerStats = {
  grandPrixEntered: 131,
  careerPoints: 313,
  highestFinish: "3 (x2)",
  podiums: 2,
  highestGrid: "4 (x5)",
  polePositions: 0,
  worldChampionships: 0,
  dnfs: 22,
};

const seasonStats = {
  position: "18th",
  points: 0,
  races: 3,
  wins: 0,
  podiums: 0,
  poles: 0,
  fastestLaps: 0,
  dnfs: 0,
  sprintRaces: 1,
  sprintWins: 0,
  sprintPodiums: 0,
};

export default function DriverPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060c] via-[#070b15] to-[#0a1024] pb-16 text-white">
      <DriverHero />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} />
        <DriverBio />
        <DriverCar />
      </main>
    </div>
  );
}
