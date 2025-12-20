import React from 'react';
import { Plus, X } from 'lucide-react';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden flex flex-col justify-center">
      
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        {/* Solid background on the left to hide potential text in the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505] via-50% to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20 z-10"></div>
        
        {/* Strong top gradient to hide navigation buttons */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#050505] via-[#050505]/90 to-transparent z-10"></div>
        
        {/* Red tint overlay */}
        <div className="absolute inset-0 bg-red-900/40 mix-blend-overlay z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-red-600/20 mix-blend-color z-10 pointer-events-none"></div>

        <img 
          src="/back.png" 
          alt="Hand reaching for light" 
          className="w-full h-full object-cover object-[80%_top] opacity-70"
        />
      </div>

      {/* Decorative Crosses & Lines */}
      <div className="absolute top-0 bottom-0 left-11 w-[1px] bg-white/5 z-10 hidden md:block"></div>
      
      <div className="absolute top-32 left-8 text-zinc-700 z-20">
        <Plus strokeWidth={1} className="w-6 h-6" />
      </div>
      <div className="absolute bottom-12 left-8 text-zinc-700 z-20">
        <Plus strokeWidth={1} className="w-6 h-6" />
      </div>
      <div className="absolute top-32 right-8 flex gap-2 text-zinc-500 z-20">
        <Plus strokeWidth={1} className="w-5 h-5" />
        <div className="w-5 h-5 border border-zinc-600 rotate-45 transform"></div>
        <X strokeWidth={1} className="w-5 h-5" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-8 md:px-16 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[0.95] mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
           
            Grow Your Clinic<br />
            on Autopilot.
          </h1>
          
          <Button className="h-14 px-8 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md transition-all duration-300 text-sm tracking-widest uppercase font-medium">
            Book a Free Consultation
          </Button>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-12 left-0 right-0 z-20 px-8 md:px-16 flex flex-col md:flex-row justify-between items-end gap-8 text-zinc-400 text-sm leading-relaxed max-w-[1400px] mx-auto w-full">
        <div className="max-w-md">
         
        </div>
        
        <div className="flex items-start gap-3 max-w-xs text-right md:text-left">
          <X strokeWidth={1} className="w-4 h-4 mt-1 shrink-0 text-zinc-600" />
         
        </div>
      </div>

      {/* Grain overlay - simulated with CSS if needed, but keeping clean for now */}
    </div>
  );
}