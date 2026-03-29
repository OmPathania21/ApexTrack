import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "4th",
  points: 206,
  races: 22,
  wins: 0,
  podiums: 8,
  poles: 0,
  fastestLaps: 0,
  dnfs: 2,
  sprintRaces: 6,
  sprintWins: 0,
  sprintPodiums: 0,
};

const careerStats = {
  grandPrixEntered: 380,
  careerPoints: 2267,
  highestFinish: "1 (x32)",
  podiums: 106,
  highestGrid: "1 (x22)",
  polePositions: 22,
  worldChampionships: 2,
  dnfs: 75,
};

const bioParagraphs = [
  "Fernando Alonso is a two-time World Champion and F1’s elder statesman who continues to put the sport’s young guns in the shade.",
  "His 20-year F1 journey has taken him from precocious champion to gritty veteran, via Ferrari heartbreak and a two-year sabbatical.",
  "A stunning single-season return with Aston Martin has renewed his hunger for a third crown.",
];

export default function FernandoAlonsoPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Fernando%20Alonso%201.png"
        firstName="Fernando"
        lastName="Alonso"
        chips={["🇪🇸 Spain", "Aston Martin", "No.14"]}
        teamLabel="Aston Martin"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2023 Season" careerLabel="Fernando Alonso" />
        <DriverBio
          portraitSrc="/Fernando%20Alonso%202.png"
          quote="I NEVER REGRET ANYTHING."
          quoteAuthor="Fernando Alonso"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Fernando%20Alonso%203.png"
          title="Aston Martin AMR24"
          subtitle="Relentless pace. Control."
        />
      </main>
    </div>
  );
}
