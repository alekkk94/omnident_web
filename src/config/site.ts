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
  // Confirmed by the owner 2026-09-26. This is the number that receives Viber enquiries.
  // To change it, edit BOTH fields below — see CONFIGURATION.md.
  viber: {
    number: '+389 76 278 552',
    href: 'viber://chat?number=%2B38976278552',
  },
  // Schema-only — used solely for the JSON-LD Dentist markup in src/layouts/Layout.astro.
  // The contact form does NOT read this value; the real submission destination is the
  // CONTACT_TO_EMAIL Cloudflare Pages environment variable (see functions/README.md),
  // deliberately kept out of the repo. PLACEHOLDER — confirm before launch (plan §11.3).
  email: 'info@omnident.mk',
  hours: {
    mk: 'Понеделник–Петок 10:00–19:00',
    en: 'Monday–Friday 10:00–19:00',
  },
  social: {
    instagram: 'https://instagram.com/omnident_',
    facebook: 'https://facebook.com/omnidentskopje',
  },
} as const;
