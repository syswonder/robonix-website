import type { Metadata } from 'next';
import './globals.css';
import { LocaleProvider } from '@/context/LocaleContext';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Robonix — The Embodied AI Operating System',
  description:
    'Robonix is an operating system for embodied intelligence. Build, deploy, and manage robot applications with a modular, AI-native framework.',
  keywords: ['robotics', 'embodied AI', 'robot OS', 'robotics framework', 'Robonix', 'VLA', 'ROS 2'],
  authors: [{ name: 'Robonix Team' }],
  openGraph: {
    title: 'Robonix — The Embodied AI Operating System',
    description: 'A system substrate for building embodied intelligence across heterogeneous robots.',
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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LocaleProvider>
            {/* Development notice — KEEP THIS BANNER */}
            <div className="fixed inset-x-0 top-0 z-[60] bg-amber-500 px-4 py-1.5 text-center text-sm font-medium text-black">
              🚧 This site is under active development — not the final version.
            </div>
            <div className="pt-[36px]">{children}</div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
