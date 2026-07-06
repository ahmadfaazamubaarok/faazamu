"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const achievements = [
  {
    title: "1st Place — Oceanic Mascot Challenge 2026",
    description: "National mascot design competition",
  },
  {
    title: "TopRank 2026 UI/UX Live Challenge — Finalist",
    description: "UI/UX design competition",
  },
  {
    title: "Peksimiprov DIY 2026 — Comic Competition Participant",
    description: "Regional comic competition",
  },
];

export default function Achievement() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the Barok illustration
  const barokY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="achievement"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <h2 className="text-primary font-extrabold text-5xl md:text-7xl uppercase tracking-tighter">
              Achievements
            </h2>
            <div className="mt-4 h-1.5 w-24 bg-accent rounded-full"></div>
          </div>

          {/* Barok illustration (achievement pose) */}
          <motion.div
            style={{ y: barokY }}
            className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 hidden lg:block"
          >
            <Image
              src="/assets/illustrations/barok/achivement.png"
              alt="Barok celebrating"
              fill
              className="object-contain drop-shadow-xl"
              sizes="224px"
            />
          </motion.div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Certificate Placeholder Card */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream border-2 border-primary/5 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:border-accent/20 group-hover:-translate-y-1">
                {/* Decorative certificate visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  {/* Seal */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 border-4 border-accent/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  {/* Decorative lines */}
                  <div className="w-3/4 h-px bg-primary/10 mb-3"></div>
                  <div className="w-1/2 h-px bg-primary/10 mb-3"></div>
                  <div className="w-2/3 h-px bg-primary/10"></div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <span className="text-white text-xs font-bold tracking-widest uppercase">
                    View Certificate
                  </span>
                </div>
              </div>

              {/* Title below card */}
              <div className="mt-4 px-1">
                <h3 className="text-primary font-bold text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm mt-1 font-medium">
                  {item.description}
                </p>
                <div className="h-0.5 w-0 group-hover:w-full bg-accent transition-all duration-500 mt-2"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
