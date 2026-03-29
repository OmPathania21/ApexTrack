import { DriverHero } from "@/components/DriverHero";
import { DriverCar } from "@/components/DriverCar";
import { DriverStats } from "@/components/DriverStats";
import { DriverBio } from "@/components/DriverBio";

const seasonStats = {
  position: "8th",
  points: 15,
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
  grandPrixEntered: 180,
  careerPoints: 473,
  highestFinish: "1 (x1)",
  podiums: 5,
  highestGrid: "2 (x1)",
  polePositions: 0,
  worldChampionships: 0,
  dnfs: 26,
};

const bioParagraphs = [
  "If there’s one man who knows how big a rollercoaster ride an F1 driver’s career can be, it’s Pierre Gasly!",
  "The flying Frenchman was called up to make his 2017 debut in Malaysia in place of Daniil Kvyat and, after proving his mettle, he was named a Toro Rosso driver the following year. A further 21 races into his fledgling career, Gasly was moved up again – this time to replace Red Bull big gun Daniel Ricciardo.",
  "Gasly seemed to have a knack of being in the right place at the right time – a quality that’s equally handy on track. A series of impressive 2018 performances for Toro Rosso – including a brilliant fourth place in Bahrain – showed exciting promise for what he might do with the ‘A’ team in 2019.",
  "Unfortunately that promise only appeared in flashes – and he quickly suffered from unfavourable comparisons with superstar team mate Max Verstappen. So much so that after the summer break, he was sent back to Toro Rosso, with another young up-and-comer – Alex Albon – being given a shot in the ‘senior’ Red Bull seat.",
  "But Gasly bounced back, as only Gasly can. In the season’s remaining nine races he scored almost as many points as team mate Kvyat managed over the entire year – and secured his best-ever race result with P2 in Brazil. That trajectory continued in 2020, peaking with an emotional maiden win at the renamed AlphaTauri team’s home race in Italy, and didn’t let up in 2021 when he was back on the podium and scored 110 of the squad’s 142 points.",
  "When AlphaTauri’s momentum stalled in 2022, Gasly decided it was time for a change – in the form of French squad Alpine. It’s a move that has occasionally put him back on the podium, but the question now is can he gather momentum and get himself another shot at the F1 bigtime…",
  "THE MOMENT I LOVE THE MOST IS WHENEVER I GET IN THAT CAR, FIGHTING THE BEST 19 DRIVERS IN THE WORLD, AND THIS EXERCISE OF BEATING THEM.",
];

export default function PierreGaslyPage() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <DriverHero
        backgroundImage="/%20Pierre%20Gasly%201.png"
        firstName="Pierre"
        lastName="Gasly"
        chips={["🇫🇷 France", "Alpine", "No.10"]}
        teamLabel="Alpine"
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <DriverStats seasonStats={seasonStats} careerStats={careerStats} seasonLabel="2026 Season" careerLabel="Pierre Gasly" />
        <DriverBio
          portraitSrc="/%20Pierre%20Gasly2.png"
          quote="THE MOMENT I LOVE THE MOST IS WHENEVER I GET IN THAT CAR, FIGHTING THE BEST 19 DRIVERS IN THE WORLD, AND THIS EXERCISE OF BEATING THEM."
          quoteAuthor="Pierre Gasly"
          bioParagraphs={bioParagraphs}
          imageLeft
        />
        <DriverCar
          imageSrc="/%20Pierre%20Gasly%203.png"
          title="In photos: Pierre Gasly's F1 career"
          subtitle="Alpine F1 Team"
        />
      </main>
    </div>
  );
}
