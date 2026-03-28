"use client";

import { listArticles } from "@/lib/api";
import { motion, useScroll } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";

const news = listArticles();

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const article = news.find((a) => a.slug === params?.slug);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  if (!article) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-slate-200">
        <p className="text-lg">Article not found.</p>
        <button className="mt-4 rounded-full border border-white/20 px-4 py-2 text-sm" onClick={() => router.push("/news")}>
          Back to news
        </button>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl px-6 pb-24 pt-12 sm:px-10 lg:px-16">
      <motion.div
        className="fixed left-0 top-0 z-40 h-1 origin-left bg-gradient-to-r from-[var(--accent-lemans)] via-[var(--accent-f1)] to-[var(--accent-nascar)]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8" style={{ boxShadow: `0 0 35px ${article.accent}44` }}>
        <p className="text-xs uppercase tracking-[0.5em] text-slate-400">{article.category}</p>
        <h1 className="mt-2 text-4xl font-semibold text-white md:text-5xl">{article.title}</h1>
        <div className="mt-2 flex items-center gap-3 text-sm text-slate-300">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <div className="mt-6 space-y-4 text-lg leading-8 text-slate-100">
          {article.body.map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
