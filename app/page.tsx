import Hero from '@/components/sections/Hero';
import SocialProofBar from '@/components/sections/SocialProofBar';
import HowItWorks from '@/components/sections/HowItWorks';
import TheScience from '@/components/sections/TheScience';
import WhoItsFor from '@/components/sections/WhoItsFor';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <HowItWorks />
      <TheScience />
      <WhoItsFor />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
    </>
  );
}
