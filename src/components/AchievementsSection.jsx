import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

// Import Assets
import juaraMaskot from '../assets/achievements/certificates/juara1LombaMaskot.webp';
import juaraKomik from '../assets/achievements/certificates/juara3LombaKomik.webp';
import barokTrophy from '../assets/achievements/achivement.webp';

const AchievementsSection = () => {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animasi masking bentuk lingkaran dari tengah bawah layar
  const circleSize = useTransform(scrollYProgress, [0.1, 0.5], ["0vmax", "150vmax"]);
  const clipPath = useTransform(circleSize, (val) => `circle(${val} at 50% 100%)`);

  // Pantau scroll untuk memicu efek fade-in sekali saja
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.35 && !isRevealed) {
      setIsRevealed(true);
    }
  });

  // Animasi Parallax (berakhir di posisi normal 0vh agar tidak terpotong)
  const yImage = useTransform(scrollYProgress, [0.4, 0.8], ["20vh", "0vh"]);
  const yMaskot = useTransform(scrollYProgress, [0.45, 0.85], ["25vh", "0vh"]);
  const yKomik = useTransform(scrollYProgress, [0.5, 0.9], ["30vh", "0vh"]);

  return (
    // Margin negative agar section ini menindih (overlap) akhir dari section Web Projects
    <section id="prestasi" ref={containerRef} className="relative w-full h-[250vh] -mt-[100vh] z-30 pointer-events-none">
      <div className="sticky top-0 w-full h-screen overflow-hidden pointer-events-none">
        
        {/* Layer Atas: Ter-masking Setengah Lingkaran, Background Putih Bersih */}
        <motion.div 
          style={{ clipPath }}
          className="absolute inset-0 w-full h-full bg-white z-10 flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle gradient di atas warna putih */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white"></div>
          
          <div className="relative z-20 w-full max-w-7xl px-4 md:px-12 lg:px-24 mx-auto flex flex-col justify-center h-full pt-28 pb-8 md:pt-32 md:pb-12">
            
            {/* Header */}
            <div className="text-center mb-6 md:mb-10 shrink-0">
               <p className="text-emerald-600 font-mono tracking-widest text-[10px] md:text-sm uppercase mb-1">Jejak Langkah</p>
               <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 drop-shadow-sm">Prestasi</h2>
            </div>

            {/* Achievements Display */}
            <div className="w-full flex flex-row flex-wrap items-center justify-center lg:justify-between gap-4 md:gap-8 shrink-0">
               
               {/* Barok Illustration */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: isRevealed ? 1 : 0, scale: isRevealed ? 1 : 0.9 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 style={{ y: yImage }}
                 className="relative w-[120px] md:w-[200px] lg:w-[30%] max-w-xs flex items-center justify-center shrink-0"
               >
                 <img src={barokTrophy} alt="Barok memegang piala" className="w-full h-auto drop-shadow-xl" />
               </motion.div>

               {/* Certificate 1: Maskot */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: isRevealed ? 1 : 0 }}
                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                 style={{ y: yMaskot }}
                 className="relative group w-[45%] md:w-[40%] lg:w-[32%] max-w-sm shrink-0"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-white p-3 md:p-5 rounded-2xl border border-slate-200 shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 hover:rotate-1">
                     <img src={juaraMaskot} alt="Juara 1 Lomba Maskot" className="w-full h-auto rounded-lg shadow-sm border border-slate-100" />
                     <div className="mt-2 md:mt-4 px-1 text-center md:text-left">
                        <h3 className="text-sm md:text-xl font-bold text-slate-800 mb-0 md:mb-1">Juara 1</h3>
                        <p className="text-amber-600 text-[10px] md:text-xs font-bold tracking-wide mb-1 md:mb-2 leading-tight">OCEANIC MASCOT CHALLENGE</p>
                        <p className="text-slate-500 text-xs leading-relaxed hidden lg:block">
                           Penghargaan atas karya desain maskot "Diega", yang mengangkat tema identitas dan dinamika laut.
                        </p>
                     </div>
                  </div>
               </motion.div>

               {/* Certificate 2: Komik */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: isRevealed ? 1 : 0 }}
                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                 style={{ y: yKomik }}
                 className="relative group w-[45%] md:w-[40%] lg:w-[32%] max-w-sm shrink-0"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-white p-3 md:p-5 rounded-2xl border border-slate-200 shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 hover:-rotate-1">
                     <img src={juaraKomik} alt="Juara 3 Lomba Komik" className="w-full h-auto rounded-lg shadow-sm border border-slate-100" />
                     <div className="mt-2 md:mt-4 px-1 text-center md:text-left">
                        <h3 className="text-sm md:text-xl font-bold text-slate-800 mb-0 md:mb-1">Juara 3</h3>
                        <p className="text-purple-600 text-[10px] md:text-xs font-bold tracking-wide mb-1 md:mb-2 leading-tight">PEKSIMIPROV DIY 2026</p>
                        <p className="text-slate-500 text-xs leading-relaxed hidden lg:block">
                           Penghargaan kategori Komik Strip yang dinilai berdasarkan orisinalitas, eksekusi cerita, dan gaya visual yang unik.
                        </p>
                     </div>
                  </div>
               </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
