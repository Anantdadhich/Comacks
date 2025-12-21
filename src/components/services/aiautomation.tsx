"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Bot, 
  MessageCircle, 
  Database, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Clock, 
  TrendingUp,
  PlayCircle
} from 'lucide-react';

export function AIAutomation() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-red-900/30 overflow-x-hidden pt-24">
      
      {/* --- Section 1: Hero --- */}
      <section className="relative py-20 px-6 border-b border-white/5 overflow-hidden">
        
        {/* Background Network Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-red-900/5 blur-[120px] rounded-full mix-blend-screen"></div>
           {/* Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-md">
              <Cpu className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-200 font-bold">AI Module Active</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6 text-white">
              24/7 Patient <br />
              Acquisition on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Autopilot.</span>
            </h1>
            
            <p className="text-lg text-zinc-400 font-light max-w-xl leading-relaxed mb-8">
              Harness the power of AI to automate patient communication, lead nurturing, and appointment booking—even while you sleep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-widest text-xs">
                 Book a Free Consultation
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                 <PlayCircle className="w-4 h-4" /> Schedule a Demo
              </Button>
            </div>
          </div>

          {/* Right: Abstract Visualization */}
          <div className="relative hidden lg:block">
             <div className="relative w-full aspect-square bg-[#0A0A0A] border border-white/5 rounded-full flex items-center justify-center">
                {/* Orbital Rings */}
                <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-16 border border-white/5 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Central Core */}
                <div className="w-32 h-32 bg-red-500/10 rounded-full border border-red-500/20 flex items-center justify-center backdrop-blur-sm relative z-10">
                   <Bot className="w-12 h-12 text-red-500" />
                </div>

                {/* Satellite Nodes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-[#050505] border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-zinc-400">
                   LEAD_CAPTURE
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-[#050505] border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-zinc-400">
                   CRM_SYNC
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 bg-[#050505] border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-zinc-400">
                   NURTURE
                </div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-90 bg-[#050505] border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-zinc-400">
                   BOOKING
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- Section 2: Features Grid (Our AI Systems) --- */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="mb-16 md:text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">Intelligent Automation for Healthcare</h2>
              <p className="text-zinc-400 text-lg">
                 Our AI-powered systems are designed specifically for healthcare providers to streamline patient communication and acquisition.
              </p>
           </div>

           <div className="grid md:grid-cols-2 gap-6">
              
              <SystemCard 
                 icon={<Bot />}
                 title="24/7 Lead Capture Systems"
                 desc="Never miss a potential patient again. Our automated systems capture inquiries around the clock."
                 features={['Website chatbots that qualify leads', 'After-hours inquiry management', 'Instant response to questions']}
              />

              <SystemCard 
                 icon={<MessageCircle />}
                 title="WhatsApp Automation"
                 desc="Engage patients on their preferred channel with intelligent automation that feels personal."
                 features={['Automated appointment reminders', 'Patient follow-up sequences', 'FAQ handling with AI']}
              />

              <SystemCard 
                 icon={<Database />}
                 title="CRM Integration"
                 desc="Seamlessly connect your patient data across all systems for a unified view of every journey."
                 features={['Integration with healthcare CRMs', 'Automated record updates', 'HIPAA-compliant data handling']}
              />

              <SystemCard 
                 icon={<Mail />}
                 title="Patient Nurturing Sequences"
                 desc="Turn inquiries into appointments with intelligent follow-up sequences that nurture patients."
                 features={['Personalized email nurturing', 'SMS follow-up campaigns', 'Behavior-based triggers']}
              />

           </div>
        </div>
      </section>

      {/* --- Section 3: Process Timeline --- */}
      <section className="relative py-24 px-6 bg-[#080808] border-t border-white/5">
         <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
               <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">// Deployment Sequence</div>
               <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">How Our AI Automation Works</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
               {/* Connecting Line (Desktop) */}
               <div className="absolute top-8 left-0 right-0 h-px bg-white/10 hidden md:block"></div>

               <ProcessStep 
                  number="01"
                  title="Assessment"
                  desc="We analyze your current patient acquisition process and identify opportunities for automation."
               />
               <ProcessStep 
                  number="02"
                  title="Implementation"
                  desc="We set up and configure your AI systems, integrating them with your existing tools and workflows."
               />
               <ProcessStep 
                  number="03"
                  title="Optimization"
                  desc="We continuously monitor and refine your automation systems to maximize performance and ROI."
               />
            </div>
         </div>
      </section>

      {/* --- Section 4: Benefits --- */}
      <section className="relative py-24 px-6 border-t border-white/5">
         <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Side */}
            <div className="relative order-2 lg:order-1">
               <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4"><Zap className="w-6 h-6 text-red-500" /></div>
                  
                  <div className="text-[10rem] font-bold leading-none text-white/5 select-none absolute -bottom-10 -left-10">AI</div>
                  
                  <div className="relative z-10 space-y-12 py-8">
                     <BenefitStat label="Patient Conversion Rate" value="+40%" />
                     <BenefitStat label="Admin Hours Saved" value="20+/wk" />
                     <BenefitStat label="Response Time" value="Instant" />
                  </div>
               </div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
               <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8">Why AI Automation Makes a Difference</h2>
               
               <div className="space-y-10">
                  <BenefitItem 
                     icon={<Clock />}
                     title="Never Miss an Opportunity"
                     desc="Respond to patient inquiries instantly, any time of day or night, ensuring no potential patient slips away."
                  />
                  <BenefitItem 
                     icon={<Cpu />}
                     title="Save Hours of Staff Time"
                     desc="Automate routine communication tasks so your team can focus on providing exceptional care."
                  />
                  <BenefitItem 
                     icon={<TrendingUp />}
                     title="Increase Conversion Rates"
                     desc="Our AI systems have been shown to improve lead-to-patient conversion rates by up to 40%."
                  />
               </div>
            </div>

         </div>
      </section>

      {/* --- Section 5: CTA --- */}
      <section className="relative py-24 px-6 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
         <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
               Ready to Automate Your <br />
               <span className="text-zinc-500">Patient Acquisition?</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
               Book your free consultation today and discover how our AI automation systems can transform your healthcare practice.
            </p>
            
            <Button className="h-16 px-10 rounded-full bg-white text-black hover:bg-zinc-200 border-0 transition-all duration-300 text-sm tracking-widest uppercase font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
               Book a Free Consultation
            </Button>
         </div>
      </section>

    </div>
  );
}

