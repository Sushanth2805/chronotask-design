import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
           >
             Simple, transparent pricing
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
           >
             Start for free, upgrade when you need to. No hidden fees.
           </motion.p>
           
           <div className="mt-10 flex justify-center">
             <div className="relative flex items-center rounded-full bg-gray-100 p-1.5 ring-1 ring-gray-200">
               <button
                 onClick={() => setIsYearly(false)}
                 className={`relative z-10 rounded-full px-8 py-2.5 text-sm font-bold transition-all duration-300 ${!isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
               >
                 Monthly
               </button>
               <button
                 onClick={() => setIsYearly(true)}
                 className={`relative z-10 rounded-full px-8 py-2.5 text-sm font-bold transition-all duration-300 ${isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
               >
                 Yearly
               </button>
               <div className="absolute -right-24 top-1/2 -translate-y-1/2 hidden sm:block">
                  <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-lg border border-orange-100 transform -rotate-6 shadow-sm">
                    Save 20%
                  </span>
               </div>
             </div>
           </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto items-center">
           {/* Starter Plan */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-col rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
           >
              <h3 className="text-xl font-bold text-gray-900">Starter</h3>
              <p className="mt-2 text-sm text-gray-500">Essential tools for individuals.</p>
              <div className="mt-6 flex items-baseline gap-1">
                 <span className="text-4xl font-extrabold tracking-tight text-gray-900">$0</span>
                 <span className="text-sm font-semibold text-gray-500">/mo</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                 {['Up to 3 projects', 'Basic task management', '7-day activity history', 'Mobile app access'].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                       <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                          <Check size={12} className="text-gray-600" />
                       </div>
                       <span className="text-sm font-medium text-gray-600">{feature}</span>
                    </li>
                 ))}
              </ul>
              <button className="mt-8 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all">Get Started</button>
           </motion.div>

           {/* Pro Plan */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="relative flex flex-col rounded-[2rem] border border-orange-500 bg-gray-900 p-8 shadow-2xl shadow-orange-900/20 transform lg:scale-110 z-10"
           >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg flex items-center gap-1.5">
                      <Sparkles size={12} /> Most Popular
                  </div>
              </div>
              <h3 className="text-xl font-bold text-white">Pro</h3>
              <p className="mt-2 text-sm text-orange-200">For growing teams and startups.</p>
              <div className="mt-6 flex items-baseline gap-1">
                 <span className="text-5xl font-extrabold tracking-tight text-white">${isYearly ? '12' : '15'}</span>
                 <span className="text-sm font-semibold text-orange-200">/mo</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                 {['Unlimited projects', 'Timeline & Calendar views', 'Advanced analytics', 'Integrations (Jira, Slack)', 'Priority support'].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                       <div className="flex-shrink-0 h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center mt-0.5">
                          <Check size={12} className="text-white" />
                       </div>
                       <span className="text-sm font-medium text-orange-50">{feature}</span>
                    </li>
                 ))}
              </ul>
              <button className="mt-8 w-full rounded-xl bg-orange-600 px-4 py-3.5 text-sm font-bold text-white hover:bg-orange-500 shadow-lg shadow-orange-500/40 transition-all hover:scale-[1.02]">Start Free Trial</button>
           </motion.div>

           {/* Business Plan */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="flex flex-col rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
           >
              <h3 className="text-xl font-bold text-gray-900">Business</h3>
              <p className="mt-2 text-sm text-gray-500">For scaling organizations.</p>
              <div className="mt-6 flex items-baseline gap-1">
                 <span className="text-4xl font-extrabold tracking-tight text-gray-900">${isYearly ? '29' : '39'}</span>
                 <span className="text-sm font-semibold text-gray-500">/mo</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                 {['Everything in Pro', 'SSO & Advanced Security', 'Unlimited guest access', 'Dedicated success manager', 'Custom invoicing'].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                       <div className="flex-shrink-0 h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                          <Check size={12} className="text-orange-600" />
                       </div>
                       <span className="text-sm font-medium text-gray-600">{feature}</span>
                    </li>
                 ))}
              </ul>
              <button className="mt-8 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all">Contact Sales</button>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;