import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';

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
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20">
              <LayoutGrid size={22} />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">ChronoTask</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex rounded-full bg-gray-100/50 p-1.5 border border-gray-200/50 backdrop-blur-sm">
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
            <button className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition-all hover:bg-gray-800 hover:-translate-y-0.5 active:translate-y-0">
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden"
        >
          <div className="flex flex-col gap-6">
            <a href="#features" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-900">Features</a>
            <a href="#solutions" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-900">Solutions</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-900">Pricing</a>
            <hr className="border-gray-100 my-2" />
            <button className="w-full py-4 text-lg font-semibold text-gray-900">Log in</button>
            <button className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white shadow-xl shadow-blue-500/30">
              Get Started Free
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;