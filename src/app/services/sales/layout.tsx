import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Advanced Robots | Legend X',
  description: 'Buy advanced robots from Legend X — humanoid and quadruped robots for automation, inspection, and security. AI robotics with support.',
  alternates: { canonical: '/services/sales' },
  openGraph: {
    url: 'https://legendx.ae/services/sales',
    title: 'Buy Advanced Robots | Legend X',
    description: 'Buy advanced robots from Legend X — humanoid and quadruped robots for automation, inspection, and security. AI robotics with support.',
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


