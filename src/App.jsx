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
      <HeroSection />
      <AboutMe />
      <JobExperiences />
      <ProjectsSection />
      <AchievementsSection />
      <LetsConnectSection />
      <AnonymousMessageSection />
      <Footer />
    </main>
  );
}

export default App;
