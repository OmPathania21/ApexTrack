export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const formatSpeed = (value: number) => `${Math.round(value)} km/h`;

export const formatDelta = (value: number) =>
  value === 0 ? "Leader" : `+${value.toFixed(1)}s`;

export const formatLap = (lap: number, total: number) => `${lap}/${total}`;
