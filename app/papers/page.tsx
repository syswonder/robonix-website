'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PapersSection from '@/components/sections/PapersSection';

export default function PapersPage() {
  return (
    <main className="site-cyber-bg relative min-h-screen bg-[#f2f6fa] dark:bg-[#020617]">
      <Navbar />
      <PapersSection />
      <Footer />
    </main>
  );
}
