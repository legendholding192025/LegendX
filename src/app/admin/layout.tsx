import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Admin Dashboard | LegendX',
    template: '%s | LegendX Admin'
  },
  description: 'LegendX Admin Dashboard - Manage contact form submissions and website content.',
  icons: {
    icon: [
      { url: '/url_logo.png', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    shortcut: '/url_logo.png',
    apple: '/url_logo.png',
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 