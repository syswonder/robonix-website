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
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
