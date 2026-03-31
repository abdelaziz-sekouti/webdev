import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';
import translationES from './locales/es/translation.json';
import translationIT from './locales/it/translation.json';
import translationNL from './locales/nl/translation.json';
import translationDE from './locales/de/translation.json';
import translationHI from './locales/hi/translation.json';
import translationPT from './locales/pt/translation.json';

const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
  ar: { translation: translationAR },
  es: { translation: translationES },
  it: { translation: translationIT },
  nl: { translation: translationNL },
  de: { translation: translationDE },
  hi: { translation: translationHI },
  pt: { translation: translationPT },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false,
    },
  });

// Handle RTL for Arabic
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'ltr' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;
