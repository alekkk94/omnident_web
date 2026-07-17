import { ui, defaultLocale, type Locale } from './ui';
import { services as servicesData } from './services';

export function getTranslations(lang: Locale) {
  return ui[lang];
}

export function getServices(lang: Locale) {
  return servicesData[lang];
}

// mk is served at "/", en at "/en/" — see astro.config.mjs i18n.routing.
export function localizedPath(lang: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  if (lang === defaultLocale) {
    return `/${clean}`;
  }
  return `/${lang}/${clean}`;
}

export function otherLocale(lang: Locale): Locale {
  return lang === 'mk' ? 'en' : 'mk';
}
