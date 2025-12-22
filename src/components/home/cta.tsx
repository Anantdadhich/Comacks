import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <div className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Atmospherics --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-red-900/30 to-transparent blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Main Card --- */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
          
          {/* Internal Grid & Glow */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-red-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center py-20 px-8 md:px-16 md:py-32">
            
            {/* Top Tag */}
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-red-400" />
                <span className="text-[10px] uppercase tracking-widest text-red-200 font-bold">
                    System Ready
                </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-8 text-white max-w-4xl mx-auto leading-[1.1]">
              Ready to Grow Your Clinic?
            </h2>
            
            {/* Subtext */}
            <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Book your free consultation today and get a personalized growth plan. No commitments, no pressure—just actionable insights.
            </p>
            
            {/* Action Button */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center mb-16">
                <Link href="/contact">
                  <Button className="h-16 px-10 rounded-full bg-white text-black hover:bg-zinc-200 border-0 transition-all duration-300 text-sm tracking-widest uppercase font-bold shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.5)]">
                    Book a Free Consultation
                  </Button>
                </Link>
            </div>

            {/* Footer Credit - Styled as Terminal Data */}
            <div className="w-full max-w-md border-t border-white/5 pt-8 mt-4 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-zinc-600">
                    <Terminal className="w-4 h-4" />
                  
                </div>
                <p className="text-xs text-zinc-500 font-mono">
                    // Thanks to <span className="text-zinc-300">Mr. Akshat Rawat</span> for his Valuable Contribution.
                </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}