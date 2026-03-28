"use client";

import { Driver } from "@/lib/utils/types";
import { motion } from "framer-motion";
import { CSSProperties, useMemo } from "react";

interface TrackMapProps {
  drivers: Driver[];
  accent: string;
}

const trackPath = "M20 160 C 60 30, 240 30, 280 160 C 300 220, 220 260, 140 260 C 60 260, 0 220, 20 160 Z";

export const TrackMap = ({ drivers, accent }: TrackMapProps) => {
  const markers = useMemo(
    () =>
      drivers.map((driver, index) => {
        const progress = ((driver.position * 7 + driver.speed * 0.05 + index * 3) % 100).toFixed(2);
        const style: CSSProperties = {
          offsetPath: `path('${trackPath}')`,
          offsetDistance: `${progress}%`,
        };
        return { ...driver, progress, style };
      }),
    [drivers]
  );

  return (
    <div className="glass glow-edge relative overflow-hidden rounded-2xl p-5">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),transparent_30%)]" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Track map</p>
          <p className="text-sm text-slate-300">Animated offsets along synthetic layout</p>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">ghost</span>
      </div>
      <div className="relative mt-6 h-72 w-full">
        <svg viewBox="0 0 320 300" className="h-full w-full text-slate-500">
          <defs>
            <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor={accent} />
            </linearGradient>
          </defs>
          <path
            d={trackPath}
            fill="none"
            stroke="url(#trackGradient)"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.4}
            className="drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]"
          />
        </svg>

        {markers.map((marker) => (
          <motion.div
            key={marker.id}
            className="absolute h-3 w-3 rounded-full"
            style={{
              ...marker.style,
              background: accent,
              boxShadow: `0 0 14px ${accent}`,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: marker.position * 0.05 }}
          />
        ))}
      </div>
    </div>
  );
};
