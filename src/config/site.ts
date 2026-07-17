// Central place for clinic facts. Update here once real data arrives — see
// OMNIDENT-DEVELOPMENT-PLAN.md §11 "Open questions for the owner".

export const site = {
  name: 'OMNIDENT',
  legalName: 'OMNIDENT — Dental Esthetic Center',
  domain: 'omnident.mk', // PLACEHOLDER — final domain not yet confirmed (plan §11.6)
  address: {
    street: 'Чедомир Миндеровиќ 30',
    city: 'Скопје',
    postalCode: '1000',
    country: 'MK',
    mapQuery: 'Чедомир Миндеровиќ 30, Скопје',
  },
  phone: {
    display: '072 260 022',
    href: 'tel:+38972260022',
  },
  // PLACEHOLDER — confirm the clinic's actual Viber number before launch (plan §11.3).
  viber: {
    number: '+389 72 260 022',
    href: 'viber://chat?number=%2B38972260022',
  },
  // PLACEHOLDER — confirm destination inbox for form submissions (plan §11.3).
  email: 'info@omnident.mk',
  hours: {
    mk: 'Понеделник–Петок 10:00–19:00',
    en: 'Monday–Friday 10:00–19:00',
  },
  social: {
    instagram: 'https://instagram.com/omnident_',
    facebook: 'https://facebook.com/omnidentskopje',
  },
  rating: {
    value: 4.2,
    max: 5.0,
  },
  patients: '1.8K+',
} as const;
