import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | LegendX',
  description: 'Get in touch with LegendX for cutting-edge technology and AI-driven robotics solutions.',
};

export default function ContactLayout({
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