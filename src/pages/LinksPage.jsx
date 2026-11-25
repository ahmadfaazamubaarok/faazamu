import React from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
  FaPinterest,
  FaPalette,
  FaBrush,
} from 'react-icons/fa6';
import { ExternalLink } from 'lucide-react';
import { profile, comms, medsos } from '../../linksData';

// Import seluruh ilustrasi & komik portofolio
import illu1 from '../assets/illustrationArtworks/illustrations/illustration1.webp';
import illu2 from '../assets/illustrationArtworks/illustrations/illustration2.webp';
import illu3 from '../assets/illustrationArtworks/illustrations/illustration3.webp';
import illu4 from '../assets/illustrationArtworks/illustrations/illustration4.webp';
import illu5 from '../assets/illustrationArtworks/illustrations/illustration5.webp';
import illu6 from '../assets/illustrationArtworks/illustrations/illustration6.webp';
import illu7 from '../assets/illustrationArtworks/illustrations/illustration7.webp';
import illu8 from '../assets/illustrationArtworks/illustrations/illustration8.webp';
import illu9 from '../assets/illustrationArtworks/illustrations/illustration9.webp';
import illu10 from '../assets/illustrationArtworks/illustrations/illustration10.webp';
import illu11 from '../assets/illustrationArtworks/illustrations/illustration11.webp';

import comic1 from '../assets/comicArworks/comic1.webp';
import comic2 from '../assets/comicArworks/comic2.webp';
import comic3 from '../assets/comicArworks/comic3.webp';
import comic4 from '../assets/comicArworks/comic4.webp';
import comic5 from '../assets/comicArworks/comic5.webp';

// KIRI: 8 karya besar tanpa bingkai dengan delay muncul acak (random staggered)
const leftArcArtworks = [
  {
    src: illu1,
    title: 'Illustration 1',
    pos: 'top-1 xl:top-2 left-[1vw] xl:left-[5vw] 2xl:left-[8vw]',
    rotate: '-rotate-[12deg]',
    z: 'z-10',
    delay: 0.15,
  },
  {
    src: illu3,
    title: 'Illustration 3',
    pos: 'top-[12vh] left-[-4vw] xl:left-[-1vw] 2xl:left-[1vw]',
    rotate: 'rotate-[7deg]',
    z: 'z-15',
    delay: 0.42,
  },
  {
    src: illu5,
    title: 'Illustration 5',
    pos: 'top-[26vh] left-[-8vw] xl:left-[-4vw] 2xl:left-[-2vw]',
    rotate: '-rotate-[10deg]',
    z: 'z-20',
    delay: 0.08,
  },
  {
    src: illu7,
    title: 'Illustration 7',
    pos: 'top-[40vh] left-[-10vw] xl:left-[-6vw] 2xl:left-[-3vw]',
    rotate: 'rotate-[14deg]',
    z: 'z-25',
    delay: 0.35,
  },
  {
    src: illu9,
    title: 'Illustration 9',
    pos: 'top-[54vh] left-[-8vw] xl:left-[-4vw] 2xl:left-[-2vw]',
    rotate: '-rotate-[8deg]',
    z: 'z-20',
    delay: 0.52,
  },
  {
    src: illu11,
    title: 'Illustration 11',
    pos: 'top-[67vh] left-[-4vw] xl:left-[-1vw] 2xl:left-[1vw]',
    rotate: 'rotate-[11deg]',
    z: 'z-15',
    delay: 0.22,
  },
  {
    src: comic1,
    title: 'Comic 1',
    pos: 'top-[78vh] left-[0vw] xl:left-[3vw] 2xl:left-[5vw]',
    rotate: '-rotate-[9deg]',
    z: 'z-10',
    delay: 0.48,
  },
  {
    src: comic3,
    title: 'Comic 3',
    pos: 'bottom-1 xl:bottom-2 left-[1vw] xl:left-[5vw] 2xl:left-[8vw]',
    rotate: 'rotate-[6deg]',
    z: 'z-15',
    delay: 0.18,
  },
];

