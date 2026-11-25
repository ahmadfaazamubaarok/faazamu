import React from 'react';
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

// KIRI: 8 karya besar tanpa bingkai, tersusun padat saling timpa dalam pola lengkungan
// Mentok sampai batas viewport (atas top-1, bawah bottom-1)
const leftArcArtworks = [
  {
    src: illu1,
    title: 'Illustration 1',
    pos: 'top-1 xl:top-2 left-[1vw] xl:left-[5vw] 2xl:left-[8vw]',
    rotate: '-rotate-[12deg]',
    z: 'z-10',
  },
  {
    src: illu3,
    title: 'Illustration 3',
    pos: 'top-[12vh] left-[-4vw] xl:left-[-1vw] 2xl:left-[1vw]',
    rotate: 'rotate-[7deg]',
    z: 'z-15',
  },
  {
    src: illu5,
    title: 'Illustration 5',
    pos: 'top-[26vh] left-[-8vw] xl:left-[-4vw] 2xl:left-[-2vw]',
    rotate: '-rotate-[10deg]',
    z: 'z-20',
  },
  {
    src: illu7,
    title: 'Illustration 7',
    pos: 'top-[40vh] left-[-10vw] xl:left-[-6vw] 2xl:left-[-3vw]',
    rotate: 'rotate-[14deg]',
    z: 'z-25',
  },
  {
    src: illu9,
    title: 'Illustration 9',
    pos: 'top-[54vh] left-[-8vw] xl:left-[-4vw] 2xl:left-[-2vw]',
    rotate: '-rotate-[8deg]',
    z: 'z-20',
  },
  {
    src: illu11,
    title: 'Illustration 11',
    pos: 'top-[67vh] left-[-4vw] xl:left-[-1vw] 2xl:left-[1vw]',
    rotate: 'rotate-[11deg]',
    z: 'z-15',
  },
  {
    src: comic1,
    title: 'Comic 1',
    pos: 'top-[78vh] left-[0vw] xl:left-[3vw] 2xl:left-[5vw]',
    rotate: '-rotate-[9deg]',
    z: 'z-10',
  },
  {
    src: comic3,
    title: 'Comic 3',
    pos: 'bottom-1 xl:bottom-2 left-[1vw] xl:left-[5vw] 2xl:left-[8vw]',
    rotate: 'rotate-[6deg]',
    z: 'z-15',
  },
];

// KANAN: 8 karya besar tanpa bingkai, tersusun padat saling timpa dalam pola lengkungan
// Mentok sampai batas viewport (atas top-1, bawah bottom-1)
const rightArcArtworks = [
  {
    src: illu2,
    title: 'Illustration 2',
    pos: 'top-1 xl:top-2 right-[1vw] xl:right-[5vw] 2xl:right-[8vw]',
    rotate: 'rotate-[13deg]',
    z: 'z-10',
  },
  {
    src: illu4,
    title: 'Illustration 4',
    pos: 'top-[12vh] right-[-4vw] xl:right-[-1vw] 2xl:right-[1vw]',
    rotate: '-rotate-[8deg]',
    z: 'z-15',
  },
  {
    src: illu6,
    title: 'Illustration 6',
    pos: 'top-[26vh] right-[-8vw] xl:right-[-4vw] 2xl:right-[-2vw]',
    rotate: 'rotate-[11deg]',
    z: 'z-20',
  },
  {
    src: illu8,
    title: 'Illustration 8',
    pos: 'top-[40vh] right-[-10vw] xl:right-[-6vw] 2xl:right-[-3vw]',
    rotate: '-rotate-[15deg]',
    z: 'z-25',
  },
  {
    src: illu10,
    title: 'Illustration 10',
    pos: 'top-[54vh] right-[-8vw] xl:right-[-4vw] 2xl:right-[-2vw]',
    rotate: 'rotate-[9deg]',
    z: 'z-20',
  },
  {
    src: comic2,
    title: 'Comic 2',
    pos: 'top-[67vh] right-[-4vw] xl:right-[-1vw] 2xl:right-[1vw]',
    rotate: '-rotate-[12deg]',
    z: 'z-15',
  },
  {
    src: comic4,
    title: 'Comic 4',
    pos: 'top-[78vh] right-[0vw] xl:right-[3vw] 2xl:right-[5vw]',
    rotate: 'rotate-[8deg]',
    z: 'z-10',
  },
  {
    src: comic5,
    title: 'Comic 5',
    pos: 'bottom-1 xl:bottom-2 right-[1vw] xl:right-[5vw] 2xl:right-[8vw]',
    rotate: '-rotate-[7deg]',
    z: 'z-15',
  },
];

