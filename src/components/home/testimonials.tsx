import React from 'react';
import { Quote, Star, Plus, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '../ui/animated-section';

export function Testimonials() {
  return (
    <AnimatedSection className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Atmospherics --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Right-side Red Glow */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[500px] bg-red-900/15 blur-[120px] rounded-full mix-blend-screen"></div>
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Feedback Logs</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Hear directly from healthcare providers who've transformed their practices with our solutions.
          </p>
        </div>

        {/* --- Testimonials Grid --- */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <TestimonialCard
            quote="The AI automation has completely transformed how we handle new patient inquiries. It's like having an extra staff member working 24/7!"
          />
          <TestimonialCard
            quote="Our website conversion rate has tripled since working with Comacks. Their understanding of the healthcare space is impressive."
          />
          <TestimonialCard
            quote="The 'No Results, No Pay' guarantee made this a no-brainer for us. They delivered beyond our expectations."
          />
        </div>

      </div>
    </AnimatedSection>
  );
}

function TestimonialCard({ quote }: { quote: string }) {
  return (
    <div className="group relative bg-[#0A0A0A] border border-white/5 p-8 md:p-10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02]">
      
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-700">
        <Plus strokeWidth={1} className="w-3 h-3" />
      </div>
      <div className="absolute bottom-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-700">
        <Plus strokeWidth={1} className="w-3 h-3" />
      </div>

      {/* Quote Icon Background Watermark */}
      <div className="absolute top-4 right-6 text-white/5 group-hover:text-red-900/20 transition-colors duration-500">
        <Quote className="w-24 h-24 rotate-12" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Rating & Badge */}
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-6">
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-red-500 fill-red-500/20" />
                ))}
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/5">
                <CheckCircle2 className="w-3 h-3 text-zinc-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Verified</span>
            </div>
        </div>

        {/* Quote Text */}
        <p className="text-zinc-300 font-light leading-relaxed text-lg mb-8 flex-grow">
          "{quote}"
        </p>

      

      </div>
    </div>
  )
}