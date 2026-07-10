import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Skills from './Skills';
import ImageModal from './ImageModal';

// Import images
import bgIllustration from '../assets/illustrationArtworks/bgIllustrationArtworks.webp';
import awanBelakang from '../assets/illustrationArtworks/awanBelakang.webp';
import awanDepan from '../assets/illustrationArtworks/awanDepan.webp';
import barokRoket from '../assets/illustrationArtworks/barokRoketPensil.webp';
import img1 from '../assets/illustrationArtworks/illustrations/illustration1.webp';
import img2 from '../assets/illustrationArtworks/illustrations/illustration2.webp';
import img3 from '../assets/illustrationArtworks/illustrations/illustration3.webp';
import img4 from '../assets/illustrationArtworks/illustrations/illustration4.webp';
import img5 from '../assets/illustrationArtworks/illustrations/illustration5.webp';
import img6 from '../assets/illustrationArtworks/illustrations/illustration6.webp';
import img7 from '../assets/illustrationArtworks/illustrations/illustration7.webp';
import img8 from '../assets/illustrationArtworks/illustrations/illustration8.webp';
import img9 from '../assets/illustrationArtworks/illustrations/illustration9.webp';
import img10 from '../assets/illustrationArtworks/illustrations/illustration10.webp';
import img11 from '../assets/illustrationArtworks/illustrations/illustration11.webp';
import comic1 from '../assets/comicArworks/comic1.webp';
import comic2 from '../assets/comicArworks/comic2.webp';
import comic3 from '../assets/comicArworks/comic3.webp';
import comic4 from '../assets/comicArworks/comic4.webp';
import comic5 from '../assets/comicArworks/comic5.webp';
import comic6 from '../assets/comicArworks/comic6.webp';
import comic7 from '../assets/comicArworks/comic7.webp';
import comic8 from '../assets/comicArworks/comic8.webp';
import comic9 from '../assets/comicArworks/comic9.webp';
import comic10 from '../assets/comicArworks/comic10.webp';

