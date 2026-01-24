import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/70 backdrop-blur-xl border-b border-gray-200/50 py-3 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)]' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20 transition-transform group-hover:scale-105">
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <LayoutGrid size={20} className="relative z-10" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-orange-600 transition-colors">ChronoTask</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex rounded-full bg-white/50 p-1.5 border border-white/20 shadow-sm backdrop-blur-sm ring-1 ring-gray-900/5">
            {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="px-5 py-2 text-sm font-medium text-gray-600 transition-all hover:text-gray-900 hover:bg-white rounded-full hover:shadow-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <button className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
              Log in
            </button>
            <button className="group relative overflow-hidden rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition-all hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-gray-900/30">
              <span className="relative z-10">Get started</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100 md:hidden transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {['Features', 'Solutions', 'Pricing'].map((item, i) => (
                <motion.a 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="text-3xl font-bold text-gray-900 tracking-tight"
                >
                  {item}
                </motion.a>
              ))}
              <hr className="border-gray-100 my-4" />
              <button className="w-full py-4 text-lg font-semibold text-gray-900">Log in</button>
              <button className="w-full rounded-2xl bg-orange-600 py-4 text-lg font-bold text-white shadow-xl shadow-orange-500/30">
                Get Started Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;