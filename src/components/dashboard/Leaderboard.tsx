"use client";

import { formatDelta } from "@/lib/utils/format";
import { Driver } from "@/lib/utils/types";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import { memo, useEffect, useState } from "react";

interface LeaderboardProps {
  drivers: Driver[];
  highlights: Record<string, { deltaPosition: number; speedChange: number }>;
  accent: string;
}

const AnimatedNumber = memo(({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const spring = useSpring(value, { stiffness: 120, damping: 20, mass: 0.6 });
  const [display, setDisplay] = useState(value);

  useEffect(() => spring.set(value), [value, spring]);
  useEffect(() => spring.on("change", (v) => setDisplay(v)), [spring]);

  return (
    <span>
      {display.toFixed(1)}
      {suffix}
    </span>
  );
});
AnimatedNumber.displayName = "AnimatedNumber";

export const Leaderboard = ({ drivers, highlights, accent }: LeaderboardProps) => {
  return (
    <div className="glass glow-edge relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:140px_100%]" />
      </div>
      <div className="relative flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Live leaderboard</p>
          <p className="text-sm text-slate-300">Updated every 1.2s</p>
        </div>
        <div className="rounded-full bg-white/5 px-4 py-2 text-xs text-slate-200">Ghost data stream</div>
      </div>
      <div className="relative divide-y divide-white/5">
        <AnimatePresence initial={false}>
          {drivers.map((driver) => {
            const change = highlights[driver.id];
            const gained = change?.deltaPosition && change.deltaPosition < 0;
            const lost = change?.deltaPosition && change.deltaPosition > 0;
            return (
              <motion.div
                key={driver.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className="flex items-center gap-3 px-5 py-3"
              >
                <div className="w-10 text-lg font-semibold text-slate-200">{driver.position}</div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-white">{driver.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">{driver.team}</p>
                </div>
                <div className="hidden w-24 text-right text-sm text-slate-200 sm:block">
                  <AnimatedNumber value={driver.speed} suffix=" km/h" />
                </div>
                <div className="w-24 text-right text-sm font-medium text-slate-100">
                  {formatDelta(driver.gapToLeader)}
                </div>
                <div className="flex w-16 items-center justify-end text-xs">
                  {gained && (
                    <span className="rounded-full bg-green-400/20 px-2 py-1 text-green-300">▲ {Math.abs(change.deltaPosition)}</span>
                  )}
                  {lost && (
                    <span className="rounded-full bg-rose-400/20 px-2 py-1 text-rose-200">▼ {Math.abs(change.deltaPosition)}</span>
                  )}
                </div>
                <motion.div
                  layoutId={`accent-${driver.id}`}
                  className="h-1.5 w-14 rounded-full"
                  style={{ background: accent, boxShadow: change ? `0 0 14px ${accent}` : undefined }}
                  animate={{ scaleX: 1 + (change ? Math.min(Math.abs(change.speedChange) / 20, 0.3) : 0) }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
