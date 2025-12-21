"use client";

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
  History,
  Lightbulb,
  Zap,
  Terminal
} from 'lucide-react';
import Link from 'next/link';

export function AboutUs() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-red-900/30 overflow-x-hidden pt-24">
      
      
      <section className="relative py-20 px-6 border-b border-white/5 overflow-hidden">
       
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Company Profile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8 text-white">
            The Story Behind <br />
            <span className="text-transparent text-white ">
                <span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks
               </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Revolutionizing how healthcare clinics approach digital growth through intelligent infrastructure.
          </p>
        </div>
      </section>

      {/* --- Section 2: The Story (Vertical System Log) --- */}
      <section className="relative py-24 px-6 bg-[#080808]">
         <div className="container mx-auto max-w-3xl">
            
            <div className="text-center mb-16">
               <h2 className="text-3xl font-medium tracking-tighter mb-4">Origin Sequence</h2>
               <p className="text-zinc-500">From initial concept to full system deployment.</p>
            </div>

            {/* Timeline Container */}
            <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-12 space-y-16">
               
               {/* Timeline Item 1: Vision */}
               <div className="relative pl-8 md:pl-0">
                  <div className="absolute -left-[5px] md:-left-[49px] top-0 w-2.5 h-2.5 bg-[#050505] border border-red-500 rounded-full z-10"></div>
                  <div className="flex flex-col md:flex-row gap-6">
                     <div className="md:w-32 shrink-0">
                        <div className="text-sm font-mono text-red-500 font-bold">PHASE 01</div>
                        <div className="text-xs text-zinc-600 uppercase tracking-wider">Inception</div>
                     </div>
                     <div>
                        <div className="flex items-center gap-3 mb-3">
                           <div className="p-2 bg-white/5 rounded-md"><Lightbulb className="w-4 h-4 text-white" /></div>
                           <h3 className="text-xl font-medium text-white">From Vision to Reality</h3>
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                           Comacks was founded with a simple yet powerful vision: to help healthcare clinics grow through the power of AI. We wanted to build a system where growth wasn't manual labor, but an automated certainty.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Timeline Item 2: The Gap */}
               <div className="relative pl-8 md:pl-0">
                  <div className="absolute -left-[5px] md:-left-[49px] top-0 w-2.5 h-2.5 bg-zinc-800 rounded-full z-10"></div>
                  <div className="flex flex-col md:flex-row gap-6">
                     <div className="md:w-32 shrink-0">
                        <div className="text-sm font-mono text-zinc-500 font-bold">PHASE 02</div>
                        <div className="text-xs text-zinc-600 uppercase tracking-wider">Identification</div>
                     </div>
                     <div>
                        <div className="flex items-center gap-3 mb-3">
                           <div className="p-2 bg-white/5 rounded-md"><History className="w-4 h-4 text-white" /></div>
                           <h3 className="text-xl font-medium text-white">Identifying the Gap</h3>
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                           While working with Australian healthcare providers, we noticed a critical flaw. Many were struggling with outdated marketing approaches, missing opportunities to leverage modern AI for patient acquisition.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Timeline Item 3: Today */}
               <div className="relative pl-8 md:pl-0">
                  <div className="absolute -left-[5px] md:-left-[49px] top-0 w-2.5 h-2.5 bg-white rounded-full z-10 shadow-[0_0_10px_white]"></div>
                  <div className="flex flex-col md:flex-row gap-6">
                     <div className="md:w-32 shrink-0">
                        <div className="text-sm font-mono text-white font-bold">CURRENT</div>
                        <div className="text-xs text-zinc-600 uppercase tracking-wider">Operational</div>
                     </div>
                     <div>
                        <div className="flex items-center gap-3 mb-3">
                           <div className="p-2 bg-white/5 rounded-md"><Zap className="w-4 h-4 text-white" /></div>
                           <h3 className="text-xl font-medium text-white">System Deployed</h3>
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base border-l-2 border-red-500 pl-4 bg-white/5 p-4 rounded-r-lg">
                           Today, Comacks is dedicated to bringing cutting-edge digital solutions to healthcare clinics across Australia, helping them attract, convert, and retain patients more effectively than ever before.
                        </p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* --- Section 3: Mission & Vision --- */}
      <section className="relative py-24 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
             
             {/* Mission */}
             <div className="bg-[#050505] p-10 hover:bg-[#0A0A0A] transition-colors group">
                <Target className="w-8 h-8 text-red-500 mb-6" />
                <h3 className="text-xl font-medium mb-4 text-white">Our Mission</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                   To empower healthcare providers with AI-powered systems that allow them to focus on what matters most—providing exceptional patient care—while we automate the growth.
                </p>
             </div>

             {/* Vision */}
             <div className="bg-[#050505] p-10 hover:bg-[#0A0A0A] transition-colors group">
                <ArrowRight className="w-8 h-8 text-white mb-6" />
                <h3 className="text-xl font-medium mb-4 text-white">Our Vision</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                   To create a future where every healthcare clinic has access to enterprise-level AI and marketing systems, bridging the gap between providers and patients.
                </p>
             </div>

          </div>
        </div>
      </section>

      {/* --- Section 4: CORE PRINCIPLES (Brighter Red) --- */}
      <section className="relative py-24 px-6 border-t border-white/5 overflow-hidden">
        
        {/* Massive Red Glow Background */}
        <div className="absolute inset-0 bg-[#050505]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-red-600/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
           
           <div className="mb-20 max-w-2xl">
              <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">// System Core Values</div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">The Principles That Guide Us</h2>
              <p className="text-zinc-300 text-lg font-light">
                 Our core values shape everything we do, from how we develop our solutions to how we interact with our clients.
              </p>
           </div>

           {/* Grid Container with Red Borders */}
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-red-500/30 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
              
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
              <Link href="/contact"> 
                 Book a Free Consultation
                 </Link>
            </Button>
         </div>
      </section>

    </div>
  );
}



function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
   return (
     
      <div className="bg-[#050505]/90 p-10 group hover:bg-[#080808]/80 transition-all duration-300 relative backdrop-blur-sm">
         <div className="absolute top-4 right-4 text-red-900/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <Plus strokeWidth={1} />
         </div>
         
         <div className="w-12 h-12 bg-zinc-900/50 border border-white/10 rounded-lg flex items-center justify-center mb-6 text-zinc-400 group-hover:text-red-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300">
            {icon}
         </div>
         
         <h3 className="text-xl font-medium mb-4 text-white group-hover:text-red-100 transition-colors">{title}</h3>
         <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
            {desc}
         </p>
      </div>
   )
}