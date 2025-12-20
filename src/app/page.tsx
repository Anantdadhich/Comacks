import { Hero } from '@/components/home/hero';

import { Testimonials } from '@/components/home/testimonials';
import { CTA } from '@/components/home/cta';
import { Services } from '@/components/home/services';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { CaseStudies } from '@/components/home/case-studies';

export default function Home() {
  return (
    <main className="flex-1 bg-[#050505]">
      <Hero />
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <CaseStudies></CaseStudies>
      <Testimonials />
      <CTA />
    </main>
  );
}
