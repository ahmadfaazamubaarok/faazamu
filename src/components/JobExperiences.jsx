import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  { id: 1, role: 'Freelance Ilustrasi digital', year: '2025-sekarang' },
  { id: 2, role: 'Freelance Web Developer', year: '2025-sekarang' },
  { id: 3, role: 'Guru Pemrograman Web SMK', year: '2025-sekarang' },
  { id: 4, role: 'Guru UI/UX SMK', year: '2025' },
  { id: 5, role: 'Content Creator (artist) Instagram', year: '2024-sekarang' },
];

export default function JobExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50 } },
  };

  return (
    <section id="karir" className="relative w-full py-32 bg-gradient-to-b from-[#0d2a45] to-[#061423] overflow-hidden flex flex-col items-center">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="z-10 mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#7dd3fc]">Pengalaman Karir</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-4xl px-6 md:px-12 flex flex-col gap-6 z-10"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {exp.role}
            </h3>
            <span className="mt-2 md:mt-0 text-sm md:text-base font-medium px-4 py-1 rounded-full bg-blue-900/50 text-blue-200 border border-blue-700/50">
              {exp.year}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative bubbles for deep sea effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{ 
              y: '100%', 
              x: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.1 
            }}
            animate={{ 
              y: '-10%',
              x: `${Math.random() * 100}%` 
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        ))}
      </div>

    </section>
  );
}
