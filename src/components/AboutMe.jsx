import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import barokJatuh from '../assets/aboutMe/barokJatuh.png';
import kertasLaptop from '../assets/aboutMe/kertasLaptop.png';

const bubbleConfigs = [
  { size: 24, left: '10%', top: '20%', speed: 'slow' },
  { size: 48, left: '85%', top: '15%', speed: 'fast' },
  { size: 16, left: '50%', top: '45%', speed: 'medium' },
  { size: 32, left: '20%', top: '75%', speed: 'fast' },
  { size: 28, left: '75%', top: '85%', speed: 'slow' },
  { size: 12, left: '90%', top: '40%', speed: 'medium' },
  { size: 40, left: '35%', top: '30%', speed: 'medium' },
  { size: 20, left: '60%', top: '65%', speed: 'fast' },
  { size: 56, left: '5%', top: '60%', speed: 'slow' },
  { size: 18, left: '45%', top: '10%', speed: 'fast' },
];

export default function AboutMe() {
  const ref = useRef(null);
  
  // Track scroll position within this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax effects
  // The text moves up slightly as you scroll
  const textY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  // Barok and laptop float at different speeds.
  // At progress 0 (start), laptop is below barok (60% vs 30%)
  // At progress 0.5 (middle), they are aligned (0% vs 0%)
  // At progress 1 (end), laptop is above barok (-60% vs -30%)
  const barokY = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);
  const laptopY = useTransform(scrollYProgress, [0, 1], ['60%', '-60%']);

  // Bubbles parallax speeds
  const bubblesSlowY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const bubblesMediumY = useTransform(scrollYProgress, [0, 1], ['40%', '-40%']);
  const bubblesFastY = useTransform(scrollYProgress, [0, 1], ['60%', '-60%']);

  const getBubbleY = (speed) => {
    if (speed === 'slow') return bubblesSlowY;
    if (speed === 'medium') return bubblesMediumY;
    return bubblesFastY;
  };

  return (
    <section 
      ref={ref} 
      className="relative w-full min-h-[120vh] flex items-center justify-center overflow-hidden -mt-[100px] z-30 pt-[100px]"
      style={{ background: 'linear-gradient(to bottom, transparent 0%, #28287b 100px, #0d2a45 100%)' }}
    >
      {/* Decorative Parallax Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {bubbleConfigs.map((bubble, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={{
              left: bubble.left,
              top: bubble.top,
              y: getBubbleY(bubble.speed)
            }}
          >
            <motion.div
              className="rounded-full border border-white/40 bg-white/10 backdrop-blur-sm"
              style={{
                width: bubble.size,
                height: bubble.size,
              }}
              animate={{
                x: [-10, 10, -10],
                y: [-10, 10, -10]
              }}
              transition={{
                duration: 4 + (idx % 3),
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 py-20">
        
        {/* Left Side: Text */}
        <motion.div 
          className="md:w-1/2 flex flex-col text-white w-full z-20"
          style={{ y: textY }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#7dd3fc]">About Me</h2>
          <h3 className="text-xl md:text-2xl font-bold mb-6">Hi, my name is Ahmad Faaza Mubaarok</h3>
          <p className="text-base md:text-lg font-light leading-relaxed text-gray-200">
            Aku adalah seorang illustrator, UI/UX designer, dan Web Developer. 
            Aku memiliki pengalaman 2 tahun di bidang ilustrasi dan UI/UX design, 
            serta 1 tahun di bidang web development. Aku memiliki passion untuk 
            menciptakan karya yang inovatif dan berkualitas.
          </p>
        </motion.div>

        {/* Right Side: Images */}
        <div className="md:w-1/2 w-full mt-16 md:mt-0 flex justify-center relative h-[400px] md:h-[600px]">
          {/* Barok Jatuh (Behind) */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{ y: barokY }}
          >
            <img 
              src={barokJatuh} 
              alt="Barok Jatuh" 
              className="w-3/4 md:w-4/5 object-contain opacity-90 drop-shadow-2xl"
            />
          </motion.div>

          {/* Kertas Laptop (In front) */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{ y: laptopY }}
          >
            <img 
              src={kertasLaptop} 
              alt="Kertas Laptop" 
              className="w-3/4 md:w-4/5 object-contain ml-8 mt-12 drop-shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
