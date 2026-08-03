import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviation Training Admissions',

  description:
    'Apply to IBRAS Aviation and begin your aviation journey. Submit your admission form for professional flight training programs, pilot courses, and FAA-approved aviation education.',

  keywords: [
    'IBRAS Aviation Admissions',
    'Flight School Admissions',
    'Apply for Flight Training',
    'Pilot Training Application',
    'Aviation Academy Enrollment',
    'FAA Flight Training',
    'Private Pilot Training',
    'Commercial Pilot Training',
    'Pilot Course Registration',
    'Flight School Application',
    'Become a Pilot',
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

  category: 'Aviation Education',

  alternates: {
    canonical: 'https://ibrasaviation.com/admissions',
  },

  openGraph: {
    title: 'Apply for Flight Training | IBRAS Aviation Admissions',

    description:
      'Start your pilot training journey with IBRAS Aviation. Complete your admission application and explore professional aviation training programs.',

    url: 'https://ibrasaviation.com/admissions',

    siteName: 'IBRAS Aviation',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IBRAS Aviation Flight Training Admissions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Flight Training Admissions | IBRAS Aviation',

    description:
      'Apply today for professional pilot training programs at IBRAS Aviation and take the first step toward your aviation career.',

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

export default function AdmissionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
