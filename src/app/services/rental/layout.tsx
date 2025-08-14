import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robots for Rent | Legend X',
  description: 'Rent advanced robots from Legend X for corporate events, research, inspection, and security. Programmed robots and AI robotics on demand.',
  alternates: { canonical: '/services/rental' },
  openGraph: {
    url: 'https://legendx.ae/services/rental',
    title: 'Robots for Rent | Legend X',
    description: 'Rent advanced robots from Legend X for corporate events, research, inspection, and security. Programmed robots and AI robotics on demand.',
    images: [
      { url: '/logo/legendx-logo.svg', width: 1200, height: 630, alt: 'LegendX Logo' },
    ],
  },
};

export default function RentalLayout({
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


