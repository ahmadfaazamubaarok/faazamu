import React from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
  FaPinterest,
} from 'react-icons/fa6';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { profile, comms, medsos } from '../data/linksData';

function getMedsosIcon(iconName) {
  switch (iconName?.toLowerCase()) {
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
      return null;
  }
}

export default function LinksPage() {
  return (
    <div className="min-h-screen w-full bg-[#fbfbf9] text-[#33332e] font-sans antialiased flex flex-col justify-between py-10 sm:py-14 px-4 selection:bg-[#f6f6f3] selection:text-[#000000]">
      <main className="w-full max-w-2xl mx-auto flex flex-col gap-6">
        {/* Profile Card — Pinterest 32px Radius Editorial Feature Card */}
        <div className="w-full bg-[#ffffff] border border-[#dadad3] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-[#dadad3] bg-[#f6f6f3] shrink-0"
          />

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#000000] tracking-[-0.8px] leading-tight">
                {profile.name}
              </h1>
              <span className="text-xs font-semibold text-[#62625b]">
                {profile.handle}
              </span>
            </div>

            <p className="text-sm text-[#33332e] leading-relaxed mt-1">
              {profile.bio}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#f6f6f3] text-[#62625b] border border-[#dadad3]">
                Illustrator
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#f6f6f3] text-[#62625b] border border-[#dadad3]">
                Web Developer
              </span>
            </div>
          </div>
        </div>

        {/* Section 1: Comms — Two-Column Asymmetric Cards */}
        <section className="w-full">
          <div className="mb-3 px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#62625b]">
              Comms
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {comms.map((item) => {
              const isPrimary = item.isPrimary;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-[16px] flex flex-col justify-between min-h-[110px] transition-colors group ${
                    isPrimary
                      ? 'bg-[#e60023] hover:bg-[#cc001f] active:bg-[#cc001f] text-[#ffffff]'
                      : 'bg-[#ffffff] hover:bg-[#f6f6f3] active:bg-[#e5e5e0] border border-[#dadad3] text-[#000000]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="block text-lg font-bold tracking-tight">
                        {item.name}
                      </span>
                      {item.tagline && (
                        <span
                          className={`block text-xs mt-0.5 ${
                            isPrimary ? 'text-white/90' : 'text-[#62625b]'
                          }`}
                        >
                          {item.tagline}
                        </span>
                      )}
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 ${
                        isPrimary ? 'bg-white/20 text-white' : 'bg-[#f6f6f3] text-[#000000]'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mt-3">
                    <span
                      className={`inline-flex items-center text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        isPrimary
                          ? 'bg-white text-[#e60023]'
                          : 'bg-[#f6f6f3] text-[#33332e] border border-[#dadad3]'
                      }`}
                    >
                      Buka Platform ↗
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Section 2: Medsos — Pinterest Category Tile Grid (2 Columns) */}
        <section className="w-full">
          <div className="mb-3 px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#62625b]">
              Medsos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {medsos.map((item, index) => {
              // Jika item terakhir ganjil, buat span penuh di desktop agar grid seimbang
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
                      {getMedsosIcon(item.icon)}
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
