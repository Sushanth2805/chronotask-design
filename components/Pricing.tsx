import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
             className="mt-4 text-xl text-gray-600"
           >
             Choose the plan that's right for your team.
           </motion.p>
           
           <div className="mt-10 flex justify-center">
             <div className="relative flex items-center rounded-full bg-gray-100 p-1 ring-1 ring-gray-200">
               <button
                 onClick={() => setIsYearly(false)}
                 className={`relative z-10 rounded-full px-8 py-2.5 text-sm font-bold transition-all ${!isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
               >
                 Monthly
               </button>
               <button
                 onClick={() => setIsYearly(true)}
                 className={`relative z-10 rounded-full px-8 py-2.5 text-sm font-bold transition-all ${isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
               >
                 Yearly
               </button>
               <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden sm:block">
                  <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg border border-green-100 transform -rotate-12">
                    Save 20%
                  </span>
               </div>
             </div>
           </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
           {/* Starter Plan */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
           >
              <h3 className="text-xl font-bold text-gray-900">Starter</h3>
              <p className="mt-2 text-sm text-gray-500">Perfect for individuals.</p>
              <div className="mt-6 flex items-baseline gap-1">
                 <span className="text-4xl font-extrabold tracking-tight text-gray-900">$0</span>
                 <span className="text-sm font-semibold text-gray-500">/mo</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                 {['Up to 3 projects', 'Basic task management', '7-day activity history', 'Mobile app access'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                       <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <Check size={12} className="text-blue-600" />
                       </div>
                       <span className="text-sm font-medium text-gray-600">{feature}</span>
                    </li>
                 ))}
              </ul>
              <button className="mt-8 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors">Get Started</button>
           </motion.div>

           {/* Pro Plan */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="relative flex flex-col rounded-3xl border border-blue-600 bg-gray-900 p-8 shadow-2xl shadow-blue-900/20 transform scale-105 z-10"
           >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg">Most Popular</div>
              <h3 className="text-xl font-bold text-white">Pro</h3>
              <p className="mt-2 text-sm text-blue-200">For growing teams.</p>
              <div className="mt-6 flex items-baseline gap-1">
                 <span className="text-5xl font-extrabold tracking-tight text-white">${isYearly ? '12' : '15'}</span>
                 <span className="text-sm font-semibold text-blue-200">/mo</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                 {['Unlimited projects', 'Timeline & Calendar views', 'Advanced analytics', 'Integrations (Jira, Slack)', 'Priority support'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                       <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
                          <Check size={12} className="text-white" />
                       </div>
                       <span className="text-sm font-medium text-blue-50">{feature}</span>
                    </li>
                 ))}
              </ul>
              <button className="mt-8 w-full rounded-2xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white hover:bg-blue-500 shadow-lg shadow-blue-500/40 transition-all hover:scale-[1.02]">Start Free Trial</button>
           </motion.div>

           {/* Business Plan */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
           >
              <h3 className="text-xl font-bold text-gray-900">Business</h3>
              <p className="mt-2 text-sm text-gray-500">For large organizations.</p>
              <div className="mt-6 flex items-baseline gap-1">
                 <span className="text-4xl font-extrabold tracking-tight text-gray-900">${isYearly ? '29' : '39'}</span>
                 <span className="text-sm font-semibold text-gray-500">/mo</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                 {['Everything in Pro', 'SSO & Advanced Security', 'Unlimited guest access', 'Dedicated success manager', 'Custom invoicing'].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                       <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <Check size={12} className="text-blue-600" />
                       </div>
                       <span className="text-sm font-medium text-gray-600">{feature}</span>
                    </li>
                 ))}
              </ul>
              <button className="mt-8 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors">Contact Sales</button>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;