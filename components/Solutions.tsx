import React from 'react';
import { Search, Bell, Menu, Plus, CheckCircle2, Circle, Clock, MoreVertical, Play, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 blur-3xl rounded-full"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-4 inline-flex items-center rounded-full bg-orange-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-orange-600 border border-orange-100 backdrop-blur-sm"
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
           initial={{ opacity: 0, y: 50, scale: 0.95 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative mx-auto max-w-6xl"
        >
           {/* Glow Effect */}
           <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-b from-orange-200 to-white opacity-40 blur-2xl"></div>

           {/* Mockup Frame */}
           <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_30px_60px_-12px_rgba(50,50,93,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)]">
             
             {/* Window Controls */}
             <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/80 px-6 py-4 backdrop-blur-sm">
                <div className="flex gap-2">
                   <div className="h-3 w-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
                   <div className="h-3 w-3 rounded-full bg-[#febc2e] border border-[#d89e24]"></div>
                   <div className="h-3 w-3 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
                </div>
                <div className="flex h-9 w-96 items-center rounded-lg bg-white px-3 shadow-sm border border-gray-200/60 transition-colors focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100">
                   <Search size={14} className="text-gray-400 mr-2" />
                   <div className="text-xs text-gray-400 font-medium">Search for tasks, projects...</div>
                   <div className="ml-auto flex gap-1">
                      <div className="h-5 w-5 rounded bg-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-bold">⌘</div>
                      <div className="h-5 w-5 rounded bg-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-bold">K</div>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors cursor-pointer relative">
                        <Bell size={16} />
                        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 ring-2 ring-white shadow-sm"></div>
                </div>
             </div>

             {/* Inner Content - Removed fixed height and internal scroll */}
             <div className="flex bg-white min-h-[600px]">
                 {/* Sidebar */}
                 <div className="hidden w-64 flex-col border-r border-gray-100 bg-gray-50/50 p-5 md:flex">
                    <div className="mb-6 flex items-center gap-2 px-2">
                         <div className="h-6 w-6 rounded bg-orange-600 flex items-center justify-center text-white"><CheckCircle2 size={16} /></div>
                         <span className="font-bold text-gray-900 text-sm">Workspace</span>
                         <Menu size={16} className="ml-auto text-gray-400" />
                    </div>
                    
                    <div className="space-y-6">
                       <div className="space-y-1">
                          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-orange-50 text-orange-700 font-medium text-sm">
                             <Calendar size={16} />
                             <span>Today</span>
                             <span className="ml-auto text-xs bg-orange-100 px-1.5 py-0.5 rounded">4</span>
                          </div>
                          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium text-sm">
                             <CheckCircle2 size={16} />
                             <span>Completed</span>
                          </div>
                          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium text-sm">
                             <Clock size={16} />
                             <span>Upcoming</span>
                          </div>
                       </div>

                       <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between px-3 mb-2">
                              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Projects</span>
                              <Plus size={14} className="text-gray-400 cursor-pointer hover:text-gray-900" />
                          </div>
                          <div className="space-y-1">
                             {['Website Redesign', 'Q4 Marketing', 'Mobile App'].map((p, i) => (
                                 <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors text-sm">
                                     <div className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-amber-500' : i === 1 ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                                     <span>{p}</span>
                                 </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Main Area - Removed overflow-y-auto */}
                 <div className="flex-1 bg-white">
                    <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                         <div>
                             <h3 className="text-xl font-bold text-gray-900">Website Redesign</h3>
                             <p className="text-xs text-gray-500 mt-1">Design System • Due Oct 24</p>
                         </div>
                         <div className="flex items-center gap-3">
                             <div className="flex -space-x-2">
                                {[1,2,3].map(i => <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"></div>)}
                                <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">+2</div>
                             </div>
                             <button className="h-8 px-3 rounded-md bg-orange-600 text-white text-sm font-medium shadow-sm hover:bg-orange-700">Share</button>
                         </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-3 gap-6">
                           {/* Card 1: Task List */}
                           <div className="col-span-2 rounded-2xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-white">
                              <div className="mb-6 flex items-center justify-between">
                                  <h4 className="font-bold text-gray-900">In Progress</h4>
                                  <MoreVertical size={16} className="text-gray-400" />
                              </div>
                              <div className="space-y-4">
                                 {[
                                   { title: "Homepage Hero Section", tag: "Design", color: "text-amber-600 bg-amber-50" },
                                   { title: "Mobile Navigation Logic", tag: "Dev", color: "text-orange-600 bg-orange-50" },
                                   { title: "Copywriting for Features", tag: "Copy", color: "text-green-600 bg-green-50" }
                                 ].map((task, i) => (
                                   <div key={i} className="group flex items-center gap-4 rounded-xl border border-gray-50 bg-gray-50/50 p-4 transition-all hover:bg-white hover:border-orange-100 hover:shadow-md cursor-pointer">
                                      <Circle size={20} className="text-gray-300 group-hover:text-orange-500 transition-colors" />
                                      <div className="flex-1">
                                         <div className="font-semibold text-gray-800 text-sm">{task.title}</div>
                                      </div>
                                      <span className={`px-2 py-1 rounded text-xs font-bold ${task.color}`}>{task.tag}</span>
                                      <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                                   </div>
                                 ))}
                              </div>
                           </div>
                           
                           {/* Card 2: Progress Circle */}
                           <div className="col-span-1 rounded-2xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-gradient-to-b from-white to-gray-50">
                              <h4 className="font-bold text-gray-900 mb-4">Sprint Velocity</h4>
                              <div className="relative mx-auto h-40 w-40 flex items-center justify-center">
                                  <svg className="h-full w-full -rotate-90 transform">
                                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
                                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={440} strokeDashoffset={110} className="text-orange-600" />
                                  </svg>
                                  <div className="absolute flex flex-col items-center">
                                      <span className="text-3xl font-bold text-gray-900">75%</span>
                                      <span className="text-xs text-gray-500 font-medium">Completed</span>
                                  </div>
                              </div>
                           </div>
                           
                           {/* Card 3: Timeline */}
                           <div className="col-span-3 rounded-2xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-white">
                              <div className="flex items-center justify-between mb-6">
                                  <h4 className="font-bold text-gray-900">Timeline</h4>
                                  <div className="flex gap-2">
                                      <div className="h-8 w-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"><Play size={14} /></div>
                                  </div>
                              </div>
                              <div className="relative h-24">
                                  <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100"></div>
                                  <div className="flex justify-between relative z-10 pt-8">
                                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                                          <div key={day} className="flex flex-col items-center gap-2">
                                              <div className={`h-3 w-3 rounded-full border-2 border-white ring-2 ${i === 2 ? 'bg-orange-600 ring-orange-100' : 'bg-gray-300 ring-gray-100'}`}></div>
                                              <span className={`text-xs font-medium ${i === 2 ? 'text-orange-600' : 'text-gray-400'}`}>{day}</span>
                                          </div>
                                      ))}
                                  </div>
                                  {/* Timeline Bars */}
                                  <div className="absolute top-[40%] left-[10%] w-[30%] h-8 rounded-lg bg-teal-100 border border-teal-200 opacity-80 flex items-center px-3">
                                      <span className="text-xs font-bold text-teal-700">Design</span>
                                  </div>
                                  <div className="absolute top-[40%] left-[45%] w-[40%] h-8 rounded-lg bg-orange-100 border border-orange-200 opacity-80 flex items-center px-3">
                                      <span className="text-xs font-bold text-orange-700">Development</span>
                                  </div>
                              </div>
                           </div>
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