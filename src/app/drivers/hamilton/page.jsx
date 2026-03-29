import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "4th",
  points: 41,
  races: 3,
  wins: 0,
  podiums: 1,
  poles: 0,
  fastestLaps: 0,
  dnfs: 0,
  sprintRaces: 1,
  sprintWins: 0,
  sprintPodiums: 1,
  sprintPoints: 6,
  sprintTop10: 1,
};

const careerStats = {
  grandPrixEntered: 383,
  careerPoints: 5059.5,
  highestFinish: "1 (x105)",
  podiums: 203,
  highestGrid: "1 (x104)",
  polePositions: 104,
  worldChampionships: 7,
  dnfs: 34,
};

const bioParagraphs = [
  "‘Still I Rise’ – these are the words emblazoned across the back of Lewis Hamilton’s helmet and tattooed across his shoulders, and ever since annihilating expectations with one of the greatest rookie performances in F1 history in 2007, that’s pretty much all he’s done.",
  "In a stellar Formula 1 career spanning spells with McLaren, Mercedes and Ferrari, Hamilton has risen to the top of the all-time pole positions list ahead of his hero Ayrton Senna, surged into first place in the wins column surpassing the inimitable Michael Schumacher, and matched the legendary German’s seven world titles.",
  "Is he the G.O.A.T? Few would deny that he’s in the conversation – and what’s more he’s got there his way, twinning his relentless speed with a refusal to conform to stereotypes for how a racing driver should think, dress or behave.",
  "Respect is hard earned in F1, but Hamilton – Sir Lewis Hamilton to be precise – has it from every one of his peers. Why? Because they know that whatever the track, whatever the conditions, whatever the situation, when his visor goes down and the lights go out, it’s Hammertime.",
  "Yes, he may now be in the most challenging phase of his Formula 1 journey – a tough first season with Ferrari was his first not to feature a Grand Prix podium appearance – but few doubt Hamilton still has more to add to the F1 history books.",
];

export default function LewisHamiltonPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Lewis%20Hamilton%201.png"
        firstName="Lewis"
        lastName="Hamilton"
        chips={["🇬🇧 United Kingdom", "Ferrari", "No.44"]}
        teamLabel="Ferrari"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Lewis Hamilton" />
        <DriverBio
          portraitSrc="/Lewis%20Hamilton%20%202.png"
          quote="DRIVING A SCUDERIA FERRARI HP CAR FOR THE FIRST TIME WAS ONE OF THE BEST FEELINGS OF MY LIFE."
          quoteAuthor="Lewis Hamilton"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Lewis%20Hamilton%203.png"
          title="In photos: Lewis Hamilton's F1 career"
          subtitle="Scuderia Ferrari"
        />
      </main>
    </div>
  );
}
