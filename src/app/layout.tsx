import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'LegendX - Cutting-edge Technology & AI Robotics',
    template: '%s | LegendX'
  },
  description: 'LegendX specializes in cutting-edge technology and AI-driven innovations, offering advanced robotics solutions designed to enhance everyday life.',
  keywords: ['robotics', 'AI', 'technology', 'automation', 'innovation', 'LegendX'],
  authors: [{ name: 'Legend Holding Group' }],
  creator: 'Legend Holding Group',
  publisher: 'Legend Holding Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://legendx.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://legendx.com',
    title: 'LegendX - Cutting-edge Technology & AI Robotics',
    description: 'Advanced robotics solutions designed to enhance everyday life through AI-driven innovations.',
    siteName: 'LegendX',
    images: [
      {
        url: '/logo/legendx-logo.svg',
        width: 1200,
        height: 630,
        alt: 'LegendX Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LegendX - Cutting-edge Technology & AI Robotics',
    description: 'Advanced robotics solutions designed to enhance everyday life through AI-driven innovations.',
    images: ['/logo/legendx-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#5E366D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//cdn.legendholding.com" />
        <link rel="preconnect" href="//cdn.legendholding.com" />
      </head>
      <body className="antialiased font-sans">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 