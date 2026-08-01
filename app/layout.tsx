import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'IBRAS Aviation',
    template: '%s | IBRAS Aviation Academy',
  },
  description:
    'Professional FAA Part 61 flight training programs helping students become commercial pilots.',
  keywords: [
    'Flight Training',
    'Commercial Pilot',
    'FAA Part 61',
    'Pilot School',
    'Aviation Academy',
  ],
  icons: {
    icon: '/logo-fav.png',
  },
  openGraph: {
    title: 'IBRAS Aviation Academy',
    description: 'Become a commercial pilot through structured FAA flight training.',
    url: 'https://ibrasaviation.com',
    siteName: 'IBRAS Aviation Academy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IBRAS Aviation Academy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="h-screen overflow-hidden flex flex-col">{children}</body>
    </html>
  );
}
