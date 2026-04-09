import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import TheScience from '@/components/sections/TheScience';
import WhoItsFor from '@/components/sections/WhoItsFor';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TheScience />
      <WhoItsFor />
      <Testimonials />
      <CallToAction />
    </>
  );
}
