import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "16th",
  points: 1,
  races: 3,
  wins: 0,
  podiums: 0,
  poles: 0,
  fastestLaps: 0,
  dnfs: 0,
  sprintRaces: 1,
  sprintWins: 0,
  sprintPodiums: 0,
  sprintPoints: 0,
  sprintTop10: 0,
};

const careerStats = {
  grandPrixEntered: 30,
  careerPoints: 6,
  highestFinish: "8 (x1)",
  podiums: 0,
  highestGrid: "8 (x1)",
  polePositions: 0,
  worldChampionships: 0,
  dnfs: 3,
};

const bioParagraphs = [
  "He may have only contested a handful of Grands Prix, but Alpine racer Franco Colapinto has already made quite a name for himself in Formula 1, having not once but twice been drafted in mid-season to replace a struggling team mate.",
  "At the end of August 2024, Williams announced that their academy driver and then F2 racer Colapinto would contest the remainder of the 2024 season with the squad, replacing Logan Sargeant as Alex Albon’s team mate.",
  "A race winner in an array of categories on the junior single-seater scene, Colapinto had joined the Williams Racing Driver Academy in early 2023 and made his FP1 debut with the F1 team at last year’s British Grand Prix – giving him an initial taste of the FW46.",
  "On his subsequent race debut at Monza, he became the first Argentine driver in F1 for 23 years, after Gaston Mazzacane’s last appearances for Prost back in 2001, and only the second Argentine to drive for Williams, following on from his countryman Carlos Reutemann.",
  "Despite his obvious speed, Williams' signing of Carlos Sainz meant Colapinto was left without a full-time seat for 2025 and swapped to Alpine as reserve. But he didn’t have to wait long to be back on the grid, replacing rookie Jack Doohan from round seven onwards and then retaining the drive for 2026.",
  "I WILL GIVE IT MY ALL TO DELIVER THE BEST POSSIBLE RESULTS.",
];

export default function FrancoColapintoPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Franco%20Colapinto%201.png"
        firstName="Franco"
        lastName="Colapinto"
        chips={["🇦🇷 Argentina", "Alpine", "No.43"]}
        teamLabel="Alpine"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Franco Colapinto" />
        <DriverBio
          portraitSrc="/Franco%20Colapinto%202.png"
          quote="I WILL GIVE IT MY ALL TO DELIVER THE BEST POSSIBLE RESULTS."
          quoteAuthor="Franco Colapinto"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Franco%20Colapinto%203.png"
          title="In photos: Franco Colapinto's F1 career"
          subtitle="Alpine F1 Team"
        />
      </main>
    </div>
  );
}
