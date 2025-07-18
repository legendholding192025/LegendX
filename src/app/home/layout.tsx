import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LegendX - Home',
  description: 'LegendX - Cutting-edge technology and AI-driven innovations for advanced robotics solutions',
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