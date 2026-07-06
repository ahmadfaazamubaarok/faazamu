"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const quickFacts = [
  "Computer Science student, Software Engineering vocational graduate",
  "Freelance web developer (CodeIgniter, Laravel, React)",
  "Illustrator & character designer (VGen)",
  "1st place winner, Oceanic Mascot Challenge 2026",
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax: Illustration and Text move at different speeds
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-cream py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Illustration Side */}
        <motion.div
          style={{ y: imageY }}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Decorative circle behind */}
            <div className="absolute inset-0 bg-primary/5 rounded-full scale-110 blur-3xl"></div>
            
            <Image
              src="/assets/illustrations/barok/aboutMe.png"
              alt="Barok sitting and drawing"
              fill
              className="object-contain relative z-10 drop-shadow-2xl"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Text Content Side */}
        <motion.div
          style={{ y: textY }}
          className="w-full lg:w-1/2 flex flex-col gap-8"
        >
          <div className="space-y-4">
            <h2 className="text-primary font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Hi, I&apos;m Faazamu
            </h2>
            <div className="h-1.5 w-20 bg-accent rounded-full"></div>
          </div>

          <div className="space-y-6 text-text-dark text-lg md:text-xl leading-relaxed font-medium opacity-90">
            <p>
              I&apos;m an illustrator and web developer based in Yogyakarta—two worlds
              that are often seen as separate, but to me, they actually complement
              each other. When building a website, I don&apos;t just write code; I also think
              about how the visuals can have character and tell a story.
            </p>
            <p>
              My journey began at a vocational high school where I majored in
              Software Engineering, where I first learned to build web systems
              from scratch. Now I&apos;m pursuing a degree in Computer Science while
              continuing to work—building websites for clients, as well as creating
              illustrations and mascot characters for brands and personal
              commissions at VGen.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="pt-4 space-y-4">
            <h3 className="text-secondary font-bold text-xl uppercase tracking-wider">
              Quick Facts
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-accent"></span>
                  <span className="text-text-muted font-medium text-base leading-tight">
                    {fact}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
