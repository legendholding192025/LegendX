import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | Legend X',
  description: 'Support resources for Legend X robotics: terms, after-sales policy, privacy policy, disclaimer, and contact support.',
  alternates: { canonical: '/support/terms-policies' },
  openGraph: {
    url: 'https://legendx.ae/support/terms-policies',
    title: 'Support | Legend X',
    description: 'Support resources for Legend X robotics: terms, after-sales policy, privacy policy, disclaimer, and contact support.',
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


