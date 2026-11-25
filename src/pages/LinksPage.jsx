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

// Import gambar ilustrasi untuk dekorasi samping desktop & mobile stack
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

// 4 kartu di kiri, tumpukan rapat agar tidak melebihi tinggi footer
const leftArtworks = [
  { src: illu1, title: 'Artwork 1', rotate: '-rotate-[8deg]', offset: '-translate-x-2', z: 'z-10' },
  { src: illu3, title: 'Artwork 3', rotate: 'rotate-[6deg]', offset: 'translate-x-3', z: 'z-15' },
  { src: illu5, title: 'Artwork 5', rotate: '-rotate-[7deg]', offset: '-translate-x-1', z: 'z-20' },
  { src: illu7, title: 'Artwork 7', rotate: 'rotate-[5deg]', offset: 'translate-x-2', z: 'z-10' },
];

// 4 kartu di kanan, tumpukan rapat agar tidak melebihi tinggi footer
const rightArtworks = [
  { src: illu2, title: 'Artwork 2', rotate: 'rotate-[8deg]', offset: 'translate-x-2', z: 'z-10' },
  { src: illu4, title: 'Artwork 4', rotate: '-rotate-[6deg]', offset: '-translate-x-3', z: 'z-15' },
  { src: illu6, title: 'Artwork 6', rotate: 'rotate-[7deg]', offset: 'translate-x-1', z: 'z-20' },
  { src: illu8, title: 'Artwork 8', rotate: '-rotate-[5deg]', offset: '-translate-x-2', z: 'z-10' },
];

const allMobileArtworks = [
  { src: illu1, title: 'Artwork 1', rotate: '-rotate-6' },
  { src: illu2, title: 'Artwork 2', rotate: 'rotate-3' },
  { src: illu3, title: 'Artwork 3', rotate: '-rotate-3' },
  { src: illu4, title: 'Artwork 4', rotate: 'rotate-6' },
  { src: illu5, title: 'Artwork 5', rotate: '-rotate-8' },
  { src: illu6, title: 'Artwork 6', rotate: 'rotate-4' },
  { src: illu7, title: 'Artwork 7', rotate: '-rotate-4' },
  { src: illu8, title: 'Artwork 8', rotate: 'rotate-5' },
  { src: illu9, title: 'Artwork 9', rotate: '-rotate-5' },
  { src: illu10, title: 'Artwork 10', rotate: 'rotate-6' },
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
    <div className="min-h-screen w-full bg-[#fbfbf9] text-[#33332e] font-sans antialiased relative overflow-x-hidden flex flex-col justify-between py-10 sm:py-14 px-4 selection:bg-[#f6f6f3] selection:text-[#000000]">
      
      {/* ============================================================ */}
      {/* DESKTOP ONLY: Card Berserakan di Sisi Kiri                   */}
      {/* Keluar dari viewport (-left-14 / -left-20)                   */}
      {/* Tinggi tumpukan terkunci rapat agar tidak melebihi footer    */}
      {/* ============================================================ */}
      <aside className="hidden lg:flex flex-col absolute -left-14 xl:-left-20 2xl:-left-24 top-10 w-44 xl:w-52 pointer-events-auto select-none z-10">
        {leftArtworks.map((art, idx) => (
          <div
            key={idx}
            className={`w-44 xl:w-52 bg-[#ffffff] p-2.5 pb-3.5 rounded-[16px] border border-[#dadad3] shadow-sm hover:shadow-2xl hover:scale-110 hover:rotate-0 hover:translate-x-12 hover:z-30 transition-all duration-300 cursor-pointer ${
              idx > 0 ? '-mt-16 xl:-mt-20' : ''
            } ${art.rotate} ${art.offset} ${art.z}`}
          >
            <img
              src={art.src}
              alt={art.title}
              className="w-full h-36 xl:h-44 object-cover rounded-[12px] bg-[#f6f6f3]"
              loading="lazy"
            />
          </div>
        ))}
      </aside>

      {/* ============================================================ */}
      {/* DESKTOP ONLY: Card Berserakan di Sisi Kanan                  */}
      {/* Keluar dari viewport (-right-14 / -right-20)                 */}
      {/* Tinggi tumpukan terkunci rapat agar tidak melebihi footer    */}
      {/* ============================================================ */}
      <aside className="hidden lg:flex flex-col absolute -right-14 xl:-right-20 2xl:-right-24 top-14 w-44 xl:w-52 pointer-events-auto select-none z-10 items-end">
        {rightArtworks.map((art, idx) => (
          <div
            key={idx}
            className={`w-44 xl:w-52 bg-[#ffffff] p-2.5 pb-3.5 rounded-[16px] border border-[#dadad3] shadow-sm hover:shadow-2xl hover:scale-110 hover:rotate-0 hover:-translate-x-12 hover:z-30 transition-all duration-300 cursor-pointer ${
              idx > 0 ? '-mt-16 xl:-mt-20' : ''
            } ${art.rotate} ${art.offset} ${art.z}`}
          >
            <img
              src={art.src}
              alt={art.title}
              className="w-full h-36 xl:h-44 object-cover rounded-[12px] bg-[#f6f6f3]"
              loading="lazy"
            />
          </div>
        ))}
      </aside>

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
      {/* MOBILE ONLY: Tumpukan Card Berserakan di Bawah Footer        */}
      {/* ============================================================ */}
      <section className="block lg:hidden relative z-20 w-full max-w-md mx-auto mt-10 pt-6 border-t border-[#dadad3]/60">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#62625b]">
            Artworks Showcase
          </span>
        </div>

        {/* Tumpukan berserakan saling menimpa */}
        <div className="flex flex-wrap justify-center items-center py-4 px-2 -space-x-5 -space-y-6">
          {allMobileArtworks.map((art, idx) => (
            <div
              key={idx}
              className={`relative w-32 sm:w-36 bg-[#ffffff] p-2 pb-3 rounded-[16px] border border-[#dadad3] shadow-sm active:scale-105 active:rotate-0 active:z-30 transition-all duration-200 cursor-pointer ${art.rotate}`}
            >
              <img
                src={art.src}
                alt={art.title}
                className="w-full h-32 sm:h-36 object-cover rounded-[12px] bg-[#f6f6f3]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
