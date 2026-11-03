import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import JobExperiences from './components/JobExperiences';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import LetsConnectSection from './components/LetsConnectSection';
import AnonymousMessageSection from './components/AnonymousMessageSection';
import Footer from './components/Footer';
import SwarmRebuild from './components/SwarmRebuild';

function App() {
  // Inisialisasi Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Sedikit lebih lambat agar terasa lebih smooth dan elegan
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing eksponensial yang natural
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative w-full h-full bg-[#0b1a30]">
      <Navbar />

      {/* Target scope untuk animasi Swarm Rebuild (Hero sampai Job Experience) */}
      <div id="swarm-scope" className="relative w-full">
        <HeroSection />
        <AboutMe />
        <JobExperiences />
      </div>

      <ProjectsSection />
      <AchievementsSection />
      <LetsConnectSection />
      <AnonymousMessageSection />
      <Footer />

      {/* Controller Swarm Rebuild */}
      <SwarmRebuild targetId="swarm-scope" autoStart={true} />
    </main>
  );
}

export default App;
