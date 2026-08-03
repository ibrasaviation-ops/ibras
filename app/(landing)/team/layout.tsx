import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Team | IBRAS Aviation',

  description:
    'Meet the experienced aviation professionals and certified flight instructors at IBRAS Aviation. Our dedicated team provides professional FAA Part 61 flight training to help students achieve their pilot goals.',

  keywords: [
    'IBRAS Aviation Team',
    'Flight Instructors',
    'Certified Flight Instructors',
    'CFI Team',
    'FAA Flight Training',
    'Aviation Professionals',
    'Pilot Instructors',
    'Flight School Team',
    'Private Pilot Training',
    'Commercial Pilot Training',
    'Professional Flight Training',
    'Learn to Fly',
    'Aviation Academy',
  ],

  authors: [
    {
      name: 'IBRAS Aviation',
      url: 'https://ibrasaviation.com',
    },
  ],

  creator: 'IBRAS Aviation',
  publisher: 'IBRAS Aviation',

  category: 'Aviation Training',

  alternates: {
    canonical: 'https://ibrasaviation.com/team',
  },

  openGraph: {
    title: 'Meet Our Team | IBRAS Aviation',

    description:
      'Discover the experienced flight instructors and aviation professionals behind IBRAS Aviation. Learn from our dedicated team committed to providing quality FAA Part 61 flight training.',

    url: 'https://ibrasaviation.com/team',

    siteName: 'IBRAS Aviation',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IBRAS Aviation Team',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Meet Our Team | IBRAS Aviation',

    description:
      'Meet the certified flight instructors and aviation professionals at IBRAS Aviation providing professional flight training.',

    images: ['/og-image.png'],
  },

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
