import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] rounded-full bg-blue-50/50 blur-[100px] opacity-40"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-600 border border-blue-100"
          >
            Solutions
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Solve your team's <br/> biggest challenges
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Keep your team aligned and efficient with tools that adapt to your unique workflow.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative mx-auto max-w-5xl"
        >
           {/* Mockup Frame */}
           <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/50">
             
             {/* Window Controls */}
             <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-6 py-4">
                <div className="flex gap-2">
                   <div className="h-3 w-3 rounded-full bg-red-400"></div>
                   <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                   <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex h-8 w-96 items-center rounded-md bg-white px-3 shadow-sm border border-gray-100">
                   <Search size={14} className="text-gray-400 mr-2" />
                   <div className="h-2 w-24 rounded-full bg-gray-100"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-gray-200"></div>
             </div>

             {/* Inner Content */}
             <div className="flex h-[600px] bg-white">
                 {/* Sidebar */}
                 <div className="hidden w-60 flex-col border-r border-gray-100 bg-gray-50/30 p-5 md:flex">
                    <div className="space-y-6">
                       <div className="space-y-1">
                          <div className="h-9 w-full rounded-lg bg-blue-50"></div>
                          <div className="h-9 w-full rounded-lg bg-transparent"></div>
                          <div className="h-9 w-full rounded-lg bg-transparent"></div>
                       </div>
                       <div className="space-y-2">
                          <div className="mb-4 h-3 w-16 rounded-full bg-gray-200"></div>
                          <div className="h-6 w-full rounded bg-gray-100"></div>
                          <div className="h-6 w-full rounded bg-gray-100"></div>
                       </div>
                    </div>
                 </div>

                 {/* Main Area */}
                 <div className="flex-1 p-8 bg-white dashboard-scroll overflow-y-auto">
                    <div className="mb-8 flex justify-between items-end">
                       <div className="space-y-2">
                          <div className="h-8 w-64 rounded-lg bg-gray-900"></div>
                          <div className="h-4 w-48 rounded bg-gray-100"></div>
                       </div>
                       <div className="h-10 w-32 rounded-lg bg-blue-600"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                       {/* Card 1 */}
                       <div className="col-span-2 rounded-2xl border border-gray-100 p-6 shadow-sm">
                          <div className="mb-6 h-5 w-32 rounded bg-gray-100"></div>
                          <div className="space-y-4">
                             {[1, 2, 3].map(i => (
                               <div key={i} className="flex items-center gap-4 border-b border-gray-50 pb-4 last:border-0">
                                  <div className="h-5 w-5 rounded-full border-2 border-gray-200"></div>
                                  <div className="flex-1 space-y-2">
                                     <div className="h-4 w-48 rounded bg-gray-800"></div>
                                     <div className="h-3 w-32 rounded bg-gray-100"></div>
                                  </div>
                               </div>
                             ))}
                          </div>
                       </div>
                       
                       {/* Card 2 */}
                       <div className="col-span-1 rounded-2xl border border-gray-100 p-6 shadow-sm bg-gray-50/50">
                          <div className="mb-4 h-5 w-20 rounded bg-gray-200"></div>
                          <div className="mx-auto h-32 w-32 rounded-full border-8 border-blue-500/20 border-t-blue-500"></div>
                       </div>
                       
                       {/* Card 3 */}
                       <div className="col-span-3 rounded-2xl border border-gray-100 p-6 shadow-sm flex gap-6">
                          <div className="h-32 w-48 rounded-xl bg-gray-100"></div>
                          <div className="h-32 w-48 rounded-xl bg-gray-100"></div>
                          <div className="h-32 w-48 rounded-xl bg-gray-100"></div>
                       </div>
                    </div>
                 </div>
             </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Solutions;