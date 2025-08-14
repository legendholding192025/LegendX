'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { sendPageview } from '@/lib/gtag';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  useEffect(() => {
    if (pathname) {
      sendPageview(pathname);
    }
  }, [pathname]);

  if (isAdminPage) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 