import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ComingSoon from '@/components/ui/ComingSoon';

export default function ResourcesPage() {
  return (
    <main className="site-cyber-bg relative min-h-screen bg-[#f2f6fa] dark:bg-[#020617]">
      <Navbar />
      <ComingSoon
        description={{
          en: 'Research papers, technical reports, and presentations will be available here.',
          zh: '研究论文、技术报告与演讲资料将在这里发布。',
        }}
      />
      <Footer />
    </main>
  );
}
