import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://legendx.ae';

  const routes = [
    '',
    '/about-us',
    '/contact',
    '/services/rental',
    '/services/sales',
    '/g1-specs',
    '/b1-specs',
    '/go1-specs',
    '/support/terms-policies',
  ];

  const now = new Date().toISOString();

  return routes.map((route) => ({
    url: `${baseUrl}${route || ''}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}


