import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en', 'fr'],
  defaultLocale: 'en',

  pathnames: {
    '/services': {
      es: '/servicios',
      en: '/services',
      fr: '/services'
    },

    '/services/[slug]': {
      es: '/servicios/[slug]',
      en: '/services/[slug]',
      fr: '/services/[slug]'
    },

    '/contact': {
      es: '/contacto',
      en: '/contact',
      fr: '/contact'
    },

    '/about': {
      es: '/nosotros',
      en: '/about',
      fr: '/a-propos'
    }
  }
});
