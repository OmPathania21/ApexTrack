import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "1st",
  points: 72,
  races: 3,
  wins: 2,
  podiums: 3,
  poles: 2,
  fastestLaps: 0,
  dnfs: 0,
  sprintRaces: 1,
  sprintWins: 0,
  sprintPodiums: 0,
  sprintPoints: 4,
  sprintTop10: 1,
};

const careerStats = {
  grandPrixEntered: 27,
  careerPoints: 222,
  highestFinish: "1 (x2)",
  podiums: 6,
  highestGrid: "1 (x2)",
  polePositions: 2,
  worldChampionships: 0,
  dnfs: 4,
};

const bioParagraphs = [
  "Andrea Kimi Antonelli’s rise to the F1 grid has been nothing short of meteoric.",
  "Son of sportscar racer Marco, the Bologna native was scouted by Mercedes during a karting career that saw him collect a scarcely believable number of winner's trophies.",
  "He went on to make his car racing debut aged just 15, with more titles swiftly following – in both the Italian and ADAC F4 championships in 2022 and the Formula Regional Middle East and European categories a year later.",
  "Most onlookers saw F3 as the logical next move, but Mercedes already knew they had a star on their hands and decided that promotion to F2 – effectively skipping a step on the ladder – would better serve their latest hot prospect.",
  "It was always going to be a lot to ask of the teenager, with the noise around his future prospects only growing when Lewis Hamilton announced his move away from Mercedes – opening up a seat alongside George Russell.",
  "Antonelli got his head down to make a solid rather than spectacular start to life in F2, consistently scoring points while adapting to the demands of the series.",
  "Then, midway through the season, Antonelli started to show what he could really do – delivering on the faith that Mercedes had placed in him.",
  "A breakthrough Sprint victory in the rain at Silverstone was followed by a maiden Feature win at the Hungaroring, before a stunning wet-weather overtake at Spa-Francorchamps further cemented his reputation.",
  "Mercedes had seen enough and, shortly after his 18th birthday, confirmed Antonelli as their next Formula 1 driver.",
  "Tough shoes to fill, but despite some early challenges, Antonelli’s rookie season has already shown flashes of brilliance – marking him as one of the brightest talents on the grid.",
];

export default function KimiAntonelliPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Kimi%201.png"
        firstName="Kimi"
        lastName="Antonelli"
        chips={["🇮🇹 Italy", "Mercedes", "No.12"]}
        teamLabel="Mercedes"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Kimi Antonelli" />
        <DriverBio
          portraitSrc="/Kimi%202.png"
          quote="THE FUTURE STARTS NOW."
          quoteAuthor="Kimi Antonelli"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Kimi%203.png"
          title="In photos: Kimi Antonelli's F1 career"
          subtitle="Mercedes-AMG F1"
        />
      </main>
    </div>
  );
}
