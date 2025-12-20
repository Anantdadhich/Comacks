import React from 'react';
import { Zap, Briefcase, Megaphone, Check, Plus } from 'lucide-react';

export function Services() {
  return (
    <section className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Atmospherics (Matches Hero) --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* 1. Subtle Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
         
         {/* 2. Red Glows (The "Little bit of red") */}
         <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
         <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-red-800/5 blur-[100px] rounded-full mix-blend-screen"></div>
         
         {/* 3. Central Beam */}
         <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-red-900/50 to-transparent hidden md:block"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">System Modules</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Complete Digital Growth Solutions
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            From patient acquisition to retention, we provide end-to-end digital solutions designed for healthcare providers.
          </p>
        </div>

        {/* --- Services Timeline --- */}
        <div className="relative space-y-24 md:space-y-32">
          
          <ServiceItem 
            icon={<Zap className="w-6 h-6 text-white" />} 
            title="AI Automation Systems" 
            description="24/7 lead capture and patient follow-up systems that work while you sleep." 
            items={['Lead Capture Systems', 'Follow-up Automation', 'CRM Integration', 'WhatsApp Automation']} 
            index={1}
          />
          
          <ServiceItem 
            icon={<Briefcase className="w-6 h-6 text-white" />} 
            title="Digital Solutions" 
            description="High-converting websites and landing pages designed for healthcare providers." 
            items={['Clinic Websites', 'Lead Generation Pages', 'CRM Integrations', 'Lead Management']} 
            align="right" 
            index={2}
          />
          
          <ServiceItem 
            icon={<Megaphone className="w-6 h-6 text-white" />} 
            title="Social Media Marketing" 
            description="Strategic paid advertising and social media management for clinics." 
            items={['Paid Ads', 'Social Media Management', 'Content Strategy', 'Local SEO']} 
            index={3}
          />
        
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ icon, title, description, items, align = 'left', index }: { icon: React.ReactNode, title: string, description: string, items: string[], align?: 'left' | 'right', index: number }) {
  const isRight = align === 'right';

  return (
    <div className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isRight ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Central Node Dot (Hidden on Mobile) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center justify-center z-20">
        <div className="w-3 h-3 bg-[#050505] border border-zinc-700 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
        </div>
        <div className="absolute top-6 text-[9px] font-mono text-zinc-700 tracking-widest">0{index}</div>
      </div>

      {/* Text Content Side */}
      <div className={`flex-1 ${isRight ? 'md:text-right items-end' : 'md:text-left items-start'} flex flex-col`}>
        <div className={`w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-md ${isRight ? 'md:ml-auto' : ''}`}>
           {icon}
        </div>
        
        <h3 className="text-3xl font-medium tracking-tight mb-4 text-white">{title}</h3>
        <p className="text-zinc-400 mb-8 leading-relaxed max-w-md">{description}</p>
        
        <ul className={`space-y-4 ${isRight ? 'items-end' : 'items-start'} flex flex-col`}>
          {items.map(item => (
            <li key={item} className={`flex items-center gap-3 text-sm text-zinc-300 tracking-wide ${isRight ? 'flex-row-reverse' : ''}`}>
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-900/20 border border-red-900/30">
                <Check className="w-3 h-3 text-red-400" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual/Image Side */}
      <div className="flex-1 w-full">
        <div className="relative group">
           {/* Decorative Corners */}
           <div className="absolute -top-1 -left-1 text-zinc-700"><Plus strokeWidth={1} className="w-4 h-4" /></div>
           <div className="absolute -top-1 -right-1 text-zinc-700"><Plus strokeWidth={1} className="w-4 h-4" /></div>
           <div className="absolute -bottom-1 -left-1 text-zinc-700"><Plus strokeWidth={1} className="w-4 h-4" /></div>
           <div className="absolute -bottom-1 -right-1 text-zinc-700"><Plus strokeWidth={1} className="w-4 h-4" /></div>

           {/* The Card */}
           <div className="h-64 md:h-80 w-full bg-[#0A0A0A] border border-white/5 relative overflow-hidden transition-all duration-500 hover:border-white/10">
              
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Fake UI Elements for "Tech" feel */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center border-b border-white/5 pb-4">
                  <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                  </div>
                  <div className="h-1 w-12 bg-zinc-800 rounded-full"></div>
              </div>

              {/* Central Abstract Graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 border border-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center">
                       <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                    </div>
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent"></div>
           </div>
        </div>
      </div>

    </div>
  );
}