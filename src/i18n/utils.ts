import { ui, type Locale } from './ui';
import { services as servicesData } from './services';

export function getTranslations(lang: Locale) {
  return ui[lang];
}

export function getServices(lang: Locale) {
  return servicesData[lang];
}

export function otherLocale(lang: Locale): Locale {
  return lang === 'mk' ? 'en' : 'mk';
}
