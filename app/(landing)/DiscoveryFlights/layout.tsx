import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discovery Flight',

  description:
    'Experience your first flight with IBRAS Aviation. Book a Discovery Flight with a certified flight instructor, explore our aircraft, and take the first step toward becoming a pilot.',

  keywords: [
    'Discovery Flight',
    'Introductory Flight',
    'First Flight Experience',
    'Book Discovery Flight',
    'Flight Experience',
    'Learn to Fly',
    'Pilot Training',
    'Flight Instructor',
    'Cessna 172 Flight',
    'Private Pilot Training',
    'FAA Flight Training',
    'Flight School',
    'IBRAS Aviation',
  ],

  authors: [
    {
      name: 'IBRAS Aviation',
      url: 'https://ibrasaviation.com',
    },
  ],

  creator: 'IBRAS Aviation',
  publisher: 'IBRAS Aviation',

  category: 'Flight Training',

  alternates: {
    canonical: 'https://ibrasaviation.com/DiscoveryFlights',
  },

  openGraph: {
    title: 'Discovery Flight | IBRAS Aviation',

    description:
      'Take your first step into aviation with a Discovery Flight at IBRAS Aviation. Fly with a certified instructor and experience the excitement of becoming a pilot.',

    url: 'https://ibrasaviation.com/DiscoveryFlights',

    siteName: 'IBRAS Aviation',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IBRAS Aviation Discovery Flight Experience',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Discovery Flight | IBRAS Aviation',

    description:
      'Book a Discovery Flight and experience aviation with professional flight instructors at IBRAS Aviation.',

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

export default function DiscoveryFlightsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
