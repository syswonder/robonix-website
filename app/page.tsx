import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <EcosystemSection />
      <CTASection />
      <Footer />
    </main>
  );
}
