import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "17th",
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
  sprintPoints: 0,
  sprintTop10: 0,
};

const careerStats = {
  grandPrixEntered: 254,
  careerPoints: 622,
  highestFinish: "3 (x1)",
  podiums: 1,
  highestGrid: "1 (x1)",
  polePositions: 1,
  worldChampionships: 0,
  dnfs: 44,
};

const bioParagraphs = [
  "He’s the Superhero with the talent to become a racing superstar – if only he could get to flex his muscles with a top team. F1’s 'Hulk' has shown incredible strength and stamina as a midfield marauder for Williams, Force India, Sauber, Renault, Racing Point, Aston Martin, Haas and Kick Sauber during a career spanning back to 2010.",
  "In that rookie season, Hulkenberg mastered changing track conditions to take a brilliant pole position in Brazil, showing he had brains as well as brawn. Since then his ability to consistently hoover up the points has made him a highly valued team player. In 2015, his reputation grew once more when, on a weekend away from his day job, he won the classic Le Mans 24 Hours race for Porsche at the first time of asking.",
  "Hulkenberg’s off-track alter ego is down to earth – he’s the sort of driver who holds his own umbrella when it’s raining on the way to the grid – with a cheeky sense of humour. When he reached the unwanted record of most race starts without a podium finish he laughed it off as the start of the 'Hulkenberg era'.",
  "Thankfully, even after being dropped by Renault at the end of 2019, the popular German’s era continued with some stand-in (and stand-out) drives in 2020 and 2022, and after landing a full-time F1 return with Haas for 2023, the ‘Hulk’ embraced another chance to set the record straight and hasn't left the grid since.",
  "Pairing up with rookie Gabriel Bortoleto at Kick Sauber for 2025, Hulkenberg saw the team that becomes the Audi works squad for 2026 finally bring him that elusive first F1 podium – and now he wants more.",
];

export default function NicoHulkenbergPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Nico%20Hulkenberg%201.png"
        firstName="Nico"
        lastName="Hulkenberg"
        chips={["🇩🇪 Germany", "Audi", "No.27"]}
        teamLabel="Audi"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Nico Hulkenberg" />
        <DriverBio
          portraitSrc="/Nico%20Hulkenberg%20%202.png"
          quote="YOU’VE GOT TO BE THERE WHEN THE OPPORTUNITY PRESENTS ITSELF, BECAUSE THE RACE IS NOT OVER UNTIL IT’S OVER."
          quoteAuthor="Nico Hulkenberg"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Nico%20Hulkenberg%20%203.png"
          title="In photos: Nico Hulkenberg's F1 career"
          subtitle="Audi F1 Team"
        />
      </main>
    </div>
  );
}
