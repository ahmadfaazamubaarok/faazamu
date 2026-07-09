import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaPinterest, 
  FaInstagram, 
  FaXTwitter, 
  FaFacebookF, 
  FaGithub, 
  FaWhatsapp, 
  FaLinkedinIn,
  FaPalette
} from 'react-icons/fa6';

const socials = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/faazamuartwork',
    icon: <FaInstagram className="w-8 h-8 md:w-12 md:h-12 text-white" />,
    bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
    pos: { top: '5%', left: '25%' },
    parallaxRange: ["20px", "-40px"]
  },
  {
    name: 'Pinterest',
    url: 'https://id.pinterest.com/faazamuartwork/',
    icon: <FaPinterest className="w-8 h-8 md:w-12 md:h-12 text-white" />,
    bg: 'bg-[#E60023]',
    pos: { top: '45%', left: '12%' },
    parallaxRange: ["-30px", "30px"]
  },
  {
    name: 'X / Twitter',
    url: 'https://x.com/faazamuartwork',
    icon: <FaXTwitter className="w-8 h-8 md:w-12 md:h-12 text-white" />,
    bg: 'bg-black',
    pos: { top: '15%', left: '52%' },
    parallaxRange: ["40px", "-20px"]
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/ahmadfaazamubaarok',
    icon: <FaFacebookF className="w-8 h-8 md:w-12 md:h-12 text-white" />,
    bg: 'bg-[#1877F2]',
    pos: { top: '65%', left: '38%' },
    parallaxRange: ["-20px", "40px"]
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ahmadfaazamubaarok',
    icon: <FaGithub className="w-8 h-8 md:w-12 md:h-12 text-white" />,
    bg: 'bg-[#333333]',
    pos: { top: '10%', left: '75%' },
    parallaxRange: ["35px", "-30px"]
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ahmadfaazamubaarok',
    icon: <FaLinkedinIn className="w-8 h-8 md:w-12 md:h-12 text-white" />,
    bg: 'bg-[#0A66C2]',
    pos: { top: '55%', left: '85%' },
    parallaxRange: ["-40px", "20px"]
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/6285869026062',
    icon: <FaWhatsapp className="w-8 h-8 md:w-12 md:h-12 text-white" />,
    bg: 'bg-[#25D366]',
    pos: { top: '25%', left: '95%' },
    parallaxRange: ["30px", "-25px"]
  },
  {
    name: 'VGen',
    url: 'https://vgen.co/faazamuartwork',
    icon: <FaPalette className="w-8 h-8 md:w-12 md:h-12 text-white" />,
    bg: 'bg-gradient-to-tr from-indigo-500 to-purple-500',
    pos: { top: '75%', left: '65%' },
    parallaxRange: ["-25px", "35px"]
  }
];

// Komponen helper untuk setiap Bubble agar bisa memanggil useTransform secara independen
const Bubble = ({ social, index, scrollYProgress }) => {
  // Parallax kecil ekstra untuk pergerakan naik-turun yang unik
  const yParallax = useTransform(scrollYProgress, [0, 1], social.parallaxRange);

  // Buat offset scroll sedikit berbeda untuk tiap bubble agar ledakannya dinamis
  const startScroll = 0.15 + (index * 0.02);
  const endScroll = 0.6 + (index * 0.02);

  // Interpolasi posisi dari tengah (50%) ke posisi akhir
  const animatedTop = useTransform(scrollYProgress, [startScroll, endScroll], ["50%", social.pos.top]);
  const animatedLeft = useTransform(scrollYProgress, [startScroll, endScroll], ["50%", social.pos.left]);
  
  // Interpolasi ukuran dan opasitas
  const animatedScale = useTransform(scrollYProgress, [startScroll - 0.05, endScroll], [0, 1]);
  const animatedOpacity = useTransform(scrollYProgress, [startScroll - 0.05, startScroll + 0.1], [0, 1]);

  return (
    <motion.div
      style={{ 
        position: 'absolute',
        y: yParallax,
        top: animatedTop,
        left: animatedLeft,
        scale: animatedScale,
        opacity: animatedOpacity,
        // x: '-50%' digunakan agar posisi left mengacu ke titik tengah bubble
        x: '-50%',
        zIndex: 20
      }}
      className="group"
    >
      <motion.a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className={`relative flex items-center justify-center p-4 md:p-6 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ${social.bg}`}
        title={social.name}
      >
        {social.icon}
        {/* Teks kembali disembunyikan dan muncul saat di-hover */}
        <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-800 font-bold text-xs md:text-sm bg-white px-3 py-1 rounded-full shadow-lg whitespace-nowrap pointer-events-none z-30">
          {social.name}
        </span>
      </motion.a>
    </motion.div>
  );
};

const LetsConnectSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="sapa" ref={containerRef} className="relative w-full min-h-[90vh] bg-white overflow-hidden z-20 flex flex-col items-center py-32">
      
      {/* Background Decor (Matching Certificates) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-100 via-white to-white pointer-events-none"></div>
      
      {/* Central Content */}
      <div className="relative z-10 text-center px-6 pointer-events-none mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-emerald-600 font-mono tracking-widest text-sm md:text-base uppercase mb-4"
        >
          Mari Bekerja Sama
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight drop-shadow-sm mb-6"
        >
          Mari Saling Sapa!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 max-w-lg mx-auto text-base md:text-lg"
        >
          Aku selalu terbuka untuk mengobrol santai, membicarakan komisi ilustrasi, proyek web, atau kolaborasi kreatif apa pun.
        </motion.p>
      </div>

      {/* Floating Bubbles Clustered Below */}
      <div className="relative z-10 w-full h-[250px] md:h-[400px] max-w-3xl mx-auto px-8">
        {socials.map((social, idx) => (
          <Bubble key={idx} index={idx} social={social} scrollYProgress={scrollYProgress} />
        ))}
      </div>

    </section>
  );
};

export default LetsConnectSection;
