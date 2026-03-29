"use client";

import { motion } from "framer-motion";

const portrait = "/Alex%20Albon%202.png";

export const DriverBio = () => (
  <motion.section
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.35 }}
    className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-white backdrop-blur"
  >
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
        <div className="max-w-2xl space-y-4 text-blue-100/90">
          <h3 className="text-3xl font-bold text-white">Driver Bio</h3>
          <p className="leading-relaxed">
            Born in London but racing under the flag of Thailand, Alexander Albon’s first word was in fact Italian. That word was Ferrari – though it was with another Italian team that he got his big F1 break.
          </p>
          <p className="leading-relaxed">
            Idolising Michael Schumacher and dreaming of one day racing in Formula 1, the junior Albon was pipped to the 2016 GP3 title by a certain Charles Leclerc. He then left his great friendship with George Russell trackside as he took the 2018 Formula 2 title fight down to the wire.
          </p>
          <p className="leading-relaxed">
            Graduating to the F1 big league along with yet another contemporary – Lando Norris – in 2019, Albon did his talking on track with Toro Rosso in the opening races, earning a mid-season promotion to Red Bull Racing.
          </p>
          <p className="leading-relaxed">
            A stylish overtaker with a championship mentality, Albon was unfazed by partnering Max Verstappen for the second half of his rookie season, taking top-six finishes in eight of his nine 2019 races with Red Bull.
          </p>
          <p className="leading-relaxed">
            Staying in touch with the future champion proved tougher in 2020 and Red Bull dropped him from their race line-up. Crucially, though, Albon was retained as test and reserve driver, keeping him very much on team bosses’ radar, leading to his 2022 return to the grid with Williams, where he has established a reputation as a fast qualifier and mature racer.
          </p>
          <p className="leading-relaxed">
            Laidback and cheerful with a cheeky grin, the Thai driver is popular among his peers – not always easy in motorsport’s cauldron of competition – but you don’t succeed in Formula 1 by being popular. Albon’s challenge remains a big one – to make the most of a rare second F1 opportunity.
          </p>
        </div>
      </div>

      <div className="relative h-full min-h-[360px] w-full">
        <motion.img
          src={portrait}
          alt="Alexander Albon"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.02, opacity: 0.9 }}
          whileInView={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/65 to-transparent" />
      </div>
    </div>
  </motion.section>
);
