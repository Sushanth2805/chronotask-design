import React from 'react';
import { ArrowRight, Play, CheckCircle, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-16 lg:pt-48 lg:pb-32">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Gradient Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-orange-50/60 via-amber-50/40 to-transparent blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/50 px-4 py-1.5 text-xs font-bold text-orange-700 backdrop-blur-md transition-colors hover:bg-orange-100 cursor-pointer">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="tracking-wide">v2.0 is live: AI-Powered Insights</span>
              <ArrowRight size={12} className="ml-1" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl mb-8 leading-[1.1]"
          >
            Synchronize your <br />
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">entire workflow</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-xl text-gray-600 leading-relaxed"
          >
            ChronoTask brings your tasks, teammates, and tools together in one unified platform. 
            Stop juggling apps and start shipping faster.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="h-12 px-8 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-gray-900/20 flex items-center gap-2">
               Get Started Free
               <ArrowRight size={16} />
            </button>
            <button className="h-12 px-8 rounded-full bg-white text-gray-700 border border-gray-200 font-semibold text-sm hover:bg-gray-50 transition-all hover:scale-105 flex items-center gap-2 shadow-sm hover:shadow-md">
               <Play size={16} className="fill-gray-700" />
               Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Hero Visual - Dashboard Preview */}
        <motion.div 
           initial={{ opacity: 0, y: 60, rotateX: 10 }}
           animate={{ opacity: 1, y: 0, rotateX: 0 }}
           transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.2 }}
           className="relative w-full max-w-6xl mx-auto [perspective:1000px]"
        >
            {/* Main Window */}
            <div className="relative rounded-xl border border-gray-200 bg-white shadow-2xl overflow-hidden ring-1 ring-gray-900/5 aspect-[16/10] md:aspect-[2/1] group">
                
                {/* Header/Toolbar */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gray-50/80 border-b border-gray-100 flex items-center px-4 gap-2 z-20 backdrop-blur-sm">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="ml-4 flex-1 max-w-md h-6 bg-white rounded border border-gray-200/50 shadow-sm opacity-50"></div>
                </div>

                {/* Dashboard Content Mockup */}
                <div className="absolute inset-0 top-10 bg-white p-6 flex gap-6 overflow-hidden">
                    {/* Sidebar Mock */}
                    <div className="w-56 hidden md:flex flex-col gap-4 pt-2">
                        <div className="flex items-center gap-2 mb-2 opacity-80">
                            <div className="h-6 w-6 rounded bg-orange-600"></div>
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                        </div>
                        <div className="space-y-2 opacity-60">
                             <div className="h-8 w-full bg-gray-50 rounded border border-gray-100"></div>
                             <div className="h-8 w-full bg-white rounded border border-transparent"></div>
                             <div className="h-8 w-full bg-white rounded border border-transparent"></div>
                        </div>
                        <div className="mt-6 space-y-2 opacity-60">
                             <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Projects</div>
                             <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
                             <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                             <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                        </div>
                    </div>

                    {/* Main Area Mock */}
                    <div className="flex-1 flex flex-col gap-6 pt-2">
                        <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                             <div className="space-y-1">
                                <div className="h-6 w-48 bg-gray-800 rounded"></div>
                                <div className="h-3 w-32 bg-gray-200 rounded"></div>
                             </div>
                             <div className="flex gap-2">
                                 <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white"></div>
                                 <div className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white -ml-4"></div>
                                 <div className="h-8 w-8 rounded-full bg-gray-100 border-2 border-white -ml-4 flex items-center justify-center text-xs font-bold text-gray-500">+3</div>
                             </div>
                        </div>
                        
                        {/* Kanban Columns */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                             {[1, 2, 3].map(col => (
                                 <div key={col} className="bg-gray-50/80 rounded-xl p-3 border border-gray-100 flex flex-col gap-3 h-full">
                                     <div className="flex justify-between items-center mb-1 opacity-70">
                                        <div className="h-3 w-20 bg-gray-300 rounded"></div>
                                        <div className="h-4 w-6 bg-gray-200 rounded-full"></div>
                                     </div>
                                     
                                     {/* Fake Card 1 */}
                                     <div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-md transition-shadow cursor-default">
                                         <div className="h-2 w-10 bg-orange-100 rounded mb-2"></div>
                                         <div className="h-3 w-3/4 bg-gray-700 rounded mb-2"></div>
                                         <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                                     </div>

                                     {/* Fake Card 2 */}
                                     <div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-md transition-shadow cursor-default">
                                         <div className="h-2 w-10 bg-amber-100 rounded mb-2"></div>
                                         <div className="h-3 w-full bg-gray-700 rounded mb-2"></div>
                                         <div className="flex justify-between mt-2">
                                            <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                                            <div className="h-2 w-12 bg-gray-100 rounded"></div>
                                         </div>
                                     </div>

                                     {col === 2 && (
                                         <div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-md transition-shadow cursor-default">
                                             <div className="h-2 w-10 bg-green-100 rounded mb-2"></div>
                                             <div className="h-3 w-2/3 bg-gray-700 rounded mb-2"></div>
                                         </div>
                                     )}
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
                
                {/* Gradient Overlay for Fade Effect at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* Floating Widget 1: Task Completed */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-4 top-16 md:-right-8 md:top-24 bg-white/90 rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 z-30 w-72 backdrop-blur-xl ring-1 ring-gray-100"
            >
                <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 shadow-inner">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-gray-900">Project Launch</div>
                        <div className="text-xs text-gray-500 mt-1 leading-relaxed">Milestone completed ahead of schedule by <span className="font-semibold text-gray-700">Design Team</span></div>
                        <div className="flex -space-x-2 mt-3 pl-1">
                            {[1,2,3].map(i => <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-gray-200 shadow-sm"></div>)}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Widget 2: Team Velocity */}
            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -left-4 bottom-24 md:-left-12 md:bottom-32 bg-white/90 rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 z-30 w-64 backdrop-blur-xl ring-1 ring-gray-100 hidden sm:block"
            >
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Velocity</span>
                    <BarChart3 size={18} className="text-orange-500" />
                </div>
                <div className="flex items-end gap-2 mb-3">
                    <div className="text-3xl font-extrabold text-gray-900">+124%</div>
                    <div className="text-xs text-green-600 font-bold mb-1.5 px-1.5 py-0.5 bg-green-50 rounded-full">▲ 12%</div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: '70%' }}
                       transition={{ duration: 1, delay: 0.5 }}
                       className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                    ></motion.div>
                </div>
            </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;