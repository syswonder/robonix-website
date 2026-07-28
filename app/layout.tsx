import type { Metadata } from 'next';
import './globals.css';
import { LocaleProvider } from '@/context/LocaleContext';

export const metadata: Metadata = {
  title: 'Robonix — The Robot Operating Framework',
  description:
    'Robonix is a next-generation robot operating framework. Build, deploy, and manage robot applications with ease.',
  keywords: ['robotics', 'robot OS', 'ROS', 'robotics framework', 'Robonix'],
  authors: [{ name: 'Robonix Team' }],
  openGraph: {
    title: 'Robonix — The Robot Operating Framework',
    description: 'Build, deploy, and manage robot applications with ease.',
    url: 'https://robonix.syswonder.org/',
    siteName: 'Robonix',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LocaleProvider>
          {/* Development notice */}
          <div className="fixed inset-x-0 top-0 z-[60] bg-amber-500 px-4 py-1.5 text-center text-sm font-medium text-black">
            🚧 This site is under active development — not the final version.
          </div>
          <div className="pt-[36px]">{children}</div>
        </LocaleProvider>
      </body>
    </html>
  );
}
