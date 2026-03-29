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

const bioParagraphs = [
  "Born in London but racing under the flag of Thailand, Alexander Albon’s first word was in fact Italian. That word was Ferrari – though it was with another Italian team that he got his big F1 break.",
  "Idolising Michael Schumacher and dreaming of one day racing in Formula 1, the junior Albon was pipped to the 2016 GP3 title by a certain Charles Leclerc. He then left his great friendship with George Russell trackside as he took the 2018 Formula 2 title fight down to the wire.",
  "Graduating to the F1 big league along with yet another contemporary – Lando Norris – in 2019, Albon did his talking on track with Toro Rosso in the opening races, earning a mid-season promotion to Red Bull Racing.",
  "A stylish overtaker with a championship mentality, Albon was unfazed by partnering Max Verstappen for the second half of his rookie season, taking top-six finishes in eight of his nine 2019 races with Red Bull.",
  "Staying in touch with the future champion proved tougher in 2020 and Red Bull dropped him from their race line-up. Crucially, though, Albon was retained as test and reserve driver, keeping him very much on team bosses’ radar, leading to his 2022 return to the grid with Williams, where he has established a reputation as a fast qualifier and mature racer.",
  "Laidback and cheerful with a cheeky grin, the Thai driver is popular among his peers – not always easy in motorsport’s cauldron of competition – but you don’t succeed in Formula 1 by being popular. Albon’s challenge remains a big one – to make the most of a rare second F1 opportunity.",
];

export default function DriverPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060c] via-[#070b15] to-[#0a1024] pb-16 text-white">
      <DriverHero />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} />
        <DriverBio bioParagraphs={bioParagraphs} />
        <DriverCar />
      </main>
    </div>
  );
}
