"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/assets/illustrations/comic/comic${i + 1}.png`,
}));

export default function ComicArtwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPanel, setCurrentPanel] = useState(1);
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const panelElements = gsap.utils.toArray(".comic-panel") as HTMLElement[];
    
    // Toggle UI visibility based on section entry/exit
    ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      onEnter: () => setShowUI(true),
      onEnterBack: () => setShowUI(true),
      onLeave: () => setShowUI(false),
      onLeaveBack: () => setShowUI(false),
    });

    // Create the sticky stack effect
    panelElements.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        onEnter: () => setCurrentPanel(i + 1),
        onEnterBack: () => setCurrentPanel(i + 1),
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      id="comic-artwork"
      ref={containerRef}
      className="relative w-full bg-comic-bg"
    >
      {/* Header Info (Fixed overlay) */}
      <div 
        className={`fixed top-12 left-6 md:left-16 z-50 pointer-events-none transition-all duration-500 ${
          showUI ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-white font-extrabold text-4xl md:text-6xl uppercase tracking-tighter">
          Comic<br />
          <span className="text-accent">Artwork</span>
        </h2>
        <div className="mt-4 h-1 w-16 bg-white rounded-full"></div>
      </div>

      {/* Vertical Side Label (Fixed overlay) */}
      <div 
        className={`fixed top-1/2 right-0 -translate-y-1/2 z-50 pointer-events-none hidden md:block transition-all duration-700 delay-100 ${
          showUI ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="rotate-90 translate-x-1/2 origin-center">
          <span className="text-white/10 font-black text-[12vh] uppercase tracking-[0.3em] whitespace-nowrap">
            Comic Artwork
          </span>
        </div>
      </div>

      {/* Progress Indicator (Fixed) */}
      <div 
        className={`fixed bottom-12 right-6 md:right-16 z-50 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 transition-all duration-500 ${
          showUI ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-white font-bold text-xl md:text-2xl tracking-widest">
          <span className="text-accent">{currentPanel}</span>
          <span className="mx-2 opacity-50">/</span>
          <span>10</span>
        </p>
      </div>

      {/* Panels Stack */}
      <div className="flex flex-col relative z-0">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className="comic-panel h-screen w-full flex items-center justify-center p-4 md:p-12 lg:p-24"
          >
            <div className="relative w-full h-full max-w-4xl shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden bg-[#2a1b4a]/20 border border-white/10 backdrop-blur-sm">
              <Image
                src={panel.src}
                alt={`Comic Panel ${panel.id}`}
                fill
                className="object-contain p-4 md:p-8"
                preload={panel.id <= 2}
                sizes="(max-w-1024px) 100vw, 1024px"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Visual spacer to prevent jumping at the end of the section */}
      <div className="h-screen w-full bg-comic-bg"></div>
    </section>
  );
}
