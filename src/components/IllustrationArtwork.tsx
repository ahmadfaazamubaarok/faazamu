"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const artworks = [
  {
    src: "/assets/illustrations/portofolio/illustration1.png",
    title: "Marimenggambar Community's Poster",
  },
  {
    src: "/assets/illustrations/portofolio/illustration2.png",
    title: "Gambar Bareng Community's Poster",
  },
  {
    src: "/assets/illustrations/portofolio/illustration3.png",
    title: "Example Illustration",
  },
];

export default function IllustrationArtwork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the main Barok illustration
  const barokY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  
  // Entrance animations for thumbnails
  // Each thumbnail has a slightly different offset for a staggered effect
  const thumb1Y = useTransform(scrollYProgress, [0.2, 0.5], [150, 0]);
  const thumb2Y = useTransform(scrollYProgress, [0.3, 0.6], [180, 0]);
  const thumb3Y = useTransform(scrollYProgress, [0.4, 0.7], [210, 0]);
  
  const thumbOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section
      id="illustration-artwork"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center">
        
        {/* Header with Vertical Title */}
        <div className="w-full flex justify-between items-start mb-16 md:mb-24">
          <div className="relative">
            <h2 className="text-primary font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase tracking-tighter max-w-[400px]">
              Illustration<br />
              <span className="text-accent">Artworks</span>
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-1 w-24 bg-primary rounded-full"></div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Portfolio</span>
            </div>
          </div>
          
          {/* Vertical Label */}
          <div className="hidden md:block origin-top-right rotate-90 translate-x-full pr-10">
            <span className="text-primary/10 font-black text-6xl uppercase tracking-[0.2em] whitespace-nowrap">
              Illustration Artworks
            </span>
          </div>
        </div>

        {/* Main Content Area - Vertical Stack */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Base Layer: Barok on Rocket Pencil — Large, dominant */}
          <motion.div
            style={{ y: barokY }}
            className="relative z-0 w-full max-w-[600px] lg:max-w-[700px] aspect-[3/4]"
          >
            <Image
              src="/assets/illustrations/barok/illustrationArtwork.png"
              alt="Barok on rocket pencil"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 700px"
            />
          </motion.div>

          {/* Foreground Layer: 3 Thumbnails — overlapping Barok from below */}
          <div className="relative z-10 w-full -mt-24 md:-mt-32 lg:-mt-40 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {artworks.map((art, index) => {
              const y = index === 0 ? thumb1Y : index === 1 ? thumb2Y : thumb3Y;
              
              return (
                <motion.div
                  key={index}
                  style={{ y, opacity: thumbOpacity }}
                  className="flex flex-col gap-4 pointer-events-auto group"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <Image
                      src={art.src}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="px-2">
                    <p className="text-primary font-bold text-lg leading-tight uppercase tracking-wide">
                      {art.title}
                    </p>
                    <div className="h-0.5 w-0 group-hover:w-full bg-accent transition-all duration-500 mt-1"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Transition Footer */}
        <div className="mt-24 flex flex-col items-center gap-4">
          <p className="text-text-muted font-bold tracking-widest uppercase text-sm animate-bounce">
            See the full collection below ↓
          </p>
        </div>

      </div>
    </section>
  );
}
