import React from 'react';
import { Play } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, avatar, className, dark = false }: { quote: string; name: string; role: string; avatar: string; className?: string; dark?: boolean }) => (
  <div className={`flex flex-col justify-between rounded-[2rem] p-8 shadow-sm transition-shadow hover:shadow-md ${dark ? 'bg-blue-600 text-white ring-0' : 'bg-white ring-1 ring-gray-100'} ${className}`}>
    <p className={`mb-6 text-base leading-relaxed ${dark ? 'text-blue-50' : 'text-gray-600'}`}>"{quote}"</p>
    <div className="flex items-center gap-4">
      <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20 shadow-sm" />
      <div>
        <h4 className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{name}</h4>
        <p className={`text-xs font-medium ${dark ? 'text-blue-200' : 'text-gray-500'}`}>{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Social Proof Header */}
        <div className="mb-20 text-center">
             <p className="mb-8 text-sm font-bold uppercase tracking-wider text-gray-400">Trusted by 500+ innovative teams</p>
             <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale transition-all duration-500 hover:opacity-70 hover:grayscale-0">
                 {/* Placeholder Company Logos */}
                 <div className="text-xl font-bold font-serif text-gray-800">Acme Corp</div>
                 <div className="text-xl font-bold font-sans tracking-tighter text-gray-800">GlobalBank</div>
                 <div className="text-xl font-bold font-mono text-gray-800">codelab</div>
                 <div className="text-xl font-bold italic text-gray-800">NexaStream</div>
                 <div className="text-xl font-bold tracking-widest text-gray-800">VISION</div>
             </div>
        </div>

        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gray-500 shadow-sm ring-1 ring-gray-200">
             Testimonials
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            People just like you <br/> are already using ChronoTask
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            
            {/* 1. Marketing Lead */}
            <TestimonialCard 
                className="lg:col-span-1 bg-gradient-to-b from-white to-blue-50/30"
                quote="This task manager has completely transformed the way my team works. We are organized like never before!"
                name="Liam P."
                role="Marketing Lead"
                avatar="https://picsum.photos/100/100?random=20"
            />

            {/* 2. Designer */}
            <TestimonialCard 
                 className="lg:col-span-1"
                quote="An essential tool for anyone looking to manage their tasks better. The UI is simply beautiful."
                name="Sarah M."
                role="Freelance Designer"
                avatar="https://picsum.photos/100/100?random=21"
            />

            {/* 3. Project Coordinator */}
             <TestimonialCard 
                 className="lg:col-span-1"
                quote="The built-in analytics give us a complete overview of our team's productivity."
                name="Ben J."
                role="Project Coordinator"
                avatar="https://picsum.photos/100/100?random=22"
            />

            {/* 4. Video Testimonial - Spans 2 rows on right if desired, or fit in grid */}
             <div className="relative overflow-hidden rounded-[2rem] bg-black lg:col-span-1 lg:row-span-2 group cursor-pointer shadow-lg">
                 <img src="https://picsum.photos/400/600?random=25" alt="Video thumbnail" className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl">
                            <Play size={24} className="ml-1 text-gray-900" fill="currentColor" />
                        </div>
                    </div>
                 </div>
                 <div className="absolute bottom-8 left-8">
                     <span className="mb-2 inline-block rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">CASE STUDY</span>
                     <p className="text-xl font-bold text-white">How Global Tech Inc. scaled 3x faster</p>
                 </div>
            </div>


            {/* 5. Operations Manager */}
            <TestimonialCard 
                className="lg:col-span-1"
                quote="The time-tracking feature has been a game changer for us. It helps us stay profitable."
                name="Emma T."
                role="Operations Manager"
                avatar="https://picsum.photos/100/100?random=23"
            />
            
            {/* 6. Freelance Developer */}
            <TestimonialCard 
                 className="lg:col-span-2"
                 dark={true}
                quote="I have tried so many tools, and none felt this effortless. The platform interface makes work feel less overwhelming and actually enjoyable."
                name="Finn W."
                role="Freelance Developer"
                avatar="https://picsum.photos/100/100?random=24"
            />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;