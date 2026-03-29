import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "19th",
  points: 0,
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
  sprintTop10: 0,
};

const careerStats = {
  grandPrixEntered: 249,
  careerPoints: 1797,
  highestFinish: "1 (x10)",
  podiums: 67,
  highestGrid: "1 (x20)",
  polePositions: 20,
  worldChampionships: 0,
  dnfs: 29,
};

const bioParagraphs = [
  "Learning his craft on Finnish roads of ice and snow, Bottas was born to be a Grand Prix racer.",
  "Bottas explains that if you can drive on the frozen roads of his homeland then you can drive anywhere. Then there’s the Finnish mentality – reserved, diligent and calm, the fast lane of F1 doesn’t faze him.",
  "Making his F1 debut with Williams in 2013, Bottas soon became part of the family. Points and podiums followed with the reliable racer even amassing the most points without a win, a record he resented but that showcased his ability. The fact the Finn was such a points machine saw him suddenly promoted to the most coveted seat in F1 - Nico Rosberg’s vacant championship-winning seat at Mercedes.",
  "Bottas blossomed at the Silver Arrows in 2017, unleashing his pace to clock up personal pole positions and victories as well as a team championship for the famous Mercedes marque alongside Lewis Hamilton. He even tied with Hamilton and Sebastian Vettel with 13 podiums.",
  "For a shy guy, it brought a confidence boost and a new swagger – albeit in a very demure Finnish fashion. He would need all that confidence in 2018 – a season Bottas described as his worst in F1, as he took zero wins to Hamilton’s 11. That, though, was as much a reflection of his team mate’s brilliance.",
  "Bottas stepped it up a level in 2019, four victories securing a convincing second in the championship behind Hamilton, but that dropped to two wins to his team mate's 11 in 2020 and then just one in 2021, prompting Mercedes to drop him after five seasons.",
  "In 2022 he started a new chapter in his F1 career, replacing compatriot Kimi Raikkonen to lead an all-new line-up at Alfa Romeo, later Kick Sauber, and taking Chinese rookie Zhou Guanyu under his wing. But after a promising start, the team’s form faltered over subsequent seasons and for 2025 Bottas found himself back at Mercedes in a reserve role.",
  "But the Bottas story was far from over. A driver of his experience and speed would be invaluable to an all-new Formula 1 team – one like Cadillac, for example, debutantes on the 2026 grid and with whom the Finn makes his competitive comeback alongside fellow F1 returnee Sergio Perez.",
];

export default function ValtteriBottasPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Valtteri%20Bottas%201.png"
        firstName="Valtteri"
        lastName="Bottas"
        chips={["🇫🇮 Finland", "Cadillac", "No.77"]}
        teamLabel="Cadillac"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Valtteri Bottas" />
        <DriverBio
          portraitSrc="/Valtteri%20Bottas%203.png"
          quote="I WAS NEVER THE MOST TALENTED, BUT I WORKED THE HARDEST."
          quoteAuthor="Valtteri Bottas"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Valtteri%20Bottas%202.png"
          title="In photos: Valtteri Bottas' F1 career"
          subtitle="Cadillac Racing"
        />
      </main>
    </div>
  );
}
