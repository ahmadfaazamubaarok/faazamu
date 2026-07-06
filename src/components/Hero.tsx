"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the Hero section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers transformations
  // Background big text moves slightly
  const textBgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Barok (character) moves slower
  const barokY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  // Papers move faster and rotate slightly for a floating effect
  const paperY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const paperRotate = useTransform(scrollYProgress, [0, 1], [0, -15]);

  // Fade out content on scroll down
  const contentFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] md:min-h-[800px] w-full overflow-hidden bg-primary flex flex-col justify-between py-12 md:py-20 select-none"
    >
      {/* 1. Background Large Text Layer (z-0) */}
      <motion.div
        style={{ y: textBgY }}
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0 px-4"
      >
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center text-[#FAF3E8]/10 font-extrabold text-[15vw] md:text-[12vw] leading-none tracking-tighter uppercase font-heading select-none">
          <span className="md:self-start">PORTO</span>
          <span className="md:self-end">FOLIO</span>
        </div>
      </motion.div>

      {/* 2. Welcome Label (z-10) */}
      <motion.div
        style={{ opacity: contentFade }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16"
      >
        <span className="inline-block text-accent font-semibold text-lg md:text-xl tracking-widest uppercase mb-1">
          Welcome to my
        </span>
        <div className="h-1 w-12 bg-accent rounded-full mt-2"></div>
      </motion.div>

      {/* 3. Central Character and Floating Elements Layer (z-20) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center">
          
          {/* Base Character (Barok) - Scrolls slower */}
          <motion.div
            style={{ y: barokY, willChange: "transform" }}
            className="absolute bottom-[-5%] md:bottom-[-10%] w-[85%] sm:w-[65%] md:w-[50%] lg:w-[45%] h-auto aspect-square flex items-end justify-center"
          >
            <Image
              src="/assets/illustrations/barok/heroLayerBarok.png"
              alt="Barok character drawing"
              width={600}
              height={600}
              preload
              className="object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]"
            />
          </motion.div>

          {/* Floating Sketch Papers - Scrolls faster and rotates */}
          <motion.div
            style={{ 
              y: paperY, 
              rotate: paperRotate,
              willChange: "transform" 
            }}
            className="absolute inset-0 w-full h-full flex items-center justify-center scale-105"
          >
            <Image
              src="/assets/illustrations/barok/heroLayerPaper.png"
              alt="Floating sketch papers"
              fill
              preload
              className="object-contain"
            />
          </motion.div>

        </div>
      </div>

      {/* 4. Foreground Content - Title, Name and CTA Buttons (z-30) */}
      <motion.div
        style={{ opacity: contentFade }}
        className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-auto"
      >
        {/* Name and Tagline */}
        <div className="text-cream max-w-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Ahmad Faaza Mubaarok
          </h1>
          <p className="text-lg md:text-2xl font-medium text-slate-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Illustrator & Web Developer
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#illustration-artwork"
            className="group relative px-6 py-4 rounded-xl bg-accent text-white font-semibold text-center tracking-wide shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-[#e47243] active:scale-95"
          >
            View Illustration Artwork
          </a>
          <a
            href="#footer"
            className="px-6 py-4 rounded-xl bg-[#FAF3E8]/10 text-cream font-semibold text-center border border-[#FAF3E8]/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#FAF3E8]/20 hover:scale-105 active:scale-95"
          >
            View Website Projects
          </a>
        </div>
      </motion.div>

      {/* 5. Down Arrow Indicator (z-30) */}
      <motion.div
        style={{ opacity: contentFade }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-1 cursor-pointer text-slate-400 hover:text-cream transition-colors duration-200"
        onClick={() => {
          document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
