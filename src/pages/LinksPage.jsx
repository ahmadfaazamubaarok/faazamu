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
import { ExternalLink, ArrowLeft } from 'lucide-react';
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
    <div className="min-h-screen w-full bg-[#fbfbf9] text-[#33332e] font-sans antialiased flex flex-col justify-between py-10 px-4 selection:bg-[#f6f6f3] selection:text-[#000000]">
      {/* Top Header Navigation */}
      <header className="w-full max-w-md mx-auto flex items-center justify-between mb-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#62625b] hover:text-[#000000] px-3.5 py-2 rounded-full bg-[#f6f6f3] hover:bg-[#e5e5e0] active:bg-[#c8c8c1] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Portofolio</span>
        </a>

        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#e60023]" />
          <span className="text-xs font-bold tracking-tight text-[#000000]">faazamu</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Profile Avatar & Info */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 rounded-full object-cover border border-[#dadad3] mb-3 bg-[#ffffff]"
          />
          <h1 className="text-2xl font-bold text-[#000000] tracking-[-0.8px] leading-tight">
            {profile.name}
          </h1>
          <p className="text-sm font-medium text-[#62625b] mt-0.5">{profile.handle}</p>
          <p className="text-sm text-[#33332e] mt-2 max-w-xs leading-relaxed">
            {profile.bio}
          </p>
        </div>

        {/* Section 1: Comms */}
        <section className="w-full mb-8">
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#62625b]">
              Comms
            </h2>
            <span className="text-[11px] font-semibold text-[#e60023]">Open</span>
          </div>

          <div className="flex flex-col gap-2.5">
            {comms.map((item) => {
              const isPrimary = item.isPrimary;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full p-4 rounded-[16px] flex items-center justify-between transition-colors ${
                    isPrimary
                      ? 'bg-[#e60023] hover:bg-[#cc001f] active:bg-[#cc001f] text-[#ffffff]'
                      : 'bg-[#f6f6f3] hover:bg-[#e5e5e0] active:bg-[#c8c8c1] border border-[#dadad3] text-[#000000]'
                  }`}
                >
                  <div className="text-left">
                    <span className="block text-base font-bold tracking-tight">
                      {item.name}
                    </span>
                    {item.tagline && (
                      <span
                        className={`block text-xs mt-0.5 ${
                          isPrimary ? 'text-white/90 font-medium' : 'text-[#62625b]'
                        }`}
                      >
                        {item.tagline}
                      </span>
                    )}
                  </div>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isPrimary ? 'bg-white/20 text-white' : 'bg-[#ffffff] text-[#000000]'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Section 2: Medsos */}
        <section className="w-full">
          <div className="flex items-center mb-3 px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#62625b]">
              Medsos
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            {medsos.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 rounded-[16px] bg-[#ffffff] hover:bg-[#f6f6f3] active:bg-[#e5e5e0] border border-[#dadad3] flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#f6f6f3] flex items-center justify-center shrink-0">
                    {getMedsosIcon(item.icon)}
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-bold text-[#000000] tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#62625b] mt-0.5 font-normal">
                      {item.handle}
                    </p>
                  </div>
                </div>

                <div className="text-[#91918c] group-hover:text-[#000000] transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-md mx-auto mt-12 pt-6 border-t border-[#dadad3] text-center flex flex-col items-center gap-2">
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
