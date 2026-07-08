"use client";

import Image from "next/image";

export default function MascotDesign() {
  return (
    <section
      id="mascot-design"
      className="relative min-h-screen w-full bg-cream py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-primary font-extrabold text-5xl md:text-7xl uppercase tracking-tighter">
            Mascot<br />
            <span className="text-accent">Design</span>
          </h2>
          <p className="mt-6 text-secondary font-bold text-xl md:text-2xl tracking-wide uppercase">
            Diega — Oceanic Mascot Challenge 2026 Winner
          </p>
          <div className="mt-4 h-1.5 w-24 bg-accent rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Main Illustration */}
          <div className="relative aspect-square w-full max-w-[600px] mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-primary/5 rounded-full scale-105 blur-2xl"></div>
            <div className="relative w-full h-full bg-white/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/60 shadow-xl">
              <Image
                src="/assets/illustrations/mascot/mascodDesign.png"
                alt="Diega Mascot Design"
                fill
                className="object-contain p-8"
                sizes="(max-w-1024px) 100vw, 600px"
              />
            </div>
          </div>

          {/* Details and Description */}
          <div className="space-y-12">
            <div className="space-y-6 text-text-dark text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Diega is a chibi octopus mascot created for HIMADEGA UNESA,
                combining playful character design with a name that reflects
                its origin. Winner of 1st place nationally at the
                Oceanic Mascot Challenge 2026.
              </p>
            </div>

            {/* Design Detail View */}
            <div className="space-y-4">
              <h3 className="text-primary font-bold text-xl uppercase tracking-widest">
                Design Details
              </h3>
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border-2 border-primary/10 shadow-lg group">
                <Image
                  src="/assets/illustrations/mascot/mascotDesignDetail.png"
                  alt="Diega Design Details"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-w-1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white font-bold tracking-wider uppercase text-sm">Character Sheet View</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
