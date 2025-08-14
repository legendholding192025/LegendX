import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B1 Specs | LegendX',
  description: 'Explore specifications and capabilities of the LegendX B1 quadruped robot.',
  alternates: { canonical: '/b1-specs' },
  openGraph: {
    url: 'https://legendx.ae/b1-specs',
    title: 'B1 Specs | LegendX',
    description: 'Explore specifications and capabilities of the LegendX B1 quadruped robot.',
    images: [
      { url: '/logo/legendx-logo.svg', width: 1200, height: 630, alt: 'LegendX Logo' },
    ],
  },
};

export default function B1SpecsLayout({
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


