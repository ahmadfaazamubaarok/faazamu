import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Beranda', id: 'beranda' },
  { name: 'Tentang', id: 'tentang' },
  { name: 'Karir', id: 'karir' },
  { name: 'Karya', id: 'karya' },
  { name: 'Prestasi', id: 'prestasi' },
  { name: 'Sapa', id: 'sapa' },
  { name: 'Pesan', id: 'pesan' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Menandai apakah sudah di-scroll (untuk style navbar)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Deteksi section yang sedang aktif
      const sections = navLinks.map(link => document.getElementById(link.id));
      let currentActive = 'beranda';

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Jika elemen berada di separuh atas layar
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            currentActive = section.id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Karena kita pakai Lenis, kita bisa manfaatkan scrollIntoView
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop & Tablet Navbar (Floating Pill) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:block ${
          isScrolled 
            ? 'w-[90%] max-w-4xl bg-white/70 backdrop-blur-md shadow-lg border border-white/20'
            : 'w-[95%] max-w-5xl bg-transparent'
        } rounded-full`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-xl font-bold text-[#0b1a30]">
            Faazamu
          </div>
          <ul className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-white'
                      : isScrolled ? 'text-slate-700 hover:text-emerald-600' : 'text-slate-800 hover:text-emerald-700'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-[#0b1a30] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navbar (Burger + Dropdown) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex justify-between items-center p-4 pointer-events-auto">
          <div className="text-2xl font-black text-[#0b1a30] drop-shadow-sm bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm">
            Faazamu
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-12 h-12 bg-white/90 backdrop-blur-md shadow-lg rounded-full flex flex-col items-center justify-center gap-1.5 border border-slate-200"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-slate-800 rounded-full origin-center transition-all"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-slate-800 rounded-full transition-all"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-slate-800 rounded-full origin-center transition-all"
            />
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 right-4 w-48 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden pointer-events-auto"
            >
              <ul className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`block px-6 py-3 text-sm font-medium ${
                        activeSection === link.id
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'text-slate-600 active:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
