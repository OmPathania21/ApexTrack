import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "12th",
  points: 4,
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
  grandPrixEntered: 26,
  careerPoints: 55,
  highestFinish: "3 (x1)",
  podiums: 1,
  highestGrid: "3 (x1)",
  polePositions: 0,
  worldChampionships: 0,
  dnfs: 3,
};

const bioParagraphs = [
  "Isack Hadjar was the final rookie to be announced for the 2025 season after a dramatic winter reshuffle at Red Bull, which involved Liam Lawson replacing Sergio Perez and the French-Algerian picking up the vacant seat at Racing Bulls.",
  "The road to F1 was quite a journey for Paris-born Hadjar, who built on early promise in karting to reach the top step of the podium during his first full season of single-seater competition and secure a top-three championship classification in his second.",
  "With those foundational French F4 campaigns behind him, Hadjar continued the learning process in Formula Regional European and the F3 Asian series through 2021, before combining Formula Regional Asian and F3 in 2022, when he also became a member of the Red Bull Junior Team.",
  "Fresh from claiming three race victories and finishing fourth in the F3 standings, Hadjar had hoped to kick on when he stepped up to F2 for 2023, only to end the year winless and with some question marks surrounding his future.",
  "Red Bull stuck by the youngster, though, giving him F1 practice outings with the then-named AlphaTauri and the senior team at the Mexican and Abu Dhabi rounds respectively, before the two parties regrouped for another crack at F2.",
  "It was a decision that paid off, with Hadjar winning four races and logging four more podium finishes to challenge new Sauber recruit Gabriel Bortoleto for the 2024 title – narrowly missing out after an agonising stall at the Yas Marina finale.",
  "While he did not quite manage to tick the box of a championship win during his junior career, Hadjar’s eye-catching pace and racecraft all but made up for it and marked him out as the ideal candidate to slot in alongside Yuki Tsunoda.",
  "A heartbreaking debut in Melbourne saw him fail to start after crashing out on a damp formation lap. But from there on in, Red Bull’s confidence in Hadjar’s raw talent began to pay off. By the second half of the season he was consistently reaching Q3 and at Zandvoort took his maiden podium.",
  "He ended the year on 51 points to team mate Liam Lawson’s 38 – earning a promotion for 2026, with history repeating as he again replaced Yuki Tsunoda, this time at Red Bull Racing to partner Max Verstappen.",
];

export default function IsackHadjarPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/Isac%20Hadjar%201.png"
        firstName="Isack"
        lastName="Hadjar"
        chips={["🇫🇷 France", "Red Bull Racing", "No.6"]}
        teamLabel="Red Bull Racing"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Isack Hadjar" />
        <DriverBio
          portraitSrc="/Isac%20Hadjar%20%202.png"
          quote="I’M SOMEONE WHO FOUGHT HIS WAY TO F1 THE HARD WAY."
          quoteAuthor="Isack Hadjar"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/Isac%20Hadjar%203.png"
          title="In photos: Isack Hadjar's F1 career"
          subtitle="Red Bull Racing"
        />
      </main>
    </div>
  );
}
