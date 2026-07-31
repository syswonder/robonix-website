import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ComingSoon from '@/components/ui/ComingSoon';

export default function ComingSoonPage() {
  return (
    <main className="site-cyber-bg relative min-h-screen bg-[#f2f6fa] dark:bg-[#020617]">
      <Navbar />
      <ComingSoon />
      <Footer />
    </main>
  );
}
