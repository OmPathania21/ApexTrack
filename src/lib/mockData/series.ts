import { Driver, RaceState, Series } from "@/lib/utils/types";

const createDrivers = (entries: Array<Pick<Driver, "id" | "name" | "team">>, baseSpeed: number) =>
  entries.map((driver, index): Driver => ({
    ...driver,
    position: index + 1,
    gapToLeader: index === 0 ? 0 : parseFloat((index * 0.8).toFixed(1)),
    speed: baseSpeed - index * 2,
    lap: 1,
    status: "running",
    delta: 0,
  }));

export const seriesThemes: Record<Series, { accent: string; glow: string; track: string; laps: number; weather: string; heroImage: string; }> = {
  f1: {
    accent: "var(--accent-f1)",
    glow: "rgba(255,45,85,0.45)",
    track: "Monaco Street",
    laps: 78,
    weather: "Cloudy 21°C",
    heroImage: "/dashboard-hero.jpg",
  },
  nascar: {
    accent: "var(--accent-nascar)",
    glow: "rgba(255,209,102,0.4)",
    track: "Daytona Oval",
    laps: 200,
    weather: "Sunny 28°C",
    heroImage: "/dashboard-hero.jpg",
  },
  lemans: {
    accent: "var(--accent-lemans)",
    glow: "rgba(77,225,255,0.45)",
    track: "Circuit de la Sarthe",
    laps: 250,
    weather: "Night 18°C",
    heroImage: "/dashboard-hero.jpg",
  },
};

const baseDrivers: Record<Series, Driver[]> = {
  f1: createDrivers(
    [
      { id: "lec", name: "Charles Leclerc", team: "Ferrari" },
      { id: "ver", name: "Max Verstappen", team: "Red Bull" },
      { id: "ham", name: "Lewis Hamilton", team: "Mercedes" },
      { id: "nor", name: "Lando Norris", team: "McLaren" },
      { id: "alo", name: "Fernando Alonso", team: "Aston Martin" },
      { id: "rus", name: "George Russell", team: "Mercedes" },
      { id: "sai", name: "Carlos Sainz", team: "Ferrari" },
      { id: "per", name: "Sergio Perez", team: "Red Bull" },
    ],
    305
  ),
  nascar: createDrivers(
    [
      { id: "lar", name: "Kyle Larson", team: "Hendrick" },
      { id: "bus", name: "Kyle Busch", team: "RCR" },
      { id: "ham2", name: "Denny Hamlin", team: "JGR" },
      { id: "eli", name: "Chase Elliott", team: "Hendrick" },
      { id: "bla", name: "Ryan Blaney", team: "Penske" },
      { id: "log", name: "Joey Logano", team: "Penske" },
      { id: "tru", name: "Martin Truex Jr", team: "JGR" },
      { id: "har", name: "Kevin Harvick", team: "Stewart-Haas" },
    ],
    295
  ),
  lemans: createDrivers(
    [
      { id: "toy8", name: "Toyota #8", team: "Toyota Gazoo" },
      { id: "fer50", name: "Ferrari #50", team: "AF Corse" },
      { id: "cad2", name: "Cadillac #2", team: "Chip Ganassi" },
      { id: "por5", name: "Porsche #5", team: "Penske" },
      { id: "peu94", name: "Peugeot #94", team: "TotalEnergies" },
      { id: "toy7", name: "Toyota #7", team: "Toyota Gazoo" },
      { id: "por6", name: "Porsche #6", team: "Penske" },
      { id: "fer51", name: "Ferrari #51", team: "AF Corse" },
    ],
    310
  ),
};

export const initialRaceState = (series: Series): RaceState => ({
  series,
  lap: 1,
  totalLaps: seriesThemes[series].laps,
  track: seriesThemes[series].track,
  weather: seriesThemes[series].weather,
  drivers: baseDrivers[series].map((d) => ({ ...d })),
  timestamp: Date.now(),
});
