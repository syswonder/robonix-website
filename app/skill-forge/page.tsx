import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ComingSoon from '@/components/ui/ComingSoon';

export default function SkillForgePage() {
  return (
    <main className="site-cyber-bg relative min-h-screen bg-[#f2f6fa] dark:bg-[#020617]">
      <Navbar />
      <ComingSoon
        title={{ en: 'Skill Forge', zh: '技能工坊' }}
        description={{
          en: 'A marketplace for discovering, sharing, and composing reusable robot skills.',
          zh: '发现、分享与组合可复用机器人技能的工坊市场。',
        }}
      />
      <Footer />
    </main>
  );
}
