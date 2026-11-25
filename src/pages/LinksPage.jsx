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
    <div className="min-h-screen w-full bg-[#fbfbf9] text-[#33332e] font-sans antialiased flex flex-col justify-between py-10 sm:py-14 px-4 selection:bg-[#f6f6f3] selection:text-[#000000]">
      <main className="w-full max-w-2xl mx-auto flex flex-col gap-6">
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

      {/* Footer */}
      <footer className="w-full max-w-2xl mx-auto mt-12 pt-6 border-t border-[#dadad3] text-center flex flex-col items-center gap-2">
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
    </div>
  );
}
