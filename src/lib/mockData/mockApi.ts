import { clamp } from "@/lib/utils/format";
import { RaceState, Series } from "@/lib/utils/types";
import { initialRaceState } from "./series";

export interface RaceUpdate {
  state: RaceState;
  highlights: Record<
    string,
    {
      deltaPosition: number;
      speedChange: number;
    }
  >;
}

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

const simulateTick = (current: RaceState): RaceUpdate => {
  const drivers = current.drivers.map((driver) => {
    const speedChange = randomBetween(-6, 8);
    const pitChance = Math.random() < 0.08;
    const nextSpeed = clamp(driver.speed + speedChange, 240, 340);
    const lapGain = Math.random() > 0.7 ? 1 : 0;
    const status = pitChance ? "pit" : "running";
    const penalty = pitChance ? randomBetween(1.5, 4) : 0;

    return {
      ...driver,
      speed: nextSpeed,
      lap: driver.lap + lapGain,
      status,
      gapToLeader: Math.max(0, driver.gapToLeader - speedChange * 0.02 + penalty),
      delta: 0,
    };
  });

  const sorted = [...drivers].sort((a, b) => {
    if (a.lap !== b.lap) return b.lap - a.lap;
    return a.gapToLeader - b.gapToLeader;
  });

  const highlights: RaceUpdate["highlights"] = {};
  const recomputed = sorted.map((driver, index) => {
    const previous = current.drivers.find((d) => d.id === driver.id);
    const deltaPosition = (previous?.position ?? index + 1) - (index + 1);
    const speedChange = driver.speed - (previous?.speed ?? driver.speed);
    if (deltaPosition !== 0 || Math.abs(speedChange) > 3) {
      highlights[driver.id] = { deltaPosition, speedChange };
    }
    return {
      ...driver,
      position: index + 1,
      gapToLeader: index === 0 ? 0 : clamp(driver.gapToLeader, 0.1, 25),
      delta: deltaPosition,
    };
  });

  const leaderLap = recomputed[0]?.lap ?? current.lap;
  const nextState: RaceState = {
    ...current,
    lap: leaderLap,
    drivers: recomputed,
    timestamp: Date.now(),
  };

  return { state: nextState, highlights };
};

export const createMockFeed = (series: Series, intervalMs = 1200) => {
  let currentUpdate: RaceUpdate = {
    state: initialRaceState(series),
    highlights: {},
  };
  let timer: NodeJS.Timeout | null = null;
  const listeners = new Set<(update: RaceUpdate) => void>();

  const emit = () => listeners.forEach((cb) => cb(currentUpdate));

  const tick = () => {
    currentUpdate = simulateTick(currentUpdate.state);
    emit();
  };

  const start = () => {
    stop();
    timer = setInterval(tick, intervalMs);
    emit();
  };

  const stop = () => {
    if (timer) clearInterval(timer);
    timer = null;
  };

  const setSeries = (next: Series) => {
    currentUpdate = { state: initialRaceState(next), highlights: {} };
    start();
  };

  const subscribe = (listener: (update: RaceUpdate) => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return {
    start,
    stop,
    setSeries,
    subscribe,
    getSnapshot: () => currentUpdate,
  };
};