// KANAN: 8 karya besar tanpa bingkai dengan delay muncul acak (random staggered)
const rightArcArtworks = [
  {
    src: illu2,
    title: 'Illustration 2',
    pos: 'top-1 xl:top-2 right-[1vw] xl:right-[5vw] 2xl:right-[8vw]',
    rotate: 'rotate-[13deg]',
    z: 'z-10',
    delay: 0.32,
  },
  {
    src: illu4,
    title: 'Illustration 4',
    pos: 'top-[12vh] right-[-4vw] xl:right-[-1vw] 2xl:right-[1vw]',
    rotate: '-rotate-[8deg]',
    z: 'z-15',
    delay: 0.12,
  },
  {
    src: illu6,
    title: 'Illustration 6',
    pos: 'top-[26vh] right-[-8vw] xl:right-[-4vw] 2xl:right-[-2vw]',
    rotate: 'rotate-[11deg]',
    z: 'z-20',
    delay: 0.45,
  },
  {
    src: illu8,
    title: 'Illustration 8',
    pos: 'top-[40vh] right-[-10vw] xl:right-[-6vw] 2xl:right-[-3vw]',
    rotate: '-rotate-[15deg]',
    z: 'z-25',
    delay: 0.2,
  },
  {
    src: illu10,
    title: 'Illustration 10',
    pos: 'top-[54vh] right-[-8vw] xl:right-[-4vw] 2xl:right-[-2vw]',
    rotate: 'rotate-[9deg]',
    z: 'z-20',
    delay: 0.58,
  },
  {
    src: comic2,
    title: 'Comic 2',
    pos: 'top-[67vh] right-[-4vw] xl:right-[-1vw] 2xl:right-[1vw]',
    rotate: '-rotate-[12deg]',
    z: 'z-15',
    delay: 0.28,
  },
  {
    src: comic4,
    title: 'Comic 4',
    pos: 'top-[78vh] right-[0vw] xl:right-[3vw] 2xl:right-[5vw]',
    rotate: 'rotate-[8deg]',
    z: 'z-10',
    delay: 0.16,
  },
  {
    src: comic5,
    title: 'Comic 5',
    pos: 'bottom-1 xl:bottom-2 right-[1vw] xl:right-[5vw] 2xl:right-[8vw]',
    rotate: '-rotate-[7deg]',
    z: 'z-15',
    delay: 0.38,
  },
];

// Mode Mobile: 7 gambar berukuran BESAR membentuk garis lengkung U (U-Curve)
const mobileUCurveArtworks = [
  { src: illu1, title: 'Art 1', rotate: '-rotate-[16deg]', y: '-translate-y-3 sm:-translate-y-4', z: 'z-25', delay: 0.3 },
  { src: illu3, title: 'Art 3', rotate: '-rotate-[10deg]', y: 'translate-y-3 sm:translate-y-4', z: 'z-20', delay: 0.12 },
  { src: illu5, title: 'Art 5', rotate: '-rotate-[4deg]', y: 'translate-y-8 sm:translate-y-10', z: 'z-15', delay: 0.42 },
  { src: illu7, title: 'Art 7', rotate: 'rotate-[1deg]', y: 'translate-y-12 sm:translate-y-14', z: 'z-10', delay: 0.18 },
  { src: illu9, title: 'Art 9', rotate: 'rotate-[5deg]', y: 'translate-y-8 sm:translate-y-10', z: 'z-15', delay: 0.48 },
  { src: illu11, title: 'Art 11', rotate: 'rotate-[11deg]', y: 'translate-y-3 sm:translate-y-4', z: 'z-20', delay: 0.22 },
  { src: comic1, title: 'Comic 1', rotate: 'rotate-[16deg]', y: '-translate-y-3 sm:-translate-y-4', z: 'z-25', delay: 0.36 },
];

function getIcon(iconName) {
  switch (iconName?.toLowerCase()) {
    case 'vgen':
    case 'palette':
      return <FaPalette className="w-5 h-5 text-[#000000]" />;
    case 'drawmarket':
    case 'brush':
      return <FaBrush className="w-5 h-5 text-[#000000]" />;
    case 'instagram':
      return <FaInstagram className="w-5 h-5 text-[#000000]" />;
    case 'facebook':
      return <FaFacebook className="w-5 h-5 text-[#000000]" />;
    case 'x':
    case 'twitter':
      return <FaXTwitter className="w-5 h-5 text-[#000000]" />;
    case 'linkedin':
      return <FaLinkedinIn className="w-5 h-5 text-[#000000]" />;
    case 'whatsapp':
      return <FaWhatsapp className="w-5 h-5 text-[#000000]" />;
    case 'github':
      return <FaGithub className="w-5 h-5 text-[#000000]" />;
    case 'pinterest':
      return <FaPinterest className="w-5 h-5 text-[#e60023]" />;
    default:
      return <FaPalette className="w-5 h-5 text-[#000000]" />;
  }
}

