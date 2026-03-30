import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "3rd",
  points: 49,
  races: 3,
  wins: 0,
  podiums: 2,
  poles: 0,
  fastestLaps: 0,
  dnfs: 0,
  sprintRaces: 1,
  sprintWins: 0,
  sprintPodiums: 1,
  sprintPoints: 7,
  sprintTop10: 1,
};

const careerStats = {
  grandPrixEntered: 174,
  careerPoints: 1721,
  highestFinish: "1 (x8)",
  podiums: 52,
  highestGrid: "1 (x27)",
  polePositions: 27,
  worldChampionships: 0,
  dnfs: 23,
};

const bioParagraphs = [
  "Born in the Mediterranean idyll of Monaco, Leclerc arrived in F1 on a tidal wave of expectation.",
  "Practically peerless on his way to the GP3 and Formula 2 crowns, he showcased a dazzling array of skills from scorching pole positions, commanding victories – even when his car caught fire twice at Silverstone – to an ability to muscle his way through the pack. Winning back-to-back championships also taught Leclerc how to handle pressure, another useful tool in the big pond of Formula 1 racing.",
  "Stepping up to F1 in 2018, Leclerc showed flashes of ballistic pace on Saturdays and racing brilliance on Sundays, dragging his Sauber beyond its limits – and earning himself a money-can’t-buy race seat at Ferrari for 2019, stepping into the shoes of the Scuderia’s last world champion, Kimi Raikkonen.",
  "There he immediately put the cat among the proverbial pigeons, unafraid to go wheel-to-wheel with established number one, Sebastian Vettel. A maiden F1 victory at Spa was followed by another a week later on Ferrari’s hallowed home turf of Monza. The tifosi had found another new hero – who then became the first man to out-score Vettel over a season with the Scuderia, a feat he repeated in crushing fashion the following year.",
  "The 2020 and ’21 seasons bore little fruit for Ferrari, but Leclerc maintained his resolve to emerge a true title contender in 2022. With three wins, 11 podiums and nine pole positions, he was the only man able to consistently take the fight to champion Max Verstappen - a feat he and the Scuderia have sadly been unable to repeat in recent campaigns.",
  "Out of the car, Leclerc is modest and thoughtful - but then he is on his own very personal mission. This firmly-established Formula 1 superstar is racing for his late father Herve and his friend and mentor Jules Bianchi, the F1 driver who died in 2015.",
  "On the evidence so far, he is doing them both proud.",
];

export default function CharlesLeclercPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Charles%20Leclerc%201.png"
        firstName="Charles"
        lastName="Leclerc"
        chips={["🇲🇨 Monaco", "Ferrari", "No.16"]}
        teamLabel="Ferrari"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Charles Leclerc" />
        <DriverBio
          portraitSrc="/Charles%20Leclerc%202.png"
          quote="WHATEVER THE POSITION IS AT STAKE, YOU'VE GOT TO DO YOUR ABSOLUTE BEST AS A DRIVER WHETHER YOU'RE FIGHTING FOR THE FIFTH, FOURTH OR FIRST POSITION."
          quoteAuthor="Charles Leclerc"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Charles%20Leclerc%203.png"
          title="In photos: Charles Leclerc's F1 career"
          subtitle="Scuderia Ferrari"
        />
      </main>
    </div>
  );
}
