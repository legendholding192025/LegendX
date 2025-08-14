import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Legend X',
  description: 'Contact Legend X to discuss advanced robots, AI robotics solutions, rentals, sales, and support.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: 'https://legendx.ae/contact',
    title: 'Contact | Legend X',
    description: 'Contact Legend X to discuss advanced robots, AI robotics solutions, rentals, sales, and support.',
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