// --- Sub Components ---

function SystemCard({ icon, title, desc, features }: { icon: React.ReactNode, title: string, desc: string, features: string[] }) {
   return (
      <div className="group bg-[#0A0A0A] border border-white/10 p-8 rounded-xl hover:border-red-500/30 transition-all duration-300 relative overflow-hidden">
         {/* Hover Glow */}
         <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors"></div>

         <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all relative z-10">
            {icon}
         </div>
         
         <h3 className="text-xl font-medium mb-3 text-white relative z-10">{title}</h3>
         <p className="text-zinc-400 text-sm mb-6 leading-relaxed relative z-10">{desc}</p>
         
         <ul className="space-y-3 relative z-10">
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

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
   return (
      <div className="relative pt-8 md:pt-12">
         {/* Node Marker */}
         <div className="hidden md:block absolute top-8 left-0 -translate-y-1/2 w-3 h-3 bg-[#050505] border border-white/20 rounded-full z-10">
             <div className="absolute inset-0.5 bg-red-500 rounded-full"></div>
         </div>
         
         <div className="text-4xl font-mono font-bold text-white/10 mb-4">{number}</div>
         <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
         <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
   )
}

function BenefitItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
   return (
      <div className="flex gap-6">
         <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
            <div className="text-zinc-400">{icon}</div>
         </div>
         <div>
            <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
         </div>
      </div>
   )
}

function BenefitStat({ label, value }: { label: string, value: string }) {
   return (
      <div className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
         <div className="text-xs uppercase tracking-widest text-zinc-500 mb-1">{label}</div>
         <div className="text-4xl font-medium text-white">{value}</div>
      </div>
   )
}