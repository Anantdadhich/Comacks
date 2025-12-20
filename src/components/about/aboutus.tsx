"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Cpu, 
  Target, 
  Users, 
  RefreshCw, 
  MousePointerClick, 
  Plus, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

export function AboutUs() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-red-900/30 overflow-x-hidden">
      
      {/* --- Section 1: Hero --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5">
        
        {/* Background Atmospherics */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Company Profile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] mb-8 text-white">
            The Story Behind <br />
            <span className="text-zinc-600">Comacks.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Revolutionizing how healthcare clinics approach digital growth through intelligent infrastructure.
          </p>
        </div>
      </section>


      {/* --- Section 2: Our Story (Split Layout) --- */}
      <section className="relative py-24 px-6 md:px-12 border-b border-white/5">
        <div className="container mx-auto max-w-6xl">
           <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              
              {/* Text Side */}
              <div>
                 <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">// Origin Sequence</div>
                 <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 text-white">From Vision to Reality</h2>
                 
                 <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
                    <p>
                       Comacks was founded with a simple yet powerful vision: to help healthcare clinics grow through the power of AI and digital marketing.
                    </p>
                    <p>
                       We saw a gap in the market. While working with Australian healthcare providers, we noticed that many were struggling with outdated marketing approaches and missing opportunities to leverage AI for growth.
                    </p>
                    <p className="text-white border-l-2 border-red-500 pl-6">
                       Today, Comacks is dedicated to bringing cutting-edge digital solutions to healthcare clinics across Australia, helping them attract, convert, and retain patients more effectively than ever before.
                    </p>
                 </div>
              </div>

              {/* Visual Side - Abstract "Data Gap" Graphic */}
              <div className="relative h-[500px] w-full bg-[#0A0A0A] border border-white/5 rounded-lg overflow-hidden group">
                 {/* Decorative Tech Lines */}
                 <div className="absolute top-8 left-8 right-8 h-px bg-white/10"></div>
                 <div className="absolute bottom-8 left-8 right-8 h-px bg-white/10"></div>
                 <div className="absolute top-8 bottom-8 left-8 w-px bg-white/10"></div>
                 <div className="absolute top-8 bottom-8 right-8 w-px bg-white/10"></div>
                 
                 {/* Central Glowing Core */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-900/20 rounded-full blur-xl group-hover:bg-red-900/40 transition-all duration-700"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                 
                 <div className="absolute bottom-12 right-12 text-right">
                    <div className="text-4xl font-bold text-white">2025</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-600">System Established</div>
                 </div>
              </div>

           </div>
        </div>
      </section>


      {/* --- Section 3: Mission & Vision (Dual Cards) --- */}
      <section className="relative py-24 px-6 md:px-12 bg-[#080808]">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">Mission & Vision Protocols</h2>
             <p className="text-zinc-500">The fundamental directives that drive us forward.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             {/* Mission Card */}
             <div className="relative p-10 bg-[#050505] border border-white/5 rounded-2xl group hover:border-red-900/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Target className="w-24 h-24 text-red-500" />
                </div>
                <h3 className="text-2xl font-medium mb-6 flex items-center gap-3">
                   <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                   Our Mission
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                   To empower healthcare providers with AI-powered systems and digital strategies that allow them to focus on what matters most—providing exceptional patient care.
                </p>
                <p className="text-zinc-500 text-sm">
                   // We believe that by automating patient acquisition, clinics can dedicate more resources to quality healthcare.
                </p>
             </div>

             {/* Vision Card */}
             <div className="relative p-10 bg-[#050505] border border-white/5 rounded-2xl group hover:border-white/20 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <ArrowRight className="w-24 h-24 text-white" />
                </div>
                <h3 className="text-2xl font-medium mb-6 flex items-center gap-3">
                   <span className="w-2 h-2 bg-white rounded-full"></span>
                   Our Vision
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                   To create a future where every healthcare clinic has access to enterprise-level AI and marketing systems, regardless of their size or resources.
                </p>
                <p className="text-zinc-500 text-sm">
                   // Envisioning a landscape where technology bridges the gap between providers and patients.
                </p>
             </div>
          </div>

        </div>
      </section>


      {/* --- Section 4: Values (Grid) --- */}
      <section className="relative py-24 px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
           
           <div className="mb-20 max-w-2xl">
              <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">// System Core Values</div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">The Principles That Guide Us</h2>
              <p className="text-zinc-400 text-lg font-light">
                 Our core values shape everything we do, from how we develop our solutions to how we interact with our clients.
              </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              
              <ValueCard 
                icon={<ShieldCheck />} 
                title="Integrity" 
                desc="We operate with complete transparency. Our 'No Results, No Pay' guarantee reflects our commitment to real value." 
              />
              <ValueCard 
                icon={<Cpu />} 
                title="Innovation" 
                desc="We constantly push the boundaries of what's possible with AI in healthcare, bringing cutting-edge solutions." 
              />
              <ValueCard 
                icon={<Target />} 
                title="Results-Focused" 
                desc="We measure success by the growth we generate. Everything is aimed at delivering measurable, meaningful results." 
              />
              <ValueCard 
                icon={<Users />} 
                title="Client Partnership" 
                desc="We see ourselves as an extension of your team, working alongside you to achieve your clinic's growth goals." 
              />
              <ValueCard 
                icon={<RefreshCw />} 
                title="Continuous Learning" 
                desc="We invest heavily in staying ahead of digital trends, ensuring our clients access the most effective strategies." 
              />
              <ValueCard 
                icon={<MousePointerClick />} 
                title="Simplicity" 
                desc="We make complex digital marketing and AI systems accessible and easy to understand for all providers." 
              />

           </div>
        </div>
      </section>


      {/* --- Section 5: CTA --- */}
      <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#050505] to-[#0A0A0A] border-t border-white/5">
         <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8">Ready to Partner with Comacks?</h2>
            <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
               Book your free consultation today and discover how our values-driven approach can help your clinic grow on autopilot.
            </p>
            
            <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200 border-0 transition-all duration-300 text-sm tracking-widest uppercase font-bold shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
               Book a Free Consultation
            </Button>
         </div>
      </section>

    </div>
  );
}

// --- Helper Components ---

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
   return (
      <div className="bg-[#050505] p-10 group hover:bg-[#080808] transition-colors duration-300 relative">
         <div className="absolute top-4 right-4 text-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
            <Plus strokeWidth={1} />
         </div>
         
         <div className="w-12 h-12 bg-zinc-900/50 border border-white/10 rounded-lg flex items-center justify-center mb-6 text-zinc-400 group-hover:text-red-500 group-hover:border-red-500/30 transition-all duration-300">
            {icon}
         </div>
         
         <h3 className="text-xl font-medium mb-4 text-white">{title}</h3>
         <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
            {desc}
         </p>
      </div>
   )
}