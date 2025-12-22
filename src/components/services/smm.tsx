"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Megaphone, 
  Share2, 
  FileText, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Users, 
  ShieldCheck, 
  LineChart,
  Search,
  Facebook,
  Instagram,
  Repeat,
  Layers,
  Cpu,
  Signal
} from 'lucide-react';

export function SocialMediaMarketing() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-red-900/30 overflow-x-hidden pt-24">
      
      {/* --- Section 1: Hero --- */}
      <section className="relative py-20 px-6 border-b border-white/5 overflow-hidden">
        
        {/* Background: Broadcast Network Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-900/5 blur-[120px] rounded-full mix-blend-screen"></div>
           {/* Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-md">
              <Signal className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-200 font-bold">Broadcast Systems Active</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6 text-white">
              Strategic Social Media <br />
              & Paid Ads for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Healthcare.</span>
            </h1>
            
            <p className="text-lg text-zinc-400 font-light max-w-xl leading-relaxed mb-8">
              Targeted campaigns that attract high-quality patients for your specific treatments and services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-widest text-xs">
                 Book a Free Consultation
              </Button>
              </Link>
              
            </div>
          </div>

          {/* Right: Abstract Broadcast Visualization */}
          <div className="relative hidden lg:block order-1 lg:order-2">
             <div className="relative w-full aspect-square flex items-center justify-center">
                
                {/* Central Signal Tower */}
                <div className="relative z-20 w-32 h-32 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-center shadow-2xl shadow-red-900/20">
                    <Megaphone className="w-12 h-12 text-red-500" />
                    {/* Ping Animation */}
                    <div className="absolute inset-0 border-2 border-red-500/30 rounded-xl animate-ping"></div>
                </div>

                {/* Orbital Rings & Nodes */}
                <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
                <div className="absolute inset-20 border border-white/5 rounded-full border-dashed animate-[spin_20s_linear_infinite_reverse]"></div>

                {/* Platform Nodes */}
                <PlatformNode icon={<Search className="w-4 h-4" />} label="GOOGLE" position="top-0 left-1/2 -translate-x-1/2 -translate-y-8" />
                <PlatformNode icon={<Facebook className="w-4 h-4" />} label="META_ADS" position="bottom-0 left-1/2 -translate-x-1/2 translate-y-8" />
                <PlatformNode icon={<Instagram className="w-4 h-4" />} label="INSTAGRAM" position="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                <PlatformNode icon={<Repeat className="w-4 h-4" />} label="REMARKET" position="right-0 top-1/2 translate-x-1/2 -translate-y-1/2" />
             </div>
          </div>

        </div>
      </section>

      {/* --- Section 2: Services Grid --- */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="mb-16 md:text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">Complete Social Media & Ad Management</h2>
              <p className="text-zinc-400 text-lg">
                 We handle every aspect of your clinic's digital marketing, from strategy to execution to reporting.
              </p>
           </div>

           <div className="grid md:grid-cols-2 gap-6">
              
              <ServiceCard 
                 icon={<Target />}
                 title="Paid Advertising"
                 desc="Targeted ads on Google, Facebook, and Instagram that reach potential patients actively looking for your services."
                 features={['Google Ads campaigns', 'Facebook & Instagram Ads', 'Remarketing to warm leads']}
              />

              <ServiceCard 
                 icon={<Share2 />}
                 title="Social Media Management"
                 desc="Professional management of your clinic's social media presence to build authority and engage with patients."
                 features={['Content creation & posting', 'Community engagement', 'Growth strategy']}
              />

              <ServiceCard 
                 icon={<FileText />}
                 title="Content Strategy"
                 desc="Educational and engaging content that positions your clinic as an authority in your specialty."
                 features={['Blog posts & articles', 'Educational videos', 'Patient testimonials']}
              />

              <ServiceCard 
                 icon={<BarChart3 />}
                 title="Analytics & Reporting"
                 desc="Transparent reporting that shows exactly how your marketing investment is performing."
                 features={['Monthly performance reports', 'ROI tracking', 'Campaign optimization']}
              />

           </div>
        </div>
      </section>

      {/* --- Section 3: Benefits & Stat --- */}
      <section className="relative py-24 px-6 border-t border-white/5">
         <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Stat Side */}
            <div className="relative order-2 lg:order-1">
               <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 relative overflow-hidden group">
                  
                  {/* Background Abstract Chart */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M0,80 Q50,0 100,80 L100,100 L0,100 Z" fill="url(#gradRed)" />
                          <defs>
                              <linearGradient id="gradRed" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" style={{stopColor:'rgb(239,68,68)', stopOpacity:0.4}} />
                              <stop offset="100%" style={{stopColor:'rgb(239,68,68)', stopOpacity:0}} />
                              </linearGradient>
                          </defs>
                      </svg>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
                        <LineChart className="w-4 h-4 text-red-500" />
                        <span className="text-[10px] uppercase tracking-widest text-red-300 font-bold">System Output</span>
                     </div>
                     
                     <div className="text-[8rem] md:text-[10rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 select-none mb-4">
                        3X
                     </div>
                     
                     <div className="text-xl md:text-2xl font-medium text-white mb-2">Patient Acquisition</div>
                     <p className="text-zinc-500 text-sm uppercase tracking-widest font-mono">// Targeted Campaign Result</p>
                  </div>
               </div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
               <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">// Why Us</div>
               <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8">Why Our Healthcare Marketing Gets Results</h2>
               <p className="text-zinc-400 mb-12">Our approach is specifically designed for healthcare providers in the market.</p>
               
               <div className="space-y-10">
                  <BenefitItem 
                     icon={<ShieldCheck />}
                     title="Healthcare Expertise"
                     desc="We understand the unique compliance requirements and patient acquisition challenges in healthcare."
                  />
                  <BenefitItem 
                     icon={<Target />}
                     title="Targeted Approach"
                     desc="We focus on reaching the right patients for your specific services, not just generating high traffic."
                  />
                  <BenefitItem 
                     icon={<LineChart />}
                     title="Measurable ROI"
                     desc="We track every lead and patient so you know exactly what your marketing investment is returning."
                  />
               </div>
            </div>

         </div>
      </section>

       {/* --- Section 4: Process Timeline --- */}
       <section className="relative py-24 px-6 bg-[#080808] border-t border-white/5">
         <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
               <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">// Execution Sequence</div>
               <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">How We Drive Patient Growth</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
               {/* Connecting Line (Desktop) */}
               <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-white/5 via-red-500/20 to-white/5 hidden md:block"></div>

               <ProcessStep 
                  number="01"
                  icon={<Search />}
                  title="Research & Strategy"
                  desc="We identify your ideal patients and develop a custom marketing strategy tailored to your goals."
               />
               <ProcessStep 
                  number="02"
                  icon={<FileText />}
                  title="Content Creation"
                  desc="We develop compelling ads, posts, and content that resonates with potential patients."
               />
               <ProcessStep 
                  number="03"
                  icon={<Layers />}
                  title="Campaign Management"
                  desc="We launch, monitor, and continuously optimize your campaigns for maximum performance."
               />
               <ProcessStep 
                  number="04"
                  icon={<Cpu />}
                  title="Reporting & Optimization"
                  desc="We provide transparent reporting and continuously refine strategies based on performance data."
               />
            </div>
         </div>
      </section>

      {/* --- Section 5: Platforms Grid --- */}
      <section className="relative py-24 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
           <div className="mb-16 md:text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">Where We Promote Your Clinic</h2>
              <p className="text-zinc-400 text-lg">
                 We leverage the most effective platforms to reach potential patients in your local area.
              </p>
           </div>

           <div className="grid md:grid-cols-4 gap-6">
              <PlatformCard 
                 icon={<Search className="w-8 h-8" />} 
                 title="Google" 
                 desc="Search ads, display ads, and YouTube videos targeting high-intent patients." 
              />
              <PlatformCard 
                 icon={<Facebook className="w-8 h-8" />} 
                 title="Facebook" 
                 desc="Targeted ads reaching specific demographics in your local service area." 
              />
              <PlatformCard 
                 icon={<Instagram className="w-8 h-8" />} 
                 title="Instagram" 
                 desc="Visual storytelling to showcase your clinic and patient results." 
              />
              <PlatformCard 
                 icon={<Repeat className="w-8 h-8" />} 
                 title="Remarketing" 
                 desc="Follow-up ads that bring back visitors who showed interest but didn't convert." 
              />
           </div>
        </div>
      </section>

      {/* --- Section 6: CTA --- */}
      <section className="relative py-24 px-6 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
         <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
               Ready to Grow Your <br />
               <span className="text-zinc-500">Patient Base?</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
               Book your free consultation today and discover how our social media marketing can help your clinic attract more high-quality patients.
            </p>
            
            <Link href="/contact">
            <Button className="h-16 px-10 rounded-full bg-white text-black hover:bg-zinc-200 border-0 transition-all duration-300 text-sm tracking-widest uppercase font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
               Book a Free Consultation
            </Button>
            </Link>
         </div>
      </section>

    </div>
  );
}

