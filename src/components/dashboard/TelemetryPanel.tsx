"use client";

import { formatLap } from "@/lib/utils/format";
import { Driver } from "@/lib/utils/types";
import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface TelemetryPanelProps {
  drivers: Driver[];
  lap: number;
  totalLaps: number;
  accent: string;
  timestamp: number;
}

type TelemetryDatum = { timestamp: number; speed: number };

export const TelemetryPanel = ({ drivers, lap, totalLaps, accent, timestamp }: TelemetryPanelProps) => {
  const avgSpeed = useMemo(() => {
    if (!drivers.length) return 0;
    return drivers.reduce((acc, d) => acc + d.speed, 0) / drivers.length;
  }, [drivers]);

  const history: TelemetryDatum[] = useMemo(() => {
    return Array.from({ length: 18 }, (_, idx) => {
      const wave =
        Math.sin((timestamp / 1200 + idx) * 0.8) * 6 +
        Math.cos((timestamp / 1500 + idx) * 0.6) * 4;
      return { timestamp: idx, speed: Math.max(240, Math.min(340, avgSpeed + wave)) };
    });
  }, [avgSpeed, timestamp]);

  const gaugeValue = Math.min(Math.round(avgSpeed), 340);

  return (
    <div className="glass glow-edge relative flex flex-col gap-6 overflow-hidden rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Telemetry</p>
          <p className="text-sm text-slate-300">Synthetic feed · {formatLap(lap, totalLaps)}</p>
        </div>
        <div className="text-sm text-slate-300">
          Avg speed <span className="text-white font-semibold">{gaugeValue} km/h</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={history} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="speedGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={accent} stopOpacity={0.35} />
                  <stop offset="100%" stopColor={accent} stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.08)" />
              <XAxis
                dataKey="timestamp"
                tickFormatter={(ts) => `t+${ts}s`}
                stroke="rgba(255,255,255,0.3)"
                tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
              />
              <YAxis
                stroke="rgba(255,255,255,0.3)"
                tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                domain={[240, 340]}
              />
              <Tooltip
                contentStyle={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)", color: "white" }}
                formatter={(value: any) => `${Math.round(Number(Array.isArray(value) ? value[0] : value ?? 0))} km/h`}
                labelFormatter={(ts) => `Δ ${ts}s`}
              />
              <Area type="monotone" dataKey="speed" stroke={accent} fill="url(#speedGradient)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="relative grid place-items-center rounded-2xl bg-white/5 p-6 text-center">
          <div
            className="relative h-40 w-40 rounded-full border border-white/10 bg-slate-900/60"
            style={{
              background: `conic-gradient(${accent} ${Math.min((gaugeValue / 340) * 360, 360)}deg, rgba(255,255,255,0.08) 0deg)`
            }}
          >
            <div className="absolute inset-3 rounded-full bg-slate-950/80 backdrop-blur" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Speed</p>
              <p className="text-3xl font-semibold text-white">{gaugeValue}</p>
              <p className="text-xs text-slate-400">km/h</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-300">Smoothed with Framer springs for buttery transitions.</p>
        </div>
      </div>
    </div>
  );
};
