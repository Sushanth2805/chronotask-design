import React from 'react';
import { motion } from 'framer-motion';

// Brand Icons as Components for cleaner usage
const Icons = {
  GoogleDrive: () => (
    <svg viewBox="0 0 87.3 78" className="h-8 w-8">
      <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
      <path d="M43.65 25l13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2l-13.75 23.8h27.5z" fill="#00ac47"/>
      <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l3.85-6.65c.8-1.4 1.2-2.95 1.2-4.5h-27.5l13.75 23.8c1.55 0 3.1-.4 4.5-1.2z" fill="#ea4335"/>
      <path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-20 34.6c-.8 1.4-1.2 2.95-1.2 4.5h27.5L43.65 25z" fill="#00832d"/>
      <path d="M43.65 25H16.15l-13.75 23.8c.8 1.4 1.95 2.5 3.3 3.3l20 34.6c.8 1.4 2.35 2.3 4.5 1.2l13.75-23.8H43.65z" fill="#2684fc"/>
      <path d="M73.55 76.8l-20-34.6 13.75-23.8h27.5c0 1.55-.4 3.1-1.2 4.5l-20 34.6c-.8 1.4-1.95 2.5-3.3 3.3z" fill="#ffba00"/>
    </svg>
  ),
  Adobe: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#FF0000">
      <path d="M15.1 2H24v20L15.1 2zM8.9 2H0v20L8.9 2zM12 9.4L17.6 22h-2.9l-1.5-4h-2.5l-1.5 4H6.4L12 9.4z"/>
    </svg>
  ),
  Jira: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#0052CC">
      <path d="M11.571 11.524 6.024 16.929a.834.834 0 0 1-1.166 0 .8.8 0 0 1 0-1.152l5.523-5.381a.834.834 0 0 1 1.166 0 .8.8 0 0 1 .024 1.128ZM11.452 5.31l-5.452 5.333a.834.834 0 0 1-1.166 0 .8.8 0 0 1 0-1.153l5.452-5.333a.834.834 0 0 1 1.166 0 .8.8 0 0 1 0 1.153Zm12.453 10.738-5.429 5.31a.834.834 0 0 1-1.167 0 .8.8 0 0 1 0-1.153l5.429-5.31a.834.834 0 0 1 1.167 0 .8.8 0 0 1 0 1.153Zm.047-5.357-5.428 5.333a.834.834 0 0 1-1.167 0 .8.8 0 0 1 0-1.152l5.428-5.334a.834.834 0 0 1 1.167 0 .8.8 0 0 1 0 1.153Z"/>
    </svg>
  ),
  Gmail: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8">
      <path d="M24 5.4v13.2c0 1.5-1.2 2.8-2.8 2.8H2.8C1.2 21.4 0 20.2 0 18.6V5.4l12 9 12-9zM24 2.4l-12 9-12-9H24z" fill="#EA4335"/>
      <path d="M24 5.4l-12 9-12-9v13.2c0 1.5 1.2 2.8 2.8 2.8h18.4c1.5 0 2.8-1.2 2.8-2.8V5.4z" fill="#EA4335" fillOpacity="0.1"/>
      <path d="M20 19H4v-9l8 6 8-6v9z" fill="#EA4335"/>
      <g>
        <path d="M2.8 2.4H21.2c1.5 0 2.8 1.2 2.8 2.8v.2L12 14.4 0 5.4v-.2c0-1.5 1.2-2.8 2.8-2.8z" fill="#c5221f"/>
      </g>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 38 57" className="h-8 w-6">
      <path fill="#19BCFE" d="M19 28.5a9.5 9.5 0 1 1 9.5-9.5 9.5 9.5 0 0 1-9.5 9.5z"/>
      <path fill="#0ACF83" d="M0 47.5a9.5 9.5 0 0 0 9.5 9.5h.095A9.405 9.405 0 0 0 19 47.5V38H9.5a9.5 9.5 0 0 0-9.5 9.5z"/>
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
    </svg>
  ),
  Outlook: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#0078D4">
       <rect x="2" y="2" width="20" height="20" rx="4" fill="#0078D4"/>
       <path d="M17 10.5V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2.5l-4.5 2.5-4.5-2.5V10l4.5 2.5 4.5-2z" fill="white"/>
    </svg>
  ),
  Slack: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8">
      <path d="M5.042 15.123a2.52 2.52 0 0 1 2.52-2.52h2.52v2.52a2.52 2.52 0 0 1-5.04 0zm0-3.359h2.52V9.242a2.52 2.52 0 1 1-2.52 2.522zm3.361-6.72a2.52 2.52 0 0 1 2.521 2.521v2.52h-2.52a2.52 2.52 0 1 1 0-5.041zm3.36 0v2.52h2.52a2.52 2.52 0 1 1-2.52-2.52zm0 6.721a2.52 2.52 0 0 1 2.52 2.52v2.521h-2.52a2.52 2.52 0 1 1 0-5.041zm0 3.36h-2.52v2.52a2.52 2.52 0 1 1 2.52-2.52zm6.72-3.36a2.52 2.52 0 0 1-2.52 2.52h-2.521v-2.52a2.52 2.52 0 1 1 5.042 0zM15.122 8.4a2.52 2.52 0 0 1-2.52 2.52v-2.52a2.52 2.52 0 1 1 2.52 0z" fill="#000"/>
      <path fill="#E01E5A" d="M5.042 15.123a2.52 2.52 0 0 1 2.52-2.52h2.52v2.52a2.52 2.52 0 0 1-5.04 0z"/>
      <path fill="#36C5F0" d="M8.403 11.764h2.52V9.242a2.52 2.52 0 1 1-2.52 2.522z"/>
      <path fill="#2EB67D" d="M8.403 5.044a2.52 2.52 0 0 1 2.521 2.521v2.52h-2.52a2.52 2.52 0 1 1 0-5.041z"/>
      <path fill="#ECB22E" d="M11.763 5.044v2.52h2.52a2.52 2.52 0 1 1-2.52-2.52z"/>
    </svg>
  ),
  Teams: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#4B53BC">
        <path d="M16.5 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
        <path d="M13.5 15.5c0-2 1.5-3 3-3h.5c1.5 0 3 1 3 3v.5a1.5 1.5 0 0 1-1.5 1.5h-3.5a1.5 1.5 0 0 1-1.5-1.5v-.5z" opacity=".7"/>
        <path d="M9.5 8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"/>
        <path d="M4 19.5c0-2.5 2-4 4.5-4h2c2.5 0 4.5 1.5 4.5 4v1a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 20.5v-1z"/>
    </svg>
  ),
  Salesforce: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#00A1E0">
      <path d="M16.1 9c.4 0 .9-.1 1.3-.2C17 6.1 14.8 4 12.1 4c-2.3 0-4.3 1.6-4.9 3.8-.5-.1-1-.2-1.6-.2-2.6 0-4.8 1.9-5.1 4.4C.2 12.6 0 13.3 0 14c0 3.3 2.7 6 6 6h10.9c3.9 0 7.1-3.1 7.1-7 0-3.8-3.1-6.9-6.9-7-1-1.8-2.9-3-5-3z"/>
    </svg>
  ),
  Zendesk: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#03363D">
      <path d="M10 2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0zM22 6a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4v1h10V6zM6 6a4 4 0 0 0-4 4v7h10v-7a4 4 0 0 0-4-4H6z"/>
      <path d="M12 11h10v7a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-7zM2 11h8v7a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-7z" fill="#03363D" fillOpacity="0.5"/>
    </svg>
  ),
  HubSpot: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#FF7A59">
       <path d="M10.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM18 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM14.25 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM6 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM10.5 13.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM10.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
       <path d="M10.5 6v4.5h3.75v3h3.75V6H10.5z" opacity="0.6"/>
    </svg>
  ),
  Intercom: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#000000">
      <rect x="2" y="5" width="4" height="14" rx="2" />
      <rect x="8" y="2" width="4" height="20" rx="2" />
      <rect x="14" y="6" width="4" height="12" rx="2" />
      <path d="M20 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  ),
  GoogleCalendar: () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8">
       <rect x="2" y="4" width="20" height="18" rx="2" fill="white" stroke="#4285F4" strokeWidth="2"/>
       <path d="M16 2v4M8 2v4" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
       <rect x="4" y="8" width="16" height="2" fill="#4285F4"/>
       <path d="M16 16l-3 3-2-2" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  QuickBooks: () => (
     <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#2CA01C">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
     </svg>
  )
};

