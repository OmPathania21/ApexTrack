"use client";

import { NewsCard } from "@/components/cards/NewsCard";
import { listArticles } from "@/lib/api";
import { motion } from "framer-motion";

const news = listArticles();

export default function NewsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <header className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.5em] text-slate-400">News</p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">Modern editorial layer.</h1>
        <p className="max-w-3xl text-lg text-slate-200/80">
          Card grid with hover lifts and gradient accents. Article pages carry scroll progress and text reveals for
          long-form storytelling.
        </p>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "70%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1 rounded-full bg-gradient-to-r from-[var(--accent-lemans)] via-[var(--accent-f1)] to-[var(--accent-nascar)]"
        />
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {news.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
