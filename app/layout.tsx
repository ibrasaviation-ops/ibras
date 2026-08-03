import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ibrasaviation.com'),
  title: {
    default: 'IBRAS Aviation',
    template: '%s | IBRAS Aviation',
  },

  description:
    'IBRAS Aviation Academy provides FAA Part 61 flight training in Florida. Start your journey from Private Pilot License (PPL) to Commercial Pilot and Certified Flight Instructor (CFI) with experienced instructors.',
  keywords: [
    'flight school Florida',
    'FAA Part 61',
    'pilot training',
    'commercial pilot training',
    'private pilot license',
    'instrument rating',
    'CFI training',
    'aviation academy',
    'flight instructor',
    'pilot academy USA',
  ],

  authors: [{ name: 'IBRAS Aviation' }],
  creator: 'IBRAS Aviation',
  publisher: 'IBRAS Aviation',

  category: 'Education',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: 'https://ibrasaviation.com',
  },

  icons: {
    icon: '/logo-fav.png',
    shortcut: '/logo-fav.png',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'IBRAS Aviation',
    description: 'Become a commercial pilot through structured FAA flight training.',
    url: 'https://ibrasaviation.com',
    siteName: 'IBRAS Aviation Academy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IBRAS Aviation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'IBRAS Aviation',
    description: 'Professional FAA Part 61 Flight Training.',
    images: ['/og-image.png'],
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
