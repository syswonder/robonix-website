import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WhyRobonixSection from '@/components/sections/WhyRobonixSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import ScenariosSection from '@/components/sections/ScenariosSection';
import DemoSection from '@/components/sections/DemoSection';
import HardwareSection from '@/components/sections/HardwareSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import TeamSection from '@/components/sections/TeamSection';
import VendorsSection from '@/components/sections/VendorsSection';
import DocsSection from '@/components/sections/DocsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <HeroSection />
      <WhyRobonixSection />
      <FeaturesSection />
      <ArchitectureSection />
      <ScenariosSection />
      <DemoSection />
      <HardwareSection />
      <RoadmapSection />
      <TeamSection />
      <VendorsSection />
      <DocsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
