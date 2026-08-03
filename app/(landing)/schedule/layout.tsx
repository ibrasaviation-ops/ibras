import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule Your Visit | IBRAS Aviation',

  description:
    'Schedule your visit to IBRAS Aviation and explore our flight training programs. Book a school tour, meet our instructors, view our aircraft fleet, and learn how to begin your aviation journey.',

  keywords: [
    'Schedule Flight School Visit',
    'Book Aviation School Tour',
    'IBRAS Aviation Appointment',
    'Flight Training Consultation',
    'Pilot Training Appointment',
    'Discovery Flight Booking',
    'Flight School Tour',
    'FAA Flight Training',
    'Private Pilot Training',
    'Commercial Pilot Training',
    'Aviation Academy Visit',
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
    canonical: 'https://ibrasaviation.com/schedule',
  },

  openGraph: {
    title: 'Schedule a Tour | IBRAS Aviation',

    description:
      'Book your visit to IBRAS Aviation. Tour our facilities, meet our instructors, explore our aircraft, and learn about professional flight training programs.',

    url: 'https://ibrasaviation.com/schedule',

    siteName: 'IBRAS Aviation',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Schedule a Visit at IBRAS Aviation',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Schedule Your Visit | IBRAS Aviation',

    description:
      'Book a school tour at IBRAS Aviation and take the first step toward your aviation career.',

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

export default function ScheduleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
