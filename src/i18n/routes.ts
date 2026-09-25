import { defaultLocale, type Locale } from './ui';

// Route segments per locale. The key is locale-independent, so a page always knows its own
// identity and the language toggle can land on the equivalent page rather than the home page.
// Adding `it` and `el` (WO-11) means adding two columns here — no routing logic changes.
export const routes = {
  home: { mk: '', en: '' },
  contact: { mk: 'kontakt', en: 'contact' },
} as const;

export type RouteKey = keyof typeof routes;

/** Localized, absolute path for a route. mk is served unprefixed, en under /en/. */
export function getPath(lang: Locale, key: RouteKey = 'home'): string {
  const segment = routes[key][lang];
  const prefix = lang === defaultLocale ? '' : `/${lang}`;
  return segment ? `${prefix}/${segment}/` : `${prefix}/`;
}
