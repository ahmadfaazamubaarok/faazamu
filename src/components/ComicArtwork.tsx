"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowUI(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Track which panel is most visible
    const panelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-panel"));
            if (id) setCurrentPanel(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const panelEls = container.querySelectorAll("[data-panel]");
    panelEls.forEach((el) => panelObserver.observe(el));

    return () => {
      observer.disconnect();
      panelObserver.disconnect();
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

      {/* Sticky Stack Panels */}
      <div className="relative w-full">
        {panels.map((panel) => (
          <div
            key={panel.id}
            data-panel={panel.id}
            className="sticky top-0 h-screen w-full bg-comic-bg flex items-center justify-center"
            style={{ zIndex: panel.id }}
          >
            <div className="relative w-full h-full">
              <Image
                src={panel.src}
                alt={`Comic Panel ${panel.id}`}
                fill
                className="object-contain"
                preload={panel.id <= 2}
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
