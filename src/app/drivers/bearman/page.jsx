import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "17th",
  points: 6,
  races: 3,
  wins: 0,
  podiums: 0,
  poles: 0,
  fastestLaps: 0,
  dnfs: 1,
  sprintRaces: 1,
  sprintWins: 0,
  sprintPodiums: 0,
  sprintPoints: 0,
  sprintTop10: 1,
};

const careerStats = {
  grandPrixEntered: 10,
  careerPoints: 12,
  highestFinish: "4 (x1)",
  podiums: 0,
  highestGrid: "10 (x1)",
  polePositions: 0,
  worldChampionships: 0,
  dnfs: 2,
};

const bioParagraphs = [
  "As an official Ferrari reserve he made his F1 race debut in Saudi Arabia 2024 in place of the ill Carlos Sainz.",
  "That was after the young Bearman had got his first taste of F1 machinery with the Scuderia towards the end of 2023, in preparation for a pair of FP1 outings for Haas at the Mexican and Abu Dhabi Grands Prix.",
  "He would go on to complete several more F1 test runs whilst also competing in F2 with the Prema Racing team, winning four races and placing sixth in the feeder series standings that year.",
  "After a tough start to the 2024 campaign for Prema in Bahrain, Bearman struck back to claim pole position at the high-speed Jeddah track but, with Sainz-subbing duties calling, he was required to temporarily drop his F2 commitments.",
  "Not that he was complaining - a stunning performance saw the young Englishman score six points for seventh place in his first Grand Prix, enhancing his future F1 prospects no end.",
  "Indeed, that drive helped him secure a full-time F1 seat with the Ferrari-powered Haas squad for 2025 – as well as an early Grand Prix debut with them in Azerbaijan ’24, as team regular Kevin Magnussen served out a one-race ban.",
  "And after taking the best result of the American team’s ’25 campaign with a fourth place in Mexico – as well as outscoring the highly-experienced Esteban Ocon on the other side of the garage – Bearman still has the ultimate Ferrari prize firmly in his sights.",
];

export default function OliverBearmanPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Oliver%20Bearman%201.png"
        firstName="Oliver"
        lastName="Bearman"
        chips={["🇬🇧 United Kingdom", "Haas F1 Team", "No.87"]}
        teamLabel="Haas F1 Team"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Oliver Bearman" />
        <DriverBio
          portraitSrc="/Oliver%20Bearman%202.png"
          quote="PROVE THEM WRONG."
          quoteAuthor="Oliver Bearman"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Oliver%20Bearman%203.png"
          title="In photos: Oliver Bearman's F1 career"
          subtitle="Haas F1 Team"
        />
      </main>
    </div>
  );
}
