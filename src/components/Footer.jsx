import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-10 relative overflow-hidden z-30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-2xl font-black bg-clip-text text-transparent bg-white mb-2">
            Faazamu
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {t('footer', 'copyright')}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {t('footer', 'madeWith')}
          </p>
        </div>

        {/* Right Side: Back to top & Fun phrase */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <motion.button 
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="px-6 py-2 bg-slate-800 hover:bg-emerald-600 hover:text-white rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 border border-slate-700 hover:border-emerald-500"
          >
            {t('footer', 'backToTop')}
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
