import type { Metadata } from 'next';
import './globals.css';
import { LocaleProvider } from '@/context/LocaleContext';
import { ThemeProvider } from '@/context/ThemeContext';
import MobileWarning from '@/components/layout/MobileWarning';

export const metadata: Metadata = {
  title: 'Robonix — The Embodied AI Operating System',
  description:
    'Robonix is an operating system for embodied intelligence. Build, deploy, and manage robot applications with a modular, AI-native framework.',
  keywords: ['robotics', 'embodied AI', 'robot OS', 'robotics framework', 'Robonix', 'VLA', 'ROS 2'],
  authors: [{ name: 'Robonix Team' }],
  icons: {
    icon: '/images/robonix-mark.svg',
  },
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/robonix-mark.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('robonix-theme');if(t==='light'){document.documentElement.classList.remove('dark')}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LocaleProvider>
            <MobileWarning />
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