export default function LinksPage() {
  return (
    <div className="min-h-screen w-full bg-[#fbfbf9] text-[#33332e] font-sans antialiased relative overflow-x-hidden flex flex-col justify-between pt-10 sm:pt-14 pb-0 px-4 selection:bg-[#f6f6f3] selection:text-[#000000]">
      
      {/* ========================================================================= */}
      {/* DESKTOP FIXED OVERLAY: Karya Seni dengan Animasi Muncul Acak (Random)     */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-10 hidden lg:block overflow-hidden">
        {/* Sisi Kiri: 8 Karya Besar Mentok Viewport */}
        {leftArcArtworks.map((art, idx) => (
          <motion.div
            key={`left-${idx}`}
            initial={{ opacity: 0, scale: 0.78, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: art.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`absolute ${art.pos} ${art.rotate} ${art.z} w-64 xl:w-72 2xl:w-80 select-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.11)]`}
          >
            <img
              src={art.src}
              alt={art.title}
              className="w-full h-auto object-contain rounded-[14px] xl:rounded-[18px] block shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
              loading="lazy"
            />
          </motion.div>
        ))}

        {/* Sisi Kanan: 8 Karya Besar Mentok Viewport */}
        {rightArcArtworks.map((art, idx) => (
          <motion.div
            key={`right-${idx}`}
            initial={{ opacity: 0, scale: 0.78, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: art.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`absolute ${art.pos} ${art.rotate} ${art.z} w-64 xl:w-72 2xl:w-80 select-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.11)]`}
          >
            <img
              src={art.src}
              alt={art.title}
              className="w-full h-auto object-contain rounded-[14px] xl:rounded-[18px] block shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* ============================================================ */}
      {/* MAIN CONTENT: Pinterest Bento / Tile Board                    */}
      {/* ============================================================ */}
      <main className="relative z-20 w-full max-w-2xl mx-auto flex flex-col gap-6">
        {/* Profile Card — Muncul Halus & Elegan */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#e60023] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left text-white shadow-none"
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/20 bg-white shrink-0"
          />

          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.8px] leading-tight">
              {profile.name}
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mt-2">
              {profile.bio}
            </p>
          </div>
        </motion.div>

        {/* Section 1: Comms — Seragam dengan Animasi Elegan */}
        <section className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mb-3 px-1"
          >
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#62625b]">
              Comms
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {comms.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.22 + idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3, scale: 1.012 }}
                whileTap={{ scale: 0.985 }}
                className="p-4 rounded-[16px] bg-[#ffffff] hover:bg-[#f6f6f3] active:bg-[#e5e5e0] border border-[#dadad3] flex items-center justify-between transition-colors shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[#f6f6f3] flex items-center justify-center shrink-0 border border-[#dadad3]">
                    {getIcon(item.icon)}
                  </div>
                  <div className="min-w-0 text-left">
                    <h3 className="text-sm font-bold text-[#000000] tracking-tight truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#62625b] mt-0.5 truncate font-normal">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                <div className="text-[#91918c] group-hover:text-[#000000] transition-colors shrink-0 pl-2">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Section 2: Medsos — Pinterest Category Tile Grid (Animasi Stagger Elegan) */}
        <section className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mb-3 px-1"
          >
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#62625b]">
              Medsos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {medsos.map((item, index) => {
              const isLastAndOdd = index === medsos.length - 1 && medsos.length % 2 !== 0;

              return (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.36 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -3, scale: 1.012 }}
                  whileTap={{ scale: 0.985 }}
                  className={`p-4 rounded-[16px] bg-[#ffffff] hover:bg-[#f6f6f3] active:bg-[#e5e5e0] border border-[#dadad3] flex items-center justify-between transition-colors shadow-sm hover:shadow-md group ${
                    isLastAndOdd ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-[#f6f6f3] flex items-center justify-center shrink-0 border border-[#dadad3]">
                      {getIcon(item.icon)}
                    </div>
                    <div className="min-w-0 text-left">
                      <h3 className="text-sm font-bold text-[#000000] tracking-tight truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#62625b] mt-0.5 truncate font-normal">
                        {item.handle}
                      </p>
                    </div>
                  </div>

                  <div className="text-[#91918c] group-hover:text-[#000000] transition-colors shrink-0 pl-2">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </section>
      </main>

      {/* ============================================================ */}
      {/* FOOTER                                                       */}
      {/* ============================================================ */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-20 w-full max-w-2xl mx-auto mt-12 pt-6 border-t border-[#dadad3] text-center flex flex-col items-center gap-2"
      >
        <a
          href="/"
          className="text-xs font-semibold text-[#62625b] hover:text-[#000000] transition-colors inline-flex items-center gap-1.5"
        >
          <span>←</span>
          <span>Kembali ke Portofolio Utama</span>
        </a>
        <p className="text-[11px] text-[#91918c]">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </motion.footer>

      {/* ========================================================================= */}
      {/* MOBILE ONLY: Gambar BESAR dengan Animasi Muncul Acak (U-Shape Curve)     */}
      {/* ========================================================================= */}
      <div className="block lg:hidden relative z-10 -mx-4 w-[calc(100%+2rem)] overflow-hidden mt-6 h-32 sm:h-40 pointer-events-none select-none">
        <div className="flex justify-center items-start -space-x-10 sm:-space-x-14 min-w-full">
          {mobileUCurveArtworks.map((art, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.78, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: art.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`shrink-0 w-36 sm:w-44 drop-shadow-[0_20px_35px_rgba(0,0,0,0.11)] transition-transform ${art.y} ${art.rotate} ${art.z}`}
            >
              <img
                src={art.src}
                alt={art.title}
                className="w-full h-auto object-cover rounded-[14px] block shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
