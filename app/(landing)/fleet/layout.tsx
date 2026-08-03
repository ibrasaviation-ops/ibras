import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aircraft Fleet | IBRAS Aviation',

  description:
    'Explore the IBRAS Aviation training fleet featuring well-maintained Cessna 150, Cessna 172 Skyhawk, Tecnam P2010 aircraft, and advanced flight simulator access designed for FAA Part 61 pilot training.',

  keywords: [
    'IBRAS Aviation Fleet',
    'Flight Training Aircraft',
    'Cessna 150 Training Aircraft',
    'Cessna 172 Skyhawk Flight Training',
    'Tecnam P2010 Aircraft',
    'FAA Part 61 Flight School',
    'Aircraft Fleet for Pilot Training',
    'Flight Simulator Training',
    'Pilot Training Aircraft',
    'Private Pilot Training Aircraft',
    'Commercial Pilot Training',
    'Instrument Flight Training',
    'Aviation Academy Aircraft',
    'Learn to Fly',
    'Flight School USA',
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
    canonical: 'https://ibrasaviation.com/fleet',
  },

  openGraph: {
    title: 'IBRAS Aviation Aircraft Fleet | Training Aircraft',

    description:
      'Discover the aircraft and simulator resources used at IBRAS Aviation. Train with reliable Cessna 150, Cessna 172 Skyhawk, Tecnam P2010 aircraft, and structured simulator sessions.',

    url: 'https://ibrasaviation.com/fleet',

    siteName: 'IBRAS Aviation',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IBRAS Aviation Training Aircraft Fleet',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Aircraft Fleet | IBRAS Aviation',

    description:
      'Train with modern aircraft including Cessna 150, Cessna 172 Skyhawk, Tecnam P2010, and professional flight simulator access.',

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

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen ">
      <main>{children}</main>
    </div>
  );
}
