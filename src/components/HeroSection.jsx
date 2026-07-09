import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import bgHero from '../assets/hero/bgHero.webp';
import awan from '../assets/hero/awan.webp';
import ombakBelakang from '../assets/hero/ombakBelakang.webp';
import barokPerahu from '../assets/hero/barokPerahu.webp';
import ombakDepan from '../assets/hero/ombakDepan.webp';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Background moves slowest (translates down the most to counteract scroll)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const awanY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const ombakBelakangY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  
  // Barok is closer to the front, so it moves faster than the background
  const barokY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  // Foreground moves fastest (scrolls normally with the page, so no downward translation)
  const ombakDepanY = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);

  // Text fades and moves
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="beranda" ref={ref} className="relative w-full h-screen overflow-hidden bg-sky-200">
      {/* 1. Background Hero */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: bgY }}
      >
        <img src={bgHero} alt="Background" className="w-full h-full object-cover object-bottom" />
      </motion.div>

      {/* 2. Awan */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: awanY }}
      >
        <img src={awan} alt="Awan" className="w-full h-full object-cover object-top" />
      </motion.div>

      {/* 3. Ombak Belakang */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: ombakBelakangY }}
      >
        <motion.img 
          src={ombakBelakang} 
          alt="Ombak Belakang" 
          className="w-full h-full object-cover object-bottom" 
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content Container (Text and Barok) */}
      <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 pointer-events-none">
        
        {/* Texts */}
        <motion.div 
          className="flex flex-col mt-20 md:mt-0 md:w-1/2 w-full text-white pointer-events-auto"
          style={{ y: textY, opacity: textOpacity }}
        >
          <p className="text-sm md:text-lg lg:text-xl font-light tracking-widest text-[#0b1a30] drop-shadow-md">Selamat datang di</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-2 text-[#0b1a30] drop-shadow-lg">Portofolio</h1>
          <h2 className="text-lg md:text-2xl font-bold mt-4 text-[#0b1a30] drop-shadow-md">Ahmad Faaza Mubaarok</h2>
          <p className="text-lg md:text-2xl font-light mt-1 text-[#0b1a30] drop-shadow-md">Ilustrator, Desainer UI/UX, & Pengembang Web</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <a href="#karya" className="px-6 py-3 bg-[#0b1a30] hover:bg-white hover:text-black text-white font-medium rounded-full transition-colors shadow-lg w-full sm:w-auto text-center">
              Lihat Karyaku
            </a>
            <a href="#sapa" className="px-6 py-3 bg-white hover:bg-[#0b1a30] hover:text-white text-[#0b1a30] font-medium rounded-full transition-colors shadow-lg w-full sm:w-auto text-center">
              Mari Berbincang
            </a>
          </div>
        </motion.div>

        {/* 4. Barok Perahu */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0 h-[40vh] md:h-auto items-start md:items-center relative mb-[20vh] md:mb-0"
          style={{ y: barokY }}
        >
          <motion.img 
            src={barokPerahu} 
            alt="Barok Perahu" 
            className="w-4/5 md:w-full max-w-[600px] object-contain drop-shadow-2xl origin-bottom" 
            animate={{ 
              y: [-10, 10, -10],
              rotate: [-2, 2, -2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* 5. Ombak Depan */}
      <motion.div
        className="absolute inset-x-0 bottom-[-4vh] w-full h-[50vh] md:h-[60vh] z-20 pointer-events-none"
        style={{ y: ombakDepanY }}
      >
        <motion.img 
          src={ombakDepan} 
          alt="Ombak Depan" 
          className="w-full h-full object-cover object-bottom" 
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>

    </section>
  );
}
