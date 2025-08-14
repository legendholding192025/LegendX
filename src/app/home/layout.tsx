import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LegendX - Home',
  description: 'LegendX - Cutting-edge technology and AI-driven innovations for advanced robotics solutions',
  alternates: {
    canonical: '/home',
  },
  openGraph: {
    url: 'https://legendx.ae/home',
    title: 'LegendX - Home',
    description: 'LegendX - Cutting-edge technology and AI-driven innovations for advanced robotics solutions',
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

export default function HomeLayout({
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