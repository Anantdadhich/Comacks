import { Hero } from '@/components/home/hero';
import { ValueAnchors } from '@/components/home/value-anchors';
import { SystemNarrative } from '@/components/home/system-narrative';
import { Diagnostics } from '@/components/home/diagnostics';
import { OperatingSystem } from '@/components/home/operating-system';
import { SystemPhilosophy } from '@/components/home/system-philosophy';
import { Testimonials } from '@/components/home/testimonials';
import { CTA } from '@/components/home/cta';
import { CaseStudies } from '@/components/home/case-studies';

export default function Home() {
  return (
    <div className="bg-[#050505]">
      <Hero />
      <ValueAnchors />
      <SystemNarrative />
      <Diagnostics />
      <OperatingSystem />
      <SystemPhilosophy />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </div>
  );
}
