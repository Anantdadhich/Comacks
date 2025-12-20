import React from 'react';
import { ArrowUpRight, Plus, Radio } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      
      {/* --- Background Texture --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">
        
        {/* --- Main Content Row --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <span className="text-sm font-bold tracking-widest uppercase">Comacks</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              AI-Powered Automation & Digital Solutions designed specifically for the growth of Australian Healthcare Clinics.
            </p>
            <div className="flex items-center gap-4">
               {/* Social placeholders using simple text/icons */}
               <SocialLink label="LinkedIn" />
               <SocialLink label="Twitter" />
               <SocialLink label="Instagram" />
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-12 md:gap-24">
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-zinc-500 font-medium">
                <li><a href="#" className="hover:text-red-400 transition-colors flex items-center gap-1">AI Automation</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors flex items-center gap-1">Digital Solutions</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors flex items-center gap-1">Social Media</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-zinc-500 font-medium">
                <li><a href="#" className="hover:text-red-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-zinc-500 font-medium">
                <li><a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* --- Bottom Status Bar --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
          
          <div className="flex items-center gap-2">
             <p>&copy; {new Date().getFullYear()} Comacks.</p>
             <span className="hidden md:inline text-zinc-800">|</span>
             <p className="hidden md:inline">All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>System Status: Online</span>
             </div>
             <div className="flex items-center gap-2">
                <Radio className="w-3 h-3" />
                <span>Sydney, AU</span>
             </div>
          </div>

        </div>

        {/* Decorative Corner Markers */}
        <div className="absolute bottom-8 left-0 text-zinc-800 hidden md:block"><Plus strokeWidth={1} className="w-4 h-4" /></div>
        <div className="absolute bottom-8 right-0 text-zinc-800 hidden md:block"><Plus strokeWidth={1} className="w-4 h-4" /></div>

      </div>
    </footer>
  );
}

function SocialLink({ label }: { label: string }) {
    return (
        <a href="#" className="text-xs font-bold text-zinc-500 uppercase tracking-wider hover:text-white flex items-center gap-1 transition-colors group">
            {label}
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
        </a>
    )
}