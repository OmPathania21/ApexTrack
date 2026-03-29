"use client";

import { motion } from "framer-motion";

const portraitDefault = "/Alex%20Albon%202.png";

export const DriverBio = ({
  portraitSrc = portraitDefault,
  quote = "",
  quoteAuthor = "",
  bioParagraphs = [],
  imageLeft = false,
}) => {
  const ImageBlock = (
    <div className="relative h-full min-h-[360px] w-full">
      <motion.img
        src={portraitSrc}
        alt={quoteAuthor || "Driver portrait"}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.02, opacity: 0.9 }}
        whileInView={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/65 to-transparent" />
    </div>
  );

  const TextBlock = (
    <div className="flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
      <div className="max-w-2xl space-y-4 text-blue-100/90">
        <div className="space-y-2">
          {quote && <p className="text-lg italic text-blue-100/90">“{quote}”</p>}
          {quoteAuthor && <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">{quoteAuthor}</p>}
        </div>
        <h3 className="text-3xl font-bold text-white">Driver Bio</h3>
        {bioParagraphs.map((p, idx) => (
          <p key={idx} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
      className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-white backdrop-blur"
    >
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {imageLeft ? (
          <>
            {ImageBlock}
            {TextBlock}
          </>
        ) : (
          <>
            {TextBlock}
            {ImageBlock}
          </>
        )}
      </div>
    </motion.section>
  );
};
