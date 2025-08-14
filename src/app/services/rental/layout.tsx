import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Services | LegendX',
  description: 'Rent LegendX robots for events, research, and custom deployments. Experience cutting-edge AI robotics on demand.',
  alternates: { canonical: '/services/rental' },
  openGraph: {
    url: 'https://legendx.ae/services/rental',
    title: 'Rental Services | LegendX',
    description: 'Rent LegendX robots for events, research, and custom deployments. Experience cutting-edge AI robotics on demand.',
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


