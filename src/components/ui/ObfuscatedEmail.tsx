'use client';

import React from 'react';

type ObfuscatedEmailProps = {
  user: string; // e.g., 'info'
  domain: string; // e.g., 'legendx'
  tld: string; // e.g., 'ae'
  className?: string;
  children?: React.ReactNode; // optional custom label; defaults to the email text
};

export default function ObfuscatedEmail({ user, domain, tld, className, children }: ObfuscatedEmailProps) {
  const [email, setEmail] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Compose email on client to keep it out of server-rendered HTML
    const addr = `${user}@${domain}.${tld}`;
    setEmail(addr);
  }, [user, domain, tld]);

  if (!email) {
    // Pre-hydration fallback does not expose the email in HTML
    return <span className={className}>Contact</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {children ?? email}
    </a>
  );
}


