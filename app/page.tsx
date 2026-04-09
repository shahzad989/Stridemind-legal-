import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyDualTask from '@/components/sections/WhyDualTask';
import TheScience from '@/components/sections/TheScience';
import WhoItsFor from '@/components/sections/WhoItsFor';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyDualTask />
      <TheScience />
      <WhoItsFor />
      <Pricing />
      <FAQ />
      <CallToAction />
    </>
  );
}
