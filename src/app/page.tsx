import { Hero } from '@/components/home/hero';
import { ProblemSection } from '@/components/home/problem-section';
import { PipelineModel } from '@/components/home/pipeline-model';
import { RevenueEquation } from '@/components/home/revenue-equation';
import { BenchmarkComparison } from '@/components/home/benchmark-comparison';
import { ExpectedGap } from '@/components/home/expected-gap';
import { DiagnosisToolPreview } from '@/components/home/diagnosis-tool-preview';
import { PlatformPreview } from '@/components/home/platform-preview';
import { SystemLayers } from '@/components/home/system-layers';
import { SampleReport } from '@/components/home/sample-report';
import { ResultsProof } from '@/components/home/results-proof';
import { AuthoritySection } from '@/components/home/authority-section';
import { WhoItsFor } from '@/components/home/who-its-for';
import { FinalCallToAction } from '@/components/home/final-cta';
import { CTA } from '@/components/home/cta';
import { Testimonials } from '@/components/home/testimonials';

export default function Home() {
  return (
    <div className="bg-[#050505]">
      <Hero />
      <ProblemSection />
      <PipelineModel />
      <RevenueEquation />
      <BenchmarkComparison />
      <ExpectedGap />
      <DiagnosisToolPreview />

      <SystemLayers />
      <SampleReport />
      <ResultsProof />
      <AuthoritySection />

      <CTA></CTA>
    </div>
  );
}
