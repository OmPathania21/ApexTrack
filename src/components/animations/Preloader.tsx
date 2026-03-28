"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  accent: string;
}

export const Preloader = ({ accent }: PreloaderProps) => {
  const controls = useAnimationControls();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    controls.start({ width: ["0%", "100%"], transition: { duration: 1.2, ease: "easeInOut" } });
    const timeout = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timeout);
  }, [controls]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-black"
    >
      <div className="w-72 rounded-full bg-white/10 p-3 backdrop-blur">
        <motion.div
          className="h-2 rounded-full"
          style={{ background: accent, boxShadow: `0 0 25px ${accent}` }}
          animate={controls}
        />
        <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-slate-300">
          Initializing race control
        </p>
      </div>
    </motion.div>
  );
};
