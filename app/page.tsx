import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WhyRobonixSection from '@/components/sections/WhyRobonixSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import ScenariosSection from '@/components/sections/ScenariosSection';
import DemoSection from '@/components/sections/DemoSection';
import HardwareSection from '@/components/sections/HardwareSection';
import VendorsSection from '@/components/sections/VendorsSection';
import TeamSection from '@/components/sections/TeamSection';
import CTASection from '@/components/sections/CTASection';
import AnnouncementBanner from '@/components/ui/AnnouncementBanner';

export default function Home() {
  return (
    <main className="site-cyber-bg relative min-h-screen bg-[#f2f6fa] dark:bg-[#020617]">
      <Navbar />
      <HeroSection />
      <WhyRobonixSection />
      <ArchitectureSection />
      <ScenariosSection />
      <DemoSection />
      <HardwareSection />
      <VendorsSection />
      <TeamSection />
      <CTASection />
      <AnnouncementBanner />
      <Footer />
    </main>
  );
}
