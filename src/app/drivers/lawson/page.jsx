import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "10th",
  points: 10,
  races: 3,
  wins: 0,
  podiums: 0,
  poles: 0,
  fastestLaps: 0,
  dnfs: 0,
  sprintRaces: 1,
  sprintWins: 0,
  sprintPodiums: 0,
  sprintPoints: 2,
  sprintTop10: 1,
};

const careerStats = {
  grandPrixEntered: 38,
  careerPoints: 54,
  highestFinish: "5 (x1)",
  podiums: 0,
  highestGrid: "3 (x1)",
  polePositions: 0,
  worldChampionships: 0,
  dnfs: 6,
};

const bioParagraphs = [
  "Liam Lawson knows a thing or two about jumping in at the deep end.",
  "A race winner at pretty much every level of junior motorsport, and a front-runner in the highly competitive F3 and F2 championships, the New Zealander was keenly awaiting his F1 chance as Red Bull’s reserve driver when a twist of fate presented it.",
  "With AlphaTauri racer Daniel Ricciardo breaking his hand in a practice crash at the 2023 Dutch Grand Prix, Lawson – inspired as a youngster by the Lightning McQueen character from the Disney animation Cars – was ready to strike.",
  "After a sink-or-swim debut in the relentless rain at Zandvoort, the entire paddock stood up and took notice amid the intense humidity of Singapore, where the rookie brilliantly beat world champion Max Verstappen to a Q3 spot and bagged some valuable points on race day.",
  "Red Bull told Lawson just before his stellar qualifying run under the Marina Bay lights that there would be no room at the inn for 2024, with a rebranded RB team combining experience and youth once more in the healed Ricciardo and Yuki Tsunoda.",
  "Lawson had been in this position before, though. He underlined his talents to Red Bull’s chiefs when it mattered most and just needed to wait for the next opportunity to arise.",
  "Of all the places for it to unfold, Singapore triggered a second twist of fate. Ricciardo would be out, and Lawson back in, this time as Red Bull tried to understand the “bigger picture” with their driver line-ups for 2025 and beyond.",
  "It marked a golden opportunity for Lawson to not only cement himself in RB colours, but also knock on the door of a Red Bull promotion - which is exactly what he got, when he was announced as Sergio Perez's replacement as Max Verstappen's team mate for 2025.",
  "However, the whirlwind nature of his F1 career continued, and after just two difficult Grands Prix with the senior squad, Lawson found himself back at Racing Bulls. But unperturbed by the rapid ‘demotion’, the Kiwi racer quickly rebuilt his reputation and has been a fixture on the grid ever since.",
];

export default function LiamLawsonPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Liam%20Lawson%201.png"
        firstName="Liam"
        lastName="Lawson"
        chips={["🇳🇿 New Zealand", "Racing Bulls", "No.30"]}
        teamLabel="Racing Bulls"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Liam Lawson" />
        <DriverBio
          portraitSrc="/Liam%20Lawson%202.png"
          quote="I'M NOT HERE TO MAKE FRIENDS. I'M HERE TO WIN - THAT'S WHAT I'M FOCUSED ON DOING."
          quoteAuthor="Liam Lawson"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Liam%20Lawson%203.png"
          title="In photos: Liam Lawson's F1 career"
          subtitle="Racing Bulls"
        />
      </main>
    </div>
  );
}
