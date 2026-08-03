import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TSA Flight Training Requirements | IBRAS Aviation',

  description:
    'Learn the TSA flight training requirements for international students at IBRAS Aviation. Follow our step-by-step guide for TSA clearance, AFSP application, fingerprinting, required documents, fees, and approval before starting FAA Part 61 flight training.',

  keywords: [
    'TSA flight training requirements',
    'TSA clearance',
    'AFSP',
    'Alien Flight Student Program',
    'international student pilot',
    'FAA Part 61',
    'flight school USA',
    'pilot training USA',
    'flight training international students',
    'TSA application',
    'TSA fingerprinting',
    'IBRAS Aviation',
  ],

  alternates: {
    canonical: 'https://ibrasaviation.com/tsa',
  },

  openGraph: {
    title: 'TSA Flight Training Requirements | IBRAS Aviation',
    description:
      'Everything international students need to know about TSA clearance before beginning flight training in the United States.',
    url: 'https://ibrasaviation.com/tsa',
    siteName: 'IBRAS Aviation',
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
    title: 'TSA Flight Training Requirements for International Students',
    description:
      'Step-by-step guide to TSA clearance, AFSP application, fingerprinting, and FAA flight training requirements.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
