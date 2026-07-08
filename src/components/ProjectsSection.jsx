import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Skills from './Skills';

// Import images
import bgIllustration from '../assets/illustrationArtworks/bgIllustrationArtworks.png';
import awanBelakang from '../assets/illustrationArtworks/awanBelakang.png';
import awanDepan from '../assets/illustrationArtworks/awanDepan.png';
import barokRoket from '../assets/illustrationArtworks/barokRoketPensil.png';
import img1 from '../assets/illustrationArtworks/illustrations/illustration1.png';
import img2 from '../assets/illustrationArtworks/illustrations/illustration2.png';
import img3 from '../assets/illustrationArtworks/illustrations/illustration3.png';
import comic1 from '../assets/comicArworks/comic1.png';
import comic2 from '../assets/comicArworks/comic2.png';
import comic3 from '../assets/comicArworks/comic3.png';
import comic4 from '../assets/comicArworks/comic4.png';
import comic5 from '../assets/comicArworks/comic5.png';
import comic6 from '../assets/comicArworks/comic6.png';
import comic7 from '../assets/comicArworks/comic7.png';
import comic8 from '../assets/comicArworks/comic8.png';
import comic9 from '../assets/comicArworks/comic9.png';
import comic10 from '../assets/comicArworks/comic10.png';

import diegaMain from '../assets/characterDesign/diega/diegaMain.png';
import diegaVariant from '../assets/characterDesign/diega/diegaVariant.png';

const comicItems = [
  comic1, comic2, comic3, comic4, comic5, 
  comic6, comic7, comic8, comic9, comic10
];

const codeTokens = [
  { text: "// Initialize rendering sequence...\n", color: "text-[#5c6370] italic" },
  { text: "import ", color: "text-[#c678dd]" },
  { text: "{ Core } ", color: "text-[#e5c07b]" },
  { text: "from ", color: "text-[#c678dd]" },
  { text: "'@faazamu/system';\n", color: "text-[#98c379]" },
  { text: "import ", color: "text-[#c678dd]" },
  { text: "{ WebRenderer } ", color: "text-[#e5c07b]" },
  { text: "from ", color: "text-[#c678dd]" },
  { text: "'@barok/renderer';\n", color: "text-[#98c379]" },
  { text: "const ", color: "text-[#c678dd]" },
  { text: "loadWebProjects ", color: "text-[#61afef]" },
  { text: "= ", color: "text-[#56b6c2]" },
  { text: "async () => {\n", color: "text-[#c678dd]" },
  { text: "  Core.", color: "text-[#e5c07b]" },
  { text: "log(", color: "text-[#61afef]" },
  { text: "\"Fetching project data...\"", color: "text-[#98c379]" },
  { text: ");\n", color: "text-white" },
  { text: "  const ", color: "text-[#c678dd]" },
  { text: "projects ", color: "text-white" },
  { text: "= await ", color: "text-[#c678dd]" },
  { text: "WebRenderer.", color: "text-[#e5c07b]" },
  { text: "pull();\n", color: "text-[#61afef]" },
  { text: "  if ", color: "text-[#c678dd]" },
  { text: "(projects.status === ", color: "text-white" },
  { text: "\"READY\"", color: "text-[#98c379]" },
  { text: ") {\n", color: "text-white" },
  { text: "    WebRenderer.", color: "text-[#e5c07b]" },
  { text: "buildCards(projects);\n", color: "text-[#61afef]" },
  { text: "    Core.", color: "text-[#e5c07b]" },
  { text: "execute(", color: "text-[#61afef]" },
  { text: "\"SCROLL_TO_REVEAL\"", color: "text-[#98c379]" },
  { text: ");\n", color: "text-white" },
  { text: "  }\n};\n", color: "text-white" },
  { text: "loadWebProjects();", color: "text-[#61afef]" }
];
const fullCodeLength = codeTokens.reduce((acc, curr) => acc + curr.text.length, 0);

