import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | LegendX',
  description: 'Get in touch with LegendX for cutting-edge technology and AI-driven robotics solutions.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: 'https://legendx.ae/contact',
    title: 'Contact Us | LegendX',
    description: 'Get in touch with LegendX for cutting-edge technology and AI-driven robotics solutions.',
    images: [
      {
        url: '/logo/legendx-logo.svg',
        width: 1200,
        height: 630,
        alt: 'LegendX Logo',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 