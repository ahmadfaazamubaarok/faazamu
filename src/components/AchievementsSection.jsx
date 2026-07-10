import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ImageModal from './ImageModal';

// Import Assets
import juaraMaskot from '../assets/achievements/certificates/juara1LombaMaskot.webp';
import juaraKomik from '../assets/achievements/certificates/juara3LombaKomik.webp';
import barokTrophy from '../assets/achievements/achivement.webp';

const AchievementsSection = () => {
  const { t } = useLanguage();
  const transitionRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);
  
  const { scrollYProgress: transitionProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end start"]
  });

  // Animasi masking bentuk lingkaran dari tengah bawah layar
  const circleSize = useTransform(transitionProgress, [0, 1], ["0vmax", "150vmax"]);
  const clipPath = useTransform(circleSize, (val) => `circle(${val} at 50% 100%)`);

  return (
    <section id="prestasi" className="relative w-full z-30 -mt-[100vh]">
      
      {/* Tracker untuk durasi transisi lingkaran (100vh) */}
      <div ref={transitionRef} className="absolute top-0 left-0 w-full h-[100vh] pointer-events-none"></div>

      {/* Background Sticky Layer untuk Animasi Masking Lingkaran Putih */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <motion.div 
            style={{ clipPath }}
            className="absolute inset-0 w-full h-full bg-white flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Subtle gradient di atas warna putih */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Konten Normal (Scroll biasa, muncul setelah transisi 100vh selesai) */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-12 lg:px-24 mx-auto flex flex-col justify-center min-h-screen pt-[110vh] pb-16 md:pb-24 pointer-events-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 shrink-0">
           <p className="text-emerald-600 font-mono tracking-widest text-[10px] md:text-sm uppercase mb-1">Jejak Langkah</p>
           <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 drop-shadow-sm">{t('achievements', 'title')}</h2>
        </div>

        {/* Achievements Display */}
        <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center lg:justify-between gap-8 md:gap-8 shrink-0 pb-12">
           
           {/* Barok Illustration */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9, y: 50 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative w-48 md:w-[200px] lg:w-[30%] max-w-xs flex items-center justify-center shrink-0 mb-6 md:mb-0"
           >
             <img loading="lazy" src={barokTrophy} alt="Barok memegang piala" className="w-full h-auto drop-shadow-xl" />
           </motion.div>

           {/* Certificate 1: Maskot */}
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
             className="relative group w-[90%] md:w-[40%] lg:w-[32%] max-w-sm shrink-0"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white p-3 md:p-5 rounded-2xl border border-slate-200 shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 hover:rotate-1">
                 <img loading="lazy" 
                    src={juaraMaskot} 
                    alt="Juara 1 Lomba Maskot" 
                    onClick={() => setModalImage(juaraMaskot)}
                    className="w-full h-auto rounded-lg shadow-sm border border-slate-100 cursor-pointer hover:opacity-90 transition-opacity" 
                 />
                 <div className="mt-2 md:mt-4 px-1 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-0 md:mb-1">{t('achievements', 'ach1')}</h3>
                    <p className="text-amber-600 text-xs md:text-xs font-bold tracking-wide mb-1 md:mb-2 leading-tight">{t('achievements', 'desc1')}</p>
                    <p className="text-slate-500 text-xs leading-relaxed hidden lg:block">
                       Penghargaan atas karya desain maskot "Diega", yang mengangkat tema identitas dan dinamika laut.
                    </p>
                 </div>
              </div>
           </motion.div>

           {/* Certificate 2: Komik */}
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
             className="relative group w-[90%] md:w-[40%] lg:w-[32%] max-w-sm shrink-0"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white p-3 md:p-5 rounded-2xl border border-slate-200 shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 hover:-rotate-1">
                 <img loading="lazy" 
                    src={juaraKomik} 
                    alt="Juara 3 Lomba Komik" 
                    onClick={() => setModalImage(juaraKomik)}
                    className="w-full h-auto rounded-lg shadow-sm border border-slate-100 cursor-pointer hover:opacity-90 transition-opacity" 
                 />
                 <div className="mt-2 md:mt-4 px-1 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-0 md:mb-1">{t('achievements', 'ach2')}</h3>
                    <p className="text-purple-600 text-xs md:text-xs font-bold tracking-wide mb-1 md:mb-2 leading-tight">{t('achievements', 'desc2')}</p>
                    <p className="text-slate-500 text-xs leading-relaxed hidden lg:block">
                       Penghargaan kategori Komik Strip yang dinilai berdasarkan orisinalitas, eksekusi cerita, dan gaya visual yang unik.
                    </p>
                 </div>
              </div>
           </motion.div>

        </div>
      </div>
      
      <ImageModal 
        isOpen={!!modalImage} 
        imageSrc={modalImage} 
        onClose={() => setModalImage(null)} 
      />
    </section>
  );
};

export default AchievementsSection;
