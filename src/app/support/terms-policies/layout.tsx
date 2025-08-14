import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Policies | LegendX',
  description: 'Read LegendX terms, after-sales policy, privacy policy, and disclaimer.',
  alternates: { canonical: '/support/terms-policies' },
  openGraph: {
    url: 'https://legendx.ae/support/terms-policies',
    title: 'Terms & Policies | LegendX',
    description: 'Read LegendX terms, after-sales policy, privacy policy, and disclaimer.',
    images: [
      { url: '/logo/legendx-logo.svg', width: 1200, height: 630, alt: 'LegendX Logo' },
    ],
  },
};

export default function TermsPoliciesLayout({
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


