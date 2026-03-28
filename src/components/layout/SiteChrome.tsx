"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/drivers", label: "Drivers" },
  { href: "/teams", label: "Teams" },
  { href: "/cars", label: "Cars" },
  { href: "/news", label: "News" },
];

export const SiteChrome = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,45,85,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(77,225,255,0.08),transparent_40%)]" />
      </div>

      <header className="sticky top-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <Link href="/" className="text-lg font-semibold text-white tracking-tight">
            ApexTrack
          </Link>
          <nav className="flex items-center gap-3 text-sm font-medium text-slate-200">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link key={link.href} href={link.href} className="relative px-3 py-1.5">
                  <span className="relative z-10">{link.label}</span>
                  <AnimatePresence>
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: "spring", stiffness: 280, damping: 26 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </nav>
        </div>
        <motion.div
          className="h-[2px] w-full bg-gradient-to-r from-[var(--accent-f1)] via-[var(--accent-lemans)] to-[var(--accent-nascar)]"
          layoutId="topline"
        />
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="mt-16 border-t border-white/5 bg-black/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-400 sm:px-10 lg:px-16">
          <span>Built for immersive motorsport control.</span>
        </div>
      </footer>
    </div>
  );
};