import diegaMain from '../assets/characterDesign/diega/diegaMain.webp';
import diegaVariant from '../assets/characterDesign/diega/diegaVariant.webp';
import barokMain from '../assets/characterDesign/barok/barokMain.webp';
import barokVariant from '../assets/characterDesign/barok/barokVariant.webp';

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
      className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-16 lg:right-32 top-[60%] md:top-1/2 -translate-y-1/2 z-30"
    >
      <img loading="lazy" 
        src={imgSrc} 
        alt={`Comic Panel ${index + 1}`} 
        className="w-[85vw] max-w-sm md:w-80 lg:w-96 rounded-xl shadow-2xl border-4 border-white/10" 
      />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Animasi Masking (Lingkaran) untuk Illustration Artworks
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.015, 0.05, 0.07, 1],
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
    [0.03, 0.06, 1],
    ["100vh", "-5vh", "-5vh"]
  );

  // 3. Animasi Galeri Artwork Muncul Ke Atas
  const galleryY = useTransform(
    scrollYProgress,
    [0.06, 0.09, 1],
    ["100vh", "0vh", "0vh"]
  );

  // 4. Animasi Galeri Horizontal Scroll
  const galleryX = useTransform(
    scrollYProgress,
    [0.09, 0.19, 1],
    ["0%", "-85%", "-85%"] 
  );

  // 5. Animasi Masking (Lingkaran) untuk Comic Artworks
  const clipPathComic = useTransform(
    scrollYProgress,
    [0, 0.19, 0.21, 0.24, 1],
    [
      "circle(0px at 50% 100%)", 
      "circle(0px at 50% 100%)", 
      "circle(50px at 50% 50%)", 
      "circle(150vw at 50% 50%)",
      "circle(150vw at 50% 50%)"
    ]
  );

  // 6. Animasi Masking (Horizontal dari Bawah) untuk Character Design
  const clipPathCharacter = useTransform(
    scrollYProgress,
    [0, 0.49, 0.52, 1],
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
    [0, 0.54, 0.62],
    ["0vh", "0vh", "-100vh"]
  );

  // 8. Animasi Menutup Semua Layer Artwork (Shrinking Circle)
  const closingCircle = useTransform(
    scrollYProgress,
    [0, 0.64, 0.66, 0.72, 1],
    [
      "circle(150vw at 50% 50%)",
      "circle(150vw at 50% 50%)",
      "circle(50px at 50% 50%)",
      "circle(0px at 50% 50%)",
      "circle(0px at 50% 50%)"
    ]
  );

  // 9. Animasi IDE Code Editor (Muncul dari Bawah)
  const ideY = useTransform(
    scrollYProgress,
    [0.66, 0.72, 1],
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
    if (latest >= 0.24 && latest <= 0.49) {
      count = Math.floor((latest - 0.24) / 0.025) + 1;
      if (count > 10) count = 10;
    } else if (latest > 0.49) {
      count = 10;
    }
    
    if (count !== currentPanel) {
      setCurrentPanel(count);
    }

    // 2. IDE Code Typing Effect (Mulai di 0.72 setelah IDE muncul penuh)
    if (latest >= 0.72) {
      const progress = (latest - 0.72) / 0.28;
      const chars = Math.floor(progress * fullCodeLength);
      setCodeChars(Math.min(chars, fullCodeLength));
    } else {
      setCodeChars(0);
    }
  });

  const galleryItems = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
  ];

  return (
    <>
    {/* Container dikurangi jadi 2200vh agar scroll keseluruhan lebih cepat dan responsif (tanpa wasting scroll) */}
    <section id="karya" ref={containerRef} className="relative w-full h-[2200vh]">
      
      {/* Sticky container */}
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
        
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
                <span className="text-white/50">const</span> <span className="text-blue-400">section</span> <span className="text-white/50">=</span> <span className="text-emerald-300">"{t('projects', 'explore')}"</span>;
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                {t('projects', 'title')}
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

          {/* Judul Section */}
          <div className="absolute top-12 left-6 md:top-24 md:left-12 lg:left-24 z-20 flex flex-col pointer-events-none drop-shadow-2xl">
            <p className="text-sm md:text-lg lg:text-xl font-light tracking-widest text-[#0b1121] drop-shadow-md">{t('projects', 'explore')}</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-2 text-[#0b1121] drop-shadow-lg">{t('projects', 'illustration')}</h1>
          </div>

          {/* Barok Roket Pensil */}
          <motion.div
            style={{ y: barokY }}
            className="absolute right-4 md:right-16 lg:right-32 bottom-[30vh] md:bottom-auto md:top-[10%] z-20"
          >
            <motion.img 
              src={barokRoket} 
              alt="Barok Roket Pensil" 
              className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain drop-shadow-2xl" 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Galeri Artwork */}
          <motion.div
            style={{ y: galleryY }}
            className="absolute bottom-8 md:bottom-12 left-0 w-full z-20 flex"
          >
              <motion.div 
                style={{ x: galleryX }}
                className="flex flex-row items-center gap-4 md:gap-8 px-[100vw] h-full"
              >
                {galleryItems.map((imgSrc, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setModalImage(imgSrc)}
                    className="flex-shrink-0 h-[40vh] md:h-[50vh] lg:h-[60vh] aspect-[4/5] bg-black/20 rounded-xl overflow-hidden border border-white/10 shadow-2xl group hover:-translate-y-2 transition-transform duration-300 pointer-events-auto cursor-pointer"
                  >
                    <img loading="lazy" 
                      src={imgSrc} 
                      alt={`Illustration ${idx+1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
            <p className="text-sm md:text-lg lg:text-xl font-light tracking-widest text-white drop-shadow-md">{t('projects', 'explore')}</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-2 text-[#e7992d] drop-shadow-lg whitespace-pre-line">{t('projects', 'comic').replace(' ', '\n')}</h1>
               <p className="text-md text-white/60 mt-6 max-w-sm">
                  {t('projects', 'comicDesc')}
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
          style={{ clipPath: clipPathCharacter, willChange: "clip-path" }}
          className="absolute inset-0 w-full h-full z-50 overflow-hidden bg-[#0d9488]"
        >
          {/* Konten Scrollable menggunakan charScrollY */}
          <motion.div 
            style={{ y: charScrollY, willChange: "transform" }}
            className="w-full flex flex-col pt-40 md:pt-0"
          >
            {/* Karakter 1: Diega */}
            <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 lg:px-24">
              <div className="md:w-1/2 flex flex-col z-20 mt-32 md:mt-0 pl-0 md:pl-12 lg:pl-32">
                <h2 className="text-6xl md:text-7xl lg:text-9xl font-bold text-white drop-shadow-xl">Diega</h2>
                <p className="text-xl md:text-3xl font-light text-white/80 mt-2 tracking-wide">{t('projects', 'charDesign')}</p>
                <p className="text-md text-white/60 mt-6 max-w-sm">
                  {t('projects', 'diegaDesc')}
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col items-center justify-center gap-2 md:gap-4 mt-12 md:mt-0 z-20 h-[60vh] md:h-[80vh]">
                <img loading="lazy" src={diegaMain} alt="Diega Main" onClick={() => setModalImage(diegaMain)} className="w-full h-[65%] md:h-[70%] object-contain hover:scale-105 transition-transform duration-300 cursor-pointer" />
                <img loading="lazy" src={diegaVariant} alt="Diega Variant" onClick={() => setModalImage(diegaVariant)} className="w-2/3 md:w-3/4 h-[35%] md:h-[30%] object-contain hover:scale-105 transition-transform duration-300 opacity-90 cursor-pointer" />
              </div>
            </div>

            {/* Karakter 2: Barok */}
            <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 lg:px-24 bg-black/10">
              <div className="md:w-1/2 flex flex-col items-center justify-center gap-2 md:gap-4 mb-12 md:mt-0 z-20 h-[60vh] md:h-[80vh] order-2 md:order-1">
                <img loading="lazy" src={barokMain} alt="Barok Main" onClick={() => setModalImage(barokMain)} className="w-full h-[65%] md:h-[70%] object-contain hover:scale-105 transition-transform duration-300 cursor-pointer" />
                <img loading="lazy" src={barokVariant} alt="Barok Variant" onClick={() => setModalImage(barokVariant)} className="w-2/3 md:w-3/4 h-[35%] md:h-[30%] object-contain hover:scale-105 transition-transform duration-300 opacity-90 cursor-pointer" />
              </div>
              <div className="md:w-1/2 flex flex-col z-20 order-1 md:order-2 pr-0 md:pr-12 lg:pr-32 md:text-right items-start md:items-end mt-32 md:mt-0">
                <h2 className="text-6xl md:text-7xl lg:text-9xl font-bold text-white drop-shadow-xl">Barok</h2>
                <p className="text-xl md:text-3xl font-light text-white/80 mt-2 tracking-wide">{t('projects', 'charDesign')}</p>
                <p className="text-md text-white/60 mt-6 max-w-sm">
                  {t('projects', 'barokDesc')}
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
      <section className="relative w-full min-h-screen bg-black pt-24 pb-40 px-6 md:px-12 lg:px-24 z-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
            {/* Project 1: Portfolio Web */}
            <a href="https://faazamu.xyz" target="_blank" rel="noopener noreferrer" className="relative block rounded-[2rem] p-[1px] overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] min-h-[280px]">
              {/* Outer Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/50 via-transparent to-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Body */}
              <div className="relative bg-[#0b1121] rounded-[2rem] overflow-hidden h-full p-6 md:p-8 flex flex-col border border-white/5 group-hover:border-white/10 transition-colors duration-500 z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-[#0b1121]/50 to-[#0b1121]">
                
                {/* Giant Background Icon */}
                <div className="absolute -bottom-8 -right-8 text-[10rem] opacity-[0.02] group-hover:opacity-10 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:-rotate-12 transition-all duration-700 pointer-events-none blur-[4px] group-hover:blur-none select-none">
                   👨‍💻
                </div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                   {/* Header: Icon & Arrow */}
                   <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-blue-600/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-emerald-500/20 transition-all duration-500 backdrop-blur-xl">
                         <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-500">👨‍💻</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors duration-500">
                        <svg className="w-4 h-4 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                   </div>
                   
                   {/* Content */}
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">faazamu.xyz</h3>
                   
                   <p className="text-slate-400 mb-6 leading-relaxed font-light text-sm max-w-[95%] flex-1">
                      Portfolio Website (Web Ini). Platform interaktif untuk memamerkan karya ilustrasi, desain karakter, dan proyek pengembangan web.
                   </p>
                   
                   {/* Tags */}
                   <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 text-[10px] md:text-xs font-medium rounded-full border border-emerald-500/20 backdrop-blur-sm group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">React</span>
                      <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 text-[10px] md:text-xs font-medium rounded-full border border-emerald-500/20 backdrop-blur-sm group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">Tailwind</span>
                      <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 text-[10px] md:text-xs font-medium rounded-full border border-emerald-500/20 backdrop-blur-sm group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">Framer</span>
                   </div>
                </div>
              </div>
            </a>

            {/* Project 2: PMB Salpur */}
            <a href="https://pmb.salpur.com" target="_blank" rel="noopener noreferrer" className="relative block rounded-[2rem] p-[1px] overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-transparent to-purple-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[#0b1121] rounded-[2rem] overflow-hidden h-full p-6 md:p-8 flex flex-col border border-white/5 group-hover:border-white/10 transition-colors duration-500 z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-[#0b1121]/50 to-[#0b1121]">
                <div className="absolute -bottom-8 -right-8 text-[10rem] opacity-[0.02] group-hover:opacity-10 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:-rotate-12 transition-all duration-700 pointer-events-none blur-[4px] group-hover:blur-none select-none">
                   📝
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                   <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-blue-500/20 transition-all duration-500 backdrop-blur-xl">
                         <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-500">📝</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-colors duration-500">
                        <svg className="w-4 h-4 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">pmb.salpur.com</h3>
                   <p className="text-slate-400 mb-6 leading-relaxed font-light text-sm max-w-[95%] flex-1">
                      Sistem pendaftaran siswa baru Salsabila Purworejo. Memudahkan proses administrasi dan pendaftaran calon siswa secara online.
                   </p>
                   <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1.5 bg-blue-500/10 text-blue-300 text-[10px] md:text-xs font-medium rounded-full border border-blue-500/20 backdrop-blur-sm group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-colors">Web System</span>
                   </div>
                </div>
              </div>
            </a>

            {/* Project 3: PPASM */}
            <a href="https://ppasm.com" target="_blank" rel="noopener noreferrer" className="relative block rounded-[2rem] p-[1px] overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-transparent to-pink-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[#0b1121] rounded-[2rem] overflow-hidden h-full p-6 md:p-8 flex flex-col border border-white/5 group-hover:border-white/10 transition-colors duration-500 z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-[#0b1121]/50 to-[#0b1121]">
                <div className="absolute -bottom-8 -right-8 text-[10rem] opacity-[0.02] group-hover:opacity-10 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:rotate-12 transition-all duration-700 pointer-events-none blur-[4px] group-hover:blur-none select-none">
                   🕌
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                   <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 flex items-center justify-center border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-purple-500/20 transition-all duration-500 backdrop-blur-xl">
                         <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-500">🕌</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-colors duration-500">
                        <svg className="w-4 h-4 text-white/30 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">ppasm.com</h3>
                   <p className="text-slate-400 mb-6 leading-relaxed font-light text-sm max-w-[95%] flex-1">
                      Website resmi Pesantren Assalafiyyah Mlangi. Menampilkan profil, kegiatan, dan informasi seputar pondok pesantren.
                   </p>
                   <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1.5 bg-purple-500/10 text-purple-300 text-[10px] md:text-xs font-medium rounded-full border border-purple-500/20 backdrop-blur-sm group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-colors">Company Profile</span>
                   </div>
                </div>
              </div>
            </a>

            {/* Project 4: Inventory SMK */}
            <a href="https://inv.smkam.sch.id" target="_blank" rel="noopener noreferrer" className="relative block rounded-[2rem] p-[1px] overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] min-h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-transparent to-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[#0b1121] rounded-[2rem] overflow-hidden h-full p-6 md:p-8 flex flex-col border border-white/5 group-hover:border-white/10 transition-colors duration-500 z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-[#0b1121]/50 to-[#0b1121]">
                <div className="absolute -bottom-8 -right-8 text-[10rem] opacity-[0.02] group-hover:opacity-10 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:-rotate-12 transition-all duration-700 pointer-events-none blur-[4px] group-hover:blur-none select-none">
                   📦
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                   <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-600/10 flex items-center justify-center border border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)] group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-orange-500/20 transition-all duration-500 backdrop-blur-xl">
                         <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-500">📦</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition-colors duration-500">
                        <svg className="w-4 h-4 text-white/30 group-hover:text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">inv.smkam.sch.id</h3>
                   <p className="text-slate-400 mb-6 leading-relaxed font-light text-sm max-w-[95%] flex-1">
                    Sistem peminjaman barang studio SMK. Membantu manajemen inventaris dan pelacakan peminjaman alat di studio sekolah.
                   </p>
                   <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1.5 bg-orange-500/10 text-orange-300 text-[10px] md:text-xs font-medium rounded-full border border-orange-500/20 backdrop-blur-sm group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-colors">Web System</span>
                   </div>
                </div>
              </div>
            </a>

        </div>
      </div>
    </section>
    
    <ImageModal 
      isOpen={!!modalImage} 
      imageSrc={modalImage} 
      onClose={() => setModalImage(null)} 
    />
    </>
  );
};

export default ProjectsSection;
