"use client";

import { Series } from "@/lib/utils/types";
import { motion } from "framer-motion";
import { useState } from "react";

const options: Array<{ id: Series; label: string; sub: string }> = [
  { id: "f1", label: "F1", sub: "Precision sprint" },
  { id: "nascar", label: "NASCAR", sub: "Pack racing" },
  { id: "lemans", label: "Le Mans", sub: "Endurance" },
];

interface SeriesSwitcherProps {
  value: Series;
  onChange: (value: Series) => void;
  accent: string;
}

export const SeriesSwitcher = ({ value, onChange, accent }: SeriesSwitcherProps) => {
  const [hover, setHover] = useState<Series | null>(null);

  return (
    <div className="glass glow-edge relative overflow-hidden rounded-2xl p-[1px]">
      <div className="rounded-2xl bg-black/40 p-4">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Series</p>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {options.map((opt) => {
            const active = opt.id === value;
            const hue = hover === opt.id ? accent : "rgba(255,255,255,0.12)";
            return (
              <button
                key={opt.id}
                onMouseEnter={() => setHover(opt.id)}
                onMouseLeave={() => setHover(null)}
                onClick={() => onChange(opt.id)}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-white/30 hover:bg-white/10"
              >
                {active && (
                  <motion.span
                    layoutId="series-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: accent, opacity: 0.16, boxShadow: `0 0 20px ${accent}` }}
                    transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  />
                )}
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-base font-semibold text-white">{opt.label}</p>
                    <p className="text-xs text-slate-300">{opt.sub}</p>
                  </div>
                  <motion.div
                    animate={{ scale: active ? 1.1 : 1, opacity: active ? 1 : 0.35 }}
                    className="h-2 w-2 rounded-full"
                    style={{ background: hue, boxShadow: active ? `0 0 16px ${accent}` : undefined }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
