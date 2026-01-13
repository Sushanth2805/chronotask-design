import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-32">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-blue-600">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x"></div>
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
            >
                Ready to boost your productivity?
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="mx-auto mb-10 max-w-2xl text-xl text-blue-100"
            >
                Join over 50,000 teams using ChronoTask to focus on what matters most.
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex flex-col justify-center gap-4 sm:flex-row"
            >
                <button className="rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-xl transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-2xl">
                    Get started for free
                </button>
                <button className="rounded-full border border-white/30 bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                    Talk to Sales
                </button>
            </motion.div>
        </div>
    </section>
  );
};

export default CTA;