// Sub-komponen untuk merender tiap panel komik secara independen
const ComicPanel = ({ scrollYProgress, index, imgSrc }) => {
  // 10 panel mulai dari 0.27 (di skala 3000vh)
  const startMove = 0.27 + (index * 0.025);
  const endMove = startMove + 0.025;
  
  // y: bergerak dari bawah layar (100vh) ke tengah (0vh) lalu diam (0vh)
  const y = useTransform(
    scrollYProgress,
    [startMove, endMove, 1],
    ["100vh", "0vh", "0vh"]
  );

  // Sedikit rotasi agar saat tertumpuk terlihat dinamis (opsional, tapi bagus untuk UI)
  const rotate = (index % 2 === 0 ? 2 : -2) + (index * 0.5);

  return (
    <motion.div 
      style={{ y, rotate }}
      className="absolute right-4 md:right-16 lg:right-32 top-1/2 -translate-y-1/2 z-30"
    >
      <img 
        src={imgSrc} 
        alt={`Comic Panel ${index + 1}`} 
        className="w-64 md:w-80 lg:w-96 rounded-xl shadow-2xl border-4 border-white/10" 
      />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Animasi Masking (Lingkaran) untuk Illustration Artworks
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.015, 0.05, 0.08, 1],
    [
      "circle(0px at 50% 100%)", 
      "circle(50px at 50% 100%)", 
      "circle(50px at 50% 50%)", 
      "circle(150vw at 50% 50%)",
      "circle(150vw at 50% 50%)"
    ]
  );

  // 2. Animasi Barok Roket Pensil
  const barokY = useTransform(
    scrollYProgress,
    [0.04, 0.08, 1],
    ["100vh", "-5vh", "-5vh"]
  );

  // 3. Animasi Galeri Artwork Muncul Ke Atas
  const galleryY = useTransform(
    scrollYProgress,
    [0.08, 0.12, 1],
    ["100vh", "0vh", "0vh"]
  );

  // 4. Animasi Galeri Horizontal Scroll
  const galleryX = useTransform(
    scrollYProgress,
    [0.12, 0.22, 1],
    ["0%", "-85%", "-85%"] 
  );

  // 5. Animasi Masking (Lingkaran) untuk Comic Artworks
  const clipPathComic = useTransform(
    scrollYProgress,
    [0, 0.22, 0.24, 0.27, 1],
    [
      "circle(0px at 50% 100%)", 
      "circle(0px at 50% 100%)", 
      "circle(50px at 50% 50%)", 
      "circle(150vw at 50% 50%)",
      "circle(150vw at 50% 50%)"
    ]
  );

  // 6. Animasi Masking (Horizontal dari Bawah) untuk Character Design
  // Jeda setelah komik (0.52), sweep mulai 0.52 ke 0.55
  const clipPathCharacter = useTransform(
    scrollYProgress,
    [0, 0.52, 0.55, 1],
    [
      "inset(100% 0% 0% 0%)",
      "inset(100% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)"
    ]
  );

  // 7. Animasi Scroll Vertikal untuk Konten Character Design
  const charScrollY = useTransform(
    scrollYProgress,
    [0, 0.58, 0.68],
    ["0vh", "0vh", "-100vh"]
  );

  // 8. Animasi Menutup Semua Layer Artwork (Shrinking Circle)
  // Setelah Character Design selesai di 0.68, tunggu sampai 0.70 lalu tutup lingkaran
  const closingCircle = useTransform(
    scrollYProgress,
    [0, 0.70, 0.72, 0.78, 1],
    [
      "circle(150vw at 50% 50%)",
      "circle(150vw at 50% 50%)",
      "circle(50px at 50% 50%)",
      "circle(0px at 50% 50%)",
      "circle(0px at 50% 50%)"
    ]
  );

  // 9. Animasi IDE Code Editor (Muncul dari Bawah)
  // Mulai muncul setelah lingkaran penutup selesai (0.78)
  const ideY = useTransform(
    scrollYProgress,
    [0.78, 0.88, 1],
    ["100vh", "0vh", "0vh"]
  );

  // State untuk melacak panel komik mana yang sedang aktif
  const [currentPanel, setCurrentPanel] = useState(0);

  // State dan String untuk efek ngetik kode di IDE
  const [codeChars, setCodeChars] = useState(0);

  // Menggunakan event listener untuk memantau perubahan nilai scroll dan mengupdate angka counter & kode
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 1. Comic Panel Counter
    let count = 0;
    if (latest >= 0.27 && latest <= 0.55) {
      count = Math.floor((latest - 0.27) / 0.025) + 1;
      if (count > 10) count = 10;
    } else if (latest > 0.55) {
      count = 10;
    }
    
    if (count !== currentPanel) {
      setCurrentPanel(count);
    }

    // 2. IDE Code Typing Effect (0.88 - 1.0)
    if (latest >= 0.88) {
      const progress = (latest - 0.88) / 0.12;
      const chars = Math.floor(progress * fullCodeLength);
      setCodeChars(Math.min(chars, fullCodeLength));
    } else {
      setCodeChars(0);
    }
  });

  const galleryItems = [
    img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3
  ];

  return (
    <>
    {/* Container diperpanjang jadi 3000vh untuk mengakomodasi penutup lingkaran dan Web Projects */}
    <section ref={containerRef} className="relative w-full h-[3000vh]">
      
      {/* Sticky container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-slate-800">
        
        {/* Lapis Dasar (Lapis 5): Web Projects */}
        <div className="absolute inset-0 w-full h-full z-0 flex flex-col items-center">
          {/* Wrapper Animasi (Judul & IDE Naik Bersamaan) */}
          <motion.div 
            style={{ y: ideY }}
            className="absolute bottom-8 md:bottom-12 w-full flex flex-col items-center z-20"
          >
            {/* Judul Web Projects (Menempel di atas IDE) */}
            <div className="w-[95%] md:w-[85%] lg:w-[75%] max-w-5xl mb-4 md:mb-6 px-2">
              <p className="text-xs md:text-sm text-emerald-400 font-mono tracking-widest drop-shadow-md mb-1">
                <span className="text-white/50">const</span> <span className="text-blue-400">section</span> <span className="text-white/50">=</span> <span className="text-emerald-300">"Explore my"</span>;
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                Web Projects
              </h1>
            </div>

            {/* IDE Code Editor Mockup */}
            <div className="w-[95%] md:w-[85%] lg:w-[75%] max-w-5xl h-[55vh] md:h-[60vh] lg:h-[65vh] bg-[#1e1e1e] rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden">
            {/* IDE Header */}
            <div className="w-full h-10 bg-[#2d2d2d] flex items-center px-4 border-b border-black/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex-1 text-center text-xs text-white/40 font-mono tracking-widest">
                WebProjects.jsx - Code Editor
              </div>
            </div>

            {/* IDE Body */}
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <div className="hidden md:flex w-56 bg-[#252526] border-r border-black/50 flex-col py-4">
                <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-3 px-4">Explorer</div>
                <div className="text-sm text-white/80 px-2 py-1 mx-2 bg-white/5 rounded font-medium flex items-center gap-2">
                  <span className="text-white/50">▼</span> PORTFOLIO
                </div>
                <div className="text-sm text-white/60 px-6 py-1 mt-1 flex items-center gap-2 hover:bg-white/5 cursor-default">
                  <span className="text-[#519aba]">⚛</span> src
                </div>
                <div className="text-sm text-white/60 px-6 py-1 flex items-center gap-2 hover:bg-white/5 cursor-default">
                  <span className="text-[#519aba]">⚛</span> components
                </div>
                <div className="text-sm text-white/90 px-8 py-1 mt-1 bg-[#37373d] flex items-center gap-2 text-[#e7992d] cursor-default border-l-2 border-[#519aba]">
                  <span className="text-[#519aba]">📄</span> WebProjects.jsx
                </div>
              </div>

              {/* Code Area (Typing Effect) */}
              <div className="flex-1 bg-[#1e1e1e] p-4 md:p-6 font-mono text-xs md:text-sm lg:text-base overflow-hidden">
                <div className="flex w-full h-full overflow-x-auto overflow-y-hidden pb-8">
                  {/* Line Numbers */}
                  <div className="flex flex-col text-white/30 text-right pr-4 select-none border-r border-white/5 mr-4">
                    {Array.from({length: 13}).map((_, i) => <span key={i} className="leading-snug">{i+1}</span>)}
                  </div>
                  
                  {/* Code Content */}
                  <div className="flex flex-col leading-snug whitespace-pre">
                    <div>
                      {(() => {
                        let remainingChars = codeChars;
                        return codeTokens.map((token, index) => {
                          if (remainingChars <= 0) return null;
                          const tokenText = token.text.substring(0, remainingChars);
                          remainingChars -= token.text.length;
                          return <span key={index} className={token.color}>{tokenText}</span>;
                        });
                      })()}
                      {/* Blinking Cursor */}
                      <span className="animate-pulse bg-white/70 w-2 h-4 md:h-5 inline-block align-middle ml-1"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>

        {/* WRAPPER LAPIS 1-4 (ARTWORKS) */}
        <motion.div 
          style={{ clipPath: closingCircle }}
          className="absolute inset-0 w-full h-full z-10"
        >
        
        {/* Lapis 1: Background & Skills */}
        <div className="absolute inset-0 w-full h-full z-0 bg-[#061423] flex flex-col justify-center">
          <Skills />
        </div>
        
        {/* Lapis 2: Konten Baru (Illustration Artwork) */}
        <motion.div 
          style={{ clipPath }}
          className="absolute inset-0 w-full h-full z-10 overflow-hidden"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bgIllustration})` }}
          />

          {/* Awan Belakang */}
          <motion.img 
            src={awanBelakang} 
            alt="Awan Belakang"
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-80"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          {/* Judul Section (Diubah jadi putih agar terlihat di background gelap) */}
          <div className="absolute top-12 left-6 md:top-24 md:left-12 lg:left-24 z-20 flex flex-col pointer-events-none drop-shadow-2xl">
            <p className="text-sm md:text-lg lg:text-xl font-light tracking-widest text-[#0b1a30] drop-shadow-md">Explore my</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-2 text-[#0b1a30] drop-shadow-lg">Illustration<br/>Artworks</h1>
          </div>

          {/* Barok Roket Pensil */}
          <motion.div
            style={{ y: barokY }}
            className="absolute right-4 md:right-16 lg:right-32 top-[15%] md:top-[10%] z-20"
          >
            <img src={barokRoket} alt="Barok Roket Pensil" className="w-56 md:w-80 lg:w-96 object-contain drop-shadow-2xl" />
          </motion.div>

          {/* Galeri Artwork */}
          <motion.div
            style={{ y: galleryY }}
            className="absolute bottom-8 md:bottom-12 left-0 w-full z-20 flex"
          >
            <motion.div 
              style={{ x: galleryX }}
              className="flex gap-6 px-6 md:px-12 lg:px-24 w-max"
            >
              {galleryItems.map((imgSrc, idx) => (
                <div 
                  key={idx} 
                  className="flex-none w-60 h-60 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 hover:-translate-y-4 transition-transform duration-300"
                >
                  <img src={imgSrc} alt={`Artwork ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Awan Depan */}
          <motion.img 
            src={awanDepan} 
            alt="Awan Depan"
            className="absolute inset-0 w-full h-full object-cover object-bottom z-30 pointer-events-none"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          
        </motion.div>

        {/* Lapis 3: Konten Comic Artwork (ter-masking oleh lingkaran baru) */}
        <motion.div 
          style={{ clipPath: clipPathComic }}
          className="absolute inset-0 w-full h-full z-40 overflow-hidden bg-[#4c169f]"
        >
          {/* Judul Section Comic & Counter */}
          <div className="absolute top-12 left-6 md:top-24 md:left-12 lg:left-24 z-20 flex flex-col pointer-events-none drop-shadow-2xl">
            <p className="text-sm md:text-lg lg:text-xl font-light tracking-widest text-white drop-shadow-md">Explore my</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-2 text-[#e7992d] drop-shadow-lg">Comic<br />Artworks</h1>
               <p className="text-md text-white/60 mt-6 max-w-sm">
                  Komik ini memenangkan juara 3 tingkat Provinsi DIY di lomba PEKSIMIPROV DIY 2026.
               </p>
            
            {/* Penghitung Progress Komik (Counter) */}
            <p className="text-base md:text-lg lg:text-xl font-light tracking-widest text-white/70 mt-4 md:mt-6">
               <span className="text-[#e7992d] font-bold">{currentPanel === 0 ? "1" : currentPanel}</span> / 10
            </p>
          </div>

          {/* Tumpukan Panel Komik (Stack Scroll) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {comicItems.map((imgSrc, idx) => (
              <ComicPanel 
                key={idx} 
                index={idx} 
                imgSrc={imgSrc} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>
        </motion.div>

        {/* Lapis 4: Konten Character Design (ter-masking oleh sapuan horizontal dari bawah) */}
        <motion.div 
          style={{ clipPath: clipPathCharacter }}
          className="absolute inset-0 w-full h-full z-50 overflow-hidden bg-[#0d9488]"
        >
          {/* Konten Scrollable menggunakan charScrollY */}
          <motion.div 
            style={{ y: charScrollY }}
            className="w-full flex flex-col pt-40 md:pt-0"
          >
            {/* Karakter 1: Diega */}
            <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 lg:px-24">
              <div className="md:w-1/2 flex flex-col z-20 mt-32 md:mt-0 pl-0 md:pl-12 lg:pl-32">
                <h2 className="text-6xl md:text-7xl lg:text-9xl font-bold text-white drop-shadow-xl">Diega</h2>
                <p className="text-xl md:text-3xl font-light text-white/80 mt-2 tracking-wide">Character Design</p>
                <p className="text-md text-white/60 mt-6 max-w-sm">
                  Desain maskot ini memenangkan Juara 1 nasional di ajang OCEANIC MASCOT CHALLENGE 2026, yang diselenggarakan oleh HIMADEGA UNESA dengan tema "Diving into the Depths of Identity". Maskot ini menonjolkan gaya visual yang hidup, dinamis, dan memiliki identitas yang kuat.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col items-center justify-center gap-2 md:gap-4 mt-12 md:mt-0 z-20 h-[60vh] md:h-[80vh]">
                <img src={diegaMain} alt="Diega Main" className="w-full h-[65%] md:h-[70%] object-contain hover:scale-105 transition-transform duration-300 drop-shadow-2xl" />
                <img src={diegaVariant} alt="Diega Variant" className="w-2/3 md:w-3/4 h-[35%] md:h-[30%] object-contain hover:scale-105 transition-transform duration-300 drop-shadow-2xl opacity-90" />
              </div>
            </div>

            {/* Karakter 2: Placeholder (Duplikat sementara) */}
            <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 lg:px-24 bg-black/10">
              <div className="md:w-1/2 flex flex-col items-center justify-center gap-2 md:gap-4 mb-12 md:mt-0 z-20 h-[60vh] md:h-[80vh] order-2 md:order-1">
                <img src={diegaMain} alt="Karakter 2 Placeholder" className="w-full h-[65%] md:h-[70%] object-contain opacity-20 grayscale" />
                <img src={diegaVariant} alt="Karakter 2 Placeholder" className="w-2/3 md:w-3/4 h-[35%] md:h-[30%] object-contain opacity-20 grayscale" />
              </div>
              <div className="md:w-1/2 flex flex-col z-20 order-1 md:order-2 pr-0 md:pr-12 lg:pr-32 md:text-right items-start md:items-end mt-32 md:mt-0">
                <h2 className="text-6xl md:text-7xl lg:text-9xl font-bold text-white drop-shadow-xl">Char 02</h2>
                <p className="text-xl md:text-3xl font-light text-white/80 mt-2 tracking-wide">Coming Soon</p>
                <p className="text-md text-white/60 mt-6 max-w-sm">
                  Karakter kedua sedang dalam tahap penyempurnaan. Nanti akan segera menempati panel ini.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* END LAPIS 4 */}

        </motion.div>
        {/* END WRAPPER ARTWORKS */}

      </div>
    </section>

    {/* Section Card Web Projects (Native Scroll) */}
    {/* Muncul secara alami setelah pengguna melewati area sticky 3000vh */}
    <section className="relative w-full min-h-screen bg-slate-900 pt-24 pb-40 px-6 md:px-12 lg:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card Placeholder 1 */}
          <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-colors group shadow-xl">
            <div className="w-full h-48 bg-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-600/20 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <span className="text-6xl text-white">🌐</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Portfolio Website V4</h3>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">
                Platform interaktif untuk memamerkan karya ilustrasi, desain karakter, dan proyek pengembangan web.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/20">React</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/20">Tailwind</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/20">Framer</span>
              </div>
            </div>
          </div>

          {/* Card Placeholder 2 */}
          <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-colors group shadow-xl">
            <div className="w-full h-48 bg-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <span className="text-6xl text-white">🛒</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">E-Commerce Platform</h3>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">
                Aplikasi toko online dengan sistem manajemen inventaris, keranjang belanja, dan integrasi pembayaran.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">Stripe</span>
              </div>
            </div>
          </div>

          {/* Card Placeholder 3 */}
          <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-colors group shadow-xl">
            <div className="w-full h-48 bg-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <span className="text-6xl text-white">📱</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Social Dashboard</h3>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">
                Dasbor analitik media sosial untuk melacak metrik keterlibatan, pertumbuhan audiens, dan performa konten.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20">Vue.js</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20">Chart.js</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default ProjectsSection;
