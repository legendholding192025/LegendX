import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sales Services | LegendX',
  description: 'Purchase LegendX robots and bring AI-powered automation to your organization with expert support.',
  alternates: { canonical: '/services/sales' },
  openGraph: {
    url: 'https://legendx.ae/services/sales',
    title: 'Sales Services | LegendX',
    description: 'Purchase LegendX robots and bring AI-powered automation to your organization with expert support.',
    images: [
      { url: '/logo/legendx-logo.svg', width: 1200, height: 630, alt: 'LegendX Logo' },
    ],
  },
};

export default function SalesLayout({
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


