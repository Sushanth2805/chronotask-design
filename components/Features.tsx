import React from 'react';
import { Clock, BarChart3, Layout, ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gray-500 shadow-sm ring-1 ring-gray-200"
            >
                Features
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
                Keep everything in one place
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
                Forget complex project management tools. ChronoTask simplifies your workflow with powerful, intuitive features.
            </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Card 1: Seamless Collaboration */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="group relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
                <div className="mb-8 flex items-start justify-between">
                    <div>
                        <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-3.5 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                            <MessageCircle size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Seamless Collaboration</h3>
                        <p className="mt-3 text-base text-gray-500 leading-relaxed">Meet agencies, set partner initiatives, share tasks, and update progress in real time.</p>
                    </div>
                </div>
                {/* Visual Representation */}
                <div className="relative mt-4 h-56 w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-6 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50/30">
                     <div className="space-y-4">
                         <div className="flex w-3/4 items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-transform group-hover:translate-x-2">
                             <div className="h-10 w-10 rounded-full bg-purple-100"></div>
                             <div className="flex-1 space-y-2.5">
                                 <div className="h-2.5 w-24 rounded bg-gray-200"></div>
                                 <div className="h-2 w-full rounded bg-gray-100"></div>
                             </div>
                         </div>
                         <div className="ml-auto flex w-3/4 items-start gap-3 rounded-xl bg-blue-600 p-4 shadow-md transition-transform group-hover:-translate-x-2">
                             <div className="flex-1 space-y-2.5">
                                 <div className="ml-auto h-2.5 w-24 rounded bg-blue-400"></div>
                                 <div className="h-2 w-full rounded bg-blue-500"></div>
                             </div>
                             <div className="h-10 w-10 rounded-full bg-blue-400 border-2 border-white/20"></div>
                         </div>
                     </div>
                </div>
            </motion.div>

            {/* Card 2: Time Management */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="group relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
                <div className="mb-8">
                    <div className="mb-6 inline-flex rounded-2xl bg-green-50 p-3.5 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                        <Clock size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Time Management Tools</h3>
                    <p className="mt-3 text-base text-gray-500 leading-relaxed">Optimize performance with advanced tools for times, reminders and schedules.</p>
                </div>
                <div className="relative mt-4 flex h-56 items-center justify-center gap-5 rounded-2xl bg-gray-50 border border-gray-100 transition-colors group-hover:border-green-100 group-hover:bg-green-50/30">
                     <div className="text-center pt-8">
                         <div className="h-28 w-10 rounded-t-xl bg-green-200/50 transition-all group-hover:h-32"></div>
                     </div>
                      <div className="text-center pt-8">
                         <div className="h-40 w-10 rounded-t-xl bg-green-500 shadow-lg shadow-green-200 transition-all group-hover:scale-105"></div>
                     </div>
                      <div className="text-center pt-8">
                         <div className="h-20 w-10 rounded-t-xl bg-green-200/50 transition-all group-hover:h-24"></div>
                     </div>
                      <div className="absolute right-6 top-6 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-gray-100 transition-transform group-hover:scale-110">
                         <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-gray-900">+14% Efficiency</span>
                         </div>
                      </div>
                </div>
            </motion.div>

            {/* Card 3: Advanced Task Tracking */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="group relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
                <div className="mb-8">
                     <div className="mb-6 inline-flex rounded-2xl bg-orange-50 p-3.5 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                        <BarChart3 size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Advanced task tracking</h3>
                    <p className="mt-3 text-base text-gray-500 leading-relaxed">A perfect view of your total behavior and productivity.</p>
                </div>
                 <div className="relative mt-4 h-56 w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-6 transition-colors group-hover:border-orange-100 group-hover:bg-orange-50/30">
                    <div className="space-y-5 pt-2">
                        <div className="flex items-center gap-4">
                            <div className="w-16 text-xs font-bold text-gray-400">Mon</div>
                            <div className="h-2.5 flex-1 rounded-full bg-gray-200 overflow-hidden">
                                <div className="h-full w-3/4 rounded-full bg-orange-400 transition-all duration-1000 group-hover:w-[85%]"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 text-xs font-bold text-gray-400">Tue</div>
                            <div className="h-2.5 flex-1 rounded-full bg-gray-200 overflow-hidden">
                                <div className="h-full w-1/2 rounded-full bg-orange-400 transition-all duration-1000 delay-100 group-hover:w-[60%]"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 text-xs font-bold text-gray-400">Wed</div>
                            <div className="h-2.5 flex-1 rounded-full bg-gray-200 overflow-hidden">
                                <div className="h-full w-full rounded-full bg-orange-400 transition-all duration-1000 delay-200 group-hover:w-[95%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Card 4: Customizable Workspaces */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="group relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
                <div className="mb-8">
                     <div className="mb-6 inline-flex rounded-2xl bg-purple-50 p-3.5 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                        <Layout size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Customizable Workspaces</h3>
                    <p className="mt-3 text-base text-gray-500 leading-relaxed">Personalize your dashboard with widgets, calendars, and unique layouts.</p>
                </div>
                 <div className="relative mt-4 h-56 w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-6 grid grid-cols-2 gap-4 transition-colors group-hover:border-purple-100 group-hover:bg-purple-50/30">
                    <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100 transition-transform group-hover:scale-95">
                        <div className="mb-2 h-2.5 w-12 rounded bg-yellow-400"></div>
                        <div className="text-2xl font-bold text-gray-800">04:21</div>
                    </div>
                    <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100 flex items-center justify-center transition-transform group-hover:scale-95 group-hover:delay-75">
                         <div className="grid grid-cols-2 gap-1.5">
                             <div className="h-2.5 w-2.5 rounded-sm bg-gray-200"></div>
                             <div className="h-2.5 w-2.5 rounded-sm bg-gray-200"></div>
                             <div className="h-2.5 w-2.5 rounded-sm bg-gray-200"></div>
                             <div className="h-2.5 w-2.5 rounded-sm bg-blue-500"></div>
                         </div>
                    </div>
                    <div className="col-span-2 rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100 transition-transform group-hover:scale-95 group-hover:delay-100">
                        <div className="flex gap-2">
                            <div className="h-2 w-full rounded-full bg-gray-100"></div>
                            <div className="h-2 w-1/2 rounded-full bg-gray-100"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="mt-16 text-center">
            <button className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700">
                and a lot more features... 
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Features;