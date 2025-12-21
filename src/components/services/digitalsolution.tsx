"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Layout, 
  Database, 
  LineChart, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Rocket, 
  MousePointerClick,
  Smartphone
} from 'lucide-react';

export function DigitalSolutions() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-red-900/30 overflow-x-hidden pt-24">
      
  
      <section className="relative py-20 px-6 border-b border-white/5 overflow-hidden">
        
       
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-900/5 blur-[120px] rounded-full mix-blend-screen"></div>
           {/* Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-md">
              <Monitor className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-200 font-bold">Digital Infrastructure Online</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6 text-white">
              High-Converting <br />
              Digital Experiences <br />
              for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Healthcare.</span>
            </h1>
            
            <p className="text-lg text-zinc-400 font-light max-w-xl leading-relaxed mb-8">
              Custom websites, landing pages, and digital experiences designed to convert visitors into patients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-widest text-xs">
                 Book a Free Consultation
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                 View Our Work <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right: Abstract Browser Visualization */}
          <div className="relative hidden lg:block transform perspective-1000 rotate-y-[-15deg] rotate-x-[5deg]">
             <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-red-900/10 p-2">
                {/* Browser Header */}
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-4 px-2">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                   </div>
                   <div className="h-2 w-1/2 bg-white/5 rounded-full ml-4"></div>
                </div>
                {/* Browser Content Mockup */}
                <div className="bg-[#050505] rounded-lg p-6 relative overflow-hidden h-[400px]">
                   <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
                   {/* Mockup Elements */}
                   <div className="w-3/4 h-8 bg-white/10 rounded-lg mb-4 animate-pulse"></div>
                   <div className="w-1/2 h-4 bg-white/5 rounded-lg mb-8"></div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-red-900/10 border border-red-500/20 rounded-lg"></div>
                      <div className="h-32 bg-white/5 rounded-lg"></div>
                   </div>
                   {/* Floating mobile element */}
                   <div className="absolute bottom-4 right-4 w-32 h-48 bg-[#0A0A0A] border border-white/10 rounded-xl p-2 shadow-xl">
                      <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center">
                         <Smartphone className="text-white/20" />
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- Section 2: Solutions Grid --- */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="mb-16 md:text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">Custom Digital Experiences</h2>
              <p className="text-zinc-400 text-lg">
                 From full clinic websites to targeted landing pages, we build digital assets that attract and convert patients.
              </p>
           </div>

           <div className="grid md:grid-cols-2 gap-6">
              
              <SolutionCard 
                 icon={<Layout />}
                 title="Clinic Websites"
                 desc="Beautiful, fast-loading websites designed specifically for healthcare providers that establish credibility."
                 features={['Responsive design for all devices', 'SEO-optimized for local search', 'Patient-focused user experience']}
              />

              <SolutionCard 
                 icon={<MousePointerClick />}
                 title="Landing Pages"
                 desc="High-converting landing pages designed to capture leads for specific services or promotions."
                 features={['Treatment-specific pages', 'A/B testing for maximum conversion', 'Integrated lead capture forms']}
              />

              <SolutionCard 
                 icon={<Database />}
                 title="CRM Integration"
                 desc="Seamless integration with your clinic's CRM system for efficient patient data management."
                 features={['Compatible with major healthcare CRMs', 'Automated lead routing', 'HIPAA-compliant data handling']}
              />

              <SolutionCard 
                 icon={<LineChart />}
                 title="Analytics & Optimization"
                 desc="Data-driven insights to continuously improve your digital performance and ROI."
                 features={['Conversion tracking', 'User behavior analysis', 'Monthly performance reports']}
              />

           </div>
        </div>
      </section>

      {/* --- Section 3: Process Timeline --- */}
      <section className="relative py-24 px-6 bg-[#080808] border-t border-white/5">
         <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
               <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">// Build Sequence</div>
               <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">How We Build Your Digital Presence</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
               {/* Connecting Line (Desktop) */}
               <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-white/5 via-red-500/20 to-white/5 hidden md:block"></div>

               <ProcessStep 
                  number="01"
                  icon={<Layers />}
                  title="Discovery"
                  desc="We learn about your clinic, patients, services, and unique value proposition."
               />
               <ProcessStep 
                  number="02"
                  icon={<Layout />}
                  title="Design"
                  desc="We create mockups and prototypes tailored to your brand and conversion goals."
               />
               <ProcessStep 
                  number="03"
                  icon={<Code2 />}
                  title="Development"
                  desc="We build your assets with clean code, fast loading times, and SEO best practices."
               />
               <ProcessStep 
                  number="04"
                  icon={<Rocket />}
                  title="Optimization"
                  desc="We continuously monitor and improve performance to maximize patient acquisition."
               />
            </div>
         </div>
      </section>

      {/* --- Section 4: Features & Stat --- */}
      <section className="relative py-24 px-6 border-t border-white/5">
         <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <div className="order-2 lg:order-1">
               <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8">What Sets Our Digital Solutions Apart</h2>
               <p className="text-zinc-400 mb-12">We don't just build websites—we create patient acquisition systems designed specifically for healthcare providers.</p>
               
               <div className="space-y-10">
                  <FeatureItem 
                     title="Healthcare-Specific Design"
                     desc="Layouts and features optimized for patient acquisition in the healthcare industry."
                  />
                  <FeatureItem 
                     title="Conversion-Focused Development"
                     desc="Every element is designed with one goal: turning visitors into patients."
                  />
                  <FeatureItem 
                     title="Industry Expertise"
                     desc="We understand the unique challenges and opportunities in healthcare marketing."
                  />
               </div>
               <div className="mt-12">
                  <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-widest text-xs">
                     Book a Free Consultation
                  </Button>
               </div>
            </div>

            {/* Visual Stat Side */}
            <div className="relative order-1 lg:order-2">
               <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 relative overflow-hidden group">
                  
                  {/* Background Abstract Chart */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M0,100 C20,80 40,90 60,50 S80,20 100,0 L100,100 Z" fill="url(#grad1)" />
                          <defs>
                              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" style={{stopColor:'rgb(239,68,68)', stopOpacity:0.4}} />
                              <stop offset="100%" style={{stopColor:'rgb(239,68,68)', stopOpacity:0}} />
                              </linearGradient>
                          </defs>
                      </svg>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
                        <LineChart className="w-4 h-4 text-red-500" />
                        <span className="text-[10px] uppercase tracking-widest text-red-300 font-bold">Performance Metric</span>
                     </div>
                     
                     <div className="text-[8rem] md:text-[10rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 select-none mb-4">
                        40%
                     </div>
                     
                     <div className="text-xl md:text-2xl font-medium text-white mb-2">Higher Conversion Rate</div>
                     <p className="text-zinc-500 text-sm uppercase tracking-widest font-mono">// Average client result</p>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* --- Section 5: CTA --- */}
      <section className="relative py-24 px-6 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
         <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
               Ready to Transform Your <br />
               <span className="text-zinc-500">Digital Presence?</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
               Book your free consultation today and discover how our digital solutions can help your clinic attract more patients.
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

function SolutionCard({ icon, title, desc, features }: { icon: React.ReactNode, title: string, desc: string, features: string[] }) {
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

function FeatureItem({ title, desc }: { title: string, desc: string }) {
   return (
      <div className="border-l-2 border-white/10 pl-6 hover:border-red-500 transition-colors duration-300">
         <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
         <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
   )
}