const IntegrationCard = ({ icon: Icon, name }: { icon: any; name: string }) => (
  <div className="group relative z-20 flex h-24 w-24 cursor-pointer items-center justify-center rounded-3xl border border-gray-100 bg-white shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 hover:border-orange-100 hover:shadow-xl hover:shadow-orange-900/10">
    <div className="transform transition-transform group-hover:scale-110">
        <Icon />
    </div>
    {/* Tooltip */}
    <div className="absolute -bottom-12 left-1/2 w-max -translate-x-1/2 rounded-full bg-gray-900 px-4 py-2 text-xs font-bold text-white opacity-0 transition-all duration-200 group-hover:bottom-[-50px] group-hover:opacity-100">
        {name}
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900"></div>
    </div>
  </div>
);

const Integrations: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-orange-600 border border-orange-100"
        >
          Integrations
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
        >
          Connects with <br/> your favorite tools
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto mb-16"
        >
            Streamline your workflow by integrating ChronoTask with the apps you use every day.
        </motion.p>

        {/* Connection Tree Container */}
        <div className="relative mx-auto mt-12 max-w-6xl">
           
           {/* Central Hub */}
           <div className="relative z-30 mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-[2.5rem] bg-gray-900 shadow-2xl shadow-orange-900/20 ring-4 ring-white">
               <div className="grid grid-cols-2 gap-2">
                    <div className="h-3.5 w-3.5 rounded-full bg-orange-500 animate-pulse"></div>
                    <div className="h-3.5 w-3.5 rounded-full bg-amber-500 animate-pulse delay-75"></div>
                    <div className="h-3.5 w-3.5 rounded-full bg-red-500 animate-pulse delay-150"></div>
                    <div className="h-3.5 w-3.5 rounded-full bg-yellow-500 animate-pulse delay-200"></div>
               </div>
               
               {/* Vertical Line Down from Hub */}
               <div className="absolute top-full left-1/2 h-10 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200"></div>
           </div>

           {/* Branching Lines Structure */}
           <div className="relative mx-auto mb-10 max-w-[880px]">
               {/* Main Horizontal Line */}
               <div className="absolute -top-2 left-0 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>
               
               {/* Vertical Connectors to Row 1 Cards */}
               <div className="flex justify-between px-4 sm:px-10">
                   {[...Array(7)].map((_, i) => (
                       <div key={i} className="relative flex w-20 justify-center">
                           <div className="absolute -top-2 h-8 w-px bg-gradient-to-b from-gray-300 to-transparent opacity-50"></div>
                           {/* Small pulsating dot at connection point */}
                           <div className="absolute -top-2.5 h-1.5 w-1.5 rounded-full bg-orange-500 animate-ping opacity-75" style={{ animationDelay: `${i * 0.2}s` }}></div>
                           <div className="absolute -top-2.5 h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                       </div>
                   ))}
               </div>
           </div>

           {/* Row 1 Icons */}
           <div className="mb-10 flex flex-wrap justify-center gap-6 md:gap-12 relative z-20">
               <IntegrationCard name="Google Drive" icon={Icons.GoogleDrive} />
               <IntegrationCard name="Creative Cloud" icon={Icons.Adobe} />
               <IntegrationCard name="Jira" icon={Icons.Jira} />
               <IntegrationCard name="Gmail" icon={Icons.Gmail} />
               <IntegrationCard name="Figma" icon={Icons.Figma} />
               <IntegrationCard name="Outlook" icon={Icons.Outlook} />
               <IntegrationCard name="Slack" icon={Icons.Slack} />
           </div>

            {/* Row 2 Icons */}
           <div className="flex flex-wrap justify-center gap-6 md:gap-12 relative z-20">
               <IntegrationCard name="Microsoft Teams" icon={Icons.Teams} />
               <IntegrationCard name="Salesforce" icon={Icons.Salesforce} />
               <IntegrationCard name="Zendesk" icon={Icons.Zendesk} />
               <IntegrationCard name="HubSpot" icon={Icons.HubSpot} />
               <IntegrationCard name="Intercom" icon={Icons.Intercom} />
               <IntegrationCard name="Google Calendar" icon={Icons.GoogleCalendar} />
               <IntegrationCard name="QuickBooks" icon={Icons.QuickBooks} />
           </div>

        </div>
      </div>
    </section>
  );
};

export default Integrations;