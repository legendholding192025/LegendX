import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GO1 Specs | LegendX',
  description: 'Explore specifications and capabilities of the LegendX GO1 quadruped robot.',
  alternates: { canonical: '/go1-specs' },
  openGraph: {
    url: 'https://legendx.ae/go1-specs',
    title: 'GO1 Specs | LegendX',
    description: 'Explore specifications and capabilities of the LegendX GO1 quadruped robot.',
    images: [
      { url: '/logo/legendx-logo.svg', width: 1200, height: 630, alt: 'LegendX Logo' },
    ],
  },
};

export default function GO1SpecsLayout({
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


