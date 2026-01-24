import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-100">
      <button 
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-semibold text-gray-900">{question}</span>
        {isOpen ? <Minus size={20} className="text-orange-600" /> : <Plus size={20} className="text-gray-400" />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
       <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Frequently asked questions</h2>
          </div>
          <div className="space-y-2">
             <FAQItem 
               question="Is there a free trial available?" 
               answer="Yes, you can try our Pro plan for free for 14 days. No credit card required." 
             />
             <FAQItem 
               question="Can I change my plan later?" 
               answer="Absolutely. You can upgrade or downgrade your plan at any time from your account settings." 
             />
             <FAQItem 
               question="What kind of support do you offer?" 
               answer="We offer email support for all plans, and priority live chat support for Pro and Business plans." 
             />
             <FAQItem 
               question="Does ChronoTask work offline?" 
               answer="Yes, our mobile and desktop apps support offline mode. Your changes will sync once you're back online." 
             />
          </div>
       </div>
    </section>
  );
};

export default FAQ;