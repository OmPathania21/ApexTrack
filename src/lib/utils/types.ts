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
