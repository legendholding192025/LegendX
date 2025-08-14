import type { Metadata, Viewport } from 'next';
import './globals.css';
import LayoutWrapper from '@/components/layout/LayoutWrapper';

export const metadata: Metadata = {
  title: {
    default: 'LegendX - Cutting-edge Technology & AI Robotics',
    template: '%s | LegendX'
  },
  description: 'LegendX is a robotics company specialized in cutting-edge technology and AI-driven innovations. We offer advanced robotics solutions designed to integrate everyday life with AI, both at the corporate and personal level',
  keywords: [
    'robots',
    'ai',
    'humanoid robot',
    'robot ai',
    'robotics company',
    'home robots',
    'ai robotics',
    'security robot',
    'robot as a service',
    'quadruped robot',
    'advanced robotics',
    'real robots',
    'inspection robots',
    'robotics ai',
    'robots in real life',
    'ai robots for home',
    'go 1 robot',
    'robotics equipment',
    'robot go1',
    'robots for your home',
    'humanoid robot company',
    'robotics robot',
    'robot x',
    'newest robot',
    'the robot company',
    'robot as service',
    'ai service robot',
    'robot life',
    'realistic robots',
    'go1 quadruped robot',
    'robot for home monitoring',
    'robots in our world',
    'robots in the real world',
    'a robot robot',
    'new advanced robots',
    'robots can',
    'lego robotics',
    'robot to robot',
    'robot a robot',
    'robot humanoid robot',
    'all robot',
    'robot with robot',
    'robot and robot',
    'cutting edge robot',
    'robot in robot',
    'specialized robots',
    'robotics industrial',
    'us robot',
    'robots used in everyday life',
    'the newest robot',
    'robot g1',
    'a real life robot',
    'robot all',
    'real life humanoid robots',
    'robot in real',
    'robot on robot',
    'your robot',
    'robotic automation',
    'the robot robot',
    'both robot',
    'robots for inspection',
    'robots in everyday life',
    'robot technologies',
    'x robot',
    'robotics businesses',
    'a robotics company',
    'robotics firms',
    'at home robotics',
    'robotica robot',
    'robots personal',
    'b1 robot',
    'robotics cameras',
    'robot go 1',
    'robot b1',
    'everyday robotics',
    'our robot',
    'robot x robot',
    'service robotic',
    'safe robots',
    'security in robotics',
    'everyday robots company',
    'robots auto',
    'ae robot',
    'robot in a can',
    'programmed robots',
    'get into robotics',
    'auto robotics',
    'exploration robots',
    'detecting robot',
    'auto robotic',
    'robot ae',
    'we robots',
    'life saving robot',
    'artificial intelligence',
    'robotico',
    'cutting robots',
    'ai companies',
    'artificial intelligence ai',
    'ras robot',
    'robot ki robot',
    'ai intelligence',
    'artificial intelligence companies',
    'life robot',
    'x robot x',
    'robot we',
    'ai in real life',
    'intelligent robot',
    'robot aur robot',
    'you can robot',
    'mecha real',
    'robotic research',
    'ai technologies',
    'artificial',
    'artificial intelligence and robotics',
    'ai in your life',
    'ai in real world',
    'use of ai in our daily life',
    'ai in our everyday life',
    'ai everyday life',
    'ai in every day life',
    'use of ai in everyday life',
    'bot robot',
    'airobotics',
    'ai a',
  ],
  authors: [{ name: 'Legend Holding Group' }],
  creator: 'Legend Holding Group',
  publisher: 'Legend Holding Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://legendx.ae'),
  alternates: {
    canonical: '/home',
  },
  icons: {
    icon: [
      { url: '/url_logo.png', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    shortcut: '/url_logo.png',
    apple: '/url_logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://legendx.ae/home',
    title: 'LegendX - Cutting-edge Technology & AI Robotics',
    description: 'Is a robotics company specialized in cutting-edge technology and AI-driven innovations. We offer advanced robotics solutions designed to integrate everyday life with AI, both at the corporate and personal level',
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
    description: 'Is a robotics company specialized in cutting-edge technology and AI-driven innovations. We offer advanced robotics solutions designed to integrate everyday life with AI, both at the corporate and personal level',
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
    google: 'JvjAzqyg5Pu9ia8f2cNID4uELYlnPudk7OiylSyiUf8',
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
        <link rel="preload" as="font" href="/fonts/Effra_Std_Rg.ttf" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/fonnts.com-Richmond-Text-Medium.otf" type="font/otf" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="/url_logo.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/url_logo.png" />
        <link rel="apple-touch-icon" href="/url_logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LegendX',
              url: 'https://legendx.ae',
              logo: 'https://legendx.ae/logo/legendx-logo.svg',
              sameAs: []
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'LegendX',
              url: 'https://legendx.ae'
            })
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
} 