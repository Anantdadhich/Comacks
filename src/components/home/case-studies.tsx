import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Activity, Lock, ArrowRight } from 'lucide-react';

export function CaseStudies() {
  return (
    <section className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Atmospherics --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Subtle Red Glow behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
          {/* Faint Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Performance Data</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Success Stories
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            See how we've helped clinics across Australia grow their patient base and increase revenue.
          </p>
        </div>

        {/* --- The "System Panel" Card --- */}
        <div className="relative max-w-4xl mx-auto">
            
            {/* Decorative Tech Corners */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t border-l border-zinc-700 z-20"></div>
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t border-r border-zinc-700 z-20"></div>
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b border-l border-zinc-700 z-20"></div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b border-r border-zinc-700 z-20"></div>

            {/* Main Container */}
            <div className="relative rounded-lg border border-white/5 bg-[#0A0A0A] overflow-hidden backdrop-blur-sm">
                
                {/* Inner Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-8 md:px-12">
                    
                    {/* Animated Icon */}
                    <div className="w-16 h-16 bg-zinc-900/50 rounded-full border border-white/10 flex items-center justify-center mb-8 relative group">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Activity className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                        
                        {/* Orbit Animation */}
                        <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full shadow-[0_0_8px_red]"></div>
                        </div>
                    </div>

                    <h3 className="text-3xl font-medium mb-4 text-white tracking-tight">
                        Results Compiling...
                    </h3>
                    
                    <p className="text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed text-sm md:text-base">
                        We are currently documenting high-impact case studies from our partner clinics. Full data reports will be online shortly.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-zinc-200 border-0 transition-all font-bold text-xs uppercase tracking-widest">
                            Be Our Next Success Story
                        </Button>
                        
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-600 font-medium font-mono">
                            <Lock className="w-3 h-3" />
                            <span>Data_Encrypted</span>
                        </div>
                    </div>

                </div>

                {/* Bottom Status Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-white/5 bg-black/40 flex items-center justify-between px-6 text-[10px] text-zinc-600 uppercase tracking-widest font-mono">
                    <div className="flex items-center gap-2">
                        <Plus className="w-3 h-3" />
                        <span>System_Ready</span>
                    </div>
                    <div>
                        CASE_ID: PENDING
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
}