"use client";

import { Article } from "@/lib/utils/types";
import { motion } from "framer-motion";
import Link from "next/link";

export const NewsCard = ({ article }: { article: Article }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
      style={{ boxShadow: `0 0 26px ${article.accent}44` }}
    >
      <div className="absolute inset-0 opacity-35" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(130deg, ${article.accent}22, transparent 60%)` }}
        />
      </div>
      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{article.category}</p>
      <h3 className="mt-2 text-lg font-semibold text-white">{article.title}</h3>
      <p className="text-sm text-slate-300">{article.excerpt}</p>
      <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
        <span>{article.date}</span>
        <span>•</span>
        <span>{article.readTime}</span>
      </div>
      <Link
        href={`/news/${article.slug}`}
        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
      >
        Read story
        <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
          →
        </motion.span>
      </Link>
    </motion.div>
  );
};
