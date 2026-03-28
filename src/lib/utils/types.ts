export type Series = "f1" | "nascar" | "lemans";

export interface Driver {
  id: string;
  name: string;
  team: string;
  position: number;
  gapToLeader: number;
  speed: number;
  lap: number;
  status: "running" | "pit" | "dnf";
  delta: number;
}

export interface RaceState {
  series: Series;
  lap: number;
  totalLaps: number;
  track: string;
  weather: string;
  drivers: Driver[];
  timestamp: number;
}

export interface TelemetryPoint {
  timestamp: number;
  speed: number;
  lap: number;
}

export interface DriverProfile extends Driver {
  number: number;
  nationality: string;
  wins: number;
  podiums: number;
  poles: number;
  bio: string;
  helmetColor: string;
  teamId: string;
  image?: string;
  highlights: Array<{ year: number; title: string; description: string }>;
}

export interface Team {
  id: string;
  name: string;
  base: string;
  championships: number;
  drivers: string[];
  carId: string;
  colors: { primary: string; secondary: string };
  description: string;
}

export interface Car {
  id: string;
  name: string;
  teamId: string;
  topSpeed: number;
  power: number;
  weight: number;
  hybridSystem: string;
  zeroToHundred: number;
  downforce: string;
  liveries: string[];
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
  accent: string;
}
