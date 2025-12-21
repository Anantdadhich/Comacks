"use client"
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import { InlineWidget } from 'react-calendly';

export function Contact() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-red-900/30 overflow-x-hidden pt-24">
      
 
      <section className="relative py-20 px-6 border-b border-white/5">
        
      
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-red-200 font-bold">Communications Link</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] mb-8 text-white">
            Let's Grow Your <br />
            <span className="text-zinc-600">Clinic Together.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Reach out to schedule your free consultation and discover how we can help your healthcare practice thrive.
          </p>
        </div>
      </section>

    
      <section className="relative py-20 px-6">
         <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
               
           
               <div className="space-y-8">
                  <div className="mb-8">
                     <h2 className="text-3xl font-medium tracking-tight mb-4">Direct Communication</h2>
                     <p className="text-zinc-400">Establish a secure connection with our growth specialists.</p>
                  </div>

                 
                  <ContactCard 
                     icon={<Mail />}
                     label="Email Protocol"
                     value="arpit@comacks.com"
                     href="mailto:arpit@comacks.com"
                  />

                 
                  <ContactCard 
                     icon={<Phone />}
                     label="Voice Channel"
                     value="+91 7303908344"
                     href="tel:+917303908344"
                  />

                 
                  <div className="group bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-red-500/30 transition-all duration-300">
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-lg text-zinc-400 group-hover:text-green-400 group-hover:bg-green-900/20 transition-colors">
                           <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Instant Messaging</div>
                           <h3 className="text-lg font-medium text-white mb-2">WhatsApp Support</h3>
                           <p className="text-zinc-400 text-sm mb-4">Prefer to chat directly? Reach out for quick responses.</p>
                           <a 
                              href="https://wa.me/7303908344" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-green-400 transition-colors"
                           >
                              Start Chat <ArrowRight className="w-4 h-4" />
                           </a>
                        </div>
                     </div>
                  </div>

               
                  <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-xl flex items-start gap-4">
                     <div className="p-3 bg-white/5 rounded-lg text-zinc-400">
                        <MapPin className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Base of Operations</div>
                        <h3 className="text-lg font-medium text-white">New Delhi, India</h3>
                     </div>
                  </div>

               </div>

             
               <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <Mail className="w-24 h-24 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-medium mb-2 relative z-10">Send a Transmission</h3>
                  <p className="text-zinc-400 text-sm mb-8 relative z-10">One of our specialists will respond within 24 hours.</p>
                  
                  
                  <form className="space-y-4 relative z-10">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">First Name</label>
                           <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-red-500/50 transition-colors" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Last Name</label>
                           <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-red-500/50 transition-colors" />
                        </div>
                     </div>
                     
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-red-500/50 transition-colors" />
                     </div>
                     
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                        <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-red-500/50 transition-colors"></textarea>
                     </div>

                     <Button className="w-full h-12 bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-widest text-xs rounded-lg mt-4">
                        Send Message
                     </Button>
                  </form>
               </div>

            </div>
         </div>
      </section>

     
      <section className="relative py-20 px-6 border-t border-white/5 bg-[#080808]">
         <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
               <div className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded-full mb-6 border border-white/10">
                  <Calendar className="w-5 h-5 text-red-500" />
               </div>
               <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">Schedule Your Consultation</h2>
               <p className="text-zinc-400 max-w-2xl mx-auto">
                  Use our secure calendar to book a time that works for you. We'll discuss your clinic's goals and how we can help you achieve them.
               </p>
            </div>

            <div className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
               
               <InlineWidget
                  url="https://calendly.com/03arpit04"
                  styles={{ height: '700px', width: '100%' }}
                  pageSettings={{
                    backgroundColor: '050505',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: 'ef4444',
                    textColor: 'ffffff'
                  }}
               />
            </div>
         </div>
      </section>

    </div>
  );
}



function ContactCard({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
   return (
      <a href={href} className="block group bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-red-500/30 transition-all duration-300">
         <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-lg text-zinc-400 group-hover:text-white group-hover:bg-red-500/20 transition-colors">
               {icon}
            </div>
            <div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">{label}</div>
               <div className="text-lg font-medium text-white group-hover:text-red-100 transition-colors">{value}</div>
            </div>
         </div>
      </a>
   )
}