import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "13th",
  points: 2,
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

const careerStats = {
  grandPrixEntered: 27,
  careerPoints: 21,
  highestFinish: "6 (x1)",
  podiums: 0,
  highestGrid: "7 (x3)",
  polePositions: 0,
  worldChampionships: 0,
  dnfs: 5,
};

const bioParagraphs = [
  "Gabriel Bortoleto is among the bright young stars of Formula 1, the former F2 champion also carrying the hopes of a nation as the first Brazilian to compete in the sport full-time since Felipe Massa in 2017.",
  "Born in Sao Paulo, Bortoleto was karting aged seven and soon winning local championships. Four years later he was winging his way to Europe to follow in the footsteps of hero Ayrton Senna, achieving international karting success and paving the way for a move to single-seaters.",
  "Since then, he has won races in almost every category he has contested, initially building his experience in Italian F4 and Formula Regional through 2021 and 2022, and doing enough to be signed by Fernando Alonso’s A14 management company.",
  "With the two-time World Champion in his corner, Bortoleto moved up a gear, brilliantly capturing back-to-back F3 and F2 titles in 2023 and 2024, the latter including a remarkable rise from last to first during the Monza Feature Race – a performance that made him an outside contender for one of the few vacancies on the 2025 F1 grid.",
  "With their own race line-up locked in, McLaren agreed to release Bortoleto from his driver development deal with the team and whispers of a race seat with Kick Sauber – following a company-wide evaluation by new boss Mattia Binotto – soon turned into concrete news.",
  "Racing alongside the experienced Nico Hulkenberg, his rookie season featured the low of a crash-strewn home Grand Prix weekend, but also the highs of five top-10 finishes – more than enough to convince new team owners Audi to retain him for their first F1 campaign as a works squad in 2026.",
];

export default function GabrielBortoletoPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Gabriel%20Bortoleto%201.png"
        firstName="Gabriel"
        lastName="Bortoleto"
        chips={["🇧🇷 Brazil", "Audi", "No.5"]}
        teamLabel="Audi"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Gabriel Bortoleto" />
        <DriverBio
          portraitSrc="/Gabriel%20Bortoleto%202.png"
          quote="I WANT TO BE ABLE TO FIGHT FOR THINGS AND TO MAKE MY COUNTRY PROUD OF EVERYTHING I CAN ACHIEVE."
          quoteAuthor="Gabriel Bortoleto"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Gabriel%20Bortoleto%203.png"
          title="In photos: Gabriel Bortoleto's F1 career"
          subtitle="Audi F1 Team"
        />
      </main>
    </div>
  );
}