const allMobileArtworks = [
  { src: illu1, title: 'Illustration 1', rotate: '-rotate-6' },
  { src: illu2, title: 'Illustration 2', rotate: 'rotate-3' },
  { src: illu3, title: 'Illustration 3', rotate: '-rotate-4' },
  { src: illu4, title: 'Illustration 4', rotate: 'rotate-6' },
  { src: illu5, title: 'Illustration 5', rotate: '-rotate-8' },
  { src: illu6, title: 'Illustration 6', rotate: 'rotate-5' },
  { src: illu7, title: 'Illustration 7', rotate: '-rotate-5' },
  { src: illu8, title: 'Illustration 8', rotate: 'rotate-7' },
  { src: illu9, title: 'Illustration 9', rotate: '-rotate-6' },
  { src: illu10, title: 'Illustration 10', rotate: 'rotate-4' },
  { src: illu11, title: 'Illustration 11', rotate: '-rotate-7' },
  { src: comic1, title: 'Comic 1', rotate: 'rotate-5' },
  { src: comic2, title: 'Comic 2', rotate: '-rotate-4' },
  { src: comic3, title: 'Comic 3', rotate: 'rotate-6' },
  { src: comic4, title: 'Comic 4', rotate: '-rotate-5' },
  { src: comic5, title: 'Comic 5', rotate: 'rotate-3' },
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
      {/* DESKTOP FIXED OVERLAY: Karya Seni Berserakan Tanpa Bingkai (Frameless)    */}
      {/* - Bayangan menyebar luas dan lembut (soft wide ambient shadow)            */}
      {/* - Mentok sampai batas viewport (top-1 sampai bottom-1)                    */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-10 hidden lg:block overflow-hidden">
        {/* Sisi Kiri: 8 Karya Besar Mentok Viewport */}
        {leftArcArtworks.map((art, idx) => (
          <div
            key={`left-${idx}`}
            className={`absolute ${art.pos} ${art.rotate} ${art.z} w-64 xl:w-72 2xl:w-80 select-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.11)]`}
          >
            <img
              src={art.src}
              alt={art.title}
              className="w-full h-auto object-contain rounded-[14px] xl:rounded-[18px] block shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
              loading="lazy"
            />
          </div>
        ))}

        {/* Sisi Kanan: 8 Karya Besar Mentok Viewport */}
        {rightArcArtworks.map((art, idx) => (
          <div
            key={`right-${idx}`}
            className={`absolute ${art.pos} ${art.rotate} ${art.z} w-64 xl:w-72 2xl:w-80 select-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.11)]`}
          >
            <img
              src={art.src}
              alt={art.title}
              className="w-full h-auto object-contain rounded-[14px] xl:rounded-[18px] block shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* ============================================================ */}
      {/* MAIN CONTENT: Pinterest Bento / Tile Board                    */}
      {/* ============================================================ */}
      <main className="relative z-20 w-full max-w-2xl mx-auto flex flex-col gap-6">
        {/* Profile Card — Satu-satunya kartu berwarna (Pinterest Red #e60023) */}
        <div className="w-full bg-[#e60023] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left text-white shadow-none">
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
        </div>

        {/* Section 1: Comms — Seragam dengan kartu lainnya */}
        <section className="w-full">
          <div className="mb-3 px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#62625b]">
              Comms
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {comms.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-[16px] bg-[#ffffff] hover:bg-[#f6f6f3] active:bg-[#e5e5e0] border border-[#dadad3] flex items-center justify-between transition-colors group"
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
              </a>
            ))}
          </div>
        </section>

        {/* Section 2: Medsos — Pinterest Category Tile Grid (Seragam) */}
        <section className="w-full">
          <div className="mb-3 px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#62625b]">
              Medsos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {medsos.map((item, index) => {
              const isLastAndOdd = index === medsos.length - 1 && medsos.length % 2 !== 0;

              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-[16px] bg-[#ffffff] hover:bg-[#f6f6f3] active:bg-[#e5e5e0] border border-[#dadad3] flex items-center justify-between transition-colors group ${
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
                </a>
              );
            })}
          </div>
        </section>
      </main>

      {/* ============================================================ */}
      {/* FOOTER                                                       */}
      {/* ============================================================ */}
      <footer className="relative z-20 w-full max-w-2xl mx-auto mt-12 pt-6 border-t border-[#dadad3] text-center flex flex-col items-center gap-2">
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
      </footer>

      {/* ============================================================ */}
      {/* MOBILE ONLY: Gambar mentok ke bawah & kanan-kiri viewport    */}
      {/* Menggunakan -mx-4 dan w-[calc(100%+2rem)] agar full-bleed    */}
      {/* ============================================================ */}
      <div className="block lg:hidden relative z-10 -mx-4 w-[calc(100%+2rem)] overflow-hidden mt-6 h-20 sm:h-24 pointer-events-none select-none">
        <div className="flex justify-center items-start -space-x-8 sm:-space-x-10 translate-y-3 min-w-full">
          {allMobileArtworks.slice(0, 9).map((art, idx) => (
            <div
              key={idx}
              className={`shrink-0 w-28 sm:w-36 drop-shadow-[0_20px_35px_rgba(0,0,0,0.10)] ${art.rotate}`}
            >
              <img
                src={art.src}
                alt={art.title}
                className="w-full h-auto object-cover rounded-[14px] block shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
