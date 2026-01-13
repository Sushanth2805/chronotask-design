import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-20 pt-32 lg:pb-40 lg:pt-48">
      
      {/* Aurora Background Effects - Clean Version */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-100/50 mix-blend-multiply filter blur-[120px] opacity-70 animate-blob"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-100/50 mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="relative mx-auto max-w-4xl text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-sm font-semibold text-blue-700 backdrop-blur-sm transition-colors hover:bg-blue-100/50 cursor-pointer">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              New: AI-Powered Insights
              <ArrowRight size={14} />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl"
          >
            Think, plan, and track <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">all in one place</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl"
          >
            Manage tasks, collaborate with your team, and track productivity with the world's most intuitive project management platform.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="group relative rounded-full bg-gray-900 px-8 py-4 text-base font-bold text-white shadow-xl shadow-gray-900/20 transition-all hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-0.5">
              Get Started Free
            </button>
            <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-gray-700 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-gray-50 hover:ring-gray-300">
               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                 <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M9.5 6L0.5 11.1962L0.5 0.803848L9.5 6Z" /></svg>
               </span>
               Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Floating Elements with Glassmorphism */}
        
        {/* Left Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-4 top-1/3 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [-6, -3, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card w-64 rounded-2xl p-5 shadow-2xl shadow-blue-900/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Product Launch</p>
                <p className="text-xs text-gray-500">Priority: High</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full w-[75%] bg-yellow-400 rounded-full"></div>
              </div>
              <div className="flex justify-between text-xs font-medium text-gray-500">
                <span>Progress</span>
                <span>75%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute right-4 top-40 hidden lg:block"
        >
          <motion.div
             animate={{ y: [0, 20, 0], rotate: [6, 3, 6] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
             className="glass-card w-72 rounded-2xl p-5 shadow-2xl shadow-purple-900/5"
          >
            <div className="flex justify-between items-center mb-4">
               <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Team</span>
               <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-300"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-400"></div>
               </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl mb-2">
               <div className="h-2 w-2 rounded-full bg-green-500"></div>
               <span className="text-sm font-semibold text-gray-700">Design System</span>
               <span className="ml-auto text-xs text-gray-400">2h ago</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
               <div className="h-2 w-2 rounded-full bg-blue-500"></div>
               <span className="text-sm font-semibold text-gray-700">Q3 Planning</span>
               <span className="ml-auto text-xs text-gray-400">5h ago</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;