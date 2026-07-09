import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaLock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const AnonymousMessageSection = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error, locked
  const [errorMessage, setErrorMessage] = useState('');
  
  // Anti-Spam: Speed Trap (mencegat bot yang mengisi form instan)
  const [loadTime, setLoadTime] = useState(0);

  // GANTI KEY INI DENGAN ACCESS KEY WEB3FORMS ANDA
  const WEB3FORMS_ACCESS_KEY = "647d6296-9df0-4caf-bce3-8d02a99324e1"; 

  useEffect(() => {
    // Catat waktu kapan komponen pertama kali dimuat
    setLoadTime(Date.now());

    // Cek LocalStorage untuk melihat apakah user sudah pernah mengirim pesan dalam 24 jam terakhir
    const lockTime = localStorage.getItem('anonMessageLockedUntil');
    if (lockTime) {
      if (Date.now() < parseInt(lockTime, 10)) {
        setStatus('locked');
      } else {
        localStorage.removeItem('anonMessageLockedUntil');
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi 1: Honeypot (bot biasanya mengisi semua field, termasuk yang tersembunyi)
    const isBot = e.target.botcheck.checked;
    if (isBot) {
      // Pura-pura sukses jika bot mengisi honeypot
      setStatus('success');
      return;
    }

    // Validasi 2: Speed Trap (Manusia butuh waktu lebih dari 3 detik untuk membaca dan mengetik)
    const submitTime = Date.now();
    if (submitTime - loadTime < 3000) {
      setErrorMessage("Are you a bot? You typed that way too fast.");
      setStatus('error');
      return;
    }

    // Validasi 3: Panjang Karakter
    if (message.trim().length < 10) {
      setErrorMessage("Message is too short. Say something meaningful!");
      setStatus('error');
      return;
    }

    if (message.length > 1000) {
      setErrorMessage("Message is too long. Maximum is 1000 characters.");
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Ambil data langsung dari form HTML menggunakan event.target sesuai standar Web3Forms
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setMessage('');
        
        // Anti-Spam 4: Kunci form di browser ini selama 24 jam (86400000 milidetik)
        const unlockTime = Date.now() + 86400000;
        localStorage.setItem('anonMessageLockedUntil', unlockTime.toString());
      } else {
        // Jika API error (misalnya API Key salah)
        setErrorMessage(result.message || "Failed to send message. Please try again later.");
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
      setStatus('error');
    }
  };

  return (
    <section id="pesan" className="relative w-full py-24 md:py-32 bg-white flex items-center justify-center z-40">
      
      <div className="relative z-10 w-full max-w-3xl px-6 md:px-12 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-slate-50 rounded-full mb-4 border border-slate-200 shadow-sm"
          >
            <FaLock className="text-emerald-500 text-xl" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 drop-shadow-sm"
          >
            Mau bilang apa nih?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm md:text-base max-w-xl mx-auto"
          >
            Mau confess? Kritik? Atau cuma sapaan random? 
            Kirim di sini sepenuhnya anonim! Aku ga bakal pernah tahu siapa kamu.
          </motion.p>
        </div>

        {/* Status Handling & Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative w-full"
        >
          
          <AnimatePresence mode="wait">
            
            {status === 'locked' && (
              <motion.div 
                key="locked"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <FaLock className="text-4xl text-slate-400 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Form Locked</h3>
                <p className="text-slate-600">You have already sent a message recently. Please wait 24 hours before sending another one to prevent spam.</p>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-3xl text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Your anonymous message is flying through the internet directly to me. Thank you!</p>
              </motion.div>
            )}

            {status !== 'locked' && status !== 'success' && (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* Field Tersembunyi standar Web3Forms */}
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="New Anonymous Confession/Message!" />
                <input type="hidden" name="from_name" value="Anonymous User" />
                <input type="hidden" name="name" value="Anonymous User" />
                <input type="hidden" name="email" value="anonymous@faazamu.xyz" />

                {/* Honeypot Field - DILARANG DIHAPUS, INI JEBAKAN BOT */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="relative">
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (status === 'error') setStatus('idle'); // Clear error on typing
                    }}
                    placeholder="Type your secret message here..."
                    className="w-full h-40 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none transition-colors shadow-inner"
                    maxLength={1000}
                    required
                  ></textarea>
                  
                  {/* Character count */}
                  <div className="absolute bottom-4 right-4 text-xs font-mono text-slate-400">
                    {message.length} / 1000
                  </div>
                </div>

                {/* Pesan Error */}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-rose-600 text-sm bg-rose-50 p-3 rounded-lg border border-rose-200"
                  >
                    <FaExclamationCircle />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Pesan Peringatan API Key */}
                {WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" && (
                  <div className="text-amber-700 text-xs bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <strong>Developer Note:</strong> Sistem pengiriman sudah siap, namun Anda perlu mengganti <code>WEB3FORMS_ACCESS_KEY</code> di kode dengan API Key asli dari Web3Forms agar pesan bisa dikirim ke email Anda.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || message.trim().length === 0}
                  className="group relative w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2 shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02]"
                >
                  <span className="relative z-10">
                    {status === 'loading' ? 'Encrypting & Sending...' : 'Send Anonymously'}
                  </span>
                  
                  {status !== 'loading' && <FaPaperPlane className="relative z-10" />}
                </button>

              </motion.form>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
};

export default AnonymousMessageSection;
