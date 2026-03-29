"use client";

import { motion } from "framer-motion";

const mediaImg = "/Alex%20Albon%202.png";

export const DriverMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--bg-card,#0f141a)]"
    >
      <div className="absolute left-4 top-4 z-20 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
        New
      </div>
      <motion.img
        src={mediaImg}
        alt="Alexander Albon portrait"
        className="h-full w-full object-cover"
        initial={{ scale: 1.08, filter: "blur(6px)", opacity: 0.85 }}
        animate={{ scale: 1.02, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-5 text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-100/80">In photos</p>
        <p className="text-lg font-semibold">Alexander Albon's F1 career</p>
      </div>
    </motion.div>
  );
};
