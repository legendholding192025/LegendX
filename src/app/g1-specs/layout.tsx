import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'G1 Specs | LegendX',
  description: 'Explore specifications and capabilities of the LegendX G1 humanoid robot.',
  alternates: { canonical: '/g1-specs' },
  openGraph: {
    url: 'https://legendx.ae/g1-specs',
    title: 'G1 Specs | LegendX',
    description: 'Explore specifications and capabilities of the LegendX G1 humanoid robot.',
    images: [
      { url: '/logo/legendx-logo.svg', width: 1200, height: 630, alt: 'LegendX Logo' },
    ],
  },
};

export default function G1SpecsLayout({
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