// --- Sub Components ---

function PlatformNode({ icon, label, position }: { icon: React.ReactNode, label: string, position: string }) {
    return (
        <div className={`absolute ${position} flex flex-col items-center gap-2`}>
            <div className="w-10 h-10 bg-[#0A0A0A] border border-white/20 rounded-full flex items-center justify-center text-zinc-400">
                {icon}
            </div>
            <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono bg-[#050505] px-2">{label}</span>
        </div>
    )
}

function ServiceCard({ icon, title, desc, features }: { icon: React.ReactNode, title: string, desc: string, features: string[] }) {
   return (
      <div className="group bg-[#0A0A0A] border border-white/10 p-8 rounded-xl hover:border-red-500/30 transition-all duration-300 relative overflow-hidden">
         {/* Hover Glow */}
         <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors"></div>

         <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all relative z-10">
            {icon}
         </div>
         
         <h3 className="text-xl font-medium mb-3 text-white relative z-10">{title}</h3>
         <p className="text-zinc-400 text-sm mb-6 leading-relaxed relative z-10">{desc}</p>
         
         <ul className="space-y-3 relative z-10 border-t border-white/5 pt-6">
            {features.map((item, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-red-500/50 mt-0.5 shrink-0" />
                  {item}
               </li>
            ))}
         </ul>
      </div>
   )
}

function BenefitItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
       <div className="flex gap-6 group">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-red-500/30 transition-colors">
             <div className="text-zinc-400 group-hover:text-red-500 transition-colors">{icon}</div>
          </div>
          <div>
             <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
             <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
          </div>
       </div>
    )
 }

function ProcessStep({ number, icon, title, desc }: { number: string, icon: React.ReactNode, title: string, desc: string }) {
   return (
      <div className="relative pt-8 md:pt-12">
         {/* Node Marker */}
         <div className="hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0A0A0A] border border-white/20 rounded-full z-10 items-center justify-center text-zinc-400">
             {icon}
         </div>
         
         <div className="text-center">
            <div className="text-sm font-mono font-bold text-red-500 mb-2">{number}</div>
            <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
         </div>
      </div>
   )
}

function PlatformCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
       <div className="group bg-[#0A0A0A] border border-white/10 p-8 rounded-xl hover:border-red-500/30 transition-all duration-300 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 text-zinc-500 group-hover:text-red-500 transition-colors transform group-hover:scale-110 duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
          </div>
       </div>
    )
 }