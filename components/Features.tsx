import React from 'react';
import { Clock, BarChart3, Layout, MessageCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white py-24 sm:py-32 border-t border-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-4 flex justify-center"
            >
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 ring-1 ring-orange-500/10">
                    <Zap size={12} fill="currentColor" /> Features
                </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
            >
                Everything you need <br /> to <span className="text-orange-600">ship faster</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 leading-relaxed"
            >
                Powerful features wrapped in a simple, intuitive interface. Designed to help your team focus on the work that matters.
            </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
            
            {/* Card 1: Collaboration - Teal */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-gradient-to-br from-teal-50 to-white p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-900/5 hover:border-teal-100"
            >
                <div className="relative z-10 mb-8">
                    <div className="mb-6 inline-flex rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100 transition-colors group-hover:bg-teal-600 group-hover:text-white group-hover:ring-teal-600">
                        <MessageCircle size={28} className="text-teal-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Seamless Collaboration</h3>
                    <p className="mt-3 text-lg text-gray-500 leading-relaxed">Real-time comments, threads, and notifications keep everyone in the loop without the noise.</p>
                </div>
                
                {/* Visual */}
                <div className="relative mt-auto h-64 w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 group-hover:shadow-md transition-shadow">
                    <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.1]"></div>
                    <div className="absolute top-6 left-6 right-6 space-y-3">
                         <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all duration-300 group-hover:translate-x-2">
                             <div className="h-8 w-8 rounded-full bg-teal-100"></div>
                             <div className="flex-1 space-y-2">
                                 <div className="h-2 w-24 rounded bg-gray-200"></div>
                                 <div className="h-2 w-full rounded bg-gray-100"></div>
                             </div>
                         </div>
                         <div className="flex items-start gap-3 rounded-xl bg-teal-50/50 p-4 shadow-sm ring-1 ring-teal-100 transition-all duration-300 delay-75 group-hover:translate-x-4">
                             <div className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold">JD</div>
                             <div className="flex-1 space-y-2">
                                 <div className="h-2 w-32 rounded bg-teal-200"></div>
                                 <div className="h-2 w-3/4 rounded bg-teal-100"></div>
                             </div>
                         </div>
                    </div>
                </div>
            </motion.div>

            {/* Card 2: Time Management - Green */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-gradient-to-br from-green-50/30 to-white p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-900/5 hover:border-green-100"
            >
                <div className="relative z-10 mb-8">
                    <div className="mb-6 inline-flex rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100 transition-colors group-hover:bg-green-600 group-hover:ring-green-600">
                        <Clock size={28} className="text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Smart Scheduling</h3>
                    <p className="mt-3 text-lg text-gray-500 leading-relaxed">Automated time blocking and scheduling that respects your focus time.</p>
                </div>
                
                <div className="relative mt-auto h-64 w-full flex items-end justify-center pb-6">
                     <div className="flex items-end gap-3">
                         <div className="w-12 bg-green-200/50 rounded-t-lg h-24 transition-all duration-500 group-hover:h-32 group-hover:bg-green-300"></div>
                         <div className="w-12 bg-green-500 rounded-t-lg h-40 shadow-lg shadow-green-200 transition-all duration-500 group-hover:h-48"></div>
                         <div className="w-12 bg-green-200/50 rounded-t-lg h-16 transition-all duration-500 group-hover:h-20 group-hover:bg-green-300"></div>
                     </div>
                     <div className="absolute top-10 right-10 rounded-lg bg-white px-3 py-2 shadow-lg ring-1 ring-gray-100 animate-float">
                         <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-xs font-bold text-gray-700">On Track</span>
                         </div>
                     </div>
                </div>
            </motion.div>

            {/* Card 3: Analytics - Orange */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-gradient-to-br from-orange-50/30 to-white p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-900/5 hover:border-orange-100"
            >
                <div className="relative z-10 mb-8">
                     <div className="mb-6 inline-flex rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100 transition-colors group-hover:bg-orange-600 group-hover:ring-orange-600">
                        <BarChart3 size={28} className="text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Advanced Analytics</h3>
                    <p className="mt-3 text-lg text-gray-500 leading-relaxed">Visualize your team's velocity and identify bottlenecks instantly.</p>
                </div>
                 <div className="relative mt-auto h-64 w-full rounded-2xl bg-white border border-gray-100 p-6 transition-all group-hover:border-orange-100">
                    <div className="flex flex-col gap-4 h-full justify-center">
                        {[0.8, 0.5, 0.9].map((width, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 text-xs font-bold text-gray-400">Project {String.fromCharCode(65+i)}</div>
                                <div className="h-3 flex-1 rounded-full bg-gray-100 overflow-hidden">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${width * 100}%` }}
                                      transition={{ duration: 1, delay: 0.2 + (i*0.1) }}
                                      className="h-full rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)]"
                                    />
                                </div>
                                <div className="w-8 text-right text-xs font-bold text-gray-600">{width * 100}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Card 4: Workspaces - Rose */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-gradient-to-br from-rose-50/30 to-white p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-900/5 hover:border-rose-100"
            >
                <div className="relative z-10 mb-8">
                     <div className="mb-6 inline-flex rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100 transition-colors group-hover:bg-rose-600 group-hover:ring-rose-600">
                        <Layout size={28} className="text-rose-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Custom Workspaces</h3>
                    <p className="mt-3 text-lg text-gray-500 leading-relaxed">Personalize your dashboard with widgets, calendars, and unique layouts.</p>
                </div>
                 <div className="relative mt-auto h-64 w-full grid grid-cols-2 gap-3 p-4">
                    <div className="rounded-xl bg-rose-50 border border-rose-100 transition-all group-hover:scale-95 group-hover:rotate-1"></div>
                    <div className="rounded-xl bg-white border border-gray-100 shadow-sm transition-all group-hover:scale-95 group-hover:-rotate-1"></div>
                    <div className="col-span-2 rounded-xl bg-white border border-gray-100 shadow-sm transition-all group-hover:translate-y-2"></div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;