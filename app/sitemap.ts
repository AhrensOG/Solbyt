import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { serviceSlugMap } from './lib/serviceSlugs';

function normalize(segment: string): string {
  return segment.replace(/^\/+|\/+$/g, '');
}

type ExtendedSitemapEntry = MetadataRoute.Sitemap[number] & {
  alternates?: { languages: Record<string, string> };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.solbyt.tech';

  const entries: ExtendedSitemapEntry[] = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1.0,
    });
  }

  type PathKey = keyof typeof routing.pathnames;
  const staticKeys: PathKey[] = [
    '/services',
    '/projects',
    '/contact',
    '/about',
    '/terms-and-conditions',
    '/privacy-policy',
    '/cookies',
  ];

  for (const locale of routing.locales) {
    for (const key of staticKeys) {
      const raw = routing.pathnames[key][locale];
      const path = normalize(raw);
      entries.push({
        url: `${siteUrl}/${locale}/${path}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: key === '/services' || key === '/projects' ? 0.8 : 0.7,
      });
    }
  }

  for (const serviceId in serviceSlugMap) {
    for (const locale of routing.locales) {
      const rawSlug = serviceSlugMap[serviceId as keyof typeof serviceSlugMap][locale as 'es' | 'en' | 'fr'];
      const slug = normalize(rawSlug);
      const base = locale === 'es' ? 'servicios' : 'services';
      const url = `${siteUrl}/${locale}/${base}/${slug}`;

      const languages: Record<string, string> = {};
      for (const loc of routing.locales) {
        const rawAlt = serviceSlugMap[serviceId as keyof typeof serviceSlugMap][loc as 'es' | 'en' | 'fr'];
        const altSlug = normalize(rawAlt);
        const altBase = loc === 'es' ? 'servicios' : 'services';
        languages[loc] = `${siteUrl}/${loc}/${altBase}/${altSlug}`;
      }

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return entries as unknown as MetadataRoute.Sitemap;
}
