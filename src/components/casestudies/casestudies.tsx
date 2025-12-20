"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Lock, 
  Loader2, 
  BarChart3, 
  Globe, 
  Megaphone, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  Clock
} from 'lucide-react';

export function CaseStudies() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-red-900/30 overflow-x-hidden pt-24">
      
      {/* --- Section 1: Hero --- */}
      <section className="relative py-20 px-6 border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-md">
            <BarChart3 className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-red-200 font-bold">Performance Data</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8 text-white">
            Success Stories from <br />
            <span className="text-zinc-600">Australian Clinics.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            See how we've helped healthcare providers transform their patient acquisition and growth.
          </p>
        </div>
      </section>

      {/* --- Section 2: Status Board (Coming Soon) --- */}
      <section className="relative py-12 px-6">
        <div className="container mx-auto max-w-4xl">
           {/* The "Processing" Card */}
           <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden p-8 md:p-12 text-center">
              
              {/* Background Tech */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05)_0%,transparent_70%)]"></div>

              <div className="relative z-10 flex flex-col items-center">
                 <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 border-t-2 border-red-500 rounded-full animate-spin"></div>
                    <Loader2 className="w-6 h-6 text-zinc-400" />
                 </div>
                 
                 <h2 className="text-2xl md:text-3xl font-medium mb-4">Case Studies Compilation In Progress</h2>
                 <p className="text-zinc-400 max-w-xl mx-auto mb-8">
                    We're in the process of documenting our success stories with Australian healthcare clinics. Check back soon to see detailed case studies on how we've helped providers grow.
                 </p>

                 <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                    <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-widest text-xs">
                       Book a Free Consultation
                    </Button>
                    <Button variant="outline" className="h-12 px-8 rounded-full border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 font-bold uppercase tracking-widest text-xs">
                       Contact for Info
                    </Button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- Section 3: "What To Expect" (Methodology) --- */}
      <section className="relative py-20 px-6 border-t border-white/5">
         <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
               <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3">// Future Data Preview</h3>
               <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">Our Future Case Studies Will Show...</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               <ExpectationCard 
                  icon={<FileText />}
                  title="AI Automation Results"
                  desc="See how our AI systems have helped clinics automate patient acquisition."
                  points={['24/7 lead capture', 'Automated follow-ups', 'Reduced admin workload']}
               />
               <ExpectationCard 
                  icon={<Globe />}
                  title="Digital Solutions Impact"
                  desc="Discover how our websites and landing pages have transformed conversion rates."
                  points={['Increased conversions', 'Improved UX', 'Enhanced presence']}
               />
               <ExpectationCard 
                  icon={<Megaphone />}
                  title="SMMA Results"
                  desc="Learn how our social media and paid ad strategies have driven new patient growth."
                  points={['Targeted acquisition', 'Improved Ad ROI', 'Increased visibility']}
               />
            </div>
         </div>
      </section>

      {/* --- Section 4: Upcoming Previews (Locked Files) --- */}
      <section className="relative py-20 px-6 bg-[#080808] border-t border-white/5">
         <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">Upcoming Case Studies</h2>
               <p className="text-zinc-400">A sneak peek at the files currently being encrypted for release.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               
               {/* Card 1: Dental */}
               <PreviewCard 
                  category="DENTAL CLINIC"
                  title="How Sydney Smile Center Doubled New Patient Bookings"
                  desc="A complete digital transformation for a leading dental practice in Sydney's CBD."
                  tags={['AI Automation', 'Website Redesign', 'Google Ads']}
               />

               {/* Card 2: MedSpa */}
               <PreviewCard 
                  category="MEDSPA"
                  title="Melbourne MedSpa's 3X Increase in High-Value Treatments"
                  desc="How targeted marketing helped a luxury MedSpa attract more premium clients."
                  tags={['Social Media', 'Facebook Ads', 'WhatsApp Automation']}
               />

            </div>
         </div>
      </section>

      {/* --- Section 5: CTA --- */}
      <section className="relative py-24 px-6 border-t border-white/5 overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-8">
               <ArrowRight className="w-6 h-6 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 text-white">
               Want Results Like These?
            </h2>
            <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
               Book your free consultation today and discover how we can help your healthcare practice achieve similar or better results.
            </p>
            
            <Button className="h-16 px-10 rounded-full bg-white text-black hover:bg-zinc-200 border-0 transition-all duration-300 text-sm tracking-widest uppercase font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
               Be Our Next Success Story
            </Button>
         </div>
      </section>

    </div>
  );
}

// --- Sub Components ---

function ExpectationCard({ icon, title, desc, points }: { icon: React.ReactNode, title: string, desc: string, points: string[] }) {
   return (
      <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-xl hover:border-white/10 transition-colors group">
         <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all">
            {icon}
         </div>
         <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
         <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{desc}</p>
         <ul className="space-y-3">
            {points.map((point, i) => (
               <li key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-red-500/70" />
                  {point}
               </li>
            ))}
         </ul>
      </div>
   )
}

function PreviewCard({ category, title, desc, tags }: { category: string, title: string, desc: string, tags: string[] }) {
   return (
      <div className="group relative bg-[#050505] border border-white/10 rounded-xl p-8 md:p-10 overflow-hidden hover:border-red-500/30 transition-all duration-500">
         
         {/* "Locked" Overlay Effect */}
         <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md z-20">
            <Lock className="w-3 h-3 text-zinc-500" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Coming Soon</span>
         </div>

         {/* Content */}
         <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
               <Clock className="w-4 h-4 text-red-500" />
               <span className="text-xs font-bold text-red-500 tracking-widest uppercase">{category}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 group-hover:text-red-50 transition-colors">
               {title}
            </h3>
            
            <p className="text-zinc-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
               {desc}
            </p>

            <div className="flex flex-wrap gap-2">
               {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-[10px] uppercase tracking-wider text-zinc-500">
                     {tag}
                  </span>
               ))}
            </div>
         </div>

         {/* Hover Gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
   )
}