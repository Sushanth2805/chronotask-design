import React from 'react';
import { Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, name, role, avatar, className, dark = false, delay = 0 }: { quote: string; name: string; role: string; avatar: string; className?: string; dark?: boolean; delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`flex flex-col justify-between rounded-[2rem] p-8 shadow-sm transition-all hover:shadow-xl ${dark ? 'bg-gray-900 text-white ring-0' : 'bg-white ring-1 ring-gray-100'} ${className}`}
  >
    <div className="mb-6 flex gap-1">
        {[1,2,3,4,5].map(i => <Star key={i} size={14} className={dark ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 fill-yellow-400"} />)}
    </div>
    <p className={`mb-6 text-lg font-medium leading-relaxed ${dark ? 'text-gray-200' : 'text-gray-700'}`}>"{quote}"</p>
    <div className="flex items-center gap-4 mt-auto">
      <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20 shadow-sm" />
      <div>
        <h4 className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{name}</h4>
        <p className={`text-xs font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Social Proof Header */}
        <div className="mb-24 text-center">
             <p className="mb-8 text-sm font-bold uppercase tracking-wider text-gray-400">Trusted by 2,000+ teams worldwide</p>
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
                 {/* Better looking placeholders */}
                 <div className="text-2xl font-bold font-serif text-gray-800 tracking-tight">Acme<span className="text-gray-400">Corp</span></div>
                 <div className="text-xl font-bold font-sans tracking-tighter text-gray-900 flex items-center gap-1"><div className="h-4 w-4 bg-gray-900 rounded-full"></div>GlobalBank</div>
                 <div className="text-xl font-bold font-mono text-gray-700 border border-gray-800 px-2 py-1 rounded">CODE_LAB</div>
                 <div className="text-xl font-black italic text-gray-800 tracking-wide">NEXA</div>
                 <div className="flex items-center gap-2 text-xl font-bold tracking-widest text-gray-800"><div className="h-6 w-6 border-2 border-gray-800 rounded-md"></div>VISION</div>
             </div>
        </div>

        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Loved by product teams, designers, and founders
          </h2>
          <p className="text-lg text-gray-600">See how high-performing teams use ChronoTask to get more done.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            
            {/* 1. Marketing Lead */}
            <TestimonialCard 
                className="lg:col-span-1 bg-gradient-to-br from-white to-blue-50/30"
                quote="This task manager has completely transformed the way my team works. We are organized like never before!"
                name="Liam P."
                role="Marketing Lead"
                avatar="https://picsum.photos/100/100?random=20"
                delay={0.1}
            />

            {/* 2. Designer */}
            <TestimonialCard 
                 className="lg:col-span-1"
                quote="An essential tool for anyone looking to manage their tasks better. The UI is simply beautiful."
                name="Sarah M."
                role="Freelance Designer"
                avatar="https://picsum.photos/100/100?random=21"
                delay={0.2}
            />

            {/* 3. Project Coordinator */}
             <TestimonialCard 
                 className="lg:col-span-1"
                quote="The built-in analytics give us a complete overview of our team's productivity."
                name="Ben J."
                role="Project Coordinator"
                avatar="https://picsum.photos/100/100?random=22"
                delay={0.3}
            />

            {/* 4. Video Testimonial */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="relative overflow-hidden rounded-[2rem] bg-gray-900 lg:col-span-1 lg:row-span-2 group cursor-pointer shadow-xl shadow-gray-900/10"
             >
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Video thumbnail" className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:scale-110">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-900 shadow-xl">
                            <Play size={24} className="ml-1 fill-current" />
                        </div>
                    </div>
                 </div>
                 <div className="absolute bottom-8 left-8 right-8">
                     <span className="mb-3 inline-block rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white tracking-wider">CASE STUDY</span>
                     <p className="text-xl font-bold text-white leading-tight">How Global Tech Inc. scaled output by 300% in 6 months</p>
                 </div>
            </motion.div>


            {/* 5. Operations Manager */}
            <TestimonialCard 
                className="lg:col-span-1"
                quote="The time-tracking feature has been a game changer for us. It helps us stay profitable."
                name="Emma T."
                role="Operations Manager"
                avatar="https://picsum.photos/100/100?random=23"
                delay={0.5}
            />
            
            {/* 6. Freelance Developer */}
            <TestimonialCard 
                 className="lg:col-span-2"
                 dark={true}
                quote="I have tried so many tools, and none felt this effortless. The platform interface makes work feel less overwhelming and actually enjoyable."
                name="Finn W."
                role="Software Architect"
                avatar="https://picsum.photos/100/100?random=24"
                delay={0.6}
            />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;