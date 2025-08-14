import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Legend X | Robotics Company' },
  description: 'Legend X is a robotics company specialized in cutting-edge technology and AI-driven innovations. We offer advanced robotics solutions designed to integrate everyday life with AI, both at the corporate and personal level',
  alternates: { canonical: '/' },
  openGraph: {
    url: 'https://legendx.ae/',
    title: 'Legend X | Robotics Company',
    description: 'Legend X is a robotics company specialized in cutting-edge technology and AI-driven innovations. We offer advanced robotics solutions designed to integrate everyday life with AI, both at the corporate and personal level',
    images: [
      { url: '/logo/legendx-logo.svg', width: 1200, height: 630, alt: 'LegendX Logo' },
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