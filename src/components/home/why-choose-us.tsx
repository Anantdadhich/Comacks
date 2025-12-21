import React from 'react';
import { CheckCircle, Award, Users, ShieldCheck, Plus } from 'lucide-react';
import { AnimatedSection } from '../ui/animated-section';

export function WhyChooseUs() {
  return (
    <AnimatedSection className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Atmospherics --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Central Red Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-900/15 blur-[120px] rounded-full mix-blend-screen"></div>
          
          {/* Vertical Lines */}
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block"></div>
          <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Partnership Protocols</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            We're Invested In Your Success
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            We believe in a partnership approach where our success is directly tied to yours. That's why we offer guarantees that other agencies don't.
          </p>
        </div>

        {/* --- Feature Grid --- */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <FeatureCard 
            icon={<Award className="w-6 h-6" />} 
            title="No Results, No Pay" 
            description="We're so confident in our ability to deliver that if you don't see results, you don't pay."
            step="01"
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-6 h-6" />} 
            title="Free Setup & Onboarding" 
            description="We handle all the technical details so you can focus on what you do best—caring for patients."
            step="02"
          />
          <FeatureCard 
            icon={<Users className="w-6 h-6" />} 
            title="Personalized Growth Plan" 
            description="Every clinic is unique. We create custom strategies that align with your specific goals."
            step="03"
          />
        </div>

        {/* --- Large Metric Block --- */}
        <div className="relative rounded-xl border border-white/5 bg-[#0A0A0A] overflow-hidden group">
           
           {/* Decorative Tech Elements */}
           <div className="absolute top-4 left-4 text-zinc-800"><Plus strokeWidth={1} className="w-4 h-4" /></div>
           <div className="absolute top-4 right-4 text-zinc-800"><Plus strokeWidth={1} className="w-4 h-4" /></div>
           <div className="absolute bottom-4 left-4 text-zinc-800"><Plus strokeWidth={1} className="w-4 h-4" /></div>
           <div className="absolute bottom-4 right-4 text-zinc-800"><Plus strokeWidth={1} className="w-4 h-4" /></div>

           {/* Inner Background */}
           <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 delay-200 group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]"></div>
           <div className="absolute inset-0 bg-grid-zinc-800/20 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)] opacity-50"></div>

           <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 md:py-24 px-8">
             
             <div className="mb-4 flex items-center gap-3 px-3 py-1 rounded-full border border-red-900/30 bg-red-900/10 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-red-200 font-mono">Metric_Optimized</span>
             </div>

             <h3 className="text-8xl md:text-[10rem] font-medium leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600 select-none">
                100%
             </h3>
             
             <div className="mt-6 flex flex-col items-center gap-2">
                 <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white font-bold">
                    Focus on Patient Care
                 </p>
                 <p className="text-xs text-zinc-500 font-mono">
                    // AUTOMATED INFRASTRUCTURE ENABLED
                 </p>
             </div>
           </div>
        </div>

      </div>
    </AnimatedSection>
  );
}

function FeatureCard({ icon, title, description, step }: { icon: React.ReactNode, title: string, description: string, step: string }) {
  return (
    <div className="group relative h-full bg-gradient-to-b from-white/5 to-transparent border border-white/5 p-8 rounded-xl hover:border-white/10 transition-colors duration-500 overflow-hidden">
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-white/10 rounded-lg group-hover:border-red-500/30 group-hover:bg-red-900/10 transition-all duration-300">
                <div className="text-zinc-400 group-hover:text-white transition-colors">
                    {icon}
                </div>
            </div>
            <span className="text-4xl font-mono text-white/5 font-bold">{step}</span>
        </div>
        
        <h3 className="text-xl font-medium mb-4 text-white group-hover:text-red-100 transition-colors